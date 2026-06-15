---
description: Setiap token memiliki batas pengaruh yang bisa disebarkan ke sisa konteks. Batas ini tidak bertambah ketika kapasitas konteks bertambah.
---

Setiap [token](./Token.md) memiliki kapasitas pengaruh (pengaruh perhatian) yang terbatas untuk dibagikan ke seluruh [konteks](./Context.md). Pengaruh yang kuat pada [satu hubungan](./Attention%20relationship.md) akan mengurangi kapasitas perhatian untuk hubungan lainnya. Anggaran perhatian (attention budget) ini dihitung per-token dan ukurannya tidak bertambah ketika isi percakapan bertambah panjang. Itulah mengapa [sesi](./Session.md) yang terlalu panjang membuat pemahaman agen melemah.

Bayangkan ini seperti sinyal dan kebisingan suara. Instruksi Anda adalah sinyal suara dengan volume tetap; sementara setiap token lain di dalam [jendela konteks](./Context%20window.md) adalah suara pesaing di dalam ruangan. Instruksi tersebut tidak pernah mengecil secara teks — ia tetap ada di sana, huruf demi huruf — tetapi seiring bertambahnya isi obrolan, suasana ruangan menjadi semakin bising, sehingga rasio sinyal terhadap kebisingan (signal-to-noise ratio) menurun. Sebuah instruksi yang awalnya terdengar paling keras pada konteks 10 ribu token, akan berubah menjadi sekadar bisikan latar belakang pada konteks 150 ribu token. Ini adalah mekanisme di balik [penurunan perhatian (attention degradation)](./Attention%20degradation.md): model tidak benar-benar 'lupa', melainkan sinyal instruksi Anda tenggelam dalam kebisingan.

Gejalanya terlihat seperti pembangkangan — agen menyetujui suatu aturan di awal percakapan, lalu perlahan mengabaikannya, dan menempelkan ulang aturan tersebut hanya membantu untuk waktu yang singkat. Penyebabnya bukan karena instruksi Anda yang salah, melainkan karena informasi lain di dalam jendela percakapan yang berebut perhatian.

Hal yang bisa Anda kendalikan adalah apa saja yang dimasukkan ke dalam konteks. Informasi yang tidak mendukung tugas tidaklah netral — itu adalah kebisingan yang mengaburkan informasi penting lainnya. Jaga agar jendela percakapan tetap kecil, lakukan [pembersihan (clear)](./Clearing.md) ketika konteks yang menumpuk tidak lagi sebanding dengan manfaatnya, dan tulis ulang aturan yang penting daripada mengandalkan penyebutan di awal obrolan.

_Contoh Penggunaan:_

"Kenapa agen ini terus mengabaikan struktur tabel (schema) yang saya tempel di bagian atas obrolan?"

"Kita sudah masuk ke [zona bodoh (dumb zone)](./Smart%20zone.md) — anggaran perhatian setiap token itu terbatas, sementara obrolan kita terus memanjang. Sinyal pada struktur tabel tersebut sekarang harus berebut perhatian dengan ribuan token baru."
