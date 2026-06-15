---
description: Instruksi dasar yang disematkan oleh penjalan di awal setiap permintaan penyedia model — panduan perilaku tetap bagi agen.
---

Instruksi dasar yang disematkan oleh [harness (sistem penjalan)](./Harness.md) di awal setiap [permintaan penyedia model (model provider request)](./Model%20provider%20request.md) — merupakan panduan kerja tetap bagi [agen](./Agent.md): siapa dirinya, bagaimana harus berperilaku, [alat (tool)](./Tool.md) apa saja yang bisa dipanggil, serta aturan apa yang harus diikuti. Biasanya instruksi ini tetap sama sepanjang [sesi](./Session.md) berjalan.

Perintah sistem (system prompt) ditulis oleh pembuat sistem penjalan, bukan oleh Anda. Pada sistem penjalan pemrograman, ukurannya sangat besar — sering kali mencapai puluhan ribu [token](./Token.md) aturan perilaku, penjelasan alat, dan penanganan kasus khusus, yang semuanya harus dibayar sebagai [token masukan (input tokens)](./Input%20tokens.md) pada setiap [giliran (turn)](./Turn.md) pesan. Instruksi kerja Anda sendiri juga ikut disertakan bersamanya: berkas-berkas seperti [AGENTS.md](./AGENTS.md.md) dimuat di samping perintah sistem pada awal sesi obrolan, sehingga [model](./Model.md) membaca panduan dari pembuat aplikasi sekaligus panduan dari Anda sebelum ia membaca pesan yang Anda kirimkan.

Karena perintah sistem ini sama di setiap permintaan, ia menjadi bagian awal dari [penyimpanan cache awalan (prefix cache)](./Prefix%20cache.md) — hal inilah salah satu alasan mengapa sistem penjalan menjaganya tetap konstan sepanjang sesi obrolan daripada mengubahnya di tengah jalan.

Model dilatih untuk memprioritaskan perintah sistem dibanding pesan dari pengguna. Jadi, ketika agen bersikeras menerapkan suatu aturan penulisan yang tidak pernah Anda minta, atau memformat keluaran dengan cara yang sulit diubah, biasanya ia sedang mematuhi perintah sistem miliknya — dan pesan Anda kalah bersaing. Beberapa sistem penjalan dapat disesuaikan: mereka memberi Anda akses penuh ke perintah sistem, sehingga Anda dapat membaca apa yang sebenarnya diinstruksikan kepada agen dan mengubahnya.

_Contoh Penggunaan:_

"Dua sistem penjalan yang berbeda menggunakan model yang sama, tetapi perilakunya sangat berbeda saat diberikan perintah yang sama."

"Itu karena perintah sistem (system prompt) mereka berbeda. Yang satu diatur untuk melakukan perubahan kode secara ringkas, sementara yang lain diatur untuk memberikan penjelasan panjang — di situlah letak perbedaannya, bahkan sebelum pesan Anda dikirim."
