---
description: Unit atomik terkecil yang dibaca dan ditulis oleh model. Ukurannya kurang lebih sebesar kata, tetapi tidak persis sama.
---

Unit atomik terkecil yang dibaca dan ditulis oleh [model](./Model.md). Ukurannya kurang lebih sebesar kata, tetapi tidak persis sama — kata-kata yang umum digunakan biasanya dihitung sebagai satu token, sedangkan kata-kata yang jarang atau panjang akan dipecah menjadi beberapa token. Ukuran [jendela konteks (context window)](./Context%20window.md), biaya, dan latensi semuanya dihitung dalam satuan token.

Teks diubah menjadi token melalui alat pemecah token (tokenizer): sebuah daftar kosakata tetap yang terdiri dari puluhan ribu fragmen teks, yang dipelajari sebelum proses [pelatihan (training)](./Training.md) dimulai, untuk memecah masukan apa pun menjadi urutan entri kosakata. Model tidak pernah melihat karakter huruf atau kata yang utuh — setiap bagian teks diubah menjadi bentuk token saat masuk, dan proses [prediksi token berikutnya (next-token prediction)](./Next-token%20prediction.md) menghasilkan keluaran berupa token satu demi satu saat keluar.

Sebagai aturan umum untuk bahasa Inggris, satu token bernilai sekitar tiga perempat dari sebuah kata, sehingga seribu token kira-kira sama dengan 750 kata. Untuk penulisan kode komputer, polanya lebih sulit diprediksi: kata kunci dan idiom yang umum digunakan akan dipecah secara ringkas, sedangkan nama pengenal (identifier) acak yang dibuat oleh sistem, kode hash, data base64, dan kode yang diperkecil (minified) akan dipecah menjadi sangat banyak token untuk setiap "kata". Polanya adalah: teks yang sering muncul dalam materi sumber pembuatan tokenizer akan mendapatkan pengodean yang pendek dan efisien; sedangkan teks yang jarang muncul akan dipotong-potong menjadi banyak pecahan kecil. Kode hash seperti `a3f9c2e1` tidak pernah muncul di mana pun, sehingga akan dipecah menjadi banyak token, sementara kata `function` hanya dihitung sebagai satu token. Inilah penyebab mengapa sebuah file yang tampak kecil tetapi penuh dengan baris teks yang tidak biasa dapat memakan porsi jendela konteks yang sangat besar.

Token adalah satuan dasar yang digunakan untuk mengukur segala sesuatu lainnya. Biaya dihitung per token — penyedia model menagih biaya [token masukan (input tokens)](./Input%20tokens.md) dan [token keluaran (output tokens)](./Output%20tokens.md) secara terpisah. Kecepatan diukur dalam satuan token per detik, karena keluaran dihasilkan satu token demi satu token. Selain itu, jendela konteks memiliki kapasitas jumlah token yang tetap, sehingga jumlah token dari file-file Anda akan menentukan seberapa banyak informasi yang dapat muat di dalamnya.

_Hindari:_ penggunaan istilah "kata" — batas pemisahan token tidak sama dengan batas pemisahan kata, dan satuan token per detik atau token per rupiah adalah satuan yang benar-benar penting.

_Contoh Penggunaan:_

"Seberapa besar ukuran perintah (prompt) ini nantinya?"

"Jalankan dahulu lewat alat tokenizer — skemanya memang ringkas tetapi nama kunci JSON-nya aneh, jadi kata-katanya akan dipecah menjadi lebih banyak token dari yang Anda perkirakan."
