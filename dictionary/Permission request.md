---
description: Apa yang ditampilkan harness ke pengguna sebelum menjalankan alat yang belum disetujui. Cara melibatkan manusia dalam proses kerja.
---

Informasi yang ditampilkan oleh [harness (sistem penjalan)](./Harness.md) kepada pengguna sebelum mengeksekusi perintah [panggilan alat (tool call)](./Tool%20call.md) yang belum disetujui sebelumnya. [Model](./Model.md) menghasilkan perintah panggilan alat; alih-alih langsung menjalankannya, sistem penjalan akan berhenti sejenak dan meminta konfirmasi Anda. Jika Anda menyetujuinya (approve), perintah akan dijalankan; jika Anda menolaknya (deny), sistem penjalan akan melaporkan penolakan tersebut kembali ke model sebagai [hasil alat (tool result)](./Tool%20result.md). Ini adalah mekanisme utama yang digunakan sistem penjalan untuk menyertakan manusia dalam [lingkaran pendampingan (human-in-the-loop)](./Human-in-the-loop.md) untuk tindakan yang sensitif atau berisiko.

Siklus hidup dari suatu permintaan izin:

| Langkah | Aktor           | Proses yang Terjadi                                                                                                                 |
| ------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 1       | Model           | Menghasilkan panggilan alat (tool call)                                                                                             |
| 2       | Sistem Penjalan | Memeriksa panggilan alat terhadap [mode izin (permission mode)](./Permission%20mode.md) aktif dan daftar persetujuan yang tersimpan |
| 3       | Sistem Penjalan | Disetujui sebelumnya: langsung dijalankan. Jika tidak: berhenti sejenak dan menampilkan permintaan izin di layar                    |
| 4       | Pengguna        | Menyetujui sekali, menyetujui untuk sisa [sesi](./Session.md) obrolan, atau menolak tindakan                                        |
| 5       | Sistem Penjalan | Mengeksekusi panggilan alat tersebut, atau mengirimkan status penolakan kembali sebagai hasil alat                                  |

Tindakan menolak permintaan izin dapat mengarahkan tindakan agen. Model membaca status penolakan tersebut seperti hasil kerja alat lainnya dan bereaksi terhadapnya — ia akan mencoba pendekatan lain atau bertanya apa yang lebih Anda sukai. Sebagian besar sistem penjalan memungkinkan Anda melampirkan pesan catatan saat melakukan penolakan, yang mengubah momen penolakan tersebut menjadi poin pengarahan: pesan seperti "jangan gunakan perintah itu, gunakan skrip migrasi database saja" akan tiba tepat saat model sedang menentukan langkah apa yang harus diambil selanjutnya.

Konsekuensinya adalah setiap permintaan izin akan membuat proses kerja terhenti untuk menunggu respon sinkron dari Anda. Sang [agen](./Agent.md) akan berada dalam kondisi terblokir (blocked) sampai Anda memberikan jawaban, hal ini tidak masalah jika Anda sedang berada di depan layar, namun menjadi masalah jika Anda sedang pergi — agen yang terus-menerus memicu permintaan izin tidak akan bisa ditinggal bekerja secara mandiri ([AFK](./AFK.md)). Mode perizinan adalah tombol pengaturnya: menentukan perintah mana yang boleh berjalan bebas dan mana yang harus bertanya terlebih dahulu, idealnya dengan dibantu sistem [sandbox (lingkungan terisolasi)](./Sandbox.md) agar aman memperluas daftar alat yang berjalan bebas.

_Contoh Penggunaan:_

"Agen ini terhenti menunggu permintaan izin selama sepuluh menit — tadi saya sedang rapat."

"Itulah konsekuensi dari metode keterlibatan manusia (human-in-the-loop). Berikan persetujuan di awal untuk [alat (tools)](./Tool.md) yang aman, sehingga permintaan izin di layar hanya muncul untuk tindakan yang benar-benar berisiko."
