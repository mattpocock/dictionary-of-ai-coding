---
description: Bagian penyaring izin dari mode agen — menentukan panggilan alat mana yang harus meminta izin dan mana yang otomatis jalan.
---

Bagian penyaring izin (permission-gating) dari suatu [mode agen](./Agent%20mode.md) — menentukan [panggilan alat (tool call)](./Tool%20call.md) mana saja yang wajib memicu [permintaan izin (permission request)](./Permission%20request.md) dan mana saja yang boleh berjalan secara otomatis. Ini adalah tujuan awal dari dibuatnya sistem mode sebelum [harness (sistem penjalan)](./Harness.md) mulai menyertakan paket instruksi perilaku di atasnya.

Sistem penjalan menyediakan tingkatan tangga dari mode-mode berikut:

| Mode                    | Membaca File (Reads) | Menulis File & Perintah Shell (Writes) | Skenario Penggunaan                                                                  |
| ----------------------- | -------------------- | -------------------------------------- | ------------------------------------------------------------------------------------ |
| Hanya-baca / rencana    | Otomatis             | Diblokir                               | Riset, perencanaan, meninjau kode                                                    |
| Bawaan (Default)        | Otomatis             | Meminta izin                           | Pekerjaan terbimbing sehari-hari                                                     |
| Edit Otomatis           | Otomatis             | Menulis otomatis, shell minta izin     | Proyek tepercaya, perubahan mekanis                                                  |
| "Yolo" / Otomatis Penuh | Otomatis             | Otomatis                               | [Sandbox (lingkungan terisolasi)](./Sandbox.md), pengerjaan otomatis [AFK](./AFK.md) |

Memilih anak tangga perizinan adalah kompromi antara tingkat keamanan dengan kenyamanan kerja (bebas gangguan), dan kedua sisi ekstremnya memiliki konsekuensi buruk. Jika aturan disetel terlalu ketat, Anda akan menjadi penghambat kerja (bottleneck): sang [agen](./Agent.md) akan terus berhenti setiap beberapa detik hanya untuk membaca file yang aman, membuat Anda menyetujui izin secara refleks (autopilot), dan persetujuan tersebut akhirnya kehilangan esensi pengawasannya — persetujuan autopilot adalah kondisi terburuk: Anda terganggu terus-menerus tanpa mendapatkan perlindungan keamanan yang nyata. Sebaliknya, jika aturan disetel terlalu longgar, agen dapat mengedit file dan menjalankan perintah komputer yang seharusnya Anda periksa terlebih dahulu sebelum dijalankan.

Aturan perizinan yang longgar paling aman diterapkan di dalam lingkungan terisolasi (sandbox), di mana dampak buruk dari kesalahan panggilan [alat (tool)](./Tool.md) dapat dibatasi di dalam wadah isolasi. Di luar lingkungan terisolasi, sebagian besar pengguna memilih untuk otomatis menyetujui proses membaca file (read) dan tetap menerapkan prinsip [human-in-the-loop (keterlibatan manusia)](./Human-in-the-loop.md) untuk tindakan menulis (write) atau perintah shell yang tidak dapat dibatalkan.

_Contoh Penggunaan:_

"Dia berhenti di setiap pencarian grep — benar-benar merusak sesi kerja otomatis (AFK) kita."

"Longgarkan mode perizinan untuk alat-alat yang hanya membaca file (read-only), dan tetap minta konfirmasi untuk penulisan file dan perintah shell. Sebagian besar permintaan izin pada [sesi](./Session.md) riset hanyalah gangguan yang tidak perlu."
