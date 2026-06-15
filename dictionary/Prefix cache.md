---
description: Penyimpanan di sisi provider untuk menghindari pemrosesan ulang awalan obrolan yang sama, ditagih dengan tarif lebih murah.
---

Penyimpanan di sisi [penyedia model (provider)](./Model%20provider.md) yang memungkinkan rangkaian [permintaan penyedia model (model provider request)](./Model%20provider%20request.md) berurutan untuk melewati pemrosesan ulang dari awalan obrolan yang sama. Ketika bagian awal dari suatu pesan baru memiliki kecocokan yang persis sama dengan pesan sebelumnya — misalnya menggunakan [system prompt (instruksi sistem)](./System%20prompt.md) yang sama dan riwayat percakapan yang sama hingga batas tertentu — penyedia model akan menggunakan kembali hasil perhitungan sebelumnya dan menagih [token](./Token.md) bagian awal tersebut sebagai [token cache](./Cache%20tokens.md) dengan tarif yang jauh lebih murah.

Fitur cache ini sangat menguntungkan karena sesi obrolan bersifat menumpuk di bagian akhir (append-only). Setiap permintaan baru akan mengirimkan kembali seluruh riwayat obrolan dari awal sebagai [token input](./Input%20tokens.md) (silakan baca entri tersebut untuk mengetahui alasannya), dan pada [sesi](./Session.md) normal, perubahan hanya terjadi pada bagian akhir pesan saja — di mana setiap pesan baru hanyalah pesan sebelumnya ditambah beberapa baris jawaban baru. Penyedia model akan memproses bagian awal panjang yang sama tersebut sekali saja, menyimpan hasilnya di server, dan melanjutkan proses dari titik akhir awalan tersebut. Tanpa adanya cache ini, sesi obrolan sepanjang 50 [giliran](./Turn.md) pesan akan membuat Anda membayar biaya pemrosesan giliran pesan pertama sebanyak lima puluh kali.

Data cache ini juga memiliki masa kedaluwarsa. Berapa lama data tersimpan di server bervariasi untuk setiap penyedia model — biasanya hanya beberapa menit, bukan berjam-jam. Jika Anda mendiamkan sesi obrolan dalam waktu yang melewati batas kedaluwarsa tersebut, permintaan pesan berikutnya akan memproses kembali seluruh awalan obrolan dengan tarif penuh sekali sebelum sistem cache aktif kembali. Hal ini sebenarnya merupakan urusan teknis pembuat [harness (sistem penjalan)](./Harness.md); bagi Anda sebagai pengguna, efek yang terlihat adalah pemanggilan pesan setelah jeda yang lama akan memakan biaya lebih mahal daripada pesan sebelumnya yang dikirim berturut-turut.

_Contoh Penggunaan:_

"Mengapa tagihan kita mendadak melonjak di pertengahan sesi?"

"Sistem penjalan (harness) mulai memasukkan informasi waktu saat ini (timestamp) ke dalam system prompt di setiap giliran obrolan. Hal ini merusak cache awalan (prefix cache) pada token pertama yang mengalami perubahan nilai, sehingga setiap permintaan setelah itu ditagih dengan tarif input penuh."
