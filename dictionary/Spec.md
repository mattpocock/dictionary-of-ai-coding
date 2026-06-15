---
description: Artefak operan penjelasan tugas lintas sesi — apa yang dibangun, bukan teknis sesi kerjanya. Terdiri dari kumpulan tiket.
---

Sebuah [artefak operan (handoff artifact)](./Handoff%20artifact.md) yang menjelaskan suatu pekerjaan besar lintas beberapa [sesi](./Session.md) — fokus pada apa yang sedang dibangun, bukan bagaimana teknis setiap sesi menyelesaikan tugasnya. Dokumen ini terus diperbarui seiring berjalannya pekerjaan. Terdiri dari kumpulan [tiket (ticket)](./Ticket.md).

File spesifikasi (spec) ada karena sesi obrolan bersifat sekali pakai sedangkan pekerjaan besar tidak demikian. Apa pun tugas yang membutuhkan upaya lebih dari satu kapasitas [jendela konteks](./Context%20window.md) membutuhkan tempat penyimpanan di luar [konteks](./Context.md) — yaitu di suatu tempat di dalam [lingkungan kerja](./Environment.md) agen yang dapat bertahan dari proses [pembersihan (clearing)](./Clearing.md) obrolan, baik berupa file di dalam repositori proyek, GitHub issue, atau sistem pelacak tiket lainnya yang dapat dijangkau agen. Spesifikasi adalah tempat penyimpanan tersebut: memuat tujuan akhir, batasan aturan, keputusan yang telah diambil sejauh ini, serta daftar tiket beserta statusnya. Setiap sesi obrolan yang baru dapat membacanya untuk mengetahui perkembangan tugas saat itu tanpa mewarisi kebisingan informasi yang menumpuk dari sesi sebelumnya.

Dokumen spesifikasi memiliki gaya penulisan yang familier, sebagian besar diadaptasi dari cara tim pengembang menuliskan catatan kerja mereka. Dokumen persyaratan produk (PRD / Product Requirements Document) cenderung berfokus pada apa dan mengapa dari sisi pengguna — seperti fitur, perilaku sistem, dan kriteria penerimaan. Dokumen desain (Design Doc) atau RFC cenderung lebih teknis — seperti pendekatan solusi yang dipilih, alternatif yang ditolak, serta pertimbangan untung-ruginya. Untuk skala kecil, sebuah file `plan.md` sederhana berisi daftar centang tiket sudah cukup melakukan tugas yang sama untuk pengembangan fitur lintas sesi. Gaya penulisannya tidak terlalu penting dibanding peran fungsinya: bagi [agen](./Agent.md), dokumen-dokumen tersebut adalah hal yang sama — yaitu pernyataan tujuan tetap yang dibacanya di awal setiap sesi.

_Contoh Penggunaan:_

"Apakah sebaiknya pengerjaan seluruh proyek ini dilakukan di dalam satu sesi obrolan saja?"

"Jangan, tuliskan rencana tersebut sebagai file spesifikasi (spec) — bagi menjadi beberapa tiket terpisah, lalu jalankan setiap tiket di sesinya masing-masing. Mencoba mengerjakan seluruh proyek di dalam satu konteks obrolan tunggal akan membuat agen masuk ke [zona bodoh (dumb zone)](./Smart%20zone.md) sebelum tugas Anda selesai setengah jalan."
