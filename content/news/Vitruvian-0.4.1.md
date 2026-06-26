+++
title = "VitruvianOS 0.4.1"
date = "2026-06-26T00:00:00+00:00"
categories = ["announcement"]
tags = ["release", "news", "0.4.1"]
authors = ["VitruvianOS Team"]
banner = "screenshots/0.4.1-thumbnail.png"
+++

This is the filesystem release. However, from this point on the majority of the system nervous system is now connected and Tracker is receiveing filesystem notifications. For the time being we suggest not using this release outside vm or on a computer where you have a partition you care about.

Changelog

* Fixed various filesystem and Tracker related issues. Now Tracker can be effectively used to manipulate directories and files.
* Node monitor surgery to get it able to sustain realistic workloads.
* File opening through apps now works.
* General improved stability of Tracker and Deskbar fs-related menus.
* All problems with apps being stuck in Deskbar on quit are fixed.
* Enabled Tracker Add-Ons and Replicants.
* Implemented userland and kernel level mechanisms to ensure virtual references interoperability for inter app communication.
* Add GLTeapot using mesa surfaceless backend, still buggy but will run and you can drag it. 
* Fixed Tracker in navigation mode (going to be default next release).
* Lots of performance improvements visible.
* Implemented XDG Trash.
* Improved startup and shutdown speed including janus improvements.
* Memory usage improvements and memory leak fixes.
* Fixed a problem with app_server and racy area resizing that couldn't possibly work on Linux (fixes BBitmap crashes completely).
* Added prototype caps-based ports for secure file handle passing.
* Screen can now change resolution.
* Improved app_server drawing performance.
* Switch default raw images filesystem to EXT4 (see upcoming development article in v-os.dev)
* Introduced initial support for building makefile based apps inside vitruvian.
* As always lots of little fixes impossible to enumerate.

Be patient.

## Downloads

| Architecture | ISO |
|-------------|-----|
| **amd64** | [Vitruvian-0.4.1-amd64.iso](https://github.com/VitruvianOS/Vitruvian/releases/download/0.4.1/Vitruvian-0.4.1-amd64.iso) |
| **arm64** | [Vitruvian-0.4.1-arm64.iso](https://github.com/VitruvianOS/Vitruvian/releases/download/0.4.1/Vitruvian-0.4.1-arm64.iso) |

[GitHub release page](https://github.com/VitruvianOS/Vitruvian/releases/tag/0.4.1)

Visit [our Donate page](https://v-os.dev/donate/) if you want to help us.
