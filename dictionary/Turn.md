---
description: Satu pesan pengguna ditambah semua respon agen hingga giliran kembali ke pengguna. Terdiri dari satu atau lebih permintaan penyedia.
---

Satu pesan dari pengguna ditambah semua respon yang dilakukan oleh [agen](./Agent.md) sebagai jawaban, hingga kendali diserahkan kembali kepada pengguna. Giliran pesan (turn) ini berisi satu atau lebih [permintaan penyedia model (model provider requests)](./Model%20provider%20request.md) — dan bisa sangat banyak jika agen memanggil berbagai [alat (tools)](./Tool.md). Pertanyaan klarifikasi dari agen akan menutup giliran tersebut; jawaban Anda akan membuka giliran berikutnya. Hierarki tingkatannya adalah [sesi](./Session.md) **> Giliran Pesan (Turn) > Permintaan Penyedia Model**.

Hal yang membuat giliran pesan ini penting untuk didefinisikan adalah karena panjangnya ditentukan oleh keputusan agen, bukan oleh Anda. Anda mengirimkan satu pesan; lalu agen memutuskan berapa banyak panggilan alat yang akan dirangkai sebelum ia mengembalikan kendali kepada Anda. Satu giliran pesan bisa berupa jawaban satu kalimat saja, atau proses membaca, mengedit, dan menjalankan pengujian selama dua puluh menit. Karakteristik ini memiliki dua sisi: giliran pesan yang panjang adalah hal yang memungkinkan pengerjaan secara [AFK (jauh dari keyboard)](./AFK.md), tetapi giliran pesan yang panjang juga merupakan tempat di mana masalah dapat terjadi tanpa pengawasan — pada saat agen akhirnya mengembalikan kendali, ia mungkin telah melenceng jauh dari apa yang Anda maksudkan.

Giliran pesan juga merupakan unit alami untuk mengarahkan agen. Semua tindakan di dalam suatu giliran terjadi tanpa campur tangan Anda; jeda di antara giliran pesan adalah momen di mana Anda dapat mengarahkan ulang tindakan agen. Sebagian besar [harness (sistem penjalan)](./Harness.md) mempermudah hal ini: Anda dapat menginterupsi di tengah giliran untuk menghentikan agen dan mengarahkannya kembali, atau mengetik pesan saat ia bekerja, yang akan dibaca setelah gilirannya selesai. Jika Anda berulang kali merasa tidak puas dengan hasil akhir giliran pesan, solusinya biasanya adalah meminta langkah-langkah yang lebih kecil — seperti membuat rencana terlebih dahulu, satu langkah demi satu langkah — menukar sebagian otonomi agen dengan jeda yang lebih sering untuk mengarahkannya.

_Contoh Penggunaan:_

"Satu giliran pesan saja memakan waktu sampai dua menit?"

"Agen melakukan empat belas kali [panggilan alat (tool calls)](./Tool%20call.md) di dalam giliran pesan tersebut — masing-masing panggilan adalah permintaan penyedia model yang terpisah. Latensi waktu menumpuk sebelum agen akhirnya mengembalikan kendali kepada Anda."
