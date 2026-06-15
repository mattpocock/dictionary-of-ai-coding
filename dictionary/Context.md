---
description: Informasi relevan yang bisa diakses agen saat ini — apa yang diketahui agen yang berkaitan dengan tugasnya.
---

Informasi relevan yang dapat diakses oleh [agen](./Agent.md) saat ini. Ini adalah kata benda abstrak — bukan input mentah yang dibaca oleh model (itu disebut [jendela konteks](./Context%20window.md)), bukan pula catatan riwayat obrolan yang sedang berjalan (itu disebut [sesi](./Session.md)), melainkan _apa saja yang diketahui agen yang berkaitan dengan tugasnya_. Istilah "memasukkan sesuatu ke dalam konteks" berarti menambahkan informasi tersebut ke dalam kumpulan pengetahuan aktif agen; sementara "rekayasa konteks" (context engineering) adalah keahlian mengelola dan menyaring informasi tersebut.

Ketiga istilah ini memiliki batasan yang jelas:

| Istilah         | Penjelasan                                                                              |
| --------------- | --------------------------------------------------------------------------------------- |
| Konteks         | Informasi relevan dengan tugas yang saat ini dimiliki oleh agen                         |
| Jendela konteks | Urutan [token](./Token.md) fisik yang dibaca oleh model di setiap permintaan            |
| Sesi            | Catatan riwayat percakapan yang disimpan oleh [harness (sistem penjalan)](./Harness.md) |

Pembedaan ini sangat penting karena kualitas konteks diukur dari mutunya, bukan dari jumlah katanya. Kapasitas jendela konteks bisa saja hampir penuh tetapi kualitas konteksnya sangat buruk — misalnya berisi ribuan token dari hasil keluaran alat pemrograman yang sudah lama dan sama sekali tidak berhubungan dengan tugas saat ini. Sebaliknya, jendela konteks bisa saja hampir kosong tetapi kualitas konteksnya sangat luar biasa: misalnya hanya berisi satu file definisi tipe data penting yang menentukan keberhasilan tugas tersebut.

Sebagian besar kegagalan kerja harian agen disebabkan oleh masalah konteks. Ketika agen mengarang kode API baru, bertentangan dengan keputusan sebelumnya, atau menebak-nebak struktur data, pertanyaan pertama yang harus diajukan adalah apa saja informasi yang ada di dalam konteks saat itu — biasanya fakta penting yang relevan memang belum pernah dimuat, atau terpendam akibat [penurunan perhatian (attention degradation)](./Attention%20degradation.md). Solusinya adalah kurasi: muat informasi yang dibutuhkan oleh tugas, dan singkirkan informasi yang tidak diperlukan.

_Contoh Penggunaan:_

"Agen ini terus mengarang kolom data (field) baru yang tidak ada di dalam file definisi tipe datanya."

"File definisi tipe data tersebut belum masuk ke dalam konteks — agen hanya membaca lokasi pemanggilan kodenya lalu menebak-nebak. Coba minta dia membaca definisinya terlebih dahulu."
