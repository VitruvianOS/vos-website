+++
title = "VitruvianOS 0.5.0"
date = "2026-07-19T00:00:00+00:00"
categories = ["announcement"]
tags = ["release", "news", "0.5.0"]
authors = ["VitruvianOS Team"]
+++

This is the login and media release. 0.4.1 got the filesystem talking to
Tracker; 0.5.0 gets the desktop talking to real users and starts wiring up
a real audio pipeline.

Changelog

* Multi-user login. Janus now runs a pre-auth chain as a dedicated
  `vos_login` sysuser, launches the greeter, and after PAM authentication
  respawns the graphical stack as the real user. Autologin is still
  supported for CI images via a kernel cmdline flag.
* FirstBootPrompt on live media. Fresh live ISO boots straight into the
  language picker and Try/Install screen.
* Sender-UID gate on `B_LAUNCH_JOB`. The kernel plumbs the sender's UID
  into `BMessage`, and janus refuses cross-user job launches.
* Locale and keymap picked in the greeter carry into the desktop, and for
  the Installer into the installed target.
* Media2 kit merged. `BSoundPlayer`, `BMediaFile`, `BMediaTrack`,
  `BMediaRecorder`, `BParameterWeb` reimplemented on top of PipeWire and
  GStreamer. Very early, it builds and links and the plumbing is in
  place, but it isn't stable yet. The `Sounds` preferences preflet is
  included with the same caveat.
* Game kit updated on top of media2 (BGameSound family).
* Storage kit gains `GetStatX` for real creation-time via `statx(2)`.
  Legacy `GetStat` still works.
* Ctrl+Alt+Del now opens the shutdown dance instead of hard-rebooting.
  The registrar bridges systemd for logout / shutdown / reboot. Live ISOs
  no longer hang for 90 seconds at power-off.
* `getty@tty1` masked on the graphical path so no pre-auth sysuser gets a
  shell before the greeter. `getty@tty2` stays as recovery.
* NodePreloader skips its warm-up on live media, cutting cold-boot time.
* Node monitor V-Race kernel bugs fixed (fanotify mark teardown UAF, vref
  drop-after-unlock).
* App icon loading race in Deskbar fixed.
* DoCatalogs sweep, 80+ apps and preflets now install their translation
  catalogs, so non-English UIs actually get translated.
* Installer text refreshed.
* First GPU back buffer path lit up on the DRM backend. Not on by default
  yet, the cross-thread rendering context and the software fallback for
  drivers that refuse hardware acceleration still need work.
* Cursor and dirty-region fixes, plus assorted small visual glitches.
* Improvements to `wait_for_thread` semantics and the nexus kernel
  module's thread-exit path.
* As always, lots of small fixes.

## Downloads

| Architecture | ISO | Raw |
|-------------|-----|-----|
| **amd64** | [Vitruvian-0.5.0-amd64.iso](https://github.com/VitruvianOS/Vitruvian/releases/download/0.5.0/Vitruvian-0.5.0-amd64.iso) | [Vitruvian-0.5.0-amd64.raw](https://github.com/VitruvianOS/Vitruvian/releases/download/0.5.0/Vitruvian-0.5.0-amd64.raw) |
| **arm64** | [Vitruvian-0.5.0-arm64.iso](https://github.com/VitruvianOS/Vitruvian/releases/download/0.5.0/Vitruvian-0.5.0-arm64.iso) | [Vitruvian-0.5.0-arm64.raw](https://github.com/VitruvianOS/Vitruvian/releases/download/0.5.0/Vitruvian-0.5.0-arm64.raw) |

[GitHub release page](https://github.com/VitruvianOS/Vitruvian/releases/tag/0.5.0)

Visit [our Donate page](https://v-os.dev/donate/) if you want to help us.
