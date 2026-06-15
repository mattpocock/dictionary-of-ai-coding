---
description: Semua hal yang dilihat model pada setiap permintaan ke provider. Jumlahnya terbatas dan menjadi satu-satunya cara model memahami.
---

Segala sesuatu yang dapat dibaca dan dianalisis oleh [model](./Model.md) pada setiap [permintaan penyedia model (model provider request)](./Model%20provider%20request.md). Kapasitasnya terbatas, bersifat spesifik untuk setiap model, dan merupakan _satu-satunya_ jalur bagi model untuk mengetahui segala hal.

Jendela konteks berupa satu barisan urutan [token](./Token.md): mulai dari [system prompt (instruksi sistem)](./System%20prompt.md), riwayat percakapan sejauh ini, hingga setiap [hasil alat (tool result)](./Tool%20result.md) yang dikirimkan kembali oleh [harness (sistem penjalan)](./Harness.md). Jika suatu informasi berada di dalam urutan tersebut, model dapat menggunakannya; jika tidak ada, model tidak akan tahu bahwa informasi tersebut eksis — baik itu kode pemrograman Anda, berkas yang Anda edit kemarin, maupun instruksi yang Anda berikan tiga sesi yang lalu. Segala sesuatu yang berada di luar jendela konteks harus dimuat terlebih dahulu, biasanya melalui [panggilan alat (tool call)](./Tool%20call.md), sebelum dapat memengaruhi pekerjaan agen.

Kapasitas terbatas (finite) berarti ruang ini bisa penuh. Setiap giliran percakapan akan menambahkan data baru — pesan Anda, jawaban model, dan hasil kerja alat — dan [sesi](./Session.md) obrolan yang panjang pada akhirnya akan mencapai batas kapasitas maksimal, yang memaksa dilakukannya proses [penyusutan (compaction)](./Compaction.md) atau [pembersihan (clearing)](./Clearing.md). Batas ini juga berarti semua informasi di dalamnya akan saling berebut perhatian: setiap token tidak penting yang Anda muat akan mengurangi ruang bagi informasi penting lainnya, dan konten yang tidak dibutuhkan tersebut akan tetap memakan [anggaran perhatian](./Attention%20budget.md) model. Langkah praktisnya adalah memperlakukan jendela konteks ini sebagai anggaran belanja — muat hanya apa yang dibutuhkan oleh tugas saat itu, dan biarkan sisanya tetap berada di luar.

_Hindari:_ istilah "memori" (memory) — karena jendela konteks adalah memori kerja aktif sementara yang akan hilang setelah sesi berakhir. [Sistem memori](./Memory%20system.md) yang sesungguhnya adalah konsep terpisah yang dibangun di atas jendela konteks untuk menyimpan data antar-sesi.

_Contoh Penggunaan:_

"Bolehkah saya menyalin seluruh isi folder proyek besar ini langsung ke dalam kolom chat?"

"Jendela konteks model ini hanya berkapasitas 200 ribu token — itu mungkin hanya seperlima dari isi proyek Anda. Pilih saja file-file yang berkaitan langsung dengan tugas Anda, dan biarkan file lainnya dimuat otomatis lewat panggilan alat jika dibutuhkan."
