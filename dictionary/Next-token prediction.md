---
description: Cara kerja model sesungguhnya: memilih satu token berikutnya dari konteks, menempelkannya, lalu mengulangi proses tersebut.
---

Apa yang sebenarnya dilakukan oleh [model](./Model.md) di balik layar. Dengan bekal [konteks](./Context.md) obrolan yang diberikan, model akan memilih satu [token](./Token.md) berikutnya, menempelkannya di akhir kalimat, lalu mengulangi proses tersebut dari awal. Setiap teks jawaban yang dihasilkan — baik berupa kalimat penjelasan, perintah [panggilan alat (tool call)](./Tool%20call.md), maupun berkas kode pemrograman sepanjang seribu baris — dirakit satu token demi satu token. Model tidak memiliki cara kerja lainnya selain ini.

Setiap langkah bekerja dengan cara yang persis sama: kumpulan token yang berada di dalam [jendela konteks](./Context%20window.md) akan dibaca melewati [parameter](./Parameters.md) model, yang kemudian akan memunculkan nilai probabilitas (kemungkinan kecocokan) untuk setiap kosakata yang dimilikinya — kosakata mana yang paling mungkin muncul berikutnya, dan mana yang kurang cocok. Satu token kemudian dipilih dari daftar probabilitas tersebut, ditempelkan ke kalimat obrolan, dan siklus kembali berjalan dengan ukuran konteks obrolan yang sekarang sedikit lebih panjang. Tahapan pemilihan token inilah yang menyebabkan instruksi (prompt) yang sama persis bisa menghasilkan jawaban yang berbeda pada sesi yang berbeda: [sifat tidak pasti (non-determinism)](./Non-determinism.md) adalah bawaan dari cara kerja mesin ini sendiri, bukan berupa error program.

Memahami cara kerja ini membantu kita mengerti berbagai perilaku model yang tampaknya aneh. Model tidak pernah memeriksa apakah suatu kata bernilai _benar secara fakta_ sebelum menuliskannya — ia hanya memeriksa apakah kata tersebut _terlihat cocok_ untuk ditulis berikutnya — hal inilah yang menjadi akar masalah terjadinya [halusinasi](./Hallucination.md). Model langsung mengunci keputusannya di setiap token yang ditulis, sehingga kalimat pembuka obrolan yang terdengar sangat yakin dapat menyeret seluruh isi jawaban ke arah yang salah. Dan karena [token output](./Output%20tokens.md) diproduksi satu per satu, kecepatan pembuatan token ini menjadi penentu batas kecepatan kerja maksimal bagi [agen](./Agent.md) mana pun.

_Contoh Penggunaan:_

"Bagaimana cara agen 'memutuskan' untuk menggunakan alat pemrograman?"

"Dia tidak membuat keputusan sendiri — itu hanyalah proses menebak token berikutnya dari awal sampai akhir. Panggilan alat tersebut sebenarnya hanyalah teks tertulis dengan struktur tertentu yang kemudian dibaca dan dijalankan oleh [harness (sistem penjalan)](./Harness.md) dari aliran teks jawaban model."
