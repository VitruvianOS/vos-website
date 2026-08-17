+++
title = "VitruvianOS 0.6.0"
date = "2026-08-17T00:00:00+00:00"
categories = ["announcement"]
tags = ["release", "news", "0.6.0"]
authors = ["VitruvianOS Team"]
banner = "screenshots/0.6.0.jpeg"
+++

Networking and audio release. 0.5.0 got login and the first media2 structure
in. 0.6.0 rewrites the network and bluetooth stacks and makes media2 get close
to full operation.

Replicants from this release are fully working and are installed by default on first boot.

Changelog

* Network stack rewritten on top of NetworkManager. `BNetworkDevice`,
  `BNetworkInterface` and `BNetworkRoster` keep the same API, the backend
  talks to NM over D-Bus. Wireless scanning, joining, saved profiles and
  static IP work from the preflet and the Deskbar replicant.
* Bluetooth stack written on top of BlueZ. Adapter and device listing,
  discovery, pairing.
* Both stacks handle their own auth prompts, so joining a WPA network or
  pairing a device asks for the password/PIN in the UI instead of failing.
* media2 merged properly. AudioMixer replicant, Media preferences preflet,
  MIDI support, peak meters. The Hardware section of the Media preflet is
  disabled in this release, it's not ready.
* Game kit ported over media2.
* Storage kit public API settled, with a fairly large refactor behind it.
  Tracker moved onto the finalized API.
* Installer works again, and no longer drags the bootloader along with it.
* Replicants are now built as RunnableAddOn, one binary that both runs as
  an app and loads into Deskbar.
* Tracker defaults to navigation mode (single window browse + navigator),
  48px icons.
* ProcessController separates kernel threads from real teams and shows a
  Kernel Team entry with its own memory and CPU usage.
* libroot2: fixed an intermittent boot hang in the fork/thread-announce
  path, thread id caching, `get_cpuid` so AboutSystem reports the real CPU.
  Team and thread info functions report real numbers now.
* janus: slot reuse, pid pinning, session invalidation, forking safety.
* registrar and roster: better pid watching and launch failure diagnostics.
* idmapped mounts support, `fs_gen_caps` removed.
* app_server no longer drops damage when a page flip is refused.
* Architecture is called amd64 everywhere now, x86_64 is gone.
* Lots of small fixes.

## Downloads

| Architecture | ISO | Raw |
|-------------|-----|-----|
| **amd64** | [Vitruvian-0.6.0-amd64.iso](https://github.com/VitruvianOS/Vitruvian/releases/download/0.6.0/Vitruvian-0.6.0-amd64.iso) | [Vitruvian-0.6.0-amd64.raw](https://github.com/VitruvianOS/Vitruvian/releases/download/0.6.0/Vitruvian-0.6.0-amd64.raw) |
| **arm64** | [Vitruvian-0.6.0-arm64.iso](https://github.com/VitruvianOS/Vitruvian/releases/download/0.6.0/Vitruvian-0.6.0-arm64.iso) | [Vitruvian-0.6.0-arm64.raw](https://github.com/VitruvianOS/Vitruvian/releases/download/0.6.0/Vitruvian-0.6.0-arm64.raw) |

[GitHub release page](https://github.com/VitruvianOS/Vitruvian/releases/tag/0.6.0)

Visit [our Donate page](https://v-os.dev/donate/) if you want to help us.
