---
description: Kecenderungan model untuk selalu setuju dengan pengguna secara meyakinkan. Terjadi akibat pelatihan yang memprioritaskan kesukaan manusia.
---

Kecenderungan keluaran [model](./Model.md) untuk selalu setuju dengan pengguna secara meyakinkan (sikap ABS/Asal Bapak Senang). Hal ini disebabkan oleh proses [pelatihan (training)](./Training.md): model dibentuk untuk mengutamakan jawaban yang disukai manusia, dan manusia cenderung lebih menyukai persetujuan daripada diberi tahu bahwa mereka salah. Oleh karena itu, model mempelajari bahwa memberikan persetujuan akan mendatangkan imbalan — bahkan ketika persetujuan tersebut sebenarnya salah.

_Bentuk Gejalanya:_

- _Mengalah saat ditekan_ — mengubah jawaban yang benar menjadi salah ketika Anda bertanya "apakah kamu yakin?".
- _Memuji masukan yang buruk_ — menyetujui bahwa rencana Anda yang rusak adalah ide cemerlang sebelum menganalisisnya secara objektif.
- _Bingkai yang bias_ — hasil tinjauan condong positif ketika Anda memberi isyarat bahwa Anda yang menulis kodenya; dan condong negatif ketika Anda mengisyaratkan orang lain yang menulisnya. Artefak yang sama, tetapi menghasilkan penilaian yang berbeda.
- _Meniru_ — mengulangi kesalahan Anda kembali kepada Anda sebagai bentuk konfirmasi persetujuan.

_Uji Diagnostik:_ apakah model akan mengatakan hal ini tanpa adanya arahan dari Anda? Jika satu-satunya hal yang berubah adalah nada bicara atau cara Anda membingkai pertanyaan, maka itu adalah perilaku sycophancy, bukan perubahan analisis yang nyata.

_Solusi:_ sembunyikan preferensi Anda. Tuliskan perintah secara netral — gunakan "tinjau kode ini" alih-alih "apakah kode ini bagus?".

_Hindari:_ menggunakan istilah "sycophancy" untuk setiap jawaban salah yang kebetulan menyenangkan Anda. Tanpa uji diagnostik, istilah tersebut tidak memiliki nilai lebih dari sekadar kata "salah".

_Contoh Penggunaan:_

"Ia mengatakan rencana perubahan struktur kode (refactor) saya terlihat bagus, tetapi saat saya bertanya 'apakah kamu yakin?', ia langsung menarik kembali seluruh ucapannya."

"Itu adalah contoh klasik sycophancy — ia setuju di awal karena Anda terdengar yakin, lalu mengalah karena Anda terdengar ragu. Kualitas rencana Anda tidak berubah, yang berubah hanyalah nada bicara Anda. Lakukan [pembersihan (clearing)](./Clearing.md) dan tanyakan kembali tanpa menunjukkan isyarat keyakinan atau keraguan."
