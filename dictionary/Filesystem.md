---
description: Struktur folder dan file tempat agen membaca, menulis, dan menjalankan perintah — lingkungan kerja bawaan agen coding.
---

Struktur pohon direktori dan file tempat [agen](./Agent.md) membaca data, menulis perubahan, dan menjalankan perintah pemrograman — yang merupakan jenis [lingkungan kerja](./Environment.md) bawaan (default) bagi agen coding. File seperti [AGENTS.md](./AGENTS.md.md), modul [keahlian (skills)](./Skill.md), kode program aplikasi, skrip kompilasi (build), dan konfigurasi [alat (tool)](./Tool.md) semuanya disimpan di dalam sistem file komputer. Ketika sebuah [harness (sistem penjalan)](./Harness.md) "berjalan di proyek Anda", sistem tersebut sebenarnya sedang mengarahkan agen ke sistem file tersebut.

Agen hanya berinteraksi dengan sistem file melalui [panggilan alat (tool call)](./Tool%20call.md) — seperti membaca berkas, menulis berkas, atau menjalankan perintah baris shell. Tidak ada data di dalam penyimpanan komputer (disk) yang langsung masuk ke dalam [jendela konteks](./Context%20window.md) sebelum dimuat oleh panggilan alat. Fitur ini memungkinkan agen bekerja di dalam proyek besar yang ukurannya jauh melampaui kapasitas jendela konteks: sistem file menampung semua file proyek, sementara jendela konteks hanya menyimpan berkas yang dibaca untuk tugas aktif saat itu. Beberapa sistem penjalan memang memuat nama-nama file di direktori kerja ke dalam jendela konteks sejak awal — bukan isi filenya, hanya daftar nama pohon direktorinya saja — yang berfungsi sebagai [penunjuk konteks (context pointer)](./Context%20pointer.md): agen dapat melihat file apa saja yang tersedia lalu membaca berkas yang dibutuhkannya.

Dan area kerja ini dibagi bersama Anda. Berkas yang diedit oleh agen adalah berkas yang sama yang Anda buka di aplikasi editor kode dan Anda periksa perubahannya menggunakan git — sistem file komputer adalah ruang kerja bersama tempat Anda meninjau hasil kerja agen.

_Contoh Penggunaan:_

"Kenapa dia tidak membaca file `AGENTS.md` milik saya?"

"Dia berjalan di sistem file yang berbeda — sistem [sandbox (lingkungan terisolasi)](./Sandbox.md) memuat folder induknya, bukan folder utama proyek Anda. Coba arahkan kembali sistem penjalannya (harness)."
