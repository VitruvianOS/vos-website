+++
title = "VitruvianOS 0.4.0"
date = "2026-06-02T00:00:00+00:00"
categories = ["announcement"]
tags = ["release", "news", "0.4.0"]
authors = ["VitruvianOS Team"]
banner = "screenshots/0.4.0-thumbnail.jpeg"
+++

A broad foundation release: better hardware support, a saner desktop session, and a more reliable build pipeline.

## What's new from 0.3.2

**Desktop session manager (janus)**. Vitruvian now starts, manages, and shuts down its servers through a proper session manager instead of ad-hoc scripts. Logins and reboots are cleaner and more predictable.

### Display and input

The graphics backend works on more GPUs and handles multi-seat hardware transitions cleanly. Keyboard input now uses the native Linux keymap system, so non-US layouts and special keys behave the way you'd expect.

### Storage and apps

Mounted volumes, paths, and Tracker windows are more accurate; several long-standing rough edges around the root volume and file refs are fixed.

### For users installing Vitruvian

ARM64 builds are now produced alongside x86_64.

## Downloads

| Architecture | ISO |
|-------------|-----|
| **amd64** | [Vitruvian-0.4.0-amd64.iso](https://github.com/VitruvianOS/Vitruvian/releases/download/0.4.0/Vitruvian-0.4.0-amd64.iso) |
| **arm64** | [Vitruvian-0.4.0-arm64.iso](https://github.com/VitruvianOS/Vitruvian/releases/download/0.4.0/Vitruvian-0.4.0-arm64.iso) |

[GitHub release page](https://github.com/VitruvianOS/Vitruvian/releases/tag/0.4.0)

Thanks for trying Vitruvian, please report what works and what doesn't!

**Don't forget to support us financially, we are a big project and we're being overwhelmed by expenses.**

Visit [our Donate page](https://v-os.dev/donate/) if you want to help us.
