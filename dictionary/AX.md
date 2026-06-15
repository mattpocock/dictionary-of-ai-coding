---
description: Pengalaman agen (AX): seberapa baik lingkungan disiapkan agar agen dapat bekerja dengan baik — pengujian, arsitektur, dan sisa konteks.
aliases:
  - Agent experience
---

Agent experience (AX / Pengalaman Agen) — seberapa baik [lingkungan](./Environment.md) kerja di dalam kode pemrograman disiapkan agar [agen](./Agent.md) bisa bekerja dengan optimal. AX adalah padanan bagi agen dari istilah [DX (pengalaman pengembang/developer experience)](./DX.md) yang ditujukan untuk manusia. Ketika agen yang sama berkinerja baik di satu proyek (repositori) tetapi berkinerja buruk di proyek lain — padahal menggunakan [model](./Model.md) dan [harness (sistem penjalan)](./Harness.md) yang persis sama — perbedaannya biasanya terletak pada AX. Kecenderungan kita adalah menyalahkan model atau menulis ulang instruksi (prompt); padahal solusi sebenarnya sering kali ada pada perbaikan struktur kode di dalam proyek tersebut.

AX yang baik memiliki tiga dimensi utama:

| Dimensi              | Wujud AX yang baik                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pemeriksaan otomatis | [Pemeriksaan otomatis](./Automated%20check.md) yang cepat dan pasti — seperti pengecekan tipe data, pengujian (test), dan perapian kode (lint) — sehingga agen bisa memperbaiki kesalahannya sendiri tanpa bantuan manusia.                                                                                                                                                        |
| Arsitektur           | Kode pemrograman yang mudah dijelajahi oleh agen tanpa harus membaca seluruh file: struktur yang teratur, fungsi kompleks yang disembunyikan di balik antarmuka kecil, dan penamaan yang memperjelas fungsi kerja berkas.                                                                                                                                                          |
| Konteks kosong       | File [AGENTS.md](./AGENTS.md.md), [keahlian (skills)](./Skill.md), dan [alat (tools)](./Tool.md) dijaga agar tetap ringkas, sehingga sebagian besar kapasitas [jendela konteks](./Context%20window.md) tetap kosong untuk menyelesaikan tugas, menjaga agen tetap berada di dalam [zona pintar (smart zone)](./Smart%20zone.md) alih-alih tenggelam dalam informasi tidak penting. |

AX dan DX memang saling beririsan — pemeriksaan otomatis yang baik dan arsitektur yang rapi membantu programmer manusia sekaligus agen — namun keduanya memiliki perbedaan arah. Manusia bisa mentolerir informasi lisan ("tanya Sarah tentang modul pembayaran"), sistem integrasi yang lambat, atau kebiasaan tidak tertulis di kantor; agen sama sekali tidak bisa. Agen tidak bisa membaca petunjuk pop-up di layar (tooltip) atau grafik dasbor yang indah; mereka membutuhkan laporan kegagalan berupa teks tertulis di dalam [hasil alat (tool result)](./Tool%20result.md). Sebuah proyek bisa saja memiliki DX yang bagus namun AX yang sangat buruk.

_Hindari:_ menganggap AX sama persis dengan DX — karena target penggunanya (agen komputer vs manusia) membutuhkan pendekatan pengembangan yang berbeda.

_Contoh Penggunaan:_

"Agen ini menulis kode yang sangat bagus di bagian API proyek kita, tapi menulis kode sampah di bagian tampilan depan (frontend)."

"Proyek API kita memiliki aturan tipe data yang ketat dan sistem tes yang cepat; sedangkan frontend tidak punya keduanya dan malah memuat empat puluh keahlian sekaligus. Itu adalah masalah perbedaan kualitas AX, bukan salah modelnya."
