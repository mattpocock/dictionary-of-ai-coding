---
description: Pola kerja di mana pengguna memulai sesi lalu meninggalkan agen berjalan sendiri tanpa pengawasan (jauh dari keyboard).
aliases:
  - away from keyboard
  - AFK (away from keyboard)
---

Away from keyboard (jauh dari keyboard). Sebuah pola kerja di mana pengguna memulai [sesi](./Session.md) lalu meninggalkan [agen](./Agent.md) bekerja sendiri tanpa pengawasan. Ini adalah cara melipatgandakan produktivitas dalam coding berbasis [AI](./AI.md) — banyak sesi AFK dapat berjalan bersamaan saat Anda tidur, makan, atau mengerjakan hal lain. Agar aman, pola ini biasanya membutuhkan [mode izin](./Permission%20mode.md) yang longgar dan sistem [sandboxing (lingkungan terisolasi)](./Sandbox.md).

Saat Anda tidak ada di tempat, agen akan menangani ketidakpastian dengan cara yang berbeda. Ketika Anda mengawasi, keputusan yang membingungkan akan diajukan sebagai pertanyaan dan Anda bisa langsung menjawabnya. Namun, begitu Anda pergi, agen akan memilih jawaban bawaan sendiri (default) dan terus berjalan, di mana setiap keputusan berikutnya akan didasarkan pada tebakan pertama tersebut. Kegagalan khas dari pola ini adalah ketika Anda kembali dan melihat hasil kerja berjam-jam yang selesai dengan penuh percaya diri, tetapi ternyata dibangun di atas keputusan yang salah pada sepuluh menit pertama. Hasil kerjanya tidak berantakan — hasilnya rapi dan masuk akal, hanya saja masuk akal untuk hal yang salah.

Karena Anda tidak bisa memberikan masukan selama agen berjalan, berikan masukan sebelum dan sesudahnya. Sebelum memulai: selesaikan ketidakpastian sejak awal — misalnya lewat sesi [grilling (tanya-jawab intensif)](./Grilling.md) atau menulis [spesifikasi (spec)](./Spec.md) — sehingga agen tidak perlu banyak menebak sendiri. Selama berjalan: [pemeriksaan otomatis](./Automated%20check.md) dan [tinjauan otomatis](./Automated%20review.md) menggantikan perhatian yang tidak bisa Anda berikan, sehingga sistem langsung gagal (fail fast) jika ada kesalahan yang bisa dideteksi secara teknis. Setelah selesai: proses kerja harus berakhir pada sesuatu yang bisa ditinjau kembali — seperti Pull Request (PR), bukan perubahan yang langsung digabungkan (merge) ke kode utama. AFK tidak menghilangkan [tinjauan manusia](./Human%20review.md); pola ini hanya menunda semua tinjauan ke bagian akhir. Itulah mengapa hasil akhir yang diberikan harus benar-benar layak untuk ditinjau. Ini juga alasan mengapa [AX (pengalaman agen)](./AX.md) sangat penting dalam sesi AFK — saat tidak ada yang mengawasi, lingkungan kerja adalah satu-satunya panduan yang dimiliki oleh agen.

_Hindari:_ istilah "agen latar belakang" (background agent) — karena istilah ini terlalu fokus pada mesin ("berjalan di latar belakang") alih-alih pola kerja manusianya ("pengguna sedang pergi"). AFK menekankan fakta yang sebenarnya penting: pengguna tidak sedang mengawasi jalannya proses.

_Contoh Penggunaan:_

"Saya menjalankan tugas ini secara AFK — tiga agen terisolasi melakukan perbaikan kode (refactor), dan saya tinggal memeriksa PR-nya besok pagi."

"Apakah kita akan [melewati perizinan](./Agent%20mode.md)?"

"Ya, tapi dengan akses [sistem file](./Filesystem.md) hanya-baca (read-only) dan tanpa jaringan internet."
