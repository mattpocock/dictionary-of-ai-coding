---
description: Token yang dihasilkan model. Harganya lebih mahal daripada token input karena proses komputasi pembuatannya lebih berat.
---

[Token](./Token.md) yang dihasilkan kembali oleh [model](./Model.md). Ditagih dengan tarif yang lebih mahal daripada [token input](./Input%20tokens.md) — umumnya sekitar lima kali lipat — karena membutuhkan daya komputasi server yang lebih besar untuk memproduksinya.

Segala hal yang ditulis oleh model akan dihitung: teks penjelasan yang Anda baca, baris kode program yang dibuat, perintah [panggilan alat (tool call)](./Tool%20call.md), serta baris penalaran (reasoning tokens) yang dilakukan model sebelum menjawab. Hal terakhir ini sering mengejutkan pengguna — token penalaran tetap ditagih sebagai token output meskipun [harness (sistem penjalan)](./Harness.md) sering kali menyembunyikan teks penalaran tersebut dari layar Anda.

Token output juga menentukan kecepatan berjalannya suatu [sesi](./Session.md) obrolan. Model dapat membaca input dengan sangat cepat tetapi menghasilkan output secara bertahap satu token demi satu token. Oleh karena itu, ketika [giliran](./Turn.md) percakapan terasa lambat, hal itu hampir selalu disebabkan karena model sedang menuliskan output kodenya, bukan karena proses membaca input. Waktu tunggu yang lama biasanya menandakan bahwa model sedang menulis jawaban yang panjang.

_Contoh Penggunaan:_

"Sesi perbaikan kode (refactor) ini menghabiskan kuota kredit yang besar padahal teks inputnya kecil."

"Agen menulis ulang seluruh isi file daripada memberikan potongan perubahannya (patch) saja. Biaya token output sekitar lima kali lipat tarif input — mintalah dia menuliskan editan kodenya saja agar biayanya turun."
