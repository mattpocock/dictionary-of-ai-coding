---
description: Segala hal di luar model yang menjadikannya agen: alat, system prompt, manajemen jendela konteks, izin, dan kait (hooks).
---

Segala hal yang membungkus [model](./Model.md) untuk mengubahnya menjadi sebuah [agen](./Agent.md): [alat (tools)](./Tool.md), [system prompt (instruksi sistem)](./System%20prompt.md), [manajemen jendela konteks](./Context%20window.md), perizinan, dan kait (hooks). Fitur seperti **Claude.ai** dan **Claude Code** berjalan menggunakan model yang sama namun berperilaku sangat berbeda karena sistem penjalannya (harness) berbeda.

Model itu sendiri sebenarnya hanya melakukan satu hal: menerima teks input dan menghasilkan teks output. Model tidak bisa membaca file, menjalankan perintah komputer, atau mengingat pesan di [giliran](./Turn.md) percakapan sebelumnya. Sistem penjalan (harness) menyediakan semua kemampuan tersebut. Sistem inilah yang merakit [konteks](./Context.md) untuk setiap [permintaan penyedia model (model provider request)](./Model%20provider%20request.md), mengeksekusi [panggilan alat (tool call)](./Tool%20call.md) yang diminta model, mengirimkan kembali [hasil alat (tool result)](./Tool%20result.md), menyimpan riwayat [sesi](./Session.md) obrolan, meminta konfirmasi izin Anda sebelum melakukan tindakan berisiko, dan memutuskan kapan harus [menyusutkan (compact)](./Compaction.md) obrolan. Siklus kerja agen — model mengajukan rencana, sistem penjalan mengeksekusi, lalu diulang — digerakkan oleh sistem penjalan.

Pembedaan ini sangat penting untuk mendiagnosis masalah. Ketika perilaku sistem berbeda antara dua aplikasi, atau berbeda antara kemarin dan hari ini, modelnya sering kali bukanlah variabel penyebabnya — melainkan sistem penjalannya. Instruksi sistem yang berbeda, kumpulan alat yang berbeda, aturan izin yang berubah, atau metode pengelolaan konteks baru semuanya dapat mengubah cara kerja sistem tanpa ada perubahan apa pun pada modelnya. Ini juga berarti bahwa sistem penjalan adalah tempat sebagian besar konfigurasi Anda berada: file [AGENTS.md](./AGENTS.md.md), aturan perizinan, dan kait pemrograman semuanya merupakan instruksi untuk sistem penjalan, bukan untuk model.

Contoh: Claude Code, Cursor, Codex CLI — dan Claude.ai, yang merupakan sistem obrolan umum alih-alih alat coding.

_Contoh Penggunaan:_

"Menggunakan model yang sama, mengapa Claude Code bisa mengedit file sementara Claude.ai hanya menjawab pertanyaan saja?"

"Sistem penjalannya (harness) berbeda — Claude Code dibekali alat akses [sistem file](./Filesystem.md), instruksi sistem yang berbeda, dan lapisan perizinan. Modelnya bukan variabel penentu di sini."
