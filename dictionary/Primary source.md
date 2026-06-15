---
description: Sumber asli — kode pemrograman, transkrip, log mentah. Lengkap dan valid, tetapi memakan banyak kapasitas konteks.
---

Sumber kebenaran dalam wujud aslinya — seperti file kode program asli, transkrip percakapan utuh, file catatan log mentah, atau respon API yang sebenarnya. Bukan berupa laporan rangkuman dari objek tersebut; melainkan objek itu sendiri. Istilah ini merupakan padanan dari [sumber sekunder (secondary source)](./Secondary%20source.md).

Jika Anda ingin mengetahui apa yang dilakukan oleh sistem kode Anda, maka file kode program tersebut adalah sumber primernya. Dokumen panduan, diagram arsitektur, dan file README hanyalah deskripsi penjelas dari kode tersebut — yang akurat saat ditulis, tetapi dapat tertinggal sejak saat itu. Ketika sebuah [agen](./Agent.md) dengan sangat percaya diri menyatakan hal yang salah tentang proyek Anda, pertanyaan pertama yang harus diajukan adalah dokumen sumber mana yang dibacanya: agen yang membaca dokumen panduan akan mewarisi keusangan dari dokumen tersebut; sedangkan agen yang membaca langsung file kodenya sedang membaca kebenaran yang aktual saat ini.

Biaya pemrosesan adalah alasan mengapa sumber primer tidak selalu dijadikan pilihan bawaan (default). Memuat dokumen sumber primer ke dalam [jendela konteks](./Context%20window.md) memakan biaya yang mahal — seluruh isi file, seluruh transkrip, dan setiap [token](./Token.md) akan ditagih sebagai [token input](./Input%20tokens.md) serta berebut porsi [anggaran perhatian](./Attention%20budget.md) model. Nilai lebih yang Anda dapatkan dari biaya tersebut adalah kelengkapan informasi: tidak ada data yang disaring terlebih dahulu oleh penilaian orang lain mengenai apa yang dianggap penting. Ringkasan yang ditulis bulan lalu tidak mungkin memuat detail kecil yang mendadak menjadi sangat penting hari ini; tetapi file sumber primer asli akan selalu memuatnya.

Gunakan sumber primer ketika presisi tinggi sangat dibutuhkan — seperti aturan penulisan argumen fungsi yang tepat, isi pesan error yang sebenarnya, atau baris kode spesifik yang memicu kegagalan sistem. Sebagian besar seni mengelola [konteks](./Context.md) obrolan adalah memutuskan kapan Anda harus membayar biaya untuk memuat sumber primer dan kapan dokumen sumber sekunder dirasa sudah cukup.

_Contoh Penggunaan:_

"Agen mengatakan bahwa logika mencoba ulang (retry) kita menggunakan jeda waktu yang bertambah secara eksponensial, tetapi saya melihat dia terus memborbardir server tujuan tanpa jeda waktu."

"Dia membaca penjelasan tersebut dari dokumen rencana desain lama. Arahkan dia langsung ke berkas modul logika mencoba ulang yang asli — biasakan bekerja menggunakan sumber primer ketika perilaku nyata sistem sangat krusial."
