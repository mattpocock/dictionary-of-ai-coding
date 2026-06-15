---
description: Angka di dalam model (miliaran) yang disesuaikan saat pelatihan. Semua pengetahuan model disimpan di sini. Disebut juga bobot.
---

Kumpulan angka di dalam [model](./Model.md) — sering kali berjumlah miliaran — yang disesuaikan selama proses [pelatihan (training)](./Training.md). Segala hal yang "diketahui" oleh model disimpan di dalam angka-angka ini. Proses pelatihan menetapkan nilai angka tersebut; sedangkan fase [inferensi (inference)](./Inference.md) menggunakannya tanpa mengubah nilainya sama sekali. Istilah ini disebut juga dengan _bobot (weights)_.

Secara teknis mekanis, parameter adalah apa yang mengubah input menjadi output. Proses [prediksi token berikutnya (next-token prediction)](./Next-token%20prediction.md) adalah sebuah perhitungan matematika raksasa: kumpulan [token](./Token.md) di dalam [jendela konteks](./Context%20window.md) dimasukkan, dikalikan dengan parameter model, dan menghasilkan prediksi token berikutnya. Tidak ada database penyimpanan fakta di dalam model, juga tidak ada tabel pencarian kode — yang ada hanyalah angka-angka ini, yang diatur sedemikian rupa sehingga perhitungannya cenderung menghasilkan jawaban yang berguna. Fakta yang dapat diucapkan model dari ingatan masa pelatihan, seperti API pustaka standar, adalah [pengetahuan parametrik (parametric knowledge)](./Parametric%20knowledge.md): yaitu data yang disimpan langsung di dalam parameter, bukan dicari dari tempat lain.

Detail penting yang perlu dipahami adalah bahwa parameter dibekukan (frozen) setelah proses pelatihan selesai. Tidak ada tindakan apa pun yang Anda lakukan di dalam [sesi](./Session.md) obrolan yang dapat mengubah nilai parameter tersebut — baik koreksi yang Anda berikan, proyek kode yang Anda tunjukkan, maupun kesalahan yang dipelajarinya. Setiap sesi baru akan selalu berjalan di atas angka parameter yang sama. Inilah mengapa model bersifat [stateless (tidak menyimpan riwayat)](./Stateless.md), mengapa pengetahuan bawaannya terhenti pada [batas pengetahuan (knowledge cutoff)](./Knowledge%20cutoff.md), dan mengapa informasi khusus proyek harus dimasukkan lewat [konteks](./Context.md) obrolan. Satu-satunya cara mengubah parameter adalah dengan melakukan pelatihan ulang (re-training) — yang pada akhirnya menghasilkan model yang berbeda.

_Contoh Penggunaan:_

"Apakah kita bisa melakukan fine-tune model ini menggunakan basis kode proyek kita?"

"Itu akan mengubah nilai parameternya — dan menghasilkan model yang berbeda setelahnya. Untuk satu proyek spesifik, hampir selalu lebih murah memuat basis kode sebagai konteks obrolan daripada melatih ulang model."
