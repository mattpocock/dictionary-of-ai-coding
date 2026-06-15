---
description: File di lingkungan proyek yang dimuat otomatis ke jendela konteks saat sesi dimulai — panduan tetap proyek untuk agen.
---

Sebuah file di dalam [lingkungan](./Environment.md) kerja proyek yang secara otomatis dimuat oleh [harness (sistem penjalan)](./Harness.md) ke dalam [jendela konteks](./Context%20window.md) di awal setiap [sesi](./Session.md) — berfungsi sebagai instruksi atau panduan tetap proyek untuk sang [agen](./Agent.md). Ini adalah aturan umum di berbagai sistem; beberapa aplikasi penjalan agen memiliki nama file sendiri (contohnya Claude Code menggunakan file `CLAUDE.md`).

Karena file ini dimuat secara otomatis, ini menjadi salah satu cara agar Anda tidak perlu mengulang instruksi yang sama di setiap sesi baru. Mengingat [model](./Model.md) memiliki sifat [stateless (tidak mengingat riwayat sesi sebelumnya)](./Stateless.md) — koreksi yang Anda berikan di satu sesi akan terlupakan di sesi berikutnya, sehingga Anda mungkin harus terus memberi tahu agen baru bahwa proyek ini menggunakan `pnpm`, tes dijalankan dengan opsi tertentu, atau folder tertentu dibuat otomatis dan jangan diubah. Jika Anda sudah mengoreksi agen untuk hal yang sama sebanyak dua kali, maka aturan koreksi tersebut sangat layak untuk dimasukkan ke dalam `AGENTS.md`.

Isi yang cocok untuk file ini adalah informasi apa pun yang tidak bisa diketahui langsung oleh agen dari membaca kode pemrograman: perintah untuk menjalankan (build) atau menguji aplikasi, aturan penulisan kode yang tidak terlihat jelas, serta batasan ketat (seperti "jangan pernah mengedit folder client yang dibuat otomatis"). Tulis secara singkat dan jelas — tujuannya adalah instruksi cepat, bukan dokumentasi panjang lebar.

Konsekuensinya adalah semua yang tertulis di dalamnya akan selalu dibaca oleh agen di awal. Instruksi yang menumpuk, padahal sebagian besar tidak penting untuk tugas saat itu, akan menghabiskan kuota token dan membingungkan agen. Semakin banyak instruksi yang dibaca sekaligus, semakin tidak konsisten model dalam mengikuti setiap instruksi tersebut.

_Hindari:_ menggunakan `AGENTS.md` untuk informasi yang seharusnya [diungkapkan secara bertahap](./Progressive%20disclosure.md). Informasi apa pun di dalam file ini akan memakan biaya [token](./Token.md) pada setiap [giliran](./Turn.md) percakapan di setiap sesi, peduli apakah sesi tersebut membutuhkannya atau tidak. Panduan gaya penulisan kode sebaiknya diletakkan di dalam berkas [keaktifan keahlian (skill)](./Skill.md) atau dirujuk dengan [penunjuk konteks (context pointer)](./Context%20pointer.md); simpan `AGENTS.md` hanya untuk aturan umum yang berlaku di mana saja.

_Contoh Penggunaan:_

"Kenapa setiap memulai sesi baru, kuota token kita sudah terpakai 4 ribu token?"

"Coba periksa file `AGENTS.md` — sepertinya ada yang menyalin seluruh panduan penulisan kode ke sana, padahal harusnya dimasukkan lewat fitur keahlian (skill)."
