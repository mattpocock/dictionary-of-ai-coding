---
description: Parameter model. Stateless (tidak menyimpan riwayat) — hanya menebak token berikutnya dan tidak bisa bekerja mandiri tanpa harness.
---

Kumpulan [parameter](./Parameters.md). Bersifat [stateless (tidak menyimpan riwayat)](./Stateless.md) — hanya melakukan [prediksi token berikutnya (next-token prediction)](./Next-token%20prediction.md) dan tidak melakukan hal lainnya. Nama seperti "Claude Opus 4.x" dan "GPT-5.x" adalah model. Model itu sendiri tidak dapat melakukan tindakan mandiri; ia harus [dipadukan dengan sistem penjalan (harness)](./Harness.md) agar bisa berfungsi sebagai agen.

Model tidak memiliki kemampuan untuk membaca file komputer, menjalankan perintah pemrograman, berselancar di internet, atau mengingat obrolan kemarin — ia hanya menerima sekumpulan [token](./Token.md) input dan menebak token output, sekali di setiap [permintaan penyedia model (model provider request)](./Model%20provider%20request.md). Segala hal yang terasa seperti cara kerja [agen](./Agent.md) yang cerdas — seperti memilih [alat (tools)](./Tool.md), membaca hasil kerja kode, atau mengulangi perintah hingga tugas selesai — sebenarnya merupakan hasil orkestrasi sistem penjalan (harness) yang menjalankan rangkaian tebakan prediksi tersebut secara berturut-turut.

[Penyedia model (model provider)](./Model%20provider.md) merilis model dalam beberapa tingkatan (tier): model ukuran besar yang paling pintar tetapi berjalan lambat dan berbiaya mahal, serta model ukuran lebih kecil yang berjalan cepat dan murah tetapi kemampuannya lebih rendah. Memilih tingkatan model adalah keputusan penting — model besar yang tangguh cocok untuk perencanaan dan perbaikan bug yang rumit, sedangkan model kecil yang ringan cocok untuk perubahan kode mekanis biasa — dan sistem penjalan memungkinkan Anda untuk berganti model di tengah-tengah [sesi](./Session.md) percakapan.

Penggunaan istilah ini secara tepat juga akan memperjelas proses pencarian masalah. Kalimat "model ini buruk untuk tugas ini" adalah klaim spesifik — karena model yang sama di dalam sistem penjalan yang berbeda, atau dibekali dengan [konteks](./Context.md) yang berbeda, sering kali menunjukkan kinerja yang berbeda 180 derajat. Sebelum menyalahkan model, periksa terlebih dahulu apa saja informasi yang diberikan kepadanya: sebagian besar jawaban yang mengecewakan disebabkan oleh masalah kualitas konteks obrolan atau sistem penjalannya, bukan karena parameter modelnya.

_Contoh Penggunaan:_

"Apakah kita sebaiknya mengganti model dari Sonnet ke Opus untuk fase perencanaan tugas ini?"

"Coba saja — tetapi sistem penjalannya (harness) yang melakukan sebagian besar pekerjaan berat di sini. Pergantian model tidak akan membantu jika [system prompt (instruksi sistem)](./System%20prompt.md) dan alat kerjanya salah dikonfigurasi."
