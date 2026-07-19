+++
title = "ext4, OpenGL, and the new media2 kit"
date = "2026-07-19T00:00:00+00:00"
categories = ["development"]
tags = ["filesystem", "opengl", "gpu", "media", "media2"]
authors = ["VitruvianOS Team"]
+++

Three things landed in the tree recently and they're worth a short note.


## Raw images now ship on ext4

We used to build raw images on XFS. XFS handles xattrs well, and Vitruvian
uses xattrs everywhere for BFS-style metadata, so it felt right at the time.
The move to ext4 is more about what ext4 has become than about anything wrong
with XFS.

Modern ext4 has `ea_inode`, which lets a single attribute take up a whole
inode instead of the spare space in the file's own inode. That means larger
attrs don't spill and don't fragment. Together with `large_dir` and
`metadata_csum`, ext4 covers our metadata needs.

XFS also isn't a great fit for the small end of our target hardware. SBCs
tend to assume ext4, XFS has a larger minimum log size, and XFS partitions
can't shrink. ext4 grows and shrinks and generally stays out of the way on
constrained boards.

The last reason is homogeneity: all four archs, amd64, arm64, arm32,
riscv64, now use the same filesystem and the same image layout.

This is just about the default. Full XFS and Btrfs support is still on the
roadmap, tied to the DriveSetup rewrite; the current DriveSetup can't
honestly offer more filesystems until it has a proper backend.


## Early OpenGL and GPU work

`app_server` still draws in software. The GPU path is now getting real
work, the DRM back end can allocate a GPU back buffer, and first light
works. It isn't on by default; the cross-thread rendering context and the
software fallback for when the driver refuses hardware acceleration still
need attention.

OpenGL isn't a stub anymore either, GLTeapot runs, though it's still rough.

The scaffolding is what's landing now.


## media2

The media kit is being rewritten from scratch as `media2`. Very early days.
The kit builds and the plumbing is in place, but it isn't something you
should count on for real audio work yet.

The reason for the rewrite is that the legacy kit is built around a node
graph and `media_addon_server`, which don't map cleanly onto Linux's audio
stack. media2 keeps the parts of the API apps actually use, `BSoundPlayer`,
`BMediaFile`, `BMediaTrack`, `BMediaRecorder`, `BParameterWeb`, and
reimplements them on top of PipeWire (for realtime audio) and GStreamer (for
decode, encode, and format handling). Apps don't touch either directly.

What just landed:

- The media2 sources and headers.
- Game kit updates on top of media2 (BGameSound, BFileGameSound,
  BStreamingGameSound, BPushGameSound).
- The `Sounds` preferences preflet. It's in the tree; whether it plays a
  sound today depends on which corner of the pipeline you land in.
- Build wiring for the PipeWire, SPA, and GStreamer dev packages.

Still ahead: `MediaPlayer`, `MediaConverter`, `SoundRecorder`, and a rewrite
of the `Media` preferences preflet.


## Closing

None of these are finished. The direction is now visible: the base
filesystem is ordinary, the graphics stack is aiming at a real GPU path,
and the media stack is being rebuilt on standard Linux plumbing.
