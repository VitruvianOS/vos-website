+++
title = "FAQ"
description = "Frequently asked questions about VitruvianOS"
type = "page"
keywords = ["FAQ", "questions", "Vitruvian"]
+++

## What is VitruvianOS?

Vitruvian is an operating system based on Linux, inspired by the BeOS. It brings the BeOS/Haiku API and desktop philosophy to modern hardware, running on a real-time patched Linux kernel.

## Is it based on Haiku?

Partially. Vitruvian uses the Linux kernel and implements the BeOS/Haiku API compatibility layer on top of it. It is inspired by both BeOS and Haiku but is an independent project built from the ground up where we picked the best available open source components.

## Can I run BeOS/Haiku applications?

Yes. V\OS is designed to support BeOS/Haiku application source code with minimal to no changes required.

## Is it binary compatible with BeOS or Haiku?

No. This should be implemented as a WINE-like layer, such as a runtime_loader port. We have strong source level compatibilty though which should be enough for the large majority of use cases.

## What filesystems are supported?

The reference boot filesystems are XFS and SquashFS, both with full extended attribute support. XFS is used for standard desktop installs; SquashFS is used for live images and embedded targets. Vitruvian will also boot from ext4 and most other Linux filesystems with extended attribute support. Filesystem indexing and live queries are planned for a future release.

## Does it run on my hardware?

Vitruvian targets x86-64 hardware. Modern PCs and board with at least 1 GB of RAM and 1 GB of disk space. Hardware support depends on the underlying Linux kernel drivers.

## How do I get a copy?

Nightly builds are available on the [Download](/download/) page. You can also build from source using the instructions in the [wiki](https://wiki.v-os.dev/docs/getting-started/building/).

## How do I get involved?

Check the [GitHub repository](https://github.com/VitruvianOS/Vitruvian) for contribution guidelines and open issues, and join the discussion on [Telegram](https://t.me/vitruvian_official_chat).

## Is Vitruvian free?

Yes. Vitruvian is released under a hybrid GPL/MIT license and is completely free of cost.

---

> Have a question not listed here? Open an issue on [GitHub](https://github.com/VitruvianOS/Vitruvian/issues).
