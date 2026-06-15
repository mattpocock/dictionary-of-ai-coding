---
description: Memuat konteks yang dibutuhkan agen saat ini, dengan penunjuk ke sisa data lainnya. Diadopsi dari desain antarmuka (UI).
---

Metode memuat hanya [konteks](./Context.md) yang benar-benar dibutuhkan oleh [agen](./Agent.md) saat ini, dan mengganti sisa informasi lainnya menggunakan [penunjuk konteks (context pointer)](./Context%20pointer.md). Metode ini diadopsi dari dunia desain antarmuka (UI design), yang berarti hanya menampilkan tombol kendali yang relevan dengan tugas pengguna saat itu dan menyembunyikan sisanya di balik tombol klik.

Teknik ini digunakan karena pemuatan konteks menimbulkan dua jenis kerugian sekaligus. Setiap [token](./Token.md) yang dimuat di awal akan ditagih sebagai [token input](./Input%20tokens.md) pada setiap [giliran](./Turn.md) pesan baru, dan setiap token tersebut akan memakan [anggaran perhatian](./Attention%20budget.md) model peduli apakah agen membutuhkannya atau tidak. File [AGENTS.md](./AGENTS.md.md) yang dipenuhi dengan seluruh isi panduan penulisan kode, alur kerja rilis aplikasi, dan aturan database justru akan membuat kemampuan agen menurun untuk semua tugas tersebut — karena instruksi penting untuk tugas aktif terdistorsi oleh instruksi lain yang tidak relevan. Ciri khasnya adalah ketika agen mulai mengabaikan aturan yang sebenarnya ada di dalam konteks obrolan: aturan tersebut ada di sana, tetapi terkubur di bawah informasi lainnya.

Pengungkapan bertahap membalikkan kondisi ini. Jaga agar lapisan informasi yang selalu dimuat di awal tetap berukuran kecil — misalnya cukup satu baris kalimat penjelasan per topik diikuti dengan penunjuk ke lokasi detailnya berada. Agen akan membaca panduan penulisan kode hanya saat ia menulis komponen tampilan, membaca panduan rilis hanya saat melakukan deployment, dan tidak membaca keduanya saat ia sedang memperbaiki tes kode pemrograman yang gagal. Modul [keahlian (skills)](./Skill.md) adalah wujud penerapan pola ini di dalam [harness (sistem penjalan)](./Harness.md): deskripsi singkatnya akan dimuat di awal setiap [sesi](./Session.md), sementara instruksi lengkapnya baru dibaca ketika fitur tersebut dipicu.

_Contoh Penggunaan:_

"Apakah sebaiknya saya memasukkan seluruh isi panduan gaya penulisan kode ke dalam file `AGENTS.md`?"

"Jangan — gunakan metode pengungkapan bertahap. Rujuk panduan gaya tersebut sebagai modul keahlian (skill) yang baru dimuat oleh agen saat ia benar-benar perlu menulis komponen kode. Informasi di dalam `AGENTS.md` akan memakan biaya token di setiap giliran percakapan."
