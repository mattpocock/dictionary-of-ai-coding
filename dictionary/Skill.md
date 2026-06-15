---
description: Kemampuan yang dikemas jadi satu modul — disimpan di luar jendela konteks sampai penunjuk memuatnya saat dibutuhkan.
---

Sebuah modul kemampuan terkemas yang diajarkan kepada agen — berisi kumpulan instruksi dan sumber daya untuk menyelesaikan suatu tugas spesifik dengan baik, disimpan di dalam [lingkungan kerja](./Environment.md) sampai [penunjuk konteks (context pointer)](./Context%20pointer.md) memuatnya ke dalam [jendela konteks](./Context%20window.md) ketika tugas tersebut dikerjakan. Ini adalah modul unit dari metode [pengungkapan bertahap (progressive disclosure)](./Progressive%20disclosure.md) di dalam [harness (sistem penjalan)](./Harness.md).

Fitur keahlian (skills) adalah standar terbuka yang didefinisikan di situs [agentskills.io](https://agentskills.io) — awalnya dikembangkan oleh Anthropic dan kini telah diadopsi oleh sebagian besar sistem penjalan terkemuka, sehingga modul keahlian yang ditulis sekali dapat bekerja di berbagai sistem. Format modul keahlian berupa sebuah folder yang berisi:

- File `SKILL.md` — berisi metadata (minimal nama dan deskripsi keahlian) serta instruksi langkah kerja itu sendiri
- Pilihan lainnya: skrip program yang dapat dijalankan oleh [agen](./Agent.md)
- Pilihan lainnya: templat berkas dan materi rujukan yang ditunjuk oleh instruksi kerja

Secara bawaan, hanya nama dan deskripsi keahlian saja yang masuk ke dalam [konteks](./Context.md) obrolan. Ketika tugas yang diberikan cocok, agen baru memuat isi lengkap dokumen instruksinya. Sebelum hal itu terjadi, modul keahlian ini hampir tidak memakan ruang memori sama sekali — hanya memakan satu atau dua kalimat [token](./Token.md), peduli seberapa panjang dan tebal dokumen instruksi lengkapnya di dalam komputer.

Hal inilah yang membedakan modul keahlian dengan file [AGENTS.md](./AGENTS.md.md), yang selalu dimuat di setiap [sesi](./Session.md) percakapan apa pun jenis tugasnya. Modul keahlian hanya dibaca ketika jenis pekerjaan spesifik yang relevan muncul — seperti merilis aplikasi, merancang struktur layanan baru, atau menulis migrasi database — dan diabaikan pada sisa waktu pengerjaan lainnya.

_Hindari:_ istilah "[alat (tool)](./Tool.md)" — karena alat adalah apa yang _dijalankan_ oleh agen; sedangkan keahlian (skill) adalah dokumen instruksi yang _dibaca_ oleh agen.

_Contoh Penggunaan:_

"Di mana sebaiknya saya meletakkan file panduan deploy aplikasi?"

"Sebagai sebuah modul keahlian (skill) — agen akan memuatnya hanya ketika tugasnya berkaitan dengan deploy. Jika diletakkan di file `AGENTS.md`, itu akan menghabiskan kuota token di setiap [giliran](./Turn.md) obrolan untuk sesuatu yang hanya kita pakai seminggu sekali."
