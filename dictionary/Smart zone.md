---
description: Fase awal sesi saat agen fokus dan tajam. Seiring memanjangnya sesi, agen meluncur ke zona bodoh: pelupa dan banyak eror.
aliases:
  - Dumb zone
  - Smart zone / Dumb zone
---

Fase awal di dalam suatu [sesi](./Session.md) obrolan di mana sang [agen](./Agent.md) berada di dalam "zona pintar" (smart zone) — ia bekerja secara tajam, fokus, dan ingatan memorinya sangat baik. Seiring bertambah panjangnya sesi obrolan, agen perlahan meluncur ke "zona bodoh" (dumb zone): hasil kerjanya menjadi ceroboh, pelupa, membuat lebih banyak kesalahan, serta memicu lebih banyak [halusinasi](./Hallucination.md) kesetiaan (faithfulness). Padahal [model](./Model.md) dan [harness (sistem penjalan)](./Harness.md)-nya sama — hanya saja kapasitas [konteks](./Context.md) obrolannya bertambah panjang. Ini adalah efek nyata dari terjadinya [penurunan perhatian (attention degradation)](./Attention%20degradation.md). Pada model-model tercanggih saat ini, zona bodoh biasanya dimulai saat isi percakapan mencapai sekitar 125 ribu hingga 150 ribu [token](./Token.md) — meskipun batasan ini masih diperdebatkan. Segera lakukan tindakan [bersihkan (clear)](./Clearing.md) sesi atau [ringkas (compact)](./Compaction.md) informasi ketika sesi obrolan mulai menumpuk; jangan memaksakan pengerjaan terus berjalan.

Penurunan kualitas ini berjalan secara bertahap, sehingga mudah terlewat dari pengawasan. Tidak ada pesan error dan tidak ada batas wilayah yang terlihat jelas; agen hanya mulai bekerja sedikit lebih buruk, lalu perlahan menjadi jauh lebih buruk. Ciri-ciri umumnya: agen melupakan instruksi yang Anda berikan dua puluh giliran pesan yang lalu, mengulangi kesalahan yang sebenarnya sudah diperbaikinya tadi, atau menyatakan sesuatu dengan sangat yakin padahal bertentangan dengan konteks obrolan aktif. Karena penurunannya berjalan halus, respon umum kita biasanya adalah terus melanjutkan obrolan dan menjelaskan ulang — tindakan yang justru menambah isi konteks obrolan dan memperparah masalah.

Pembagian zona pintar/bodoh ini tidak mengikuti batas maksimal dari [jendela konteks](./Context%20window.md). Sesi percakapan bisa saja sudah berada jauh di dalam zona bodoh meskipun sebagian besar kapasitas jendela konteksnya masih kosong: kapasitas maksimal adalah batas di mana sistem penjalan menolak melanjutkan pengerjaan, namun kualitas kerja model sudah menurun jauh sebelum batas tersebut tercapai. Buatlah rencana kerja berdasarkan batas zona pintar, bukan batas maksimal jendela konteks — anggaran kapasitas praktis untuk menyelesaikan suatu tugas adalah jumlah token yang bisa dijalankan agen dengan kualitas baik, bukan jumlah token maksimal yang secara teknis bisa ditampung oleh memori model.

Zona pintar adalah anggaran memori, dan tugas-tugas yang tidak berhubungan akan menghabiskannya. Setiap tugas yang diselesaikan di dalam satu sesi obrolan akan memakan kuota token, sehingga memulai tugas kedua di dalam sesi yang sama berarti Anda memulainya di posisi yang lebih dekat dengan zona bodoh. Membatasi satu tugas untuk satu sesi obrolan akan memberikan porsi zona pintar paling tajam untuk setiap tugas tersebut. Ketika satu tugas berukuran terlalu besar untuk satu zona pintar, bagilah tugas tersebut: lakukan [serah terima (handoff)](./Handoff.md) atau penyusutan informasi di sela-sela fase tugas yang logis, lalu biarkan sesi baru menyelesaikan bagian berikutnya.

_Contoh Penggunaan:_

"Dia menyelesaikan tiga komponen pertama dengan sangat sempurna, tapi merusak komponen yang keempat."

"Kalian sudah keluar dari zona pintar — modelnya masih sama, hanya saja sekarang sudah masuk jauh ke dalam zona bodoh. Lakukan penyusutan (compact) dan muat ulang rencana kerjanya, komponen berikutnya pasti akan selesai dengan baik."
