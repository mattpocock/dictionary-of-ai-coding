---
description: Dokumen yang digunakan sebagai wadah serah terima (handoff) — ditulis oleh satu sesi untuk dibaca oleh sesi berikutnya.
---

Sebuah dokumen yang digunakan sebagai wadah pembawa informasi dalam proses [serah terima (handoff)](./Handoff.md) — ditulis ke dalam [lingkungan kerja](./Environment.md) oleh satu [sesi](./Session.md) obrolan untuk dibaca oleh sesi berikutnya. Dokumen [spesifikasi (spec)](./Spec.md), [tiket (ticket)](./Ticket.md), dan dokumen rencana kerja semuanya adalah bentuk dari artefak operan.

Alasan penting untuk menulis dokumen ini: [model](./Model.md) bersifat [stateless (tidak menyimpan riwayat)](./Stateless.md), sehingga tidak ada informasi di dalam suatu sesi yang dapat bertahan setelah Anda melakukan [pembersihan (clearing)](./Clearing.md) sesi. Keputusan rapat, batasan aturan, dan rencana kerja setengah jadi — semuanya akan lenyap bersama [konteks](./Context.md) obrolan yang menampungnya. Namun, lingkungan kerja (filesystem komputer) tetap bertahan permanen. Menuliskan status-status penting ke dalam sebuah file akan menyimpannya di tempat yang aman agar dapat dibaca kembali oleh sesi obrolan berikutnya.

Artefak ini merupakan [sumber sekunder (secondary source)](./Secondary%20source.md) — yaitu sebuah laporan tentang hasil kerja suatu sesi, bukan pekerjaan aslinya itu sendiri. Hal inilah yang membuatnya cukup ringkas untuk membekali sesi baru yang segar, tetapi juga bisa berisiko menyesatkan sesi tersebut: artefak hanya mencatat apa yang diyakini oleh sesi penulisnya, sehingga apa pun detail yang terlewat atau salah tulis tidak akan terlihat oleh sesi pembacanya. Ketika ada klaim atau asumsi yang krusial, sesi berikutnya harus memverifikasinya kembali secara langsung ke [sumber primer (primary source)](./Primary%20source.md) — seperti berkas kode pemrograman atau hasil pengujian — alih-alih langsung mempercayainya begitu saja.

Artefak operan yang baik ditulis agar mudah dipahami oleh sesi baru yang sama sekali tidak memiliki konteks sebelumnya. Tuliskan lokasi jalur file secara konkret daripada sekadar menulis "file yang kita diskusikan tadi". Tuliskan apa saja keputusan yang telah diambil beserta alasannya, agar sesi berikutnya tidak perlu merundingkannya kembali dari awal. Tuliskan apa saja yang sudah selesai dikerjakan dan apa saja sisa tugasnya. Mengarahkan sesi saat menulis dokumen ini akan sangat membantu: "tulis dokumen serah terima untuk sesi baru yang sama sekali belum tahu apa-apa tentang pekerjaan ini".

Alternatif wadah pembawa informasi lainnya adalah proses [penyusutan (compaction)](./Compaction.md) yang merangkum data langsung di dalam memori obrolan. Namun, penggunaan berkas artefak fisik memiliki dua keuntungan utama: ia tersimpan di dalam penyimpanan komputer Anda sehingga Anda dapat membaca dan memperbaikinya terlebih dahulu sebelum dijalankan, serta dapat digunakan kembali — satu dokumen spesifikasi yang sama dapat digunakan untuk membekali lima sesi kerja paralel sekaligus.

_Contoh Penggunaan:_

"Bagaimana cara membagi tugas ini di antara [agen](./Agent.md) perencana dan agen pelaksana?"

"Mintalah agen perencana menulis sebuah artefak operan (handoff artifact) — yang berisi jalur file, keputusan, dan batasan aturan. Sesi agen pelaksana kemudian dibuka dengan diarahkan ke berkas tersebut dan bekerja menggunakan petunjuk di dalamnya."
