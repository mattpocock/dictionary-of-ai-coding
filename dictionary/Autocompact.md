---
description: Penyusutan (compaction) yang dijalankan otomatis oleh sistem penjalan ketika jendela konteks hampir penuh.
---

[Penyusutan (compaction)](./Compaction.md) yang dipicu secara otomatis oleh [harness (sistem penjalan)](./Harness.md) ketika kapasitas [jendela konteks](./Context%20window.md) hampir penuh.

Sistem penjalan (harness) akan mengamati seberapa penuh kapasitas jendela konteks. Ketika penggunaan kapasitas tersebut melewati ambang batas tertentu — biasanya sekitar 80% — sistem akan berhenti sejenak, meminta [model](./Model.md) membuat ringkasan dari seluruh [sesi](./Session.md) yang berjalan sejauh ini, lalu memulai sesi baru yang bersih dengan dibekali ringkasan tersebut. Setelah itu, pekerjaan dilanjutkan kembali seolah tidak terjadi apa-apa.

Namun, sebenarnya ada hal penting yang terjadi. Proses penyusutan ini bersifat mereduksi informasi (lossy), dan penyusutan otomatis (autocompact) terjadi pada momen yang tidak bisa Anda pilih. Penyusutan manual biasanya dilakukan di akhir fase tugas, di mana Anda bisa menentukan detail apa saja yang harus tetap diingat oleh model. Sebaliknya, penyusutan otomatis dapat terjadi di tengah-tengah pengerjaan tugas kapan saja batas kapasitas tercapai — mungkin saat baru setengah jalan merombak kode (refactoring) — di mana model akan menentukan sendiri keputusan mana saja yang dianggap layak untuk disimpan dalam ringkasan. Gejala khasnya: sang [agen](./Agent.md) tetap bekerja dengan percaya diri tetapi sebenarnya dia telah melupakan aturan penting yang Anda berikan sejam lalu, dan Anda baru menyadarinya ketika hasil kerjanya mulai bertentangan dengan aturan tersebut.

Cara pencegahannya adalah dengan tidak membiarkan fitur otomatis ini berjalan sendiri. Perhatikan indikator kapasitas konteks Anda dan lakukan penyusutan secara manual di akhir fase kerja yang logis, atau tulis keputusan-keputusan penting ke dalam file rencana kerja atau [artefak operan (handoff artifact)](./Handoff%20artifact.md) di komputer Anda, di mana informasi tersebut aman dan tidak akan hilang akibat peringkasan otomatis. Sebagian besar sistem penjalan juga memungkinkan Anda menyesuaikan ambang batas ini — mempercepat atau menundanya, atau mematikan fitur penyusutan otomatis sepenuhnya — sehingga Anda bisa mengatur sisa kapasitas aman sebelum proses dipicu.

_Contoh Penggunaan:_

"Agen ini sepertinya tidak ingat lagi apa yang kita putuskan tentang struktur tabel tadi."

"Fitur penyusutan otomatis (autocompact) berjalan di antara [giliran](./Turn.md) percakapan — keputusan awal kita diringkas oleh model dan kemungkinan ada detail yang terbuang. Muat ulang file rencana, atau lakukan penyusutan manual di lain waktu agar Anda bisa mengontrol detail apa saja yang harus disimpan."
