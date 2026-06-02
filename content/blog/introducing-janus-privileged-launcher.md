+++
title = "Introducing the Janus Privileged Launcher"
date = "2026-06-02T00:00:00+00:00"
categories = ["development"]
tags = ["janus", "system", "launcher"]
authors = ["VitruvianOS Team"]
+++

You know how on a normal Linux desktop you need a display manager to log in, and then a bunch of services start in the background, Vitruvian works differently but not too much. It uses a privileged launcher called janus that does all of that and more.

Its job is to bring up the entire Vitruvian desktop and keep it running until shutdown. It replaces a display manager, it replaces a traditional init style service launcher, and it does a bunch of low level hardware coordination that neither of those normally handles.

## What it does

First, janus owns the screen. It opens a session with libseat, which is the same seat management layer that Wayland compositors use. This gives janus control over the GPU, the DRM device, and the input devices. When the `app_server` starts, janus hands it the GPU file descriptor. When you switch to a TTY and back, janus tells all the servers to enable or disable their seat. The servers and applications get `B_SEAT_ENABLED` and `B_SEAT_DISABLED` messages so they know when they can draw and when they should back off.

Second, janus starts everything. Every system server you see in Vitruvian, from the registrar to Tracker to Deskbar, gets forked and exec'd by janus. A small helper called `janus_launch` sends a request, janus forks, sets up logging, and waits for the child to confirm it's alive.

Third, janus acts as a security boundary. Nobody can start a system server except janus. If a malicious program tries to spawn a fake registrar or impersonate `app_server`, it can't, because janus is the only process allowed to launch those binaries.


## Shutdown

The GPU is extremely picky about being released in the right order. If a program tries to reboot while the GPU is still claimed, the machine freezes. Resulting in black screen, no output, hard reset required.

We fixed this by making janus the last process alive. When you click Shutdown, the registrar runs all the normal termination phases, but instead of calling the reboot syscall, it hands control to janus. Janus tells `app_server` and `input_server` to release the hardware, broadcasts seat disabled to everyone else, closes the libseat session and the DRM file descriptor, syncs the filesystems, and only then reboots the system.

## Status

Right now janus launches and manages the Vitruvian services, the GPU initialization to be handed off to the services, VT switching, and the security boundaries.

This is the main blocker for a graphical login, however, still other system services are not aware of the newly introduced security model, so before we have a true multiuser login there's still some work to do.

A little curiosity before the article ends: janus is called after the italic (or Roman if you like) god of beginnings, gates, transitions, time, duality, doorways, passages, frames, and endings. You might have already seen it, as it's a double headed figure representing the beginning and the end in the Roman pantheon, very commonly found on ancient coins.
