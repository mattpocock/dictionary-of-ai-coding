---
description: Penyebutan dalam suatu dokumen yang mengarah ke dokumen lain, agar agen bisa memuatnya ke jendela konteks hanya saat dibutuhkan.
---

Sebuah rujukan atau penyebutan di dalam suatu dokumen yang mengarah ke dokumen lainnya, sehingga [agen](./Agent.md) dapat memuat dokumen tersebut ke dalam [jendela konteks](./Context%20window.md) hanya ketika tugas yang dikerjakannya membutuhkan informasi tersebut. Ini adalah fondasi utama dari metode [pengungkapan bertahap (progressive disclosure)](./Progressive%20disclosure.md).

Alasan utama menggunakan penunjuk (pointer) — daripada menuliskan langsung seluruh isinya di tempat — adalah masalah efisiensi biaya. Sebuah penunjuk hanya memakan ruang satu baris kalimat saja di dalam jendela konteks. Dokumen yang dirujuk mungkin berisi ribuan [token](./Token.md), namun token tersebut tidak akan memakan biaya apa pun sebelum agen benar-benar mengikuti penunjuk tersebut. Menuliskan langsung 2.000 token panduan rilis di dalam [AGENTS.md](./AGENTS.md.md) akan membuat Anda membayar biaya token tersebut di setiap awal [sesi](./Session.md) baru; tetapi jika Anda menggantinya dengan kalimat "proses deploy: silakan baca `internal/deploy.md`", maka hanya sesi yang benar-benar melakukan deployment saja yang akan memuat dokumen tersebut. Agen akan mengikuti penunjuk ini melalui [panggilan alat (tool call)](./Tool%20call.md) ketika tugas yang diberikan sesuai.

Agar penunjuk dapat bekerja dengan baik, dibutuhkan dua hal: jalur lokasi file yang tetap (stable path) dan deskripsi yang cukup agar agen tahu kapan rujukan tersebut perlu dibaca. Jalur file saja tanpa keterangan tidak akan menarik perhatian agen; kalimat "baca `internal/deploy.md`" tanpa penjelasan isi akan diabaikan oleh sesi yang sebenarnya membutuhkannya. Tuliskan rujukan tersebut sesuai dengan kategori tugasnya: "untuk rilis aplikasi, deploy, atau pembatalan rilis (rollback) — baca `internal/deploy.md` terlebih dahulu".

Penunjuk konteks dapat ditemukan di mana saja: baris instruksi di file AGENTS.md, deskripsi [keahlian (skill)](./Skill.md) (sistem penjalan memuat deskripsinya, sementara isi keahliannya menunggu di balik deskripsi tersebut), nama-nama file di dalam daftar folder, serta tautan antar-dokumen.

Penunjuk juga dapat menghubungkan [sumber sekunder (secondary source)](./Secondary%20source.md) kembali ke [sumber primer (primary source)](./Primary%20source.md) asalnya — seperti ringkasan penyusutan yang menyebutkan nama berkas transkrip asli, atau dokumen panduan yang mencantumkan nama berkas kode pemrograman yang dijelaskannya. Hal ini membuat hilangnya informasi dari ringkasan dapat dipulihkan: ketika ringkasan dirasa tidak cukup lengkap, agen dapat mengikuti penunjuk tersebut untuk membaca dokumen aslinya, alih-alih menebak-nebak dari ringkasan yang ada.

_Hindari:_ istilah "referensi" (reference) — karena terlalu formal dan kurang menggambarkan bahwa proses mengikuti tautan tersebut akan memuat konteks baru. _Hindari:_ istilah "portal" — karena terlalu berlebihan.

_Contoh Penggunaan:_

"File `AGENTS.md` kita ukurannya sudah sangat besar."

"Sebagian besar isinya harus diubah menjadi penunjuk konteks (context pointer), bukan ditulis langsung semua isinya di sana. Biarkan aturan wajib tetap tertulis langsung; ubah panduan deploy dan panduan gaya kode menjadi modul keahlian (skill) dan sisakan penunjuk konteksnya saja di file tersebut."
