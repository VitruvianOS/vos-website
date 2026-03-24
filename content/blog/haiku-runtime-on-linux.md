+++
title = "Building a Haiku Runtime on Linux — The Road So Far"
date = "2025-02-10T00:00:00+00:00"
categories = ["development"]
tags = ["linux", "haiku", "kernel"]
authors = ["VitruvianOS Team"]
image = "../screenshots/stylededit.png"
+++

One of the core challenges in building V\OS is bridging two worlds: the Linux kernel's POSIX model and the BeOS/Haiku API's distinct approach to system services — messaging, node monitoring, virtual filesystems, and more. This post gives a brief look at how we are approaching it.

## The Kernel Bridge

Rather than running a BeOS kernel, Vitruvian implements the missing pieces as Linux kernel modules. The `nexus` module brings BeOS-style node monitoring to Linux's `fsnotify` subsystem, translating filesystem events into the `B_NODE_MONITOR` messages that BeOS/Haiku applications expect. This allows Tracker, the file manager, to watch directories and respond to changes in real time — exactly as it would on native Haiku.

## Real-Time by Default

The Vitruvian desktop ships with a `PREEMPT_RT` patched kernel. This is not just a checkbox — it makes a tangible difference in how responsive the system feels under load. UI events, audio, and I/O compete fairly rather than the interface getting starved behind background work.

## API Compatibility

The goal is to support Haiku/BeOS application source code with minimal to no changes. The messaging system, the application kit, the storage kit, the interface kit — these are being brought up one layer at a time. Some areas are further along than others, but the foundation is solid.

## What's Next

File system indexing and live queries are the next major milestone. If you have used Haiku or BeOS, you know how powerful it is to query the filesystem like a database — finding all emails from a given sender, or all images modified in the last week, without any indexing daemon setup. Bringing that to Linux is non-trivial but firmly on the roadmap.

Follow progress on [GitHub](https://github.com/VitruvianOS/Vitruvian) or join the discussion on [Telegram](https://t.me/vitruvian_official_chat).
