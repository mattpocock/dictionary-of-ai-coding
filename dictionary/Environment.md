---
description: Dunia tempat agen bekerja — segala sesuatu di luar harness yang dipahami agen melalui hasil alat dan diubah dengan panggilan alat.
---

Dunia tempat [agen](./Agent.md) beraksi — segala sesuatu di luar [harness (sistem penjalan)](./Harness.md) yang dapat dipahami agen melalui [hasil alat (tool result)](./Tool%20result.md) dan diubah melalui [panggilan alat (tool call)](./Tool%20call.md). Harness berfungsi untuk _menjalankan_ agen; sedangkan lingkungan kerja (environment) adalah tempat agen _melakukan pekerjaannya_. File seperti [`AGENTS.md`](./AGENTS.md.md) berada di dalam lingkungan kerja; dan harness-lah yang memuat file tersebut ke dalam [jendela konteks](./Context%20window.md). Jenis lingkungan kerja yang paling umum adalah [sistem file](./Filesystem.md) komputer, tetapi bukan satu-satunya (database, API jarak jauh, atau sesi browser web juga bisa menjadi lingkungan kerja).

Agen hanya melihat isi lingkungan kerja ketika ia melakukan pengecekan. Semua informasi yang diketahui agen tentang lingkungan kerja diperoleh melalui hasil alat pemrograman, sehingga gambaran yang dimilikinya seperti kumpulan foto kilas (snapshot) yang akurat pada momen foto itu diambil. Jika suatu file berubah setelah agen membacanya — misalnya Anda mengeditnya secara manual, atau ada proses build yang memperbaruinya — agen akan tetap berpikir menggunakan salinan lama yang sudah kedaluwarsa tersebut sampai ada instruksi untuk membacanya ulang. Kejadian di mana agen mendeskripsikan isi berkas dengan sangat percaya diri padahal aslinya sudah berubah biasanya disebabkan oleh hal ini: isi lingkungan kerja sudah bergeser, tetapi foto kilas milik agen tidak diperbarui.

Lingkungan kerja juga merupakan lapisan yang bertahan permanen — satu-satunya bagian yang selalu bersifat [stateful (menyimpan keadaan/riwayat)](./Stateful.md). Konteks obrolan suatu [sesi](./Session.md) akan lenyap ketika sesi tersebut ditutup, tetapi file-file yang ditulis ke dalam lingkungan kerja akan tetap tersimpan untuk dibaca oleh sesi berikutnya — fitur inilah yang menjadi tumpuan [sistem memori](./Memory%20system.md), [artefak operan (handoff artifact)](./Handoff%20artifact.md), dan file `AGENTS.md`. Segala sesuatu yang harus tetap diketahui oleh agen esok hari wajib disimpan di dalam lingkungan kerja.

Anda sendiri yang menentukan seberapa luas jangkauan lingkungan kerja ini. Sebuah [sandbox (lingkungan terisolasi)](./Sandbox.md) akan memperkecil jangkauan tersebut untuk membatasi apa saja yang boleh disentuh agen; sementara penambahan [alat (tool)](./Tool.md) baru akan memperluas jangkauan tersebut, misalnya membuat database atau API eksternal dapat diakses oleh agen. Segala hal yang berada di dalam batas jangkauan adalah apa yang bisa dipahami dan diubah oleh agen; segala hal di luar batas tersebut dianggap tidak ada bagi agen. Seberapa baik lingkungan kerja disiapkan untuk mendukung tugas agen adalah ukuran kualitas [AX (pengalaman agen)](./AX.md) dari proyek tersebut.

_Hindari:_ menggunakan istilah "lingkungan" (environment) untuk merujuk pada runtime atau harness itu sendiri — karena harness adalah pembungkusnya, sedangkan lingkungan adalah area kerjanya.

_Contoh Penggunaan:_

"Agen tidak bisa melihat struktur data database staging kita."

"Hubungkan database itu ke lingkungan kerja agen — berikan dia alat `psql` dengan akses hanya-baca (read-only) ke database staging. Sistem penjalannya (harness) sudah baik, dia hanya tidak memiliki akses lingkungan untuk bekerja."
