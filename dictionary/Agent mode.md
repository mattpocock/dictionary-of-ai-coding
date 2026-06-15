---
description: Pengaturan awal yang menggabungkan mode izin dengan instruksi perilaku di system prompt. Dapat berganti di tengah sesi.
aliases:
  - plan mode
  - accept-edits
  - bypass permissions
  - YOLO mode
---

Sebuah pengaturan awal (preset) yang menentukan cara kerja [agen](./Agent.md) saat berjalan — menggabungkan [mode izin](./Permission%20mode.md) dengan instruksi perilaku yang dimasukkan ke dalam [system prompt (instruksi sistem)](./System%20prompt.md). Contohnya: pengaturan bawaan (default) yang meminta konfirmasi Anda untuk tindakan berisiko, **mode rencana (plan mode)** yang memblokir perubahan kode dan mengarahkan agen untuk riset, mode **terima edit (accept-edits)** yang menyetujui perubahan secara otomatis, atau mode **lewati izin (bypass permissions)** (sering disebut **mode YOLO**) yang otomatis menyetujui semua tindakan. Mode ini dapat diganti di [tengah sesi](./Session.md) yang sedang berjalan.

Penggabungan inilah yang membedakan sebuah "mode" dengan pengaturan izin biasa. Pengaturan izin biasa hanya berfungsi seperti gerbang pintu: ia menentukan [panggilan alat (tool call)](./Tool%20call.md) mana saja yang boleh lewat. Gerbang saja hanya akan menghasilkan agen yang ingin mengubah kode tetapi terhalang — ia mencoba menulis file, diblokir, lalu mencoba cara lain. Namun, instruksi perilaku yang ditambahkan akan menghilangkan keinginan tersebut: mode rencana tidak hanya memblokir penulisan file, tetapi juga memberi tahu agen bahwa ia sedang dalam fase perencanaan, sehingga ia akan membaca kode, bertanya, dan mengajukan rencana daripada bersikeras menembus gerbang izin. Gerbang dan arahan bekerja secara selaras.

Dalam praktiknya, Anda akan mengubah mode ini seiring dengan berubahnya tingkat kepercayaan Anda selama pengerjaan suatu tugas. Tugas yang sama dapat melewati beberapa mode: mode rencana saat pendekatan solusi masih dirumuskan, mode bawaan yang meminta konfirmasi untuk perubahan sensitif pertama, mode terima-edit setelah agen menunjukkan pemahaman terhadap tugasnya, dan mode lewati izin untuk menjalankan agen secara [AFK (away from keyboard)](./AFK.md) di dalam [sandbox (lingkungan terisolasi)](./Sandbox.md). Mengubah mode tidak mengganggu sesi Anda: percakapan berlanjut di tempat terakhir dengan aturan perizinan dan instruksi perilaku yang baru. Jika Anda mendapati diri Anda menyetujui setiap permintaan izin tanpa membacanya terlebih dahulu, itu tandanya mode perizinan disetel terlalu ketat dibanding kepercayaan Anda; jika Anda terus-menerus menolak editan, berarti modenya terlalu longgar.

_Istilah vendor:_ Claude Code menyebutnya "mode perizinan" (permission modes), sedangkan Codex menyebutnya "mode persetujuan" (approval modes) — kedua istilah ini lahir sebelum adanya fitur penggabungan perilaku.

_Contoh Penggunaan:_

"Agen ini terus mengedit file padahal saya hanya ingin dia membuat rencana saja."

"Ubah ke mode rencana (plan mode) — modenya akan memblokir proses menulis berkas dan agen akan tetap fokus melakukan riset."

"Bagaimana untuk pengerjaan otomatis (AFK) nanti?"

"Gunakan mode lewati izin (bypass mode), tapi pastikan hanya dilakukan di dalam lingkungan terisolasi (sandbox)."
