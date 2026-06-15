---
description: Lingkungan terisolasi tempat agen berjalan (kontainer, VM, shell terbatas). Membatasi dampak kerusakan dari tindakan agen.
aliases:
  - Sandboxing
  - Sandbox / Sandboxing
---

Sebuah [lingkungan kerja](./Environment.md) terisolasi tempat [agen](./Agent.md) dijalankan — dapat berupa kontainer (container), mesin virtual (VM), [sistem file](./Filesystem.md) sementara (ephemeral), atau baris shell dengan izin terbatas. Berfungsi untuk membatasi dampak kerusakan (blast radius) dari tindakan agen: bahkan jika agen tidak sengaja menjalankan perintah yang merusak atau mengunduh berkas berbahaya, kerusakan tersebut akan tetap terisolasi di dalamnya. Ini adalah fondasi keamanan utama yang membuat pengerjaan otomatis [AFK](./AFK.md) aman dilakukan.

Sistem sandbox dan [mode izin (permission mode)](./Permission%20mode.md) menyelesaikan masalah keamanan yang sama dari dua sisi yang berbeda. Sistem perizinan akan bertanya kepada Anda sebelum suatu tindakan dijalankan; sedangkan sandbox membatasi apa saja objek yang bisa dijangkau oleh tindakan tersebut jika ia berjalan. Sistem perizinan mengharuskan Anda untuk terus berada di dalam [lingkaran pendampingan (human-in-the-loop)](./Human-in-the-loop.md) — di mana setiap konfirmasi izin adalah gangguan fokus — dan sesi obrolan yang selalu meminta izin tidak akan bisa bekerja mandiri. Sebaliknya, sandbox mengandalkan infrastruktur komputer daripada menyita perhatian Anda: semakin kuat tingkat isolasinya, semakin sedikit pertanyaan izin yang perlu diajukan ke layar Anda.

Tingkat isolasi dibagi menjadi beberapa tingkatan:

| Tingkat Isolasi            | Deskripsi Teknis                                                                          | Lingkup Kerusakan yang Terisolasi                                   |
| -------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Shell Terbatas             | Pembatasan di tingkat OS di sekitar setiap perintah                                       | Penulisan data di luar proyek utama, akses jaringan internet        |
| Kontainer (Container)      | Sistem file baru yang segar, tanpa kredensial terpasang, langsung dibuang setelah selesai | Segala tindakan yang dilakukan agen terhadap mesin kerjanya sendiri |
| Mesin Virtual (VM) / Cloud | Komputer terpisah seutuhnya, biasanya disediakan langsung oleh sistem penjalan            | Semua tindakan, termasuk upaya pembobolan sistem di tingkat kernel  |

Satu hal yang tidak bisa dicegah oleh sandbox: tindakan agen yang keluar dari batas sandbox secara sah. Agen yang dibekali dengan kredensial git Anda tetap bisa mengirimkan perubahan kode (push) ke server utama; agen yang diberi akses internet tetap bisa memanggil API sistem produksi yang aktif. Tentukan terlebih dahulu informasi apa saja yang boleh melewati batas wilayah terisolasi sebelum menentukan seberapa tebal dinding isolasi yang akan dibangun.

_Contoh Penggunaan:_

"Saya ingin membiarkan agen berjalan semalaman dengan mode [melewati izin (bypass-permissions)](./Agent%20mode.md), tetapi saya belum siap secara mental untuk mengambil risiko itu."

"Letakkan agen di dalam sandbox — gunakan kontainer baru, tanpa kredensial yang terpasang, dan matikan akses jaringan keluar. Kasus terburuknya dia hanya akan menghancurkan sistem filenya sendiri dan Anda tinggal membuang kontainer tersebut."
