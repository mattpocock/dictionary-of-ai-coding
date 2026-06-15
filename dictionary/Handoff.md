---
description: Memindahkan konteks agen dari satu sesi ke sesi lain secara searah. Wadah pembawa informasi bisa berupa artefak, penyusutan, dll.
---

Memindahkan [konteks](./Context.md) dari satu [sesi](./Session.md) ke sesi lainnya. Wadah pembawa informasinya bervariasi — bisa menggunakan [artefak operan (handoff artifact)](./Handoff%20artifact.md) tertulis, ringkasan di memori ([penyusutan (compaction)](./Compaction.md)), dan lainnya. Berbeda dari proses [pembersihan (clearing)](./Clearing.md) yang tidak mentransfer informasi sama sekali. Alasan pemindahan ini beragam: berganti peran (dari perencana → pelaksana), memulai tugas mandiri ([AFK](./AFK.md)), membagi tugas ke beberapa sesi paralel, atau untuk melegakan kapasitas [jendela konteks](./Context%20window.md).

Sesi penerima akan memulai tugas dengan kondisi konteks kosong — [model](./Model.md) bersifat [stateless (tidak menyimpan riwayat)](./Stateless.md), dan tidak ada rekaman dari sesi lama yang terlihat oleh sesi baru. Apa pun yang dibutuhkan oleh sesi berikutnya harus dibawa secara eksplisit; informasi lainnya akan terbuang. Sifat serah terima yang "searah" (tanpa jalan kembali) inilah yang menentukan bentuk informasi yang dibawa: sesi baru tidak bisa bertanya kepada sesi lama tentang apa maksud instruksinya, sehingga bahan informasi yang dibawa harus dapat dipahami secara mandiri.

| Mekanisme      | Bentuk                                               | Karakteristik                                                                                   |
| -------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Artefak operan | Berkas di dalam [lingkungan kerja](./Environment.md) | Anda dapat membaca dan memperbaikinya terlebih dahulu; dapat digunakan kembali di berbagai sesi |
| Penyusutan     | Ringkasan di dalam jendela konteks                   | Berjalan otomatis dan murah; lebih sulit diperiksa secara visual; hanya untuk satu sesi penerus |

Tanda kegagalan dari serah terima yang buruk adalah perdebatan ulang (relitigation): sesi baru membuka kembali keputusan yang sebenarnya sudah diselesaikan oleh sesi lama. Hal ini terjadi karena informasi yang dibawa hanya mencatat keputusan apa yang diambil, bukan mengapa keputusan itu diambil. Nilailah keberhasilan serah terima dari apa yang bisa dilakukan oleh sesi baru yang memiliki informasi awal nol.

_Contoh Penggunaan:_

"Sesi perencanaan ini sudah mulai penuh dan berat — apakah sebaiknya saya lanjut saja?"

"Lakukan serah terima (handoff). Tulis keputusan-keputusannya ke dalam dokumen rencana kerja, bersihkan sesi, lalu mulai fase implementasi di sesi baru yang membaca dari dokumen tersebut."
