---
description: Proses mengatur parameter model dengan melatihnya pada teks dalam jumlah besar untuk meningkatkan prediksi token berikutnya.
---

Proses yang mengatur [parameter](./Parameters.md) suatu [model](./Model.md), dengan cara menghadapkannya pada teks dalam jumlah yang sangat besar dan menyesuaikan parameternya untuk meningkatkan akurasi [prediksi token berikutnya (next-token prediction)](./Next-token%20prediction.md). Ini adalah proses sekali jalan yang sangat mahal yang dilakukan oleh [penyedia model (model provider)](./Model%20provider.md). Proses ini mencakup prapelatihan (pre-training / pengerjaan massal) dan pascapelatihan (post-training / penyempurnaan lanjutan seperti kepatuhan instruksi dan keselamatan); perbedaan keduanya tidak terlalu penting pada tingkatan glosarium ini.

Mekanisme kerjanya adalah pengulangan dalam skala besar: tunjukkan potongan teks kepada model, biarkan ia memprediksi [token](./Token.md) berikutnya, lalu ubah sedikit parameternya agar condong ke token yang sebenarnya muncul berikutnya, kemudian ulangi proses ini pada triliunan token. Tidak ada data yang disimpan sebagai fakta atau aturan baku — semua hal yang "diketahui" oleh model adalah efek samping dari upayanya untuk menjadi lebih baik dalam melakukan prediksi, yang dikompresi ke dalam parameter sebagai [pengetahuan parametrik (parametric knowledge)](./Parametric%20knowledge.md).

Dua konsekuensi penting yang memengaruhi pekerjaan sehari-hari: Pelatihan berakhir pada satu titik waktu tertentu, sehingga model memiliki [batas waktu pengetahuan (knowledge cutoff)](./Knowledge%20cutoff.md) — ia belum pernah melihat versi pustaka (library) baru yang Anda tingkatkan (upgrade) bulan lalu. Selain itu, pelatihan bukanlah hal yang dapat Anda lakukan secara mandiri: ketika model tidak mengetahui basis kode Anda, aturan penulisan Anda, atau API internal Anda, solusinya bukanlah "mengajari model melalui pelatihan" — melainkan memasukkan materi tersebut ke dalam [konteks](./Context.md) obrolan, yaitu satu-satunya input yang dapat Anda kendalikan secara langsung.

_Contoh Penggunaan:_

"Apakah kita bisa melatih model agar ia mengetahui API internal kita?"

"Tidak melalui proses pelatihan (training) — itu adalah proses berbulan-bulan yang dilakukan oleh penyedia model. Muat saja dokumen API tersebut ke dalam konteks obrolan, karena itulah alat kendali yang sebenarnya Anda miliki."
