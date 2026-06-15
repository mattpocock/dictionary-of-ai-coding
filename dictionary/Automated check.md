---
description: Verifikasi pasti yang berjalan di lingkungan kerja (tes, tipe data, linter, build). Hasilnya lulus/gagal tanpa penilaian subjektif.
---

Sebuah verifikasi pasti (deterministik) yang berjalan di dalam [lingkungan kerja](./Environment.md) — seperti pengujian (test), pengecekan tipe data, pembersih kode (lint), pembuatan program (build), dan pre-commit hooks. Hasilnya hanya lulus/gagal (pass/fail), tanpa adanya penilaian subjektif. Ini adalah sinyal utama yang digunakan oleh [agen](./Agent.md) untuk memperbaiki kesalahannya sendiri tanpa perlu melibatkan orang lain. Pengujian yang tidak stabil (flaky test) adalah bentuk pemeriksaan yang rusak, bukan berarti tidak ada pemeriksaan; pemeriksaan otomatis dirancang untuk selalu memberikan hasil yang pasti dan konsisten.

Proses perbaikan mandiri bekerja dalam sebuah siklus. Agen melakukan perubahan kode, menjalankan pemeriksaan melalui [panggilan alat (tool call)](./Tool%20call.md), dan hasil kegagalan tersebut akan masuk kembali ke dalam [jendela konteks](./Context%20window.md)-nya — misalnya berupa pesan error tipe data lengkap dengan nama file dan baris kodenya, atau kegagalan pengujian yang memuat nilai ekspektasi vs nilai riil. Laporan tersebut sudah cukup bagi agen untuk memperbaiki masalah dan menjalankan pemeriksaan kembali, terus berputar hingga semuanya lulus tanpa perlu campur tangan manusia. Konsistensi inilah yang membuat siklus perbaikan dapat dipercaya: kode yang sama harus selalu menghasilkan putusan yang sama, sehingga status "lulus" benar-benar memiliki arti. Pemeriksaan yang tidak konsisten (flaky) akan merusak siklus ini — agen mungkin akan mencoba "memperbaiki" kode yang sebenarnya sudah benar, atau terus mencoba melewati kegagalan yang nyata.

Inilah mengapa pemeriksaan otomatis yang baik merupakan bagian besar dari kualitas [AX (pengalaman agen)](./AX.md) dalam sebuah proyek. Agen yang bekerja di dalam proyek dengan aturan tipe data yang ketat, rangkaian tes yang cepat, dan linter akan mampu menangkap sebagian besar kesalahannya sendiri sebelum Anda mengetahuinya; sedangkan agen di proyek yang tidak memiliki semua itu akan langsung mengirimkan apa pun kode yang dihasilkannya. Perbedaan ini sangat terasa pada pengerjaan otomatis [AFK (away from keyboard)](./AFK.md), di mana pemeriksaan otomatis adalah satu-satunya verifikasi yang terjadi selama agen berjalan. Namun, pemeriksaan otomatis hanya mendeteksi apa yang diujinya saja — status hijau (lulus) berarti kriteria yang diuji telah terpenuhi, bukan berarti logika keseluruhan kode sudah benar. Celah yang memerlukan penilaian subjektif dan logika kontekstual inilah yang menjadi tugas dari [tinjauan otomatis](./Automated%20review.md) dan [tinjauan manusia](./Human%20review.md).

_Hindari:_ istilah "feedback loop" (siklus umpan balik) atau "backpressure" — karena kedua istilah ini mencampuradukkan antara pemeriksaan otomatis yang kaku dengan tinjauan subjektif. _Hindari:_ menggunakan istilah "test" secara umum — karena pengujian (test) adalah bagian dari pemeriksaan otomatis, tetapi tidak semua pemeriksaan otomatis adalah pengujian (misalnya pengecekan tipe data).

_Contoh Penggunaan:_

"Agen terus mengirimkan kode yang rusak pada sesi kerja otomatis (AFK)."

"Pemeriksaan otomatis apa saja yang dipasang di dalam [sandbox (lingkungan terisolasi)](./Sandbox.md)?"

"Baru pengujian unit (unit test) saja."

"Tambahkan pengecekan tipe data (typecheck) dan linter — agen akan memperbaikinya sendiri dari laporan pemeriksaan itu sebelum PR diajukan."
