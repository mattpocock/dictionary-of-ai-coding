---
description: Token yang dikirim oleh sistem penjalan pada setiap permintaan ke provider. Harganya lebih murah daripada token output.
---

[Token](./Token.md) yang dikirimkan oleh [harness (sistem penjalan)](./Harness.md) pada setiap [permintaan penyedia model (model provider request)](./Model%20provider%20request.md) — meliputi isi [system prompt (instruksi sistem)](./System%20prompt.md), riwayat percakapan sebelumnya, [hasil alat (tool result)](./Tool%20result.md), dan segala hal yang dibaca oleh [model](./Model.md) sebelum ia mulai menulis jawaban. Token ini ditagih dengan tarif yang lebih murah daripada [token output](./Output%20tokens.md), karena biaya komputasi server untuk membaca data jauh lebih murah daripada menulis jawaban baru.

Dalam aktivitas coding berbasis [AI](./AI.md), token input menyumbang porsi terbesar dari tagihan Anda. Model bersifat [stateless (tidak menyimpan riwayat)](./Stateless.md), sehingga di setiap [giliran](./Turn.md) pesan baru, sistem harus mengirimkan kembali seluruh riwayat obrolan dari awal [sesi](./Session.md) sebagai token input: mulai dari pesan pertama Anda, setiap jawaban model, hingga setiap hasil kerja alat sejak awal sesi. Input pada giliran percakapan ke-50 akan memuat riwayat 49 giliran percakapan sebelumnya. Sebuah permintaan ke penyedia model mungkin hanya menghasilkan beberapa ratus token output, tetapi mengirimkan kembali seratus ribu token input dari akumulasi riwayat percakapan sebelumnya.

Layanan [cache awalan (prefix cache)](./Prefix%20cache.md) dapat membantu menekan biaya ini: riwayat percakapan yang persis sama dengan permintaan sebelumnya akan ditagih sebagai [token cache](./Cache%20tokens.md) yang murah, bukan sebagai token input tarif penuh. Jika biaya input dirasa masih terlalu mahal, solusinya adalah dengan memperkecil ukuran riwayat obrolan yang dikirim ulang — yaitu dengan cara [membersihkan (clear)](./Clearing.md) obrolan atau [meringkas (compact)](./Compaction.md) informasi di sela-sela pengerjaan tugas.

_Contoh Penggunaan:_

"Tagihan kita membengkak, padahal [agen](./Agent.md) hampir tidak menulis kode baru sama sekali."

"Itu karena biaya token input — setiap giliran pesan baru akan mengirimkan kembali seluruh riwayat obrolan dari awal. Tanpa adanya cache awalan, Anda harus membayar penuh pemrosesan riwayat tersebut di setiap pesan."
