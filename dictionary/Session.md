---
description: Satu putaran interaksi terbatas dengan agen. Dimulai dari kosong, menumpuk, dan berakhir ketika dibersihkan/diringkas.
---

Satu rangkaian batasan interaksi percakapan dengan [agen](./Agent.md). Dimulai dari kosong, kemudian menumpuk pesan, [hasil alat (tool result)](./Tool%20result.md), serta file-file yang dibaca, dan berakhir ketika [dibersihkan (clear)](./Clearing.md), ditutup, atau [diringkas (compact)](./Compaction.md) menjadi sesi baru yang bersih. Sesi adalah apa yang _mengisi_ kapasitas [jendela konteks](./Context%20window.md): jika jendela konteks diibaratkan sebagai sebuah kotak kardus, maka sesi adalah barang-barang yang perlahan mengisinya hingga penuh. Pekerjaan yang ukurannya terlalu besar untuk satu jendela konteks harus dibagi ke dalam beberapa sesi terpisah.

Catatan riwayat pesan di dalam sesi adalah memori kerja aktif agen. [Model](./Model.md) bersifat [stateless (tidak menyimpan riwayat)](./Stateless.md), sehingga segala hal yang tampaknya diingat oleh model — seperti apa yang Anda minta, apa hasil laporan tes kodenya, atau apa keputusan yang disepakatinya tiga giliran pesan lalu — semuanya disimpan di dalam riwayat pesan tersebut, yang dikirimkan kembali di setiap [permintaan penyedia model (model provider request)](./Model%20provider%20request.md). Apa pun informasi yang tidak ada di dalam sesi dianggap tidak ada bagi agen.

Memori tersebut akan berakhir bersamaan dengan berakhirnya sesi obrolan. Sesi baru akan dimulai seutuhnya dari nol: agen yang sangat memahami struktur proyek Anda di akhir sesi kemarin sore, tidak akan mengetahui apa pun tentang proyek tersebut di pagi hari ini. Hal yang dapat bertahan permanen hanyalah [sistem file](./Filesystem.md) komputer Anda — file yang ditulis oleh satu sesi obrolan dapat dibaca oleh sesi berikutnya, fitur inilah yang menjadi tumpuan bagi metode [serah terima (handoff)](./Handoff.md), [sistem memori](./Memory%20system.md), dan file [AGENTS.md](./AGENTS.md.md).

Anda sendiri yang menentukan kapan sesi obrolan harus diakhiri. Segala hal yang ada di dalam sesi akan memengaruhi setiap [giliran](./Turn.md) percakapan berikutnya, sehingga melakukan tugas-tugas berbeda yang tidak saling berhubungan di dalam satu sesi yang sama akan meninggalkan residu informasi yang dapat mengaburkan kualitas jawaban berikutnya. Membatasi satu sesi untuk satu tugas saja akan menjaga konteks obrolan tetap relevan; menyelesaikan suatu tugas adalah momen alami yang paling tepat untuk membersihkan sesi obrolan.

_Contoh Penggunaan:_

"Berapa lama satu sesi obrolan dapat berjalan sebelum kinerjanya menurun?"

"Sangat bergantung pada jenis pekerjaannya — tugas perbaikan kode (refactor) yang terfokus dapat menjaga ketajaman model lebih lama daripada riset terbuka. Begitu sesi obrolan mulai menumpuk dan bising, lakukan serah terima (handoff) atau penyusutan (compact), jangan memaksa melanjutkannya."
