---
description: Pola kerja di mana pengguna menerima kode dari agen tanpa peninjauan manusia. Perubahan kode dianggap sebagai hal yang tidak transparan.
---

Sebuah pola kerja di mana pengguna langsung menerima kode dari [agen](./Agent.md) tanpa melakukan [peninjauan manusia (human review)](./Human%20review.md). Perbedaan perubahan kode (diff) diperlakukan sebagai sesuatu yang tidak transparan — hal yang penting adalah apakah program tersebut berjalan dengan benar, bukan apa isi kode di dalamnya. Proses [peninjauan otomatis (automated review)](./Automated%20review.md) dan [pemeriksaan otomatis (automated checks)](./Automated%20check.md) mungkin masih tetap berjalan; praktik _vibe coding_ tidak melarang ataupun mengharuskan keduanya.

Istilah ini berasal dari Andrej Karpathy, yang [mencetuskan istilah tersebut pada awal tahun 2025](https://x.com/karpathy/status/1886192184808149383): Anda "sepenuhnya berserah pada suasana hati (vibes)" dan "bahkan lupa bahwa kode tersebut ada" — cukup jelaskan apa yang Anda inginkan, terima hasil kode yang dikembalikan, dan nilai hasilnya dengan cara menjalankannya secara langsung.

Vibe coding menukar ketelitian pemeriksaan dengan kecepatan kerja. Membaca perubahan kode biasanya merupakan langkah paling lambat dalam pekerjaan berbasis agen, sehingga meniadakan langkah ini akan menghilangkan hambatan utama tersebut. Untuk kode yang dampak kegagalannya rendah — seperti kode [purwarupa (prototypes)](./Prototyping.md), skrip sekali pakai, atau alat bantu internal — pertukaran tersebut masih masuk akal. Namun, risikonya akan meningkat seiring dengan masa pakai kode dan tingkat kepentingan sistem tersebut.

Kerugian dari praktik ini biasanya baru akan terasa di kemudian hari. Perubahan yang dilakukan dengan cara vibe coding akan menumpuk menjadi suatu basis kode yang tidak pernah dibaca oleh siapa pun, dan perilaku program adalah satu-satunya hal yang diperiksa — sehingga segala sesuatu yang tidak tampak pada perilaku luar program, seperti kunci rahasia yang tidak sengaja tertulis ke dalam berkas log, penanganan kasus khusus yang terlewat, atau pemrosesan data yang salah secara diam-diam, akan ikut terkirim tanpa disadari. Pertama kali seseorang mendiagnosis kesalahan (debug) pada sistem tersebut adalah pertama kalinya kode tersebut benar-benar dibaca. Ketika peninjauan manusia ditiadakan, maka bentuk verifikasi otomatis apa pun yang masih berjalan — seperti unit test, sistem tipe data (types), atau peninjauan otomatis — menjadi satu-satunya pintu gerbang penyaring yang dilalui oleh kode tersebut.

_Hindari:_ penggunaan istilah "vibe coding" sebagai sinonim untuk "penulisan kode AI berkualitas rendah" — istilah ini merujuk pada sikap peninjauan yang diambil, bukan kualitas dari kode yang dihasilkan.

_Contoh Penggunaan:_

"Apakah Anda sudah membaca apa saja yang diubah oleh agen pada alur autentikasi (auth flow)?"

"Saya melakukan vibe coding — proses masuk log (login) masih berfungsi, hanya itu yang saya periksa."

"Baca dahulu perubahan kodenya sebelum Anda kirim (push); melakukan vibe coding pada bagian autentikasi adalah penyebab bocornya kunci rahasia ke dalam berkas log."
