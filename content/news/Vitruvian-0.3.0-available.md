+++
title = "VitruvianOS 0.3.0"
date = "2026-03-23T00:00:00+00:00"
categories = ["announcement"]
tags = ["release", "news", "0.3.0"]
authors = ["VitruvianOS Team"]
banner = "screenshots/just-before-0.3.png"
+++

**VitruvianOS** — is an operating system built on Linux that is inspired by the BeOS. After years of quiet development, we're thrilled to announce the first public release of VitruvianOS 0.3.0.

This is a milestone moment—not just for us.

## Why Now?

We started the first experiments in 2019, but the first announcement was more of a quiet signal to the few people who might care.

Porting a BeOS-compatible runtime on top of Linux isn't like repackaging existing tools. We built the entire infrastructure from scratch—a sophisticated layer that allows the Tracker, Deskbar, and the rest of the Vitruvian experience to run as fully native Linux applications.

## What Works Today

**0.3.0** is a pilot release—a foundation and a proof of concept showing where we're headed.

- Boot from XFS and SquashFS with full extended attribute support
- Real-time patched Linux kernel for low-latency desktop use
- BeOS/Haiku API compatibility layer with native application support
- Deskbar, Tracker, and core Vitruvian desktop components
- Basi Input system support (what we need for testing at the moment)
- Purpose-built graphics layer (neither X nor Wayland)

## The Road Ahead

**0.3.1** (coming soon) will include many missing components and bug fixes based on early feedback.

**0.3.2** will bring us closer to a self-hosting system where Vitruvian can build itself.

**0.4** will mark our entry into genuine stability and broader hardware support, including our ongoing ARM port.

## Who Should Use This?

We welcome testers, developers, and anyone curious about what a BeOS-inspired Linux desktop looks like today.

If you're frustrated with modern desktop environments—the bloat, the complexity, the endless settings—this is for you. If you're interested in alternative computing platforms (ARM, RISC-V), hardware projects, or just genuinely curious about how an OS could be built differently, this is for you.

## Get Involved

We're a small team of three right now, but we're growing. We need developers, hardware enthusiasts, testers, and people with ideas.

Daily builds are available on our [Download](/download/) page. To get involved or ask questions, join us on [Telegram](https://t.me/vitruvian_official_chat) or open an issue on [GitHub](https://github.com/VitruvianOS/Vitruvian).

We're building a full infrastructure—repositories, resources, documentation—and we need community support to do it properly. This isn't a corporate project backed by venture capital. If you'd like to support us, [donations](https://wiki.v-os.dev/docs/reference/donate/) are deeply appreciated.

## One More Thing

What we've created isn't just a BeOS-compatible desktop—it's an entirely different approach to what a Linux desktop could be.

Decades of desktop OS development have been constrained by the X server model and later by Wayland. But what if you could do something *different*?

We're just getting started. Stay tuned.

---

**Download VitruvianOS 0.3.0**: [v-os.dev](/download/)

**Join the community**: [Telegram](https://t.me/vitruvian_official_chat) | [GitHub](https://github.com/VitruvianOS/Vitruvian)
