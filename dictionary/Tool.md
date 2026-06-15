---
description: Fungsi yang disediakan penjalan untuk dipanggil oleh agen — Baca, Tulis, Bash, Cari. Cara agen berinteraksi dengan lingkungan kerja.
---

Sebuah fungsi yang disediakan oleh [harness (sistem penjalan)](./Harness.md) untuk dipanggil oleh [agen](./Agent.md) — seperti Baca (Read), Tulis (Write), Bash, atau Cari (Search). Alat (tool) adalah cara agen merasakan dan bertindak pada [lingkungan kerja (environment)](./Environment.md): agen tidak dapat melihat lingkungan kerja kecuali melalui [hasil alat (tool result)](./Tool%20result.md), dan tidak dapat mengubahnya kecuali melalui [panggilan alat (tool call)](./Tool%20call.md). Setiap panggilan alat membutuhkan biaya tambahan berupa satu [permintaan penyedia model (model provider request)](./Model%20provider%20request.md), karena hasilnya harus dikirim kembali ke model sebelum model dapat memutuskan langkah berikutnya.

Alat-alat yang biasanya disediakan pada sebagian besar agen pemrograman:

| Alat          | Kegunaan                                                                        |
| ------------- | ------------------------------------------------------------------------------- |
| Baca (Read)   | Mengembalikan isi file sebagai hasil alat                                       |
| Tulis (Write) | Membuat atau mengedit file di dalam [sistem file (filesystem)](./Filesystem.md) |
| Bash          | Menjalankan perintah shell dan mengembalikan keluarannya                        |
| Cari (Search) | Menemukan file atau teks yang cocok dengan pola tertentu di seluruh basis kode  |

Sebuah alat ditentukan oleh tiga hal: nama alat, penjelasan tentang apa yang dilakukannya, dan skema untuk parameternya. Sistem penjalan mengirimkan definisi alat ini ke [model](./Model.md) bersama setiap permintaan, dan model memilih alat tersebut dengan cara yang sama seperti ia menghasilkan hal lainnya — yaitu dengan menulis [token](./Token.md), dalam hal ini panggilan terstruktur beserta argumennya. Model sendiri tidak pernah mengeksekusi tindakan apa pun; sistem penjalan yang membaca panggilan tersebut, menjalankan fungsinya, dan mengirimkan kembali hasilnya.

Daftar alat menentukan batas kemampuan yang dapat dilakukan oleh agen. Model yang andal sekalipun jika hanya dibekali dengan set alat yang terbatas akan menjadi agen yang terbatas pula: ia akan mencoba menyelesaikan segala hal menggunakan alat yang dimilikinya saja, itulah alasan mengapa agen sangat bergantung pada Bash — shell adalah satu alat serbaguna yang dapat menjangkau sebagian besar sistem. Untuk memberikan kemampuan baru kepada agen secara bersih, Anda dapat menambahkan alat baru; protokol [MCP](./MCP.md) adalah standar untuk menghubungkan alat-alat baru dari luar sistem penjalan.

Definisi alat memakan kapasitas [konteks](./Context.md) pada setiap permintaan, sehingga kumpulan alat yang besar memiliki biaya token tetap sebelum alat apa pun sempat dipanggil — selain itu, terlalu banyak alat dengan penjelasan yang mirip akan membuat model kesulitan memilih alat yang tepat.

_Contoh Penggunaan:_

"Apakah agen dapat menanyakan data ke peladen uji coba (staging) secara langsung?"

"Tambahkan alat `psql` ke sistem penjalan, dengan batasan akses hanya-baca pada peladen staging. Tanpa adanya alat khusus untuk itu, agen tidak akan bisa melihat apa pun di luar sistem file."
