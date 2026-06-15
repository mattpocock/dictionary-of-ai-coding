---
description: Menjalankan model yang sudah dilatih untuk menghasilkan keluaran. Parameter tetap dan tidak berubah selama proses berjalan.
---

Proses menjalankan [model](./Model.md) yang telah selesai dilatih untuk menghasilkan teks jawaban — inilah yang terjadi pada setiap [permintaan penyedia model (model provider request)](./Model%20provider%20request.md). [Parameter](./Parameters.md) model bernilai tetap (tidak berubah); model hanya melakukan [prediksi token berikutnya (next-token prediction)](./Next-token%20prediction.md) berdasarkan [konteks](./Context.md) obrolan yang diberikan kepadanya. Biaya proses ini tergolong murah dibanding proses [pelatihan (training)](./Training.md), namun ditagih per [token](./Token.md) dan menjadi biaya utama dari penggunaan model sehari-hari.

Siklus hidup sebuah model dibagi menjadi dua fase:

| Fase                  | Kapan Terjadi                               | Apa yang Dilakukan                                                                | Status Parameter       |
| --------------------- | ------------------------------------------- | --------------------------------------------------------------------------------- | ---------------------- |
| Pelatihan (Training)  | Sekali, sebelum model dirilis               | Menghasilkan parameter model dari kumpulan data pelatihan raksasa                 | Sedang ditulis         |
| Inferensi (Inference) | Setiap kali ada pengguna yang memakai model | Menjalankan parameter tetap di atas konteks obrolan Anda untuk menghasilkan token | Hanya-baca (read-only) |

Tidak ada tindakan apa pun yang Anda lakukan pada fase inferensi yang dapat mengubah atau menulis ulang nilai parameter model — itulah alasan mengapa koreksi yang Anda berikan hari ini tidak akan terekam otomatis untuk hari esok. Ketika model mengulangi kesalahan yang sama di [sesi](./Session.md) berikutnya, padahal Anda sudah menjelaskan perbaikannya secara mendalam, model tersebut bukannya mengabaikan Anda; ia memang secara teknis tidak mampu belajar langsung dari interaksi tersebut. Model bersifat [stateless (tidak menyimpan riwayat)](./Stateless.md) — sehingga kesinambungan memori harus dijaga dari luar model — baik dari [jendela konteks](./Context%20window.md) maupun lewat bantuan [sistem memori (memory system)](./Memory%20system.md).

Mekanisme ini juga menjelaskan bagaimana biaya tagihan Anda dihitung. Setiap permintaan akan menjalankan model untuk membaca seluruh konteks obrolan dari awal, sehingga biaya akan bertambah sebanding dengan jumlah [token input](./Input%20tokens.md) dan [token output](./Output%20tokens.md) yang digunakan. Agen yang melakukan belasan panggilan [alat (tool)](./Tool.md) akan membayar biaya inferensi untuk setiap putaran bolak-balik pengiriman data. Inilah mengapa ukuran jendela konteks menjadi masalah efisiensi biaya sekaligus penentu kualitas jawaban.

_Contoh Penggunaan:_

"Mengapa tagihannya dihitung berdasarkan pemakaian, bukan berupa biaya langganan tetap bulanan?"

"Karena Anda membayar untuk setiap proses inferensi — setiap kali mengirimkan pesan baru, penyedia model menjalankan model tersebut menggunakan komputer (hardware) milik mereka. Proses pelatihan memang sudah selesai di awal, tetapi biaya penggunaan server untuk inferensi dihitung per permintaan pesan, dan satu [giliran](./Turn.md) percakapan Anda bisa berkembang menjadi banyak permintaan pesan ketika agen berulang kali memanggil alat pemrograman."
