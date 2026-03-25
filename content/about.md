+++
title = "About Vitruvian"
type = "page"
+++

## What is VitruvianOS?

Vitruvian — also known as **V\OS** — is the human-centric Operating System. Built on Linux and inspired by BeOS, it brings the elegance and simplicity of a classic operating system to modern hardware — without sacrificing the power and hardware support that Linux provides.

Custom-built kernel modules and real-time patches deliver a responsive, low-latency desktop experience. The BeOS/Haiku API is supported on Linux with minimal to no changes required to application source code.

## Philosophy

- **Fast and reactive** — Minimal latency from input to response. No bloat, no unnecessary services competing for your attention.
- **Highly integrated** — The Vitruvian desktop, applications, and system services are designed to work as a coherent whole.
- **It's your computer** — No telemetry, no hidden agendas. V\OS doesn't work against you.
- **KISS** — Simple by design. Anyone can feel at home quickly.
- **Out of the box** — Sensible defaults. Everything works without configuration.

## Technical Foundation

The reference boot filesystems are **XFS** and **SquashFS**, both with full extended attribute support — XFS for standard desktop installs, SquashFS for live images and embedded targets. Ext4 and most other Linux filesystems with extended attribute support also work. The default kernel ships with real-time patches (`PREEMPT_RT`) for a genuinely responsive desktop; non-RT kernels are also supported. Filesystem indexing, live queries, and multiuser support with graphical login are on the roadmap.

### Nexus

At the heart of VitruvianOS is **Nexus**, a set of custom Linux kernel modules that bridge Linux with the BeOS/Haiku runtime. Nexus implements the BeOS node monitor API (filesystem event notifications), device and volume tracking, and a messaging bridge that routes kernel events to the BeOS messaging infrastructure in userspace. It is what makes it possible to run unmodified BeOS/Haiku application source code on Linux.

## License

Vitruvian is released under a hybrid GPL/MIT license. It is completely free of cost and fully open source.

## Community

- **GitHub**: [VitruvianOS](https://github.com/VitruvianOS)
- **Telegram Chat**: [vitruvian\_official\_chat](https://t.me/vitruvian_official_chat)
- **Telegram Updates**: [vitruvian\_official](https://t.me/vitruvian_official)
- **Mailing List**: [freelists.org/list/vitruvian](https://www.freelists.org/list/vitruvian)
