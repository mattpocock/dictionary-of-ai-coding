---
description: Pola kerja di mana manusia mendampingi agen selama sesi berlangsung — meninjau, mengarahkan, atau berkolaborasi secara real-time.
aliases:
  - HITL
  - Human-in-the-loop (HITL)
---

Sebuah pola kerja di mana satu atau beberapa manusia mendampingi [agen](./Agent.md) selama [sesi](./Session.md) obrolan berlangsung — untuk meninjau hasil, mengarahkan tindakan, atau berkolaborasi secara langsung (real-time). Manusia hadir dan terlibat secara aktif, tidak hanya sekadar menyetujui atau menolak tindakan agen secara kaku.

Pola ini bertolak belakang dengan pola kerja otomatis [AFK (away from keyboard)](./AFK.md), di mana agen bekerja sendiri tanpa pengawasan dan Anda baru menilai hasilnya setelah selesai. Konsep keterlibatan manusia (human-in-the-loop) berguna untuk menangkap masalah selagi biayanya masih murah: Anda dapat melihat ketika agen mulai membuka file yang salah, salah memahami kebutuhan tugas, atau mulai terjebak ke jalan buntu, lalu langsung mengarahkannya dengan satu kalimat singkat — daripada Anda baru mengetahui kesalahan tersebut setelah agen melakukan pekerjaan secara percaya diri selama dua puluh menit di atas landasan yang salah. Agen tidak selalu menyadari kapan mereka keluar dari jalur; jika dibiarkan bekerja sendiri, mereka cenderung terus memaksa maju daripada berhenti dan bertanya.

Pola mana yang cocok digunakan sangat bergantung pada jenis pekerjaannya. Tugas yang memiliki spesifikasi jelas, berisiko rendah, dan mudah diverifikasi sangat cocok diselesaikan secara AFK. Sebaliknya, tugas yang memiliki banyak ketidakjelasan (ambigu), tidak dapat dibatalkan (irreversible), atau di mana Anda akan kesulitan meninjau hasil akhirnya — seperti pemindahan database (migrasi schema), keputusan desain yang rumit, atau apa pun yang menyentuh sistem produksi aktif — sangat cocok diselesaikan dengan tetap mendampingi agen (in the loop). Pertimbangan utamanya adalah: seberapa besar kerugian akibat salah melangkah, dan seberapa lambat Anda akan menyadarinya?

Beberapa pekerjaan secara alami memang mengharuskan Anda berada di dalam siklus proses karena tanggapan Anda adalah bahan inputnya. Metode [Grilling (tanya-jawab intensif)](./Grilling.md) hanya bisa berjalan jika Anda ada di sana untuk menjawab pertanyaan-pertanyaan; sementara metode [pembuatan prototipe (prototyping)](./Prototyping.md) hanya bisa berjalan jika Anda ada di sana untuk menanggapi hasil kodenya secara langsung.

Mendampingi agen secara terus-menerus akan menyita perhatian Anda, padahal perhatian manusia adalah sumber daya yang terbatas. Salah satu cara agar dapat bekerja lebih efisien dengan agen adalah dengan memindahkan lebih banyak tugas keluar dari siklus pendampingan secara aman — yaitu dengan dibekali rencana kerja, [pemeriksaan otomatis](./Automated%20check.md), serta [tinjauan manusia](./Human%20review.md) di bagian akhir alih-alih melakukan pengawasan sepanjang proses kerja berjalan.

_Contoh Penggunaan:_

"Apakah tugas ini sebaiknya dijalankan secara AFK saja semalaman?"

"Jangan, ini tugas pemindahan database (migrasi schema) — biarkan tetap berjalan dalam pendampingan manusia (human-in-the-loop). Saya ingin melihat setiap langkahnya dan mengarahkan agen jika dia salah memilih kolom data untuk pengisian."
