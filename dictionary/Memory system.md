---
description: Sistem agar agen mengingat data antar-sesi dengan menyimpannya ke lingkungan kerja & memuatnya kembali di awal sesi.
---

Sebuah sistem yang berupaya membuat [agen](./Agent.md) bersifat [stateful (menyimpan keadaan/riwayat)](./Stateful.md) di berbagai [sesi](./Session.md) obrolan. Sistem ini menyimpan informasi ke dalam [lingkungan kerja](./Environment.md) selama sesi berlangsung dan memuatnya kembali ke dalam [jendela konteks](./Context%20window.md) di awal sesi berikutnya, sehingga agen tetap memiliki kesinambungan ingatan bahkan setelah pengguna melakukan [pembersihan (clearing)](./Clearing.md) sesi.

Sistem memori memiliki dua jalur kerja. Jalur tulis (write path): selama sesi berlangsung, agen mencatat apa saja yang dipelajarinya — misalnya preferensi yang Anda sebutkan atau fakta tentang proyek Anda — ke dalam file di lingkungan kerja komputer Anda. Jalur baca (read path): di awal sesi baru, [harness (sistem penjalan)](./Harness.md) memuat file-file catatan tersebut, atau indeks dari berkas tersebut, kembali ke dalam jendela konteks. Banyak sistem penjalan dilengkapi dengan sistem memorinya sendiri — salah satunya adalah perintah `/memory` di Claude Code — tetapi Anda juga bisa membuatnya sendiri: misalnya dengan membuat folder berisi kumpulan catatan dan menambahkan instruksi di file [AGENTS.md](./AGENTS.md.md) agar agen membacanya.

Konsekuensi yang harus dihadapi sama seperti memuat konten otomatis lainnya. Catatan ingatan akan menumpuk, sehingga sebagian besar sistem memori hanya memuat indeks berupa satu baris kalimat saja dan menyembunyikan isi lengkapnya di balik [penunjuk konteks (context pointer)](./Context%20pointer.md) alih-alih menuliskan semuanya secara langsung. Selain itu, ingatan tersebut adalah [sumber sekunder (secondary source)](./Secondary%20source.md), sehingga informasinya bisa kedaluwarsa: fakta proyek yang dicatat pada bulan Maret akan dibaca dengan tingkat kepercayaan yang sama tingginya pada bulan Juni, padahal proyek kodenya mungkin sudah berubah. Sistem memori memerlukan pemangkasan catatan secara berkala, sama seperti halnya file AGENTS.md.

_Contoh Penggunaan:_

"Saya harus terus memberi tahu agen ini bahwa kita menggunakan Postgres, bukan MySQL."

"Pasang sistem memori (memory system) — biarkan dia menulis apa yang dipelajarinya ke dalam [sistem file](./Filesystem.md) pada [giliran](./Turn.md) obrolan pertama, lalu muat kembali berkas itu di awal sesi berikutnya. [Model](./Model.md) itu sendiri sebenarnya bersifat [stateless (tidak menyimpan riwayat)](./Stateless.md); sistem memori ini hanya memalsukan kesinambungan ingatan."
