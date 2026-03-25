+++
title = "VitruvianOS 0.3.0"
date = "2026-03-23T00:00:00+00:00"
categories = ["announcement"]
tags = ["release", "news", "0.3.0"]
authors = ["VitruvianOS Team"]
banner = "screenshots/just-before-0.3.png"
+++

**VitruvianOS** — an operating system built on Linux that brings the elegance and simplicity of BeOS to modern hardware. After years of quiet development, we're thrilled to announce the first public release of VitruvianOS 0.3.0.

This is a milestone moment—not just for us, but for everyone who's ever felt that modern operating systems were designed for anything but the actual humans using them.

## What is VitruvianOS?

Unlike traditional operating systems that prioritize features, services, and monetization, Vitruvian asks a different question: *what would I actually want to do with my computer that I currently can't?*

It's that question that drives every design decision.

Vitruvian is not an operating system like others.

## Why Now?

We started the first experiments in 2019, but let's be honest—the first announcement was more of a quiet signal to the few people who might care.

Porting a BeOS-compatible runtime on top of Linux isn't like repackaging existing tools. We built the entire infrastructure from scratch—a sophisticated layer that allows the Tracker, Deskbar, and the rest of the Vitruvian experience to run as fully native Linux applications. Our nexus system serves the same role that the binder does on Android: it's the connective tissue that makes everything work.

We stayed low-profile because we had to. We weren't ready to show the world until we were genuinely confident in the foundation.

Now we are.

## What Works Today

**0.3.0** is a pilot release—a foundation and a proof of concept showing where we're headed.

- Boot from XFS and SquashFS with full extended attribute support
- Real-time patched Linux kernel for low-latency desktop use
- BeOS/Haiku API compatibility layer with native application support
- Deskbar, Tracker, and core Vitruvian desktop components
- Input system with support for mice, gestures, tablets, and more
- Purpose-built graphics layer (neither X nor Wayland)

The interface will feel familiar if you've ever used BeOS or Haiku. We've stripped away some components and modernized others, but the core philosophy remains: simplicity, elegance, and respect for your time.

What you're getting is a system that works. That's the point.

## The Road Ahead

This isn't the end. It's the beginning.

**0.3.1** (coming soon) will include many missing components and bug fixes based on early feedback.

**0.3.2** will bring us closer to a self-hosting system where Vitruvian can build itself.

**0.4** will mark our entry into genuine stability and broader hardware support, including our ongoing ARM port.

Beyond that, the horizon opens up. Better hardware support. Refined user experience. An ecosystem of applications built with the same philosophy we embrace.

## Who Should Use This?

We welcome testers, developers, and anyone curious about what a BeOS-inspired Linux desktop looks like today.

If you're frustrated with modern desktop environments—the bloat, the complexity, the endless settings—this is for you. If you're interested in alternative computing platforms (ARM, RISC-V), hardware projects, or just genuinely curious about how an OS could be built differently, this is for you.

If you've always felt that your operating system was designed by committee to sell you things rather than designed by humans who care about how you actually work, we think you'll understand what we're building.

## Get Involved

We're a small team of three right now, but we're growing. We need developers, hardware enthusiasts, testers, and people with ideas. We need people who believe that computing should be different.

Daily builds are available on our [Download](/download/) page. To get involved or ask questions, join us on [Telegram](https://t.me/vitruvian_official_chat) or open an issue on [GitHub](https://github.com/VitruvianOS/Vitruvian).

We're building a full infrastructure—repositories, resources, documentation—and we need community support to do it properly. This isn't a corporate project backed by venture capital. It's built by people who care. If you'd like to support us, [donations](https://wiki.v-os.dev/docs/reference/donate/) are deeply appreciated.

## One More Thing

What we've created isn't just a BeOS-compatible desktop—it's an entirely different approach to what a Linux desktop could be.

Decades of desktop OS development have been constrained by the X server model and later by Wayland. But what if you could do something *different*?

We're just getting started.

---

**Download VitruvianOS 0.3.0**: [v-os.dev](/download/)

**Join the community**: [Telegram](https://t.me/vitruvian_official_chat) | [GitHub](https://github.com/VitruvianOS/Vitruvian)
