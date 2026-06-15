---
description: Apa yang dikirim balik oleh penjalan setelah menjalankan panggilan alat — isi berkas, keluaran perintah, atau pesan kesalahan.
---

Apa yang dikirim balik oleh [harness (sistem penjalan)](./Harness.md) setelah menjalankan [panggilan alat (tool call)](./Tool%20call.md) — dapat berupa isi file, keluaran perintah, atau pesan kesalahan. Ini adalah satu-satunya jendela bagi [agen](./Agent.md) untuk melihat [lingkungan kerja (environment)](./Environment.md). Data hasil ini dikirim kembali ke [model](./Model.md) pada [permintaan penyedia model (model provider request)](./Model%20provider%20request.md) _berikutnya_, di mana model akan memutuskan apa yang harus dilakukan setelahnya. Panggilan alat dan hasil alat adalah dua bagian dari pertukaran informasi yang sama di dalam satu [giliran (turn)](./Turn.md).

Siklus hidup hasil alat:

| Langkah | Siapa   | Apa yang terjadi                                                                                    |
| ------- | ------- | --------------------------------------------------------------------------------------------------- |
| 1       | Harness | Menjalankan panggilan alat — mengeksekusi perintah, membaca file                                    |
| 2       | Harness | Menangkap hasil akhir: keluaran teks, isi berkas, atau pesan kesalahan                              |
| 3       | Harness | Menambahkan hasil tersebut ke [konteks](./Context.md) sebagai sebuah pesan                          |
| 4       | Harness | Mengirimkan seluruh konteks ke penyedia model dalam permintaan penyedia model berikutnya            |
| 5       | Model   | Membaca hasil tersebut dan memutuskan: melakukan panggilan alat lain, atau memberikan jawaban akhir |

Hasil alat ini akan tetap berada di dalam konteks sepanjang sisa waktu [sesi](./Session.md) obrolan berjalan. Hasil alat biasanya merupakan bagian terbesar dari konteks sesi pemrograman: setiap pembacaan file, setiap jalannya pengujian, dan setiap pencarian akan masuk secara utuh ke dalam konteks dan terus memakan kapasitas [token](./Token.md) lama setelah informasi tersebut tidak lagi berguna. Beberapa hasil alat yang berukuran besar — seperti log pengujian yang sangat panjang atau pembacaan file besar yang diunggah secara utuh — dapat mendorong sesi obrolan mendekati batas kapasitas [jendela konteks (context window)](./Context%20window.md) jauh lebih cepat daripada obrolan itu sendiri.

Karena hasil alat adalah satu-satunya hal yang dilihat oleh model, model tidak memiliki cara untuk memeriksa lingkungan kerja nyata di baliknya. Jika keluaran terpotong, perintah gagal secara diam-diam, atau sistem penjalan mengembalikan pesan kesalahan alih-alih isi berkas, model akan mengambil kesimpulan hanya berdasarkan apa yang diberikan kepadanya. Ketika gambaran agen tentang sistem Anda tampak keliru, hasil alat adalah tempat pertama yang harus Anda periksa: di dalam transkrip obrolan pasti terdapat suatu hasil alat yang memberikan informasi yang berbeda dari kenyataan sebenarnya.

_Contoh Penggunaan:_

"Ia menganalisis file tersebut seolah-olah filenya kosong."

"Itu karena hasil alat (tool result) yang dikembalikan adalah pesan penolakan izin akses, bukan isi berkasnya. Model hanya melihat teks kesalahan tersebut — ia tidak punya cara lain untuk melihat berkasnya."
