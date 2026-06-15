---
description: Apa yang diketahui model dari pelatihan, disimpan dalam parameternya yang beku. Kebalikan dari pengetahuan kontekstual.
---

Apa yang "diketahui" oleh [model](./Model.md) dari proses [pelatihan (training)](./Training.md), yang disimpan di dalam kumpulan [parameter](./Parameters.md)-nya. Dibekukan pada saat pelatihan selesai — model tidak dapat melihat isi parameternya secara langsung ataupun memperbaruinya. Ada detail yang terbuang dalam proses perapatan data: miliaran fakta dipadatkan ke dalam jumlah parameter yang terbatas, sehingga fakta-fakta yang jarang muncul akan menjadi kabur. Ini adalah sumber kelancaran model dalam menjelaskan topik umum, sekaligus penyebab terjadinya karangan fakta (fabrikasi) pada topik yang tidak umum. Istilah ini merupakan padanan dari [pengetahuan kontekstual (contextual knowledge)](./Contextual%20knowledge.md).

Pengetahuan parametrik tidak disimpan dalam bentuk tabel fakta kaku. Proses pelatihan tidak pernah membekali model dengan database untuk mencari data; pelatihan hanya menyesuaikan nilai parameter hingga model mampu menebak teks dengan baik, dan model yang dapat memprediksi teks tentang suatu topik dengan baik akan berperilaku seolah-olah ia memahami topik tersebut. Tingkat keandalan pengetahuan ini sangat bergantung pada seberapa sering topik tersebut muncul dalam data pelatihan: topik dengan jutaan contoh akan direproduksi secara akurat, sementara untuk topik yang hanya muncul beberapa kali, model akan menebak berdasarkan bentuk topik serupa yang diketahuinya. Bagi model, proses mereproduksi ingatan dan menebak jawaban adalah mekanisme yang persis sama, sehingga ia tidak bisa membedakan mana yang sedang dilakukannya. Jawaban hasil karangan akan disajikan dengan kelancaran bahasa yang sama meyakinkannya seperti jawaban yang benar. [Halusinasi](./Hallucination.md) adalah kejadian di mana tebakan model tersebut salah.

Pengetahuan parametrik juga bisa usang. Parameter berhenti berubah setelah melewati [batas pengetahuan (knowledge cutoff)](./Knowledge%20cutoff.md), sehingga pustaka kode yang dirilis atau diganti namanya setelah tanggal batas tersebut tidak akan eksis di dalamnya, dan API yang sudah berubah akan tetap diingat dalam wujud lamanya.

Untuk mengatasi kedua celah tersebut — topik yang terlalu langka dan topik yang terlalu baru — solusinya sama: karena pengetahuan tidak dapat ditambahkan ke dalam parameter model yang sudah beku, informasi tersebut harus disediakan sebagai pengetahuan kontekstual.

_Contoh Penggunaan:_

"Dia menulis kode React dengan sangat sempurna tetapi terus mengarang fungsi pada SDK internal kita."

"React tersimpan sangat padat di dalam pengetahuan parametrik model — karena memiliki jutaan contoh data pelatihan. Sedangkan SDK Anda tidak ada di sana, sehingga model mengisi celah tersebut dengan bentuk kode yang sekadar terlihat masuk akal. Coba muat dokumen panduan SDK ke dalam [konteks](./Context.md) obrolan."
