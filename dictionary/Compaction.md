---
description: Serah terima memori: riwayat sesi sebelumnya diringkas untuk sesi baru. Informasi berkurang demi sisa kapasitas jendela konteks.
---

Sebuah proses [serah terima (handoff)](./Handoff.md) yang dilakukan langsung di dalam memori: riwayat dari [sesi](./Session.md) sebelumnya akan diringkas, dan ringkasan tersebut akan menjadi modal awal untuk memulai sesi baru yang segar. Proses ini sengaja dirancang untuk mereduksi informasi (lossy): transkrip obrolan asli adalah [sumber primer (primary source)](./Primary%20source.md), sedangkan ringkasannya adalah [sumber sekunder (secondary source)](./Secondary%20source.md) — di mana kejelasan detail dikorbankan demi mendapatkan sisa kapasitas memori. Proses ini dapat dipicu secara manual oleh pengguna, atau berjalan otomatis melalui fitur [penyusutan otomatis (autocompact)](./Autocompact.md).

Mekanismenya: kapasitas [jendela konteks](./Context%20window.md) terbatas, dan sesi obrolan yang panjang lambat laun akan memenuhinya — setiap [hasil alat (tool result)](./Tool%20result.md), pembacaan berkas, atau keputusan salah yang pernah dibuat akan tetap tersimpan di riwayat obrolan. Ketika kapasitas mulai penuh, [harness (sistem penjalan)](./Harness.md) akan meminta [model](./Model.md) untuk merangkum sesi obrolan, lalu membuang riwayat percakapan yang lama, dan memulai sesi baru dengan bekal ringkasan tersebut. Apa pun detail yang tidak masuk ke dalam ringkasan tersebut akan hilang dari memori aktif agen. Beberapa sistem penjalan meringankan risiko ini dengan menyimpan transkrip obrolan lama di komputer Anda dan memberikan [penunjuk konteks (context pointer)](./Context%20pointer.md) ke berkas tersebut di dalam ringkasan — sumber sekunder menautkan kembali ke sumber primernya, sehingga detail yang terbuang dari ringkasan dapat dipulihkan dengan membaca kembali transkrip aslinya.

Ringkasan ini ditulis oleh model, sehingga instruksi pembuatannya bisa diarahkan oleh Anda. Kalimat seperti "Pertahankan keputusan tentang struktur tabel" membuat ringkasan yang dihasilkan menjadi lebih terarah. Pemilihan waktu juga penting — lakukan penyusutan di sela-sela fase tugas (setelah rencana kerja selesai disepakati), bukan di tengah-tengah pengerjaan tugas.

Bandingkan dengan [pembersihan (clearing)](./Clearing.md), yang membuang semua riwayat dan memulai sesi dari nol: penyusutan (compaction) berusaha membawa poin-poin penting ke sesi baru; sedangkan pembersihan berasumsi poin-poin penting tersebut sudah Anda catat di tempat lain yang lebih aman.

_Contoh Penggunaan:_

"[Konteks](./Context.md) obrolan kita sudah mulai penuh, padahal saya masih harus menjalankan pengujian kode."

"Lakukan penyusutan sebelum memulai — tulis hal-hal penting yang harus dipertahankan ke dalam instruksi peringkasan, agar sesi baru tetap mengingat keputusan struktur tabel dan membuang eksplorasi yang tidak perlu."
