---
description: Saat sesi memanjang, anggaran perhatian terbagi ke lebih banyak token; fokus pada hubungan yang penting pun berkurang.
---

Seiring bertambah panjangnya suatu [sesi](./Session.md), [anggaran perhatian](./Attention%20budget.md) dari setiap [token](./Token.md) akan terbagi ke lebih banyak pesaing baru. Sinyal fokus pada [hubungan yang penting](./Attention%20relationship.md) akan melemah, sementara kebisingan dari [konteks](./Context.md) yang tidak relevan akan berkerumun masuk. Padahal [model](./Model.md)-nya sama, [parameter](./Parameters.md)-nya juga sama — hanya saja ada lebih banyak mulut yang harus diberi makan dari piring yang sama. Fenomena ini adalah penyebab efek [zona pintar/bodoh](./Smart%20zone.md).

Gejalanya terlihat seperti penurunan kualitas model di tengah sesi: aturan yang dipatuhinya selama satu jam pertama mulai terabaikan, agen kembali menanyakan hal-hal yang sudah diberi tahu, atau menulis kode yang mengabaikan file yang dibacanya tadi. Tidak ada yang berubah pada model itu sendiri — satu-satunya variabel yang berubah adalah seberapa banyak konteks obrolan yang sedang dibacanya saat ini.

Penurunan ini terjadi secara bertahap, sehingga sulit disadari jika Anda hanya melihat dari dalam sesi yang sedang berlangsung. Tidak ada pesan error dan tidak ada batas yang jelas; setiap [giliran](./Turn.md) obrolan hanya terasa sedikit lebih buruk daripada sebelumnya. Saat kesalahan mulai terlihat jelas, sebenarnya Anda sudah berada di dalam zona bodoh (dumb zone) selama beberapa waktu.

Cara memulihkannya adalah dengan membuang konteks obrolan lama, bukan menambahkannya. Menempelkan ulang instruksi yang diabaikan hanya akan menambah pesaing baru di dalam jendela percakapan yang sudah penuh, dan hal itu hanya membantu sebentar saja. Langkah yang berhasil: [bersihkan (clear)](./Clearing.md) percakapan dan muat ulang hanya file yang dibutuhkan oleh tugas tersebut, atau lakukan proses [ringkas (compact)](./Compaction.md), atau [oper (hand off)](./Handoff.md) pekerjaan ke sesi yang baru. Anggaplah penurunan kepatuhan agen terhadap instruksi Anda sebagai sinyal bahwa obrolan sudah terlalu panjang, bukan karena modelnya yang bermasalah.

_Contoh Penggunaan:_

"Agen ini sudah masuk jauh ke zona bodoh — dia mulai mengarang fungsi-fungsi umum yang tidak ada di dalam file tipe data."

"Ini adalah penurunan perhatian (attention degradation). Definisi tipe datanya masih ada di dalam konteks, tetapi sinyal pemahamannya terkubur di bawah semua percakapan yang kita tambahkan sejak tadi. Bersihkan sesi dan muat ulang."
