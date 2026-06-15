<!--
  GENERATED FILE — DO NOT EDIT.
  Source: dictionary/*.md, internal/Curriculum.md, internal/README.template.md
  Regenerate: npm run generate
-->

<p>
  <a href="https://www.aihero.dev/ai-coding-dictionary">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://res.cloudinary.com/total-typescript/image/upload/v1777878285/dictionary-dark_2x.png">
      <source media="(prefers-color-scheme: light)" srcset="https://res.cloudinary.com/total-typescript/image/upload/v1777878285/dictionary-light_2x.png">
      <img alt="AI Coding Dictionary" src="https://res.cloudinary.com/total-typescript/image/upload/v1777878285/dictionary-light_2x.png" width="369">
    </picture>
  </a>
</p>

# AI Coding Dictionary

**Pemrograman berbasis AI sering kali terasa seperti hanya untuk para ahli**. Istilah-istilah rumit tanpa penjelasan. Kegagalan misterius. Tagihan biaya yang terasa tidak masuk akal dengan hasil kerjanya.

Sebenarnya tidak sesulit itu. Kebanyakan kebingungan ini sengaja dibuat-buat: **ada seluruh ekosistem bisnis yang diuntungkan dengan menjaga agar teknologi ini tetap sulit dipahami**.

Istilah-istilah dasar pemrograman AI ini sangat mudah dipelajari hanya dalam waktu satu sore saja. Setelah Anda memahaminya, semua proses pengerjaan tidak akan terasa seperti tebak-tebakan lagi.

Mengapa jendela konteks bisa menurun kualitasnya? Mengapa biaya tagihannya sangat mahal? Mengapa perintah (prompt) yang sama bisa menghasilkan jawaban yang berbeda dari hari ke hari?

Semua pertanyaan tersebut memiliki jawaban yang jelas, begitu ada seseorang yang menjelaskan istilah-istilahnya kepada Anda.

Itulah tujuan dari kamus ini dibuat. **Kosa kata pemrograman berbasis AI, yang diterjemahkan ke dalam bahasa Indonesia yang sederhana**.

**Ingin tahu lebih banyak selain kosa kata?** Bergabunglah dengan 62.000+ pengembang lainnya di **[aihero.dev/newsletter](https://www.aihero.dev/s/dictionary-newsletter)** untuk mendapatkan keahlian terbaru, pemikiran seputar rekayasa AI, serta sumber daya yang akan menjaga Anda tetap terdepan.

---

## Table of contents

<details>
<summary>Section 1 — Model</summary>

- [AI](#ai)
- [Model](#model)
- [Parameters](#parameters)
- [Training](#training)
- [Inference](#inference)
- [Token](#token)
- [Next-token prediction](#next-token-prediction)
- [Non-determinism](#non-determinism)
- [Model provider](#model-provider)
- [Harness](#harness)
- [Model provider request](#model-provider-request)
- [Input tokens](#input-tokens)
- [Output tokens](#output-tokens)
- [Prefix cache](#prefix-cache)
- [Cache tokens](#cache-tokens)

</details>

<details>
<summary>Section 2 — Sesi, Jendela Konteks & Giliran Pesan</summary>

- [Stateless](#stateless)
- [Context](#context)
- [Context window](#context-window)
- [Stateful](#stateful)
- [Agent](#agent)
- [System prompt](#system-prompt)
- [Session](#session)
- [Turn](#turn)

</details>

<details>
<summary>Section 3 — Alat & Lingkungan Kerja</summary>

- [Environment](#environment)
- [Filesystem](#filesystem)
- [Tool](#tool)
- [Tool call](#tool-call)
- [Tool result](#tool-result)
- [MCP](#mcp)
- [Permission request](#permission-request)
- [Permission mode](#permission-mode)
- [Agent mode](#agent-mode)
- [Sandbox](#sandbox)

</details>

<details>
<summary>Section 4 — Mode Kegagalan</summary>

- [Sycophancy](#sycophancy)
- [Hallucination](#hallucination)
- [Parametric knowledge](#parametric-knowledge)
- [Knowledge cutoff](#knowledge-cutoff)
- [Contextual knowledge](#contextual-knowledge)
- [Attention relationship](#attention-relationship)
- [Attention budget](#attention-budget)
- [Attention degradation](#attention-degradation)
- [Smart zone](#smart-zone)

</details>

<details>
<summary>Section 5 — Operan Tugas (Handoff)</summary>

- [Clearing](#clearing)
- [Handoff](#handoff)
- [Primary source](#primary-source)
- [Secondary source](#secondary-source)
- [Handoff artifact](#handoff-artifact)
- [Spec](#spec)
- [Ticket](#ticket)
- [Compaction](#compaction)
- [Autocompact](#autocompact)

</details>

<details>
<summary>Section 6 — Memori & Pengarahan</summary>

- [Memory system](#memory-system)
- [AGENTS.md](#agentsmd)
- [Progressive disclosure](#progressive-disclosure)
- [Context pointer](#context-pointer)
- [Skill](#skill)
- [Subagent](#subagent)

</details>

<details>
<summary>Section 7 — Pola Kerja</summary>

- [Human-in-the-loop](#human-in-the-loop)
- [AFK](#afk)
- [Automated check](#automated-check)
- [Automated review](#automated-review)
- [Human review](#human-review)
- [Vibe coding](#vibe-coding)
- [Design concept](#design-concept)
- [Grilling](#grilling)
- [Prototyping](#prototyping)
- [DX](#dx)
- [AX](#ax)

</details>

## Section 1 — Model

### AI

Sebuah label yang terus bergeser seiring waktu, bukan nama teknologi yang spesifik. Kata "AI" tidak merujuk pada benda fisik yang tetap seperti halnya [model](#model) atau [token](#token) — melainkan menunjuk pada apa pun hal baru dan luar biasa yang bisa dilakukan oleh komputer. Saat ini, AI merujuk pada model bahasa besar (LLM). Di masa lalu, AI merujuk pada hal-hal yang sangat berbeda:

| Era       | Arti "AI" saat itu                                                                                       |
| --------- | -------------------------------------------------------------------------------------------------------- |
| 1950-an   | Penalaran simbolis — pembuktian teorema matematika, program permainan catur.                             |
| 1960-70an | Program simbolis berbasis aturan — ELIZA, SHRDLU.                                                        |
| 1980-an   | Sistem pakar (expert systems) — ribuan aturan logika "jika-maka" yang ditulis manual oleh manusia.       |
| 1990-an   | Pencarian pohon permainan — Deep Blue mengalahkan Kasparov (1997). Peneliti saat itu menghindari "AI"    |
| 2000-an   | Pembelajaran mesin statistik — filter spam, sistem rekomendasi. Lebih sering disebut "machine learning". |
| 2010-an   | Pembelajaran mendalam (deep learning) — pengenalan gambar (AlexNet, 2012), AlphaGo (2016).               |
| 2020-an   | Model bahasa besar (LLM) — ChatGPT (2022) membuat kata "AI" identik dengan chatbot (asisten obrolan)     |

Pergeseran ini terjadi karena sebuah mekanisme yang dikenal sebagai "efek AI": begitu suatu teknologi bekerja dengan andal, teknologi tersebut tidak lagi disebut AI melainkan diganti namanya — misalnya menjadi "hanya algoritma pencarian" atau "hanya analisis statistik" — dan sebutan "AI" pun bergeser ke hal berikutnya yang belum terpecahkan. Pengamatan ini sudah lama ada. Bertram Raphael menyatakannya seperti ini pada tahun 1971: "AI adalah nama kolektif untuk masalah-masalah yang belum kita ketahui cara penyelesaiannya yang benar menggunakan komputer." Versi Larry Tesler pada tahun 1979 berbunyi: "Kecerdasan (intelligence) adalah apa pun yang belum bisa dilakukan oleh mesin."

Inilah mengapa percakapan tentang AI sering kali tidak sejalan. Pernyataan seperti "AI tidak bisa bernalar" atau "AI itu terlalu dilebih-lebihkan (overhyped)" membawa penanda waktu tersembunyi — bisa jadi itu membicarakan sistem pakar tahun 80-an, pengenal gambar tahun 2010-an, atau LLM bulan lalu, dan setiap acuan tersebut mendukung kesimpulan yang berbeda. Ketika diskusi tentang AI menemui jalan buntu, solusinya biasanya adalah mengganti kata "AI" dengan istilah yang lebih presisi: apakah yang dimaksud itu modelnya, [harness (sistem penjalan)](#harness)-nya, [agen](#agent)-nya, atau [konteks](#context) yang diberikan kepadanya.

_Hindari:_ menggunakan kata "AI" dalam pernyataan teknis — sebutkan bagian spesifik yang Anda maksud. Istilah "coding berbasis AI" sebagai label kegiatan masih diperbolehkan; namun kalimat seperti "AI-nya sedang berhalusinasi" sebaiknya dihindari.

_Contoh Penggunaan:_

"CTO ingin tahu apakah AI bisa menangani antrean tiket bantuan."

"Artikan dulu maksudnya sebelum merancang sistem — maksud beliau adalah menggunakan LLM di dalam sistem penjalan yang terhubung ke sistem tiket. Kata 'AI' saja tidak bisa dijadikan spesifikasi kerja."

### Model

Kumpulan [parameter](#parameters). Bersifat [stateless (tidak menyimpan riwayat)](#stateless) — hanya melakukan [prediksi token berikutnya (next-token prediction)](#next-token-prediction) dan tidak melakukan hal lainnya. Nama seperti "Claude Opus 4.x" dan "GPT-5.x" adalah model. Model itu sendiri tidak dapat melakukan tindakan mandiri; ia harus [dipadukan dengan sistem penjalan (harness)](#harness) agar bisa berfungsi sebagai agen.

Model tidak memiliki kemampuan untuk membaca file komputer, menjalankan perintah pemrograman, berselancar di internet, atau mengingat obrolan kemarin — ia hanya menerima sekumpulan [token](#token) input dan menebak token output, sekali di setiap [permintaan penyedia model (model provider request)](#model-provider-request). Segala hal yang terasa seperti cara kerja [agen](#agent) yang cerdas — seperti memilih [alat (tools)](#tool), membaca hasil kerja kode, atau mengulangi perintah hingga tugas selesai — sebenarnya merupakan hasil orkestrasi sistem penjalan (harness) yang menjalankan rangkaian tebakan prediksi tersebut secara berturut-turut.

[Penyedia model (model provider)](#model-provider) merilis model dalam beberapa tingkatan (tier): model ukuran besar yang paling pintar tetapi berjalan lambat dan berbiaya mahal, serta model ukuran lebih kecil yang berjalan cepat dan murah tetapi kemampuannya lebih rendah. Memilih tingkatan model adalah keputusan penting — model besar yang tangguh cocok untuk perencanaan dan perbaikan bug yang rumit, sedangkan model kecil yang ringan cocok untuk perubahan kode mekanis biasa — dan sistem penjalan memungkinkan Anda untuk berganti model di tengah-tengah [sesi](#session) percakapan.

Penggunaan istilah ini secara tepat juga akan memperjelas proses pencarian masalah. Kalimat "model ini buruk untuk tugas ini" adalah klaim spesifik — karena model yang sama di dalam sistem penjalan yang berbeda, atau dibekali dengan [konteks](#context) yang berbeda, sering kali menunjukkan kinerja yang berbeda 180 derajat. Sebelum menyalahkan model, periksa terlebih dahulu apa saja informasi yang diberikan kepadanya: sebagian besar jawaban yang mengecewakan disebabkan oleh masalah kualitas konteks obrolan atau sistem penjalannya, bukan karena parameter modelnya.

_Contoh Penggunaan:_

"Apakah kita sebaiknya mengganti model dari Sonnet ke Opus untuk fase perencanaan tugas ini?"

"Coba saja — tetapi sistem penjalannya (harness) yang melakukan sebagian besar pekerjaan berat di sini. Pergantian model tidak akan membantu jika [system prompt (instruksi sistem)](#system-prompt) dan alat kerjanya salah dikonfigurasi."

### Parameters

Kumpulan angka di dalam [model](#model) — sering kali berjumlah miliaran — yang disesuaikan selama proses [pelatihan (training)](#training). Segala hal yang "diketahui" oleh model disimpan di dalam angka-angka ini. Proses pelatihan menetapkan nilai angka tersebut; sedangkan fase [inferensi (inference)](#inference) menggunakannya tanpa mengubah nilainya sama sekali. Istilah ini disebut juga dengan _bobot (weights)_.

Secara teknis mekanis, parameter adalah apa yang mengubah input menjadi output. Proses [prediksi token berikutnya (next-token prediction)](#next-token-prediction) adalah sebuah perhitungan matematika raksasa: kumpulan [token](#token) di dalam [jendela konteks](#context-window) dimasukkan, dikalikan dengan parameter model, dan menghasilkan prediksi token berikutnya. Tidak ada database penyimpanan fakta di dalam model, juga tidak ada tabel pencarian kode — yang ada hanyalah angka-angka ini, yang diatur sedemikian rupa sehingga perhitungannya cenderung menghasilkan jawaban yang berguna. Fakta yang dapat diucapkan model dari ingatan masa pelatihan, seperti API pustaka standar, adalah [pengetahuan parametrik (parametric knowledge)](#parametric-knowledge): yaitu data yang disimpan langsung di dalam parameter, bukan dicari dari tempat lain.

Detail penting yang perlu dipahami adalah bahwa parameter dibekukan (frozen) setelah proses pelatihan selesai. Tidak ada tindakan apa pun yang Anda lakukan di dalam [sesi](#session) obrolan yang dapat mengubah nilai parameter tersebut — baik koreksi yang Anda berikan, proyek kode yang Anda tunjukkan, maupun kesalahan yang dipelajarinya. Setiap sesi baru akan selalu berjalan di atas angka parameter yang sama. Inilah mengapa model bersifat [stateless (tidak menyimpan riwayat)](#stateless), mengapa pengetahuan bawaannya terhenti pada [batas pengetahuan (knowledge cutoff)](#knowledge-cutoff), dan mengapa informasi khusus proyek harus dimasukkan lewat [konteks](#context) obrolan. Satu-satunya cara mengubah parameter adalah dengan melakukan pelatihan ulang (re-training) — yang pada akhirnya menghasilkan model yang berbeda.

_Contoh Penggunaan:_

"Apakah kita bisa melakukan fine-tune model ini menggunakan basis kode proyek kita?"

"Itu akan mengubah nilai parameternya — dan menghasilkan model yang berbeda setelahnya. Untuk satu proyek spesifik, hampir selalu lebih murah memuat basis kode sebagai konteks obrolan daripada melatih ulang model."

### Training

Proses yang mengatur [parameter](#parameters) suatu [model](#model), dengan cara menghadapkannya pada teks dalam jumlah yang sangat besar dan menyesuaikan parameternya untuk meningkatkan akurasi [prediksi token berikutnya (next-token prediction)](#next-token-prediction). Ini adalah proses sekali jalan yang sangat mahal yang dilakukan oleh [penyedia model (model provider)](#model-provider). Proses ini mencakup prapelatihan (pre-training / pengerjaan massal) dan pascapelatihan (post-training / penyempurnaan lanjutan seperti kepatuhan instruksi dan keselamatan); perbedaan keduanya tidak terlalu penting pada tingkatan glosarium ini.

Mekanisme kerjanya adalah pengulangan dalam skala besar: tunjukkan potongan teks kepada model, biarkan ia memprediksi [token](#token) berikutnya, lalu ubah sedikit parameternya agar condong ke token yang sebenarnya muncul berikutnya, kemudian ulangi proses ini pada triliunan token. Tidak ada data yang disimpan sebagai fakta atau aturan baku — semua hal yang "diketahui" oleh model adalah efek samping dari upayanya untuk menjadi lebih baik dalam melakukan prediksi, yang dikompresi ke dalam parameter sebagai [pengetahuan parametrik (parametric knowledge)](#parametric-knowledge).

Dua konsekuensi penting yang memengaruhi pekerjaan sehari-hari: Pelatihan berakhir pada satu titik waktu tertentu, sehingga model memiliki [batas waktu pengetahuan (knowledge cutoff)](#knowledge-cutoff) — ia belum pernah melihat versi pustaka (library) baru yang Anda tingkatkan (upgrade) bulan lalu. Selain itu, pelatihan bukanlah hal yang dapat Anda lakukan secara mandiri: ketika model tidak mengetahui basis kode Anda, aturan penulisan Anda, atau API internal Anda, solusinya bukanlah "mengajari model melalui pelatihan" — melainkan memasukkan materi tersebut ke dalam [konteks](#context) obrolan, yaitu satu-satunya input yang dapat Anda kendalikan secara langsung.

_Contoh Penggunaan:_

"Apakah kita bisa melatih model agar ia mengetahui API internal kita?"

"Tidak melalui proses pelatihan (training) — itu adalah proses berbulan-bulan yang dilakukan oleh penyedia model. Muat saja dokumen API tersebut ke dalam konteks obrolan, karena itulah alat kendali yang sebenarnya Anda miliki."

### Inference

Proses menjalankan [model](#model) yang telah selesai dilatih untuk menghasilkan teks jawaban — inilah yang terjadi pada setiap [permintaan penyedia model (model provider request)](#model-provider-request). [Parameter](#parameters) model bernilai tetap (tidak berubah); model hanya melakukan [prediksi token berikutnya (next-token prediction)](#next-token-prediction) berdasarkan [konteks](#context) obrolan yang diberikan kepadanya. Biaya proses ini tergolong murah dibanding proses [pelatihan (training)](#training), namun ditagih per [token](#token) dan menjadi biaya utama dari penggunaan model sehari-hari.

Siklus hidup sebuah model dibagi menjadi dua fase:

| Fase                  | Kapan Terjadi                               | Apa yang Dilakukan                                                                | Status Parameter       |
| --------------------- | ------------------------------------------- | --------------------------------------------------------------------------------- | ---------------------- |
| Pelatihan (Training)  | Sekali, sebelum model dirilis               | Menghasilkan parameter model dari kumpulan data pelatihan raksasa                 | Sedang ditulis         |
| Inferensi (Inference) | Setiap kali ada pengguna yang memakai model | Menjalankan parameter tetap di atas konteks obrolan Anda untuk menghasilkan token | Hanya-baca (read-only) |

Tidak ada tindakan apa pun yang Anda lakukan pada fase inferensi yang dapat mengubah atau menulis ulang nilai parameter model — itulah alasan mengapa koreksi yang Anda berikan hari ini tidak akan terekam otomatis untuk hari esok. Ketika model mengulangi kesalahan yang sama di [sesi](#session) berikutnya, padahal Anda sudah menjelaskan perbaikannya secara mendalam, model tersebut bukannya mengabaikan Anda; ia memang secara teknis tidak mampu belajar langsung dari interaksi tersebut. Model bersifat [stateless (tidak menyimpan riwayat)](#stateless) — sehingga kesinambungan memori harus dijaga dari luar model — baik dari [jendela konteks](#context-window) maupun lewat bantuan [sistem memori (memory system)](#memory-system).

Mekanisme ini juga menjelaskan bagaimana biaya tagihan Anda dihitung. Setiap permintaan akan menjalankan model untuk membaca seluruh konteks obrolan dari awal, sehingga biaya akan bertambah sebanding dengan jumlah [token input](#input-tokens) dan [token output](#output-tokens) yang digunakan. Agen yang melakukan belasan panggilan [alat (tool)](#tool) akan membayar biaya inferensi untuk setiap putaran bolak-balik pengiriman data. Inilah mengapa ukuran jendela konteks menjadi masalah efisiensi biaya sekaligus penentu kualitas jawaban.

_Contoh Penggunaan:_

"Mengapa tagihannya dihitung berdasarkan pemakaian, bukan berupa biaya langganan tetap bulanan?"

"Karena Anda membayar untuk setiap proses inferensi — setiap kali mengirimkan pesan baru, penyedia model menjalankan model tersebut menggunakan komputer (hardware) milik mereka. Proses pelatihan memang sudah selesai di awal, tetapi biaya penggunaan server untuk inferensi dihitung per permintaan pesan, dan satu [giliran](#turn) percakapan Anda bisa berkembang menjadi banyak permintaan pesan ketika agen berulang kali memanggil alat pemrograman."

### Token

Unit atomik terkecil yang dibaca dan ditulis oleh [model](#model). Ukurannya kurang lebih sebesar kata, tetapi tidak persis sama — kata-kata yang umum digunakan biasanya dihitung sebagai satu token, sedangkan kata-kata yang jarang atau panjang akan dipecah menjadi beberapa token. Ukuran [jendela konteks (context window)](#context-window), biaya, dan latensi semuanya dihitung dalam satuan token.

Teks diubah menjadi token melalui alat pemecah token (tokenizer): sebuah daftar kosakata tetap yang terdiri dari puluhan ribu fragmen teks, yang dipelajari sebelum proses [pelatihan (training)](#training) dimulai, untuk memecah masukan apa pun menjadi urutan entri kosakata. Model tidak pernah melihat karakter huruf atau kata yang utuh — setiap bagian teks diubah menjadi bentuk token saat masuk, dan proses [prediksi token berikutnya (next-token prediction)](#next-token-prediction) menghasilkan keluaran berupa token satu demi satu saat keluar.

Sebagai aturan umum untuk bahasa Inggris, satu token bernilai sekitar tiga perempat dari sebuah kata, sehingga seribu token kira-kira sama dengan 750 kata. Untuk penulisan kode komputer, polanya lebih sulit diprediksi: kata kunci dan idiom yang umum digunakan akan dipecah secara ringkas, sedangkan nama pengenal (identifier) acak yang dibuat oleh sistem, kode hash, data base64, dan kode yang diperkecil (minified) akan dipecah menjadi sangat banyak token untuk setiap "kata". Polanya adalah: teks yang sering muncul dalam materi sumber pembuatan tokenizer akan mendapatkan pengodean yang pendek dan efisien; sedangkan teks yang jarang muncul akan dipotong-potong menjadi banyak pecahan kecil. Kode hash seperti `a3f9c2e1` tidak pernah muncul di mana pun, sehingga akan dipecah menjadi banyak token, sementara kata `function` hanya dihitung sebagai satu token. Inilah penyebab mengapa sebuah file yang tampak kecil tetapi penuh dengan baris teks yang tidak biasa dapat memakan porsi jendela konteks yang sangat besar.

Token adalah satuan dasar yang digunakan untuk mengukur segala sesuatu lainnya. Biaya dihitung per token — penyedia model menagih biaya [token masukan (input tokens)](#input-tokens) dan [token keluaran (output tokens)](#output-tokens) secara terpisah. Kecepatan diukur dalam satuan token per detik, karena keluaran dihasilkan satu token demi satu token. Selain itu, jendela konteks memiliki kapasitas jumlah token yang tetap, sehingga jumlah token dari file-file Anda akan menentukan seberapa banyak informasi yang dapat muat di dalamnya.

_Hindari:_ penggunaan istilah "kata" — batas pemisahan token tidak sama dengan batas pemisahan kata, dan satuan token per detik atau token per rupiah adalah satuan yang benar-benar penting.

_Contoh Penggunaan:_

"Seberapa besar ukuran perintah (prompt) ini nantinya?"

"Jalankan dahulu lewat alat tokenizer — skemanya memang ringkas tetapi nama kunci JSON-nya aneh, jadi kata-katanya akan dipecah menjadi lebih banyak token dari yang Anda perkirakan."

### Next-token prediction

Apa yang sebenarnya dilakukan oleh [model](#model) di balik layar. Dengan bekal [konteks](#context) obrolan yang diberikan, model akan memilih satu [token](#token) berikutnya, menempelkannya di akhir kalimat, lalu mengulangi proses tersebut dari awal. Setiap teks jawaban yang dihasilkan — baik berupa kalimat penjelasan, perintah [panggilan alat (tool call)](#tool-call), maupun berkas kode pemrograman sepanjang seribu baris — dirakit satu token demi satu token. Model tidak memiliki cara kerja lainnya selain ini.

Setiap langkah bekerja dengan cara yang persis sama: kumpulan token yang berada di dalam [jendela konteks](#context-window) akan dibaca melewati [parameter](#parameters) model, yang kemudian akan memunculkan nilai probabilitas (kemungkinan kecocokan) untuk setiap kosakata yang dimilikinya — kosakata mana yang paling mungkin muncul berikutnya, dan mana yang kurang cocok. Satu token kemudian dipilih dari daftar probabilitas tersebut, ditempelkan ke kalimat obrolan, dan siklus kembali berjalan dengan ukuran konteks obrolan yang sekarang sedikit lebih panjang. Tahapan pemilihan token inilah yang menyebabkan instruksi (prompt) yang sama persis bisa menghasilkan jawaban yang berbeda pada sesi yang berbeda: [sifat tidak pasti (non-determinism)](#non-determinism) adalah bawaan dari cara kerja mesin ini sendiri, bukan berupa error program.

Memahami cara kerja ini membantu kita mengerti berbagai perilaku model yang tampaknya aneh. Model tidak pernah memeriksa apakah suatu kata bernilai _benar secara fakta_ sebelum menuliskannya — ia hanya memeriksa apakah kata tersebut _terlihat cocok_ untuk ditulis berikutnya — hal inilah yang menjadi akar masalah terjadinya [halusinasi](#hallucination). Model langsung mengunci keputusannya di setiap token yang ditulis, sehingga kalimat pembuka obrolan yang terdengar sangat yakin dapat menyeret seluruh isi jawaban ke arah yang salah. Dan karena [token output](#output-tokens) diproduksi satu per satu, kecepatan pembuatan token ini menjadi penentu batas kecepatan kerja maksimal bagi [agen](#agent) mana pun.

_Contoh Penggunaan:_

"Bagaimana cara agen 'memutuskan' untuk menggunakan alat pemrograman?"

"Dia tidak membuat keputusan sendiri — itu hanyalah proses menebak token berikutnya dari awal sampai akhir. Panggilan alat tersebut sebenarnya hanyalah teks tertulis dengan struktur tertentu yang kemudian dibaca dan dijalankan oleh [harness (sistem penjalan)](#harness) dari aliran teks jawaban model."

### Non-determinism

Kondisi di mana input yang sama persis dapat menghasilkan teks jawaban yang berbeda. Jika Anda menjalankan [model](#model) sebanyak dua kali dengan bekal [konteks](#context) obrolan yang identik, Anda mungkin akan mendapatkan dua jawaban berbeda — terkadang hanya beda satu kata, terkadang pendekatannya berubah total. Tidak ada satu pun baris kode pemrograman Anda yang perlu diubah agar fenomena ini terjadi.

Ini adalah sifat bawaan dari cara model menghasilkan teks, serta cara [penyedia model (model provider)](#model-provider) melayani [permintaan (request)](#model-provider-request). Selama proses [inferensi](#inference) berjalan, model akan memunculkan daftar distribusi probabilitas dari token-token berikutnya yang mungkin cocok, dan satu token akan dipilih secara acak (sampling) dari daftar tersebut — biasanya memang sengaja diberi sedikit nilai keacakan, karena selalu memilih token yang paling mungkin terpilih hanya akan menghasilkan teks jawaban yang kaku, berulang-ulang, dan berkualitas rendah. Satu token yang dipilih secara berbeda di awal jawaban akan mengubah pilihan setiap token setelahnya, sehingga perbedaan satu kata di awal dapat membelokkan solusi ke arah yang sama sekali berbeda. Proses pelayan server di pihak penyedia model juga menambahkan variasi keacakan lainnya: pesan-pesan dari berbagai pengguna diproses bersamaan menggunakan hardware server yang sama, di mana perbedaan pembulatan angka desimal (floating-point) yang sangat tipis di server dapat memicu perbedaan pemilihan di antara dua token yang bersaing ketat. Tidak ada konfigurasi tombol apa pun yang bisa Anda matikan untuk menghilangkan sifat keacakan ini.

Anda harus mengantisipasi adanya variasi hasil kerja dari [agen](#agent) untuk tugas yang sama. Sebagian besar hasil kerja agen biasanya berada di dalam rentang kualitas wajar yang stabil — itulah mengapa sifat tidak pasti ini masih dapat diterima — namun hasil buruk yang ekstrem juga nyata adanya: di hari tertentu model akan terasa sangat cerdas; di hari lain ia akan terasa seperti kebingungan dan kehilangan arah. Tugasnya sama, namun hasil kocokan dadunya berbeda. Fenomena ini membawa dua konsekuensi praktis. Pertama, mencoba ulang (retry) adalah strategi yang sah: percobaan pertama yang gagal hanyalah satu hasil kocokan buruk dari distribusi probabilitas model, dan mencobanya kembali dengan tugas yang sama mungkin akan menghasilkan jawaban yang jauh lebih baik. Kedua, verifikasi hasil kerja menjadi jauh lebih penting dibanding saat menggunakan alat pemrograman biasa — Anda tidak bisa hanya menguji perilaku agen sekali saja lalu menganggapnya akan selalu bekerja seperti itu selamanya, sehingga [pemeriksaan otomatis](#automated-check) wajib dipasang untuk menangkap hasil kocokan yang buruk.

Berhati-hatilah untuk tidak menghubung-hubungkan kejadian ini dengan asumsi cerita yang berlebihan. Manusia adalah makhluk pencari pola, dan rangkaian hasil kerja buruk berturut-turut bisa membuat kita langsung mengambil kesimpulan sepihak seperti "kualitas modelnya diturunkan minggu ini." Padahal sering kali itu hanyalah bagian dari distribusi statistik keacakannya saja.

_Contoh Penggunaan:_

"Claude bekerja sangat buruk hari ini. Apakah perusahaan mereka baru merilis versi model yang lebih jelek?"

"Sepertinya tidak — hasil kerja model secara alami memang tidak pasti (non-deterministic). Anda akan mengalami hari baik dan hari buruk untuk pengerjaan tugas yang sama. Coba ulangi lagi besok sebelum Anda mencari-cari penyebab rumit lainnya."

### Model provider

Pihak atau sistem apa pun yang menyediakan server untuk menjalankan [model](#model) ([inferensi](#inference)). Biasanya berupa layanan komputasi awan (cloud) seperti Anthropic, OpenAI, atau Google, tetapi bisa juga dijalankan di komputer sendiri secara lokal (offline) menggunakan Ollama, LM Studio, atau llama.cpp. [Harness (sistem penjalan)](#harness) tidak menjalankan model itu sendiri di komputer Anda; ia meminta penyedia model untuk melakukannya.

Penyedia model menguasai infrastruktur fisik: kumpulan [parameter](#parameters) disimpan di dalam server mereka, dan setiap [permintaan penyedia model (model provider request)](#model-provider-request) merupakan proses sistem penjalan mengirimkan [token](#token) melalui jaringan internet dan menerima jawaban prediksi kembali. Hal ini menjadikan penyedia model sebagai sumber utama dari berbagai masalah yang sering kali salah dituduhkan kepada model atau sistem penjalan — seperti pembatasan jumlah pemanggilan API (rate limits), penurunan kapasitas server, dan server mati (down). Ketika sang [agen](#agent) mendadak macet di tengah [sesi](#session) obrolan atau memunculkan pesan error di setiap [giliran](#turn) pesan, halaman status server penyedia model adalah hal pertama yang wajib Anda periksa sebelum mencari penyebab lainnya.

Penyedia model juga menetapkan ketentuan harga: tarif per token untuk [token input](#input-tokens) dan [token output](#output-tokens), diskon [cache awalan (prefix cache)](#prefix-cache), serta model mana saja yang tersedia untuk digunakan. Perlu dicatat bahwa perusahaan penyedia server dan perusahaan pembuat model bisa berbeda — contohnya Amazon Bedrock, Google Vertex, dan OpenRouter menyediakan server untuk menjalankan model buatan perusahaan lain.

Penyedia model lokal menawarkan kontrol penuh dengan mengorbankan kualitas kecerdasan: model yang muat di komputer pribadi Anda berukuran jauh lebih kecil daripada model komersial terkemuka di internet, tetapi tidak ada data yang dikirim keluar komputer Anda dan tidak ada tagihan biaya per token.

_Contoh Penggunaan:_

"Apakah kita bisa menjalankan aplikasi ini secara offline untuk klien yang memiliki batasan jaringan ketat?"

"Ganti penyedia modelnya ke penyedia lokal — pasang Ollama atau llama.cpp di server lokal mereka. Sistem penjalannya tidak masalah, ia hanya akan memanggil alamat URL API yang berbeda."

### Harness

Segala hal yang membungkus [model](#model) untuk mengubahnya menjadi sebuah [agen](#agent): [alat (tools)](#tool), [system prompt (instruksi sistem)](#system-prompt), [manajemen jendela konteks](#context-window), perizinan, dan kait (hooks). Fitur seperti **Claude.ai** dan **Claude Code** berjalan menggunakan model yang sama namun berperilaku sangat berbeda karena sistem penjalannya (harness) berbeda.

Model itu sendiri sebenarnya hanya melakukan satu hal: menerima teks input dan menghasilkan teks output. Model tidak bisa membaca file, menjalankan perintah komputer, atau mengingat pesan di [giliran](#turn) percakapan sebelumnya. Sistem penjalan (harness) menyediakan semua kemampuan tersebut. Sistem inilah yang merakit [konteks](#context) untuk setiap [permintaan penyedia model (model provider request)](#model-provider-request), mengeksekusi [panggilan alat (tool call)](#tool-call) yang diminta model, mengirimkan kembali [hasil alat (tool result)](#tool-result), menyimpan riwayat [sesi](#session) obrolan, meminta konfirmasi izin Anda sebelum melakukan tindakan berisiko, dan memutuskan kapan harus [menyusutkan (compact)](#compaction) obrolan. Siklus kerja agen — model mengajukan rencana, sistem penjalan mengeksekusi, lalu diulang — digerakkan oleh sistem penjalan.

Pembedaan ini sangat penting untuk mendiagnosis masalah. Ketika perilaku sistem berbeda antara dua aplikasi, atau berbeda antara kemarin dan hari ini, modelnya sering kali bukanlah variabel penyebabnya — melainkan sistem penjalannya. Instruksi sistem yang berbeda, kumpulan alat yang berbeda, aturan izin yang berubah, atau metode pengelolaan konteks baru semuanya dapat mengubah cara kerja sistem tanpa ada perubahan apa pun pada modelnya. Ini juga berarti bahwa sistem penjalan adalah tempat sebagian besar konfigurasi Anda berada: file [AGENTS.md](#agentsmd), aturan perizinan, dan kait pemrograman semuanya merupakan instruksi untuk sistem penjalan, bukan untuk model.

Contoh: Claude Code, Cursor, Codex CLI — dan Claude.ai, yang merupakan sistem obrolan umum alih-alih alat coding.

_Contoh Penggunaan:_

"Menggunakan model yang sama, mengapa Claude Code bisa mengedit file sementara Claude.ai hanya menjawab pertanyaan saja?"

"Sistem penjalannya (harness) berbeda — Claude Code dibekali alat akses [sistem file](#filesystem), instruksi sistem yang berbeda, dan lapisan perizinan. Modelnya bukan variabel penentu di sini."

### Model provider request

Satu siklus perjalanan bolak-balik pengiriman data dari [harness (sistem penjalan)](#harness) ke [penyedia model (model provider)](#model-provider). Sistem penjalan mengirimkan seluruh [konteks](#context) aktif; dan penyedia model mengirimkan satu tanggapan balik (berupa [panggilan alat (tool call)](#tool-call) atau jawaban akhir). Satu pesan dari Anda dapat memicu banyak permintaan ke penyedia model jika sang [agen](#agent) memanggil [alat (tools)](#tool) pemrograman — di mana setiap [hasil alat (tool result)](#tool-result) akan memicu permintaan baru berikutnya.

Setiap permintaan membawa seluruh data: mulai dari [system prompt (instruksi sistem)](#system-prompt), riwayat percakapan lengkap sejauh ini, hingga setiap hasil kerja alat. [Model](#model) bersifat [stateless (tidak menyimpan riwayat)](#stateless), sehingga penyedia model tidak menyimpan data apa pun di server mereka di antara setiap permintaan — permintaan ke-40 akan mengirimkan kembali apa yang dikirimkan oleh permintaan ke-39, ditambah satu hasil kerja alat terbaru. Layanan [cache awalan (prefix cache)](#prefix-cache) disediakan untuk membuat proses pengulangan kirim ini menjadi murah dan terjangkau.

Permintaan ini juga merupakan unit dasar penghitungan biaya. Jumlah [Token input](#input-tokens), [token output](#output-tokens), dan diskon cache semuanya dihitung per permintaan. Itulah mengapa pertanyaan sederhana yang Anda ajukan bisa memakan biaya yang mengejutkan: biayanya tidak dihitung dari panjang pesan Anda, melainkan dari seberapa banyak jumlah permintaan yang terjadi dikalikan dengan ukuran jendela konteks yang dibawa oleh masing-masing permintaan tersebut.

Sangat penting untuk membedakan antara "permintaan penyedia model" dengan [giliran](#turn) percakapan (turn). Satu giliran percakapan adalah satu kali tanya-jawab antara Anda dengan agen, sementara satu giliran percakapan tersebut — misalnya perintah "perbaiki tes yang gagal" — bisa berkembang menjadi rantai beberapa permintaan di latar belakang:

| Permintaan | Jawaban Model                         | Tindakan Sistem Penjalan (Harness)                     |
| ---------- | ------------------------------------- | ------------------------------------------------------ |
| 1          | Panggilan alat: jalankan tes          | Menjalankan tes, menambahkan laporan kegagalan         |
| 2          | Panggilan alat: baca file tes         | Menambahkan isi file tes ke riwayat                    |
| 3          | Panggilan alat: baca file kode sumber | Menambahkan isi file kode sumber ke riwayat            |
| 4          | Panggilan alat: edit file kode sumber | Mengubah kode file, menambahkan hasil edit ke riwayat  |
| 5          | Panggilan alat: jalankan tes lagi     | Menjalankan tes kembali, menambahkan laporan tes lulus |
| 6          | Jawaban akhir: "selesai, tes lulus"   | Menampilkan jawaban akhir tersebut kepada Anda         |

Terjadi enam kali permintaan penyedia model untuk menyelesaikan satu giliran pesan dari Anda — di mana setiap permintaan mengirimkan kembali seluruh konteks obrolan dari awal. Ketika Anda heran ke mana perginya kuota [token](#token) Anda, hitunglah jumlah permintaan yang terjadi di latar belakang, bukan jumlah giliran pesannya.

_Contoh Penggunaan:_

"Satu pertanyaan pendek ini menghabiskan empat puluh ribu token?"

"Lihat riwayat panggilan alatnya — ada dua belas kali pencarian grep, delapan pembacaan berkas, dan empat kali edit kode. Setiap hasil alat memicu satu permintaan penyedia model baru, dan seluruh awalan [sesi](#session) dikirim ulang di setiap proses permintaan tersebut."

### Input tokens

[Token](#token) yang dikirimkan oleh [harness (sistem penjalan)](#harness) pada setiap [permintaan penyedia model (model provider request)](#model-provider-request) — meliputi isi [system prompt (instruksi sistem)](#system-prompt), riwayat percakapan sebelumnya, [hasil alat (tool result)](#tool-result), dan segala hal yang dibaca oleh [model](#model) sebelum ia mulai menulis jawaban. Token ini ditagih dengan tarif yang lebih murah daripada [token output](#output-tokens), karena biaya komputasi server untuk membaca data jauh lebih murah daripada menulis jawaban baru.

Dalam aktivitas coding berbasis [AI](#ai), token input menyumbang porsi terbesar dari tagihan Anda. Model bersifat [stateless (tidak menyimpan riwayat)](#stateless), sehingga di setiap [giliran](#turn) pesan baru, sistem harus mengirimkan kembali seluruh riwayat obrolan dari awal [sesi](#session) sebagai token input: mulai dari pesan pertama Anda, setiap jawaban model, hingga setiap hasil kerja alat sejak awal sesi. Input pada giliran percakapan ke-50 akan memuat riwayat 49 giliran percakapan sebelumnya. Sebuah permintaan ke penyedia model mungkin hanya menghasilkan beberapa ratus token output, tetapi mengirimkan kembali seratus ribu token input dari akumulasi riwayat percakapan sebelumnya.

Layanan [cache awalan (prefix cache)](#prefix-cache) dapat membantu menekan biaya ini: riwayat percakapan yang persis sama dengan permintaan sebelumnya akan ditagih sebagai [token cache](#cache-tokens) yang murah, bukan sebagai token input tarif penuh. Jika biaya input dirasa masih terlalu mahal, solusinya adalah dengan memperkecil ukuran riwayat obrolan yang dikirim ulang — yaitu dengan cara [membersihkan (clear)](#clearing) obrolan atau [meringkas (compact)](#compaction) informasi di sela-sela pengerjaan tugas.

_Contoh Penggunaan:_

"Tagihan kita membengkak, padahal [agen](#agent) hampir tidak menulis kode baru sama sekali."

"Itu karena biaya token input — setiap giliran pesan baru akan mengirimkan kembali seluruh riwayat obrolan dari awal. Tanpa adanya cache awalan, Anda harus membayar penuh pemrosesan riwayat tersebut di setiap pesan."

### Output tokens

[Token](#token) yang dihasilkan kembali oleh [model](#model). Ditagih dengan tarif yang lebih mahal daripada [token input](#input-tokens) — umumnya sekitar lima kali lipat — karena membutuhkan daya komputasi server yang lebih besar untuk memproduksinya.

Segala hal yang ditulis oleh model akan dihitung: teks penjelasan yang Anda baca, baris kode program yang dibuat, perintah [panggilan alat (tool call)](#tool-call), serta baris penalaran (reasoning tokens) yang dilakukan model sebelum menjawab. Hal terakhir ini sering mengejutkan pengguna — token penalaran tetap ditagih sebagai token output meskipun [harness (sistem penjalan)](#harness) sering kali menyembunyikan teks penalaran tersebut dari layar Anda.

Token output juga menentukan kecepatan berjalannya suatu [sesi](#session) obrolan. Model dapat membaca input dengan sangat cepat tetapi menghasilkan output secara bertahap satu token demi satu token. Oleh karena itu, ketika [giliran](#turn) percakapan terasa lambat, hal itu hampir selalu disebabkan karena model sedang menuliskan output kodenya, bukan karena proses membaca input. Waktu tunggu yang lama biasanya menandakan bahwa model sedang menulis jawaban yang panjang.

_Contoh Penggunaan:_

"Sesi perbaikan kode (refactor) ini menghabiskan kuota kredit yang besar padahal teks inputnya kecil."

"Agen menulis ulang seluruh isi file daripada memberikan potongan perubahannya (patch) saja. Biaya token output sekitar lima kali lipat tarif input — mintalah dia menuliskan editan kodenya saja agar biayanya turun."

### Prefix cache

Penyimpanan di sisi [penyedia model (provider)](#model-provider) yang memungkinkan rangkaian [permintaan penyedia model (model provider request)](#model-provider-request) berurutan untuk melewati pemrosesan ulang dari awalan obrolan yang sama. Ketika bagian awal dari suatu pesan baru memiliki kecocokan yang persis sama dengan pesan sebelumnya — misalnya menggunakan [system prompt (instruksi sistem)](#system-prompt) yang sama dan riwayat percakapan yang sama hingga batas tertentu — penyedia model akan menggunakan kembali hasil perhitungan sebelumnya dan menagih [token](#token) bagian awal tersebut sebagai [token cache](#cache-tokens) dengan tarif yang jauh lebih murah.

Fitur cache ini sangat menguntungkan karena sesi obrolan bersifat menumpuk di bagian akhir (append-only). Setiap permintaan baru akan mengirimkan kembali seluruh riwayat obrolan dari awal sebagai [token input](#input-tokens) (silakan baca entri tersebut untuk mengetahui alasannya), dan pada [sesi](#session) normal, perubahan hanya terjadi pada bagian akhir pesan saja — di mana setiap pesan baru hanyalah pesan sebelumnya ditambah beberapa baris jawaban baru. Penyedia model akan memproses bagian awal panjang yang sama tersebut sekali saja, menyimpan hasilnya di server, dan melanjutkan proses dari titik akhir awalan tersebut. Tanpa adanya cache ini, sesi obrolan sepanjang 50 [giliran](#turn) pesan akan membuat Anda membayar biaya pemrosesan giliran pesan pertama sebanyak lima puluh kali.

Data cache ini juga memiliki masa kedaluwarsa. Berapa lama data tersimpan di server bervariasi untuk setiap penyedia model — biasanya hanya beberapa menit, bukan berjam-jam. Jika Anda mendiamkan sesi obrolan dalam waktu yang melewati batas kedaluwarsa tersebut, permintaan pesan berikutnya akan memproses kembali seluruh awalan obrolan dengan tarif penuh sekali sebelum sistem cache aktif kembali. Hal ini sebenarnya merupakan urusan teknis pembuat [harness (sistem penjalan)](#harness); bagi Anda sebagai pengguna, efek yang terlihat adalah pemanggilan pesan setelah jeda yang lama akan memakan biaya lebih mahal daripada pesan sebelumnya yang dikirim berturut-turut.

_Contoh Penggunaan:_

"Mengapa tagihan kita mendadak melonjak di pertengahan sesi?"

"Sistem penjalan (harness) mulai memasukkan informasi waktu saat ini (timestamp) ke dalam system prompt di setiap giliran obrolan. Hal ini merusak cache awalan (prefix cache) pada token pertama yang mengalami perubahan nilai, sehingga setiap permintaan setelah itu ditagih dengan tarif input penuh."

### Cache tokens

[Token input](#input-tokens) yang disimpan oleh [penyedia model (provider)](#model-provider) dari [permintaan penyedia model (model provider request)](#model-provider-request) sebelumnya agar tidak perlu diproses ulang dari awal. Ketika permintaan-permintaan yang berurutan memiliki awalan yang sama persis, penyedia model akan menggunakan kembali hasil pemrosesan sebelumnya melalui [cache awalan (prefix cache)](#prefix-cache) dan mengenakan tarif yang jauh lebih murah untuk bagian yang tersimpan tersebut. Fitur inilah yang membuat [sesi](#session) percakapan panjang tetap ramah di kantong — tanpa fitur ini, setiap [giliran](#turn) percakapan baru akan membuat Anda membayar penuh untuk seluruh riwayat obrolan dari awal.

Alasan mengapa hal ini sangat penting adalah cara penghitungan biaya sesi. [Model](#model) bersifat [stateless (tidak mengingat riwayat)](#stateless), sehingga setiap kali Anda mengirimkan pesan baru, sistem sebenarnya mengirimkan kembali seluruh isi obrolan dari awal — termasuk [system prompt (instruksi sistem)](#system-prompt), semua pesan sebelumnya, dan setiap [hasil alat (tool result)](#tool-result) — sebagai token input. Di giliran ke-50, setiap pesan baru akan membawa riwayat obrolan sepanjang 50 giliran sebelumnya, dan Anda harus membayar tarif penuh untuk semua itu, berkali-kali. Cache mengubah hitungan ini: token dari awalan obrolan yang identik yang sudah diproses oleh penyedia model akan dihitung sebagai token cache (cache tokens), dengan tarif yang biasanya hanya sepersepuluh dari tarif input biasa atau bahkan kurang. Pada sesi yang panjang, sebagian besar token yang Anda kirimkan berupa token cache, sehingga biaya tagihan Anda tetap wajar.

Contoh berikut menunjukkan kapan token dapat disimpan dalam cache dan kapan tidak. Setiap huruf mewakili satu blok percakapan; setiap permintaan mengirimkan percakapan dari awal hingga titik tersebut:

| Permintaan Mengirimkan | Masuk Cache | Dibayar Tarif Penuh | Alasan                                                                               |
| ---------------------- | ----------- | ------------------- | ------------------------------------------------------------------------------------ |
| `AB`                   | tidak ada   | `AB`                | Permintaan pertama — belum ada kecocokan riwayat                                     |
| `ABC`                  | `AB`        | `C`                 | `AB` adalah awalan yang persis sama dengan permintaan sebelumnya                     |
| `ABCD`                 | `ABC`       | `D`                 | Awalan obrolan masih utuh dan tidak berubah                                          |
| `AXCD`                 | `A`         | `XCD`               | Perubahan kode atau teks mengubah `B` menjadi `X`; pencocokan cache terhenti di sana |

Cache ini sangat sensitif terhadap perubahan: ia mencocokkan awalan yang persis sama. Jika ada hal kecil saja yang berubah di bagian awal percakapan — misalnya [harness (sistem penjalan)](#harness) mengubah urutan file, penanda waktu (timestamp) diperbarui, atau representasi file bergeser sedikit — cache akan meleset (cache miss) mulai dari titik perubahan tersebut dan semua bagian setelahnya akan ditagih dengan tarif input penuh. Cache juga akan kedaluwarsa setelah beberapa menit tidak ada aktivitas obrolan, sehingga sesi yang dilanjutkan kembali setelah jeda lama akan membayar pemrosesan riwayat obrolan penuh sekali lagi. Jika biaya sesi Anda mendadak melonjak tanpa sebab yang jelas, bandingkan jumlah token cache dengan token input di laporan penggunaan Anda — kegagalan cache akan langsung terlihat di sana.

_Contoh Penggunaan:_

"Biaya untuk sesi panjang terasa sangat mahal — delapan dolar hanya untuk merapikan kode (refactor)."

"Coba periksa penggunaan token cache Anda. Jika sistem penjalan (harness) terus mengubah urutan system prompt atau posisi file di setiap giliran obrolan, awalan cache akan rusak dan Anda harus membayar penuh tarif input di setiap permintaan."

## Section 2 — Sesi, Jendela Konteks & Giliran Pesan

### Stateless

Tidak membawa informasi ke depan. [Model](#model) bersifat _stateless_ (tidak menyimpan riwayat) di berbagai [permintaan penyedia model (model provider request)](#model-provider-request) — setiap permintaan mengirimkan kembali seluruh isi [jendela konteks (context window)](#context-window), karena model tidak memiliki cara untuk melihat hal lain. Sebuah [agen](#agent) secara default bersifat _stateless_ di berbagai [sesi](#session) obrolan: sesi baru dimulai dalam keadaan kosong, tanpa jejak dari sesi sebelumnya. Istilah ini merupakan padanan dari [stateful (menyimpan status)](#stateful).

Model itu sendiri bersifat stateless secara permanen: [parameter](#parameters) miliknya dibekukan setelah proses [pelatihan (training)](#training), dan tidak ada hal yang Anda lakukan saat [inferensi (inference)](#inference) yang dapat mengubahnya. Model tidak belajar dari koreksi Anda, tidak ingat pernah diberitahu hal yang sama kemarin, dan tidak akan mengenali Anda lebih dekat — meskipun percakapan terasa sebaliknya. Perasaan adanya kesinambungan dalam suatu sesi dibuat oleh [harness (sistem penjalan)](#harness), yang menyimpan transkrip percakapan dan mengirimkannya kembali bersama setiap permintaan baru. Model tidak mengingat percakapan; ia membaca ulang percakapan tersebut.

Konsekuensi praktisnya: jika Anda ingin sesuatu diingat di berbagai sesi obrolan, Anda harus menulisnya di suatu tempat yang akan dibaca kembali oleh agen. Tempat tersebut adalah file [AGENTS.md](#agentsmd), [sistem memori (memory system)](#memory-system), dan [artefak operan (handoff artifact)](#handoff-artifact) — berkas-berkas yang dimuat ke dalam [konteks](#context) pada sesi berikutnya, menggantikan memori yang tidak dimiliki oleh model. Ketika agen terus melakukan kesalahan yang sama padahal sudah Anda koreksi sebelumnya, pertanyaannya bukan mengapa agen tidak belajar — karena ia memang tidak bisa — melainkan di mana koreksi tersebut harus ditulis agar setiap sesi baru di masa mendatang dapat membacanya.

_Contoh Penggunaan:_

"Mengapa dia selalu lupa aturan penulisan kode setiap kali saya melakukan [pembersihan (clearing)](#clearing)?"

"Modelnya bersifat stateless — sesi baru dimulai dalam keadaan kosong. Jika Anda ingin aturan itu tetap diingat, tuliskan di AGENTS.md atau file memori yang dimuat oleh sistem penjalan di awal sesi."

### Context

Informasi relevan yang dapat diakses oleh [agen](#agent) saat ini. Ini adalah kata benda abstrak — bukan input mentah yang dibaca oleh model (itu disebut [jendela konteks](#context-window)), bukan pula catatan riwayat obrolan yang sedang berjalan (itu disebut [sesi](#session)), melainkan _apa saja yang diketahui agen yang berkaitan dengan tugasnya_. Istilah "memasukkan sesuatu ke dalam konteks" berarti menambahkan informasi tersebut ke dalam kumpulan pengetahuan aktif agen; sementara "rekayasa konteks" (context engineering) adalah keahlian mengelola dan menyaring informasi tersebut.

Ketiga istilah ini memiliki batasan yang jelas:

| Istilah         | Penjelasan                                                                              |
| --------------- | --------------------------------------------------------------------------------------- |
| Konteks         | Informasi relevan dengan tugas yang saat ini dimiliki oleh agen                         |
| Jendela konteks | Urutan [token](#token) fisik yang dibaca oleh model di setiap permintaan            |
| Sesi            | Catatan riwayat percakapan yang disimpan oleh [harness (sistem penjalan)](#harness) |

Pembedaan ini sangat penting karena kualitas konteks diukur dari mutunya, bukan dari jumlah katanya. Kapasitas jendela konteks bisa saja hampir penuh tetapi kualitas konteksnya sangat buruk — misalnya berisi ribuan token dari hasil keluaran alat pemrograman yang sudah lama dan sama sekali tidak berhubungan dengan tugas saat ini. Sebaliknya, jendela konteks bisa saja hampir kosong tetapi kualitas konteksnya sangat luar biasa: misalnya hanya berisi satu file definisi tipe data penting yang menentukan keberhasilan tugas tersebut.

Sebagian besar kegagalan kerja harian agen disebabkan oleh masalah konteks. Ketika agen mengarang kode API baru, bertentangan dengan keputusan sebelumnya, atau menebak-nebak struktur data, pertanyaan pertama yang harus diajukan adalah apa saja informasi yang ada di dalam konteks saat itu — biasanya fakta penting yang relevan memang belum pernah dimuat, atau terpendam akibat [penurunan perhatian (attention degradation)](#attention-degradation). Solusinya adalah kurasi: muat informasi yang dibutuhkan oleh tugas, dan singkirkan informasi yang tidak diperlukan.

_Contoh Penggunaan:_

"Agen ini terus mengarang kolom data (field) baru yang tidak ada di dalam file definisi tipe datanya."

"File definisi tipe data tersebut belum masuk ke dalam konteks — agen hanya membaca lokasi pemanggilan kodenya lalu menebak-nebak. Coba minta dia membaca definisinya terlebih dahulu."

### Context window

Segala sesuatu yang dapat dibaca dan dianalisis oleh [model](#model) pada setiap [permintaan penyedia model (model provider request)](#model-provider-request). Kapasitasnya terbatas, bersifat spesifik untuk setiap model, dan merupakan _satu-satunya_ jalur bagi model untuk mengetahui segala hal.

Jendela konteks berupa satu barisan urutan [token](#token): mulai dari [system prompt (instruksi sistem)](#system-prompt), riwayat percakapan sejauh ini, hingga setiap [hasil alat (tool result)](#tool-result) yang dikirimkan kembali oleh [harness (sistem penjalan)](#harness). Jika suatu informasi berada di dalam urutan tersebut, model dapat menggunakannya; jika tidak ada, model tidak akan tahu bahwa informasi tersebut eksis — baik itu kode pemrograman Anda, berkas yang Anda edit kemarin, maupun instruksi yang Anda berikan tiga sesi yang lalu. Segala sesuatu yang berada di luar jendela konteks harus dimuat terlebih dahulu, biasanya melalui [panggilan alat (tool call)](#tool-call), sebelum dapat memengaruhi pekerjaan agen.

Kapasitas terbatas (finite) berarti ruang ini bisa penuh. Setiap giliran percakapan akan menambahkan data baru — pesan Anda, jawaban model, dan hasil kerja alat — dan [sesi](#session) obrolan yang panjang pada akhirnya akan mencapai batas kapasitas maksimal, yang memaksa dilakukannya proses [penyusutan (compaction)](#compaction) atau [pembersihan (clearing)](#clearing). Batas ini juga berarti semua informasi di dalamnya akan saling berebut perhatian: setiap token tidak penting yang Anda muat akan mengurangi ruang bagi informasi penting lainnya, dan konten yang tidak dibutuhkan tersebut akan tetap memakan [anggaran perhatian](#attention-budget) model. Langkah praktisnya adalah memperlakukan jendela konteks ini sebagai anggaran belanja — muat hanya apa yang dibutuhkan oleh tugas saat itu, dan biarkan sisanya tetap berada di luar.

_Hindari:_ istilah "memori" (memory) — karena jendela konteks adalah memori kerja aktif sementara yang akan hilang setelah sesi berakhir. [Sistem memori](#memory-system) yang sesungguhnya adalah konsep terpisah yang dibangun di atas jendela konteks untuk menyimpan data antar-sesi.

_Contoh Penggunaan:_

"Bolehkah saya menyalin seluruh isi folder proyek besar ini langsung ke dalam kolom chat?"

"Jendela konteks model ini hanya berkapasitas 200 ribu token — itu mungkin hanya seperlima dari isi proyek Anda. Pilih saja file-file yang berkaitan langsung dengan tugas Anda, dan biarkan file lainnya dimuat otomatis lewat panggilan alat jika dibutuhkan."

### Stateful

Kondisi membawa informasi ke langkah berikutnya. Sebuah [sesi](#session) obrolan bersifat _stateful_ di berbagai [giliran](#turn) pesan — di mana [konteks](#context) akan terus bertambah menumpuk selama sesi berjalan, yang menjadi penyebab mengapa sesi panjang perlahan meluncur ke [zona bodoh (dumb zone)](#smart-zone). Sebuah [agen](#agent) dapat dibuat bersifat _stateful_ lintas **sesi** dengan cara menambahkan [sistem memori (memory system)](#memory-system) yang menyimpan informasi ke dalam [lingkungan kerja](#environment) dan memuatnya kembali di awal sesi berikutnya. [Model](#model) sendiri tidak pernah bersifat stateful; kesinambungan ingatan yang tampak terjadi hanyalah hasil kerja [harness (sistem penjalan)](#harness) yang mengirimkan kembali konteks obrolan lama. Istilah ini merupakan padanan dari [stateless (tidak menyimpan riwayat)](#stateless).

Tempat penyimpanan status (state) pada setiap lapisan sistem:

| Lapisan          | Bersifat Stateful?   | Mekanisme Kerja                                                                                                                                                     |
| ---------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Model            | Tidak pernah         | Kumpulan [parameter](#parameters) bersifat beku; ia hanya membaca apa yang dikirim di setiap pesan                                                              |
| Sesi             | Lintas giliran pesan | Sistem penjalan menambahkan setiap pesan dan [hasil alat (tool result)](#tool-result) ke konteks obrolan                                                      |
| Sistem Penjalan  | Lintas sesi obrolan  | File catatan memori, file [AGENTS.md](#agentsmd), atau [artefak operan (handoff artifact)](#handoff-artifact) ditulis di komputer dan dimuat ulang nanti |
| Lingkungan Kerja | Selalu               | Berkas data tetap bertahan di komputer tidak peduli apakah sesi obrolan sedang berjalan atau mati                                                                   |

Sifat stateful dari setiap lapisan dibangun dengan cara membaca kembali sesuatu yang disimpan di lapisan di bawahnya: sesi obrolan terasa berkesinambungan karena sistem penjalan mengirimkan kembali riwayat pesan ke model yang stateless, dan agen dapat mengingat informasi lintas sesi karena sistem penjalan memuat kembali catatan file dari lingkungan kerja penyimpanan komputer Anda. Tidak ada informasi status yang pernah disimpan di dalam model itu sendiri.

Sifat menyimpan status ini tidak selalu diinginkan. Segala informasi yang dibawa ke depan akan memengaruhi apa yang terjadi berikutnya, sehingga asumsi salah yang dibuat di awal sesi juga akan terus dibawa sepanjang percakapan berjalan. Proses [pembersihan (clearing)](#clearing) adalah tindakan sengaja untuk membuang status sesi obrolan dan memulai kembali tugas secara bersih berdasarkan apa yang tertulis di dokumen rencana kerja.

_Contoh Penggunaan:_

"Dia mengingat preferensi saya kemarin — apakah itu berarti modelnya sudah mempelajari kebiasaan saya?"

"Tidak, agen tersebut bisa mengingatnya karena sistem penjalan (harness) menulis preferensi Anda ke file catatan memori di komputer Anda dan memuatnya kembali saat awal sesi dimulai. Model itu sendiri sama sekali tidak tahu apa yang terjadi kemarin."

### Agent

Sebuah [model](#model) yang dipadukan dengan [harness (sistem penjalan)](#harness) beserta [alat (tools)](#tool), [system prompt (instruksi sistem)](#system-prompt), dan [jendela konteks](#context-window), yang saling bertukar [giliran](#turn) dengan pengguna. _Claude Code adalah sebuah agen. Cursor adalah sebuah agen. Claude.ai adalah sebuah agen._ Agen adalah apa yang sebenarnya Anda ajak bicara — ini adalah model yang sedang aktif dan dikonfigurasi untuk tujuan tertentu.

Berbeda dari sebagian besar istilah dalam kamus ini, "agen" tidak merujuk pada bagian mekanis tertentu. Model adalah file berisi kumpulan [parameter](#parameters); sedangkan harness adalah perangkat lunak yang bisa Anda jalankan. Agen bukanlah salah satu dari itu — melainkan kesatuan yang Anda ajak bicara. Orang-orang sering kali memanusiakan (antropomorfisme) [AI](#ai), dan agen adalah wujud dari pemanusiaan tersebut: sesuatu yang Anda beri tugas, yang membaca pesan Anda lalu menjawabnya, atau kata "dia" dalam kalimat "dia merusak sistem lagi". Saat Anda mengatakan agen melakukan sesuatu, maksud Anda adalah gabungan model-dan-harness yang melakukannya, tetapi Anda menyebut kombinasi tersebut sebagai satu aktor tunggal.

Ide tentang agen ini sebenarnya lebih tua dari gelombang kecerdasan buatan (AI) saat ini. Agen perangkat lunak (software agent) — program yang didelegasikan tugas tertentu untuk bertindak atas nama Anda — telah menjadi konsep yang sudah ada sejak awal perkembangan AI.

_Hindari:_ istilah "AI itu" atau "bot itu" (terlalu samar — istilah ini mengaburkan apakah yang Anda maksud adalah file parameter model atau sistem penjalannya).

_Contoh Penggunaan:_

"Agen mana yang Anda gunakan untuk memindahkan database (migrasi)?"

"Saya pakai Claude Code untuk lokal, dan Cursor untuk pengerjaan tampilan (UI) — model dasarnya sama, hanya sistem penjalannya (harness) saja yang berbeda."

### System prompt

Instruksi dasar yang disematkan oleh [harness (sistem penjalan)](#harness) di awal setiap [permintaan penyedia model (model provider request)](#model-provider-request) — merupakan panduan kerja tetap bagi [agen](#agent): siapa dirinya, bagaimana harus berperilaku, [alat (tool)](#tool) apa saja yang bisa dipanggil, serta aturan apa yang harus diikuti. Biasanya instruksi ini tetap sama sepanjang [sesi](#session) berjalan.

Perintah sistem (system prompt) ditulis oleh pembuat sistem penjalan, bukan oleh Anda. Pada sistem penjalan pemrograman, ukurannya sangat besar — sering kali mencapai puluhan ribu [token](#token) aturan perilaku, penjelasan alat, dan penanganan kasus khusus, yang semuanya harus dibayar sebagai [token masukan (input tokens)](#input-tokens) pada setiap [giliran (turn)](#turn) pesan. Instruksi kerja Anda sendiri juga ikut disertakan bersamanya: berkas-berkas seperti [AGENTS.md](#agentsmd) dimuat di samping perintah sistem pada awal sesi obrolan, sehingga [model](#model) membaca panduan dari pembuat aplikasi sekaligus panduan dari Anda sebelum ia membaca pesan yang Anda kirimkan.

Karena perintah sistem ini sama di setiap permintaan, ia menjadi bagian awal dari [penyimpanan cache awalan (prefix cache)](#prefix-cache) — hal inilah salah satu alasan mengapa sistem penjalan menjaganya tetap konstan sepanjang sesi obrolan daripada mengubahnya di tengah jalan.

Model dilatih untuk memprioritaskan perintah sistem dibanding pesan dari pengguna. Jadi, ketika agen bersikeras menerapkan suatu aturan penulisan yang tidak pernah Anda minta, atau memformat keluaran dengan cara yang sulit diubah, biasanya ia sedang mematuhi perintah sistem miliknya — dan pesan Anda kalah bersaing. Beberapa sistem penjalan dapat disesuaikan: mereka memberi Anda akses penuh ke perintah sistem, sehingga Anda dapat membaca apa yang sebenarnya diinstruksikan kepada agen dan mengubahnya.

_Contoh Penggunaan:_

"Dua sistem penjalan yang berbeda menggunakan model yang sama, tetapi perilakunya sangat berbeda saat diberikan perintah yang sama."

"Itu karena perintah sistem (system prompt) mereka berbeda. Yang satu diatur untuk melakukan perubahan kode secara ringkas, sementara yang lain diatur untuk memberikan penjelasan panjang — di situlah letak perbedaannya, bahkan sebelum pesan Anda dikirim."

### Session

Satu rangkaian batasan interaksi percakapan dengan [agen](#agent). Dimulai dari kosong, kemudian menumpuk pesan, [hasil alat (tool result)](#tool-result), serta file-file yang dibaca, dan berakhir ketika [dibersihkan (clear)](#clearing), ditutup, atau [diringkas (compact)](#compaction) menjadi sesi baru yang bersih. Sesi adalah apa yang _mengisi_ kapasitas [jendela konteks](#context-window): jika jendela konteks diibaratkan sebagai sebuah kotak kardus, maka sesi adalah barang-barang yang perlahan mengisinya hingga penuh. Pekerjaan yang ukurannya terlalu besar untuk satu jendela konteks harus dibagi ke dalam beberapa sesi terpisah.

Catatan riwayat pesan di dalam sesi adalah memori kerja aktif agen. [Model](#model) bersifat [stateless (tidak menyimpan riwayat)](#stateless), sehingga segala hal yang tampaknya diingat oleh model — seperti apa yang Anda minta, apa hasil laporan tes kodenya, atau apa keputusan yang disepakatinya tiga giliran pesan lalu — semuanya disimpan di dalam riwayat pesan tersebut, yang dikirimkan kembali di setiap [permintaan penyedia model (model provider request)](#model-provider-request). Apa pun informasi yang tidak ada di dalam sesi dianggap tidak ada bagi agen.

Memori tersebut akan berakhir bersamaan dengan berakhirnya sesi obrolan. Sesi baru akan dimulai seutuhnya dari nol: agen yang sangat memahami struktur proyek Anda di akhir sesi kemarin sore, tidak akan mengetahui apa pun tentang proyek tersebut di pagi hari ini. Hal yang dapat bertahan permanen hanyalah [sistem file](#filesystem) komputer Anda — file yang ditulis oleh satu sesi obrolan dapat dibaca oleh sesi berikutnya, fitur inilah yang menjadi tumpuan bagi metode [serah terima (handoff)](#handoff), [sistem memori](#memory-system), dan file [AGENTS.md](#agentsmd).

Anda sendiri yang menentukan kapan sesi obrolan harus diakhiri. Segala hal yang ada di dalam sesi akan memengaruhi setiap [giliran](#turn) percakapan berikutnya, sehingga melakukan tugas-tugas berbeda yang tidak saling berhubungan di dalam satu sesi yang sama akan meninggalkan residu informasi yang dapat mengaburkan kualitas jawaban berikutnya. Membatasi satu sesi untuk satu tugas saja akan menjaga konteks obrolan tetap relevan; menyelesaikan suatu tugas adalah momen alami yang paling tepat untuk membersihkan sesi obrolan.

_Contoh Penggunaan:_

"Berapa lama satu sesi obrolan dapat berjalan sebelum kinerjanya menurun?"

"Sangat bergantung pada jenis pekerjaannya — tugas perbaikan kode (refactor) yang terfokus dapat menjaga ketajaman model lebih lama daripada riset terbuka. Begitu sesi obrolan mulai menumpuk dan bising, lakukan serah terima (handoff) atau penyusutan (compact), jangan memaksa melanjutkannya."

### Turn

Satu pesan dari pengguna ditambah semua respon yang dilakukan oleh [agen](#agent) sebagai jawaban, hingga kendali diserahkan kembali kepada pengguna. Giliran pesan (turn) ini berisi satu atau lebih [permintaan penyedia model (model provider requests)](#model-provider-request) — dan bisa sangat banyak jika agen memanggil berbagai [alat (tools)](#tool). Pertanyaan klarifikasi dari agen akan menutup giliran tersebut; jawaban Anda akan membuka giliran berikutnya. Hierarki tingkatannya adalah [sesi](#session) **> Giliran Pesan (Turn) > Permintaan Penyedia Model**.

Hal yang membuat giliran pesan ini penting untuk didefinisikan adalah karena panjangnya ditentukan oleh keputusan agen, bukan oleh Anda. Anda mengirimkan satu pesan; lalu agen memutuskan berapa banyak panggilan alat yang akan dirangkai sebelum ia mengembalikan kendali kepada Anda. Satu giliran pesan bisa berupa jawaban satu kalimat saja, atau proses membaca, mengedit, dan menjalankan pengujian selama dua puluh menit. Karakteristik ini memiliki dua sisi: giliran pesan yang panjang adalah hal yang memungkinkan pengerjaan secara [AFK (jauh dari keyboard)](#afk), tetapi giliran pesan yang panjang juga merupakan tempat di mana masalah dapat terjadi tanpa pengawasan — pada saat agen akhirnya mengembalikan kendali, ia mungkin telah melenceng jauh dari apa yang Anda maksudkan.

Giliran pesan juga merupakan unit alami untuk mengarahkan agen. Semua tindakan di dalam suatu giliran terjadi tanpa campur tangan Anda; jeda di antara giliran pesan adalah momen di mana Anda dapat mengarahkan ulang tindakan agen. Sebagian besar [harness (sistem penjalan)](#harness) mempermudah hal ini: Anda dapat menginterupsi di tengah giliran untuk menghentikan agen dan mengarahkannya kembali, atau mengetik pesan saat ia bekerja, yang akan dibaca setelah gilirannya selesai. Jika Anda berulang kali merasa tidak puas dengan hasil akhir giliran pesan, solusinya biasanya adalah meminta langkah-langkah yang lebih kecil — seperti membuat rencana terlebih dahulu, satu langkah demi satu langkah — menukar sebagian otonomi agen dengan jeda yang lebih sering untuk mengarahkannya.

_Contoh Penggunaan:_

"Satu giliran pesan saja memakan waktu sampai dua menit?"

"Agen melakukan empat belas kali [panggilan alat (tool calls)](#tool-call) di dalam giliran pesan tersebut — masing-masing panggilan adalah permintaan penyedia model yang terpisah. Latensi waktu menumpuk sebelum agen akhirnya mengembalikan kendali kepada Anda."

## Section 3 — Alat & Lingkungan Kerja

### Environment

Dunia tempat [agen](#agent) beraksi — segala sesuatu di luar [harness (sistem penjalan)](#harness) yang dapat dipahami agen melalui [hasil alat (tool result)](#tool-result) dan diubah melalui [panggilan alat (tool call)](#tool-call). Harness berfungsi untuk _menjalankan_ agen; sedangkan lingkungan kerja (environment) adalah tempat agen _melakukan pekerjaannya_. File seperti [`AGENTS.md`](#agentsmd) berada di dalam lingkungan kerja; dan harness-lah yang memuat file tersebut ke dalam [jendela konteks](#context-window). Jenis lingkungan kerja yang paling umum adalah [sistem file](#filesystem) komputer, tetapi bukan satu-satunya (database, API jarak jauh, atau sesi browser web juga bisa menjadi lingkungan kerja).

Agen hanya melihat isi lingkungan kerja ketika ia melakukan pengecekan. Semua informasi yang diketahui agen tentang lingkungan kerja diperoleh melalui hasil alat pemrograman, sehingga gambaran yang dimilikinya seperti kumpulan foto kilas (snapshot) yang akurat pada momen foto itu diambil. Jika suatu file berubah setelah agen membacanya — misalnya Anda mengeditnya secara manual, atau ada proses build yang memperbaruinya — agen akan tetap berpikir menggunakan salinan lama yang sudah kedaluwarsa tersebut sampai ada instruksi untuk membacanya ulang. Kejadian di mana agen mendeskripsikan isi berkas dengan sangat percaya diri padahal aslinya sudah berubah biasanya disebabkan oleh hal ini: isi lingkungan kerja sudah bergeser, tetapi foto kilas milik agen tidak diperbarui.

Lingkungan kerja juga merupakan lapisan yang bertahan permanen — satu-satunya bagian yang selalu bersifat [stateful (menyimpan keadaan/riwayat)](#stateful). Konteks obrolan suatu [sesi](#session) akan lenyap ketika sesi tersebut ditutup, tetapi file-file yang ditulis ke dalam lingkungan kerja akan tetap tersimpan untuk dibaca oleh sesi berikutnya — fitur inilah yang menjadi tumpuan [sistem memori](#memory-system), [artefak operan (handoff artifact)](#handoff-artifact), dan file `AGENTS.md`. Segala sesuatu yang harus tetap diketahui oleh agen esok hari wajib disimpan di dalam lingkungan kerja.

Anda sendiri yang menentukan seberapa luas jangkauan lingkungan kerja ini. Sebuah [sandbox (lingkungan terisolasi)](#sandbox) akan memperkecil jangkauan tersebut untuk membatasi apa saja yang boleh disentuh agen; sementara penambahan [alat (tool)](#tool) baru akan memperluas jangkauan tersebut, misalnya membuat database atau API eksternal dapat diakses oleh agen. Segala hal yang berada di dalam batas jangkauan adalah apa yang bisa dipahami dan diubah oleh agen; segala hal di luar batas tersebut dianggap tidak ada bagi agen. Seberapa baik lingkungan kerja disiapkan untuk mendukung tugas agen adalah ukuran kualitas [AX (pengalaman agen)](#ax) dari proyek tersebut.

_Hindari:_ menggunakan istilah "lingkungan" (environment) untuk merujuk pada runtime atau harness itu sendiri — karena harness adalah pembungkusnya, sedangkan lingkungan adalah area kerjanya.

_Contoh Penggunaan:_

"Agen tidak bisa melihat struktur data database staging kita."

"Hubungkan database itu ke lingkungan kerja agen — berikan dia alat `psql` dengan akses hanya-baca (read-only) ke database staging. Sistem penjalannya (harness) sudah baik, dia hanya tidak memiliki akses lingkungan untuk bekerja."

### Filesystem

Struktur pohon direktori dan file tempat [agen](#agent) membaca data, menulis perubahan, dan menjalankan perintah pemrograman — yang merupakan jenis [lingkungan kerja](#environment) bawaan (default) bagi agen coding. File seperti [AGENTS.md](#agentsmd), modul [keahlian (skills)](#skill), kode program aplikasi, skrip kompilasi (build), dan konfigurasi [alat (tool)](#tool) semuanya disimpan di dalam sistem file komputer. Ketika sebuah [harness (sistem penjalan)](#harness) "berjalan di proyek Anda", sistem tersebut sebenarnya sedang mengarahkan agen ke sistem file tersebut.

Agen hanya berinteraksi dengan sistem file melalui [panggilan alat (tool call)](#tool-call) — seperti membaca berkas, menulis berkas, atau menjalankan perintah baris shell. Tidak ada data di dalam penyimpanan komputer (disk) yang langsung masuk ke dalam [jendela konteks](#context-window) sebelum dimuat oleh panggilan alat. Fitur ini memungkinkan agen bekerja di dalam proyek besar yang ukurannya jauh melampaui kapasitas jendela konteks: sistem file menampung semua file proyek, sementara jendela konteks hanya menyimpan berkas yang dibaca untuk tugas aktif saat itu. Beberapa sistem penjalan memang memuat nama-nama file di direktori kerja ke dalam jendela konteks sejak awal — bukan isi filenya, hanya daftar nama pohon direktorinya saja — yang berfungsi sebagai [penunjuk konteks (context pointer)](#context-pointer): agen dapat melihat file apa saja yang tersedia lalu membaca berkas yang dibutuhkannya.

Dan area kerja ini dibagi bersama Anda. Berkas yang diedit oleh agen adalah berkas yang sama yang Anda buka di aplikasi editor kode dan Anda periksa perubahannya menggunakan git — sistem file komputer adalah ruang kerja bersama tempat Anda meninjau hasil kerja agen.

_Contoh Penggunaan:_

"Kenapa dia tidak membaca file `AGENTS.md` milik saya?"

"Dia berjalan di sistem file yang berbeda — sistem [sandbox (lingkungan terisolasi)](#sandbox) memuat folder induknya, bukan folder utama proyek Anda. Coba arahkan kembali sistem penjalannya (harness)."

### Tool

Sebuah fungsi yang disediakan oleh [harness (sistem penjalan)](#harness) untuk dipanggil oleh [agen](#agent) — seperti Baca (Read), Tulis (Write), Bash, atau Cari (Search). Alat (tool) adalah cara agen merasakan dan bertindak pada [lingkungan kerja (environment)](#environment): agen tidak dapat melihat lingkungan kerja kecuali melalui [hasil alat (tool result)](#tool-result), dan tidak dapat mengubahnya kecuali melalui [panggilan alat (tool call)](#tool-call). Setiap panggilan alat membutuhkan biaya tambahan berupa satu [permintaan penyedia model (model provider request)](#model-provider-request), karena hasilnya harus dikirim kembali ke model sebelum model dapat memutuskan langkah berikutnya.

Alat-alat yang biasanya disediakan pada sebagian besar agen pemrograman:

| Alat          | Kegunaan                                                                        |
| ------------- | ------------------------------------------------------------------------------- |
| Baca (Read)   | Mengembalikan isi file sebagai hasil alat                                       |
| Tulis (Write) | Membuat atau mengedit file di dalam [sistem file (filesystem)](#filesystem) |
| Bash          | Menjalankan perintah shell dan mengembalikan keluarannya                        |
| Cari (Search) | Menemukan file atau teks yang cocok dengan pola tertentu di seluruh basis kode  |

Sebuah alat ditentukan oleh tiga hal: nama alat, penjelasan tentang apa yang dilakukannya, dan skema untuk parameternya. Sistem penjalan mengirimkan definisi alat ini ke [model](#model) bersama setiap permintaan, dan model memilih alat tersebut dengan cara yang sama seperti ia menghasilkan hal lainnya — yaitu dengan menulis [token](#token), dalam hal ini panggilan terstruktur beserta argumennya. Model sendiri tidak pernah mengeksekusi tindakan apa pun; sistem penjalan yang membaca panggilan tersebut, menjalankan fungsinya, dan mengirimkan kembali hasilnya.

Daftar alat menentukan batas kemampuan yang dapat dilakukan oleh agen. Model yang andal sekalipun jika hanya dibekali dengan set alat yang terbatas akan menjadi agen yang terbatas pula: ia akan mencoba menyelesaikan segala hal menggunakan alat yang dimilikinya saja, itulah alasan mengapa agen sangat bergantung pada Bash — shell adalah satu alat serbaguna yang dapat menjangkau sebagian besar sistem. Untuk memberikan kemampuan baru kepada agen secara bersih, Anda dapat menambahkan alat baru; protokol [MCP](#mcp) adalah standar untuk menghubungkan alat-alat baru dari luar sistem penjalan.

Definisi alat memakan kapasitas [konteks](#context) pada setiap permintaan, sehingga kumpulan alat yang besar memiliki biaya token tetap sebelum alat apa pun sempat dipanggil — selain itu, terlalu banyak alat dengan penjelasan yang mirip akan membuat model kesulitan memilih alat yang tepat.

_Contoh Penggunaan:_

"Apakah agen dapat menanyakan data ke peladen uji coba (staging) secara langsung?"

"Tambahkan alat `psql` ke sistem penjalan, dengan batasan akses hanya-baca pada peladen staging. Tanpa adanya alat khusus untuk itu, agen tidak akan bisa melihat apa pun di luar sistem file."

### Tool call

Keluaran [model](#model) yang menyebutkan nama [alat (tool)](#tool) beserta argumennya — yang sesungguhnya hanyalah teks terstruktur. Keluaran ini tidak melakukan apa-apa dengan sendirinya; [harness (sistem penjalan)](#harness) yang harus membaca teks tersebut dan menjalankannya. Dihasilkan oleh model dalam satu [permintaan penyedia model (model provider request)](#model-provider-request).

Siklus hidup panggilan alat:

| Langkah | Siapa   | Apa yang terjadi                                                                                                    |
| ------- | ------- | ------------------------------------------------------------------------------------------------------------------- |
| 1       | Model   | Mengetahui alat apa saja yang ada berdasarkan penjelasan di [perintah sistem (system prompt)](#system-prompt) |
| 2       | Model   | Mengeluarkan panggilan — nama alat beserta argumennya, biasanya dalam format JSON — lalu berhenti                   |
| 3       | Harness | Mengurai (parse) panggilan tersebut dan mencocokkannya dengan [mode izin (permission mode)](#permission-mode) |
| 4       | Harness | Menjalankannya jika diizinkan                                                                                       |
| 5       | Harness | Mengirimkan hasilnya kembali sebagai [hasil alat (tool result)](#tool-result) pada permintaan berikutnya      |

Satu [giliran (turn)](#turn) pengerjaan [agen](#agent) biasanya terdiri dari banyak siklus bolak-balik seperti ini yang dirangkai bersama.

Karena panggilan alat dihasilkan melalui proses [prediksi token berikutnya (next-token prediction)](#next-token-prediction) seperti halnya teks biasa, panggilan ini bisa saja salah dengan cara yang sama seperti kesalahan keluaran model lainnya: jalur (path) file yang tidak ada, bendera perintah (flag) yang tidak dimiliki oleh perintah tersebut, atau argumen yang sekadar terlihat meyakinkan tetapi tidak tepat. Sistem penjalan menjalankan apa yang tertulis, bukan apa yang dimaksudkan oleh model — kesalahan pengetikan jalur file tidak akan ditangani secara anggun, melainkan akan mengedit file yang salah.

_Contoh Penggunaan:_

"Ia mengatakan telah menjalankan pengujian (test), tetapi stempel waktu (timestamp) file tidak berubah."

"Coba periksa transkrip obrolannya — apakah ia benar-benar mengeluarkan panggilan alat, or hanya menulis kalimat penjelasan seolah-olah ia sedang menjalankannya? Model menghasilkan panggilan alat tersebut, tetapi jika sistem penjalan tidak mengeksekusinya, maka tidak ada tindakan yang benar-benar terjadi."

### Tool result

Apa yang dikirim balik oleh [harness (sistem penjalan)](#harness) setelah menjalankan [panggilan alat (tool call)](#tool-call) — dapat berupa isi file, keluaran perintah, atau pesan kesalahan. Ini adalah satu-satunya jendela bagi [agen](#agent) untuk melihat [lingkungan kerja (environment)](#environment). Data hasil ini dikirim kembali ke [model](#model) pada [permintaan penyedia model (model provider request)](#model-provider-request) _berikutnya_, di mana model akan memutuskan apa yang harus dilakukan setelahnya. Panggilan alat dan hasil alat adalah dua bagian dari pertukaran informasi yang sama di dalam satu [giliran (turn)](#turn).

Siklus hidup hasil alat:

| Langkah | Siapa   | Apa yang terjadi                                                                                    |
| ------- | ------- | --------------------------------------------------------------------------------------------------- |
| 1       | Harness | Menjalankan panggilan alat — mengeksekusi perintah, membaca file                                    |
| 2       | Harness | Menangkap hasil akhir: keluaran teks, isi berkas, atau pesan kesalahan                              |
| 3       | Harness | Menambahkan hasil tersebut ke [konteks](#context) sebagai sebuah pesan                          |
| 4       | Harness | Mengirimkan seluruh konteks ke penyedia model dalam permintaan penyedia model berikutnya            |
| 5       | Model   | Membaca hasil tersebut dan memutuskan: melakukan panggilan alat lain, atau memberikan jawaban akhir |

Hasil alat ini akan tetap berada di dalam konteks sepanjang sisa waktu [sesi](#session) obrolan berjalan. Hasil alat biasanya merupakan bagian terbesar dari konteks sesi pemrograman: setiap pembacaan file, setiap jalannya pengujian, dan setiap pencarian akan masuk secara utuh ke dalam konteks dan terus memakan kapasitas [token](#token) lama setelah informasi tersebut tidak lagi berguna. Beberapa hasil alat yang berukuran besar — seperti log pengujian yang sangat panjang atau pembacaan file besar yang diunggah secara utuh — dapat mendorong sesi obrolan mendekati batas kapasitas [jendela konteks (context window)](#context-window) jauh lebih cepat daripada obrolan itu sendiri.

Karena hasil alat adalah satu-satunya hal yang dilihat oleh model, model tidak memiliki cara untuk memeriksa lingkungan kerja nyata di baliknya. Jika keluaran terpotong, perintah gagal secara diam-diam, atau sistem penjalan mengembalikan pesan kesalahan alih-alih isi berkas, model akan mengambil kesimpulan hanya berdasarkan apa yang diberikan kepadanya. Ketika gambaran agen tentang sistem Anda tampak keliru, hasil alat adalah tempat pertama yang harus Anda periksa: di dalam transkrip obrolan pasti terdapat suatu hasil alat yang memberikan informasi yang berbeda dari kenyataan sebenarnya.

_Contoh Penggunaan:_

"Ia menganalisis file tersebut seolah-olah filenya kosong."

"Itu karena hasil alat (tool result) yang dikembalikan adalah pesan penolakan izin akses, bukan isi berkasnya. Model hanya melihat teks kesalahan tersebut — ia tidak punya cara lain untuk melihat berkasnya."

### MCP

**Model Context Protocol.** Sebuah protokol standar untuk menghubungkan server alat pemrograman luar ke dalam [harness (sistem penjalan)](#harness) — yang menjadi cara bagi [agen](#agent) untuk mendapatkan [alat (tools)](#tool) tambahan di luar alat bawaan yang disediakan oleh sistem penjalan. Agen tidak pernah secara langsung "memanggil MCP"; ia hanya memanggil suatu alat, dan sistem penjalan kebetulan mendapatkan alat tersebut dari sebuah server MCP. Protokol ini juga menyediakan sumber daya (data hanya-baca) dan perintah (templat yang bisa digunakan kembali), namun penyediaan alat adalah fungsi utamanya.

Protokol ini memecahkan masalah integrasi. Tanpa adanya standar ini, setiap sistem penjalan harus membuat integrasi khusus sendiri-sendiri untuk Linear, Slack, database, dll — yang ditulis dan dipelihara secara terpisah untuk setiap aplikasi. Dengan adanya MCP, integrasi cukup ditulis sekali saja sebagai server MCP, dan sistem penjalan apa pun yang mendukung standar MCP dapat langsung menggunakannya. Sistem penjalan akan terhubung ke server tersebut, server akan mengumumkan alat apa saja yang ditawarkannya, dan alat-alat tersebut akan langsung tersedia bagi agen bersanding dengan alat bawaan sistem.

Biaya penggunaan fitur ini dibayar menggunakan kapasitas [konteks](#context). Setiap alat yang diumumkan oleh server MCP menyertakan definisinya — seperti nama, deskripsi, dan struktur parameternya — sementara [model](#model) hanya dapat memanggil alat yang diketahuinya saja. Pendekatan sederhana biasanya memuat seluruh definisi alat ini ke dalam [jendela konteks](#context-window) sejak awal: jika Anda memasang beberapa server MCP sekaligus, [sesi](#session) baru Anda akan langsung dimulai dengan beban ribuan [token](#token) dari skema alat bahkan sebelum Anda mengetikkan pesan apa pun, menghabiskan [anggaran perhatian](#attention-budget) model untuk alat-alat yang mungkin tidak akan pernah digunakan dalam tugas tersebut.

Banyak sistem penjalan sekarang menyiasati hal ini dengan fitur pencarian alat (tool search): alih-alih memuat seluruh definisi alat sejak awal, jendela konteks hanya menyimpan [penunjuk konteks (context pointer)](#context-pointer) ke alat-alat yang tersedia — agen akan mencari alat berdasarkan nama atau fungsinya, dan baru memuat definisi lengkap alat tersebut hanya ketika ia akan menggunakannya. Jika sistem penjalan Anda tidak mendukung fitur ini, biaya token di awal akan tetap terhitung, dan sebaiknya Anda hanya mengaktifkan server MCP yang benar-benar dibutuhkan oleh proyek saja.

_Contoh Penggunaan:_

"Agen perlu membaca tiket bantuan dari aplikasi Linear."

"Konfigurasikan sistem penjalan agar terhubung ke server MCP Linear — server ini akan menyediakan API Linear sebagai alat yang dapat dipanggil oleh agen. Cara ini menghemat waktu Anda daripada harus menulis pembungkus alat khusus."

### Permission request

Informasi yang ditampilkan oleh [harness (sistem penjalan)](#harness) kepada pengguna sebelum mengeksekusi perintah [panggilan alat (tool call)](#tool-call) yang belum disetujui sebelumnya. [Model](#model) menghasilkan perintah panggilan alat; alih-alih langsung menjalankannya, sistem penjalan akan berhenti sejenak dan meminta konfirmasi Anda. Jika Anda menyetujuinya (approve), perintah akan dijalankan; jika Anda menolaknya (deny), sistem penjalan akan melaporkan penolakan tersebut kembali ke model sebagai [hasil alat (tool result)](#tool-result). Ini adalah mekanisme utama yang digunakan sistem penjalan untuk menyertakan manusia dalam [lingkaran pendampingan (human-in-the-loop)](#human-in-the-loop) untuk tindakan yang sensitif atau berisiko.

Siklus hidup dari suatu permintaan izin:

| Langkah | Aktor           | Proses yang Terjadi                                                                                                                 |
| ------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 1       | Model           | Menghasilkan panggilan alat (tool call)                                                                                             |
| 2       | Sistem Penjalan | Memeriksa panggilan alat terhadap [mode izin (permission mode)](#permission-mode) aktif dan daftar persetujuan yang tersimpan |
| 3       | Sistem Penjalan | Disetujui sebelumnya: langsung dijalankan. Jika tidak: berhenti sejenak dan menampilkan permintaan izin di layar                    |
| 4       | Pengguna        | Menyetujui sekali, menyetujui untuk sisa [sesi](#session) obrolan, atau menolak tindakan                                        |
| 5       | Sistem Penjalan | Mengeksekusi panggilan alat tersebut, atau mengirimkan status penolakan kembali sebagai hasil alat                                  |

Tindakan menolak permintaan izin dapat mengarahkan tindakan agen. Model membaca status penolakan tersebut seperti hasil kerja alat lainnya dan bereaksi terhadapnya — ia akan mencoba pendekatan lain atau bertanya apa yang lebih Anda sukai. Sebagian besar sistem penjalan memungkinkan Anda melampirkan pesan catatan saat melakukan penolakan, yang mengubah momen penolakan tersebut menjadi poin pengarahan: pesan seperti "jangan gunakan perintah itu, gunakan skrip migrasi database saja" akan tiba tepat saat model sedang menentukan langkah apa yang harus diambil selanjutnya.

Konsekuensinya adalah setiap permintaan izin akan membuat proses kerja terhenti untuk menunggu respon sinkron dari Anda. Sang [agen](#agent) akan berada dalam kondisi terblokir (blocked) sampai Anda memberikan jawaban, hal ini tidak masalah jika Anda sedang berada di depan layar, namun menjadi masalah jika Anda sedang pergi — agen yang terus-menerus memicu permintaan izin tidak akan bisa ditinggal bekerja secara mandiri ([AFK](#afk)). Mode perizinan adalah tombol pengaturnya: menentukan perintah mana yang boleh berjalan bebas dan mana yang harus bertanya terlebih dahulu, idealnya dengan dibantu sistem [sandbox (lingkungan terisolasi)](#sandbox) agar aman memperluas daftar alat yang berjalan bebas.

_Contoh Penggunaan:_

"Agen ini terhenti menunggu permintaan izin selama sepuluh menit — tadi saya sedang rapat."

"Itulah konsekuensi dari metode keterlibatan manusia (human-in-the-loop). Berikan persetujuan di awal untuk [alat (tools)](#tool) yang aman, sehingga permintaan izin di layar hanya muncul untuk tindakan yang benar-benar berisiko."

### Permission mode

Bagian penyaring izin (permission-gating) dari suatu [mode agen](#agent-mode) — menentukan [panggilan alat (tool call)](#tool-call) mana saja yang wajib memicu [permintaan izin (permission request)](#permission-request) dan mana saja yang boleh berjalan secara otomatis. Ini adalah tujuan awal dari dibuatnya sistem mode sebelum [harness (sistem penjalan)](#harness) mulai menyertakan paket instruksi perilaku di atasnya.

Sistem penjalan menyediakan tingkatan tangga dari mode-mode berikut:

| Mode                    | Membaca File (Reads) | Menulis File & Perintah Shell (Writes) | Skenario Penggunaan                                                                  |
| ----------------------- | -------------------- | -------------------------------------- | ------------------------------------------------------------------------------------ |
| Hanya-baca / rencana    | Otomatis             | Diblokir                               | Riset, perencanaan, meninjau kode                                                    |
| Bawaan (Default)        | Otomatis             | Meminta izin                           | Pekerjaan terbimbing sehari-hari                                                     |
| Edit Otomatis           | Otomatis             | Menulis otomatis, shell minta izin     | Proyek tepercaya, perubahan mekanis                                                  |
| "Yolo" / Otomatis Penuh | Otomatis             | Otomatis                               | [Sandbox (lingkungan terisolasi)](#sandbox), pengerjaan otomatis [AFK](#afk) |

Memilih anak tangga perizinan adalah kompromi antara tingkat keamanan dengan kenyamanan kerja (bebas gangguan), dan kedua sisi ekstremnya memiliki konsekuensi buruk. Jika aturan disetel terlalu ketat, Anda akan menjadi penghambat kerja (bottleneck): sang [agen](#agent) akan terus berhenti setiap beberapa detik hanya untuk membaca file yang aman, membuat Anda menyetujui izin secara refleks (autopilot), dan persetujuan tersebut akhirnya kehilangan esensi pengawasannya — persetujuan autopilot adalah kondisi terburuk: Anda terganggu terus-menerus tanpa mendapatkan perlindungan keamanan yang nyata. Sebaliknya, jika aturan disetel terlalu longgar, agen dapat mengedit file dan menjalankan perintah komputer yang seharusnya Anda periksa terlebih dahulu sebelum dijalankan.

Aturan perizinan yang longgar paling aman diterapkan di dalam lingkungan terisolasi (sandbox), di mana dampak buruk dari kesalahan panggilan [alat (tool)](#tool) dapat dibatasi di dalam wadah isolasi. Di luar lingkungan terisolasi, sebagian besar pengguna memilih untuk otomatis menyetujui proses membaca file (read) dan tetap menerapkan prinsip [human-in-the-loop (keterlibatan manusia)](#human-in-the-loop) untuk tindakan menulis (write) atau perintah shell yang tidak dapat dibatalkan.

_Contoh Penggunaan:_

"Dia berhenti di setiap pencarian grep — benar-benar merusak sesi kerja otomatis (AFK) kita."

"Longgarkan mode perizinan untuk alat-alat yang hanya membaca file (read-only), dan tetap minta konfirmasi untuk penulisan file dan perintah shell. Sebagian besar permintaan izin pada [sesi](#session) riset hanyalah gangguan yang tidak perlu."

### Agent mode

Sebuah pengaturan awal (preset) yang menentukan cara kerja [agen](#agent) saat berjalan — menggabungkan [mode izin](#permission-mode) dengan instruksi perilaku yang dimasukkan ke dalam [system prompt (instruksi sistem)](#system-prompt). Contohnya: pengaturan bawaan (default) yang meminta konfirmasi Anda untuk tindakan berisiko, **mode rencana (plan mode)** yang memblokir perubahan kode dan mengarahkan agen untuk riset, mode **terima edit (accept-edits)** yang menyetujui perubahan secara otomatis, atau mode **lewati izin (bypass permissions)** (sering disebut **mode YOLO**) yang otomatis menyetujui semua tindakan. Mode ini dapat diganti di [tengah sesi](#session) yang sedang berjalan.

Penggabungan inilah yang membedakan sebuah "mode" dengan pengaturan izin biasa. Pengaturan izin biasa hanya berfungsi seperti gerbang pintu: ia menentukan [panggilan alat (tool call)](#tool-call) mana saja yang boleh lewat. Gerbang saja hanya akan menghasilkan agen yang ingin mengubah kode tetapi terhalang — ia mencoba menulis file, diblokir, lalu mencoba cara lain. Namun, instruksi perilaku yang ditambahkan akan menghilangkan keinginan tersebut: mode rencana tidak hanya memblokir penulisan file, tetapi juga memberi tahu agen bahwa ia sedang dalam fase perencanaan, sehingga ia akan membaca kode, bertanya, dan mengajukan rencana daripada bersikeras menembus gerbang izin. Gerbang dan arahan bekerja secara selaras.

Dalam praktiknya, Anda akan mengubah mode ini seiring dengan berubahnya tingkat kepercayaan Anda selama pengerjaan suatu tugas. Tugas yang sama dapat melewati beberapa mode: mode rencana saat pendekatan solusi masih dirumuskan, mode bawaan yang meminta konfirmasi untuk perubahan sensitif pertama, mode terima-edit setelah agen menunjukkan pemahaman terhadap tugasnya, dan mode lewati izin untuk menjalankan agen secara [AFK (away from keyboard)](#afk) di dalam [sandbox (lingkungan terisolasi)](#sandbox). Mengubah mode tidak mengganggu sesi Anda: percakapan berlanjut di tempat terakhir dengan aturan perizinan dan instruksi perilaku yang baru. Jika Anda mendapati diri Anda menyetujui setiap permintaan izin tanpa membacanya terlebih dahulu, itu tandanya mode perizinan disetel terlalu ketat dibanding kepercayaan Anda; jika Anda terus-menerus menolak editan, berarti modenya terlalu longgar.

_Istilah vendor:_ Claude Code menyebutnya "mode perizinan" (permission modes), sedangkan Codex menyebutnya "mode persetujuan" (approval modes) — kedua istilah ini lahir sebelum adanya fitur penggabungan perilaku.

_Contoh Penggunaan:_

"Agen ini terus mengedit file padahal saya hanya ingin dia membuat rencana saja."

"Ubah ke mode rencana (plan mode) — modenya akan memblokir proses menulis berkas dan agen akan tetap fokus melakukan riset."

"Bagaimana untuk pengerjaan otomatis (AFK) nanti?"

"Gunakan mode lewati izin (bypass mode), tapi pastikan hanya dilakukan di dalam lingkungan terisolasi (sandbox)."

### Sandbox

Sebuah [lingkungan kerja](#environment) terisolasi tempat [agen](#agent) dijalankan — dapat berupa kontainer (container), mesin virtual (VM), [sistem file](#filesystem) sementara (ephemeral), atau baris shell dengan izin terbatas. Berfungsi untuk membatasi dampak kerusakan (blast radius) dari tindakan agen: bahkan jika agen tidak sengaja menjalankan perintah yang merusak atau mengunduh berkas berbahaya, kerusakan tersebut akan tetap terisolasi di dalamnya. Ini adalah fondasi keamanan utama yang membuat pengerjaan otomatis [AFK](#afk) aman dilakukan.

Sistem sandbox dan [mode izin (permission mode)](#permission-mode) menyelesaikan masalah keamanan yang sama dari dua sisi yang berbeda. Sistem perizinan akan bertanya kepada Anda sebelum suatu tindakan dijalankan; sedangkan sandbox membatasi apa saja objek yang bisa dijangkau oleh tindakan tersebut jika ia berjalan. Sistem perizinan mengharuskan Anda untuk terus berada di dalam [lingkaran pendampingan (human-in-the-loop)](#human-in-the-loop) — di mana setiap konfirmasi izin adalah gangguan fokus — dan sesi obrolan yang selalu meminta izin tidak akan bisa bekerja mandiri. Sebaliknya, sandbox mengandalkan infrastruktur komputer daripada menyita perhatian Anda: semakin kuat tingkat isolasinya, semakin sedikit pertanyaan izin yang perlu diajukan ke layar Anda.

Tingkat isolasi dibagi menjadi beberapa tingkatan:

| Tingkat Isolasi            | Deskripsi Teknis                                                                          | Lingkup Kerusakan yang Terisolasi                                   |
| -------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Shell Terbatas             | Pembatasan di tingkat OS di sekitar setiap perintah                                       | Penulisan data di luar proyek utama, akses jaringan internet        |
| Kontainer (Container)      | Sistem file baru yang segar, tanpa kredensial terpasang, langsung dibuang setelah selesai | Segala tindakan yang dilakukan agen terhadap mesin kerjanya sendiri |
| Mesin Virtual (VM) / Cloud | Komputer terpisah seutuhnya, biasanya disediakan langsung oleh sistem penjalan            | Semua tindakan, termasuk upaya pembobolan sistem di tingkat kernel  |

Satu hal yang tidak bisa dicegah oleh sandbox: tindakan agen yang keluar dari batas sandbox secara sah. Agen yang dibekali dengan kredensial git Anda tetap bisa mengirimkan perubahan kode (push) ke server utama; agen yang diberi akses internet tetap bisa memanggil API sistem produksi yang aktif. Tentukan terlebih dahulu informasi apa saja yang boleh melewati batas wilayah terisolasi sebelum menentukan seberapa tebal dinding isolasi yang akan dibangun.

_Contoh Penggunaan:_

"Saya ingin membiarkan agen berjalan semalaman dengan mode [melewati izin (bypass-permissions)](#agent-mode), tetapi saya belum siap secara mental untuk mengambil risiko itu."

"Letakkan agen di dalam sandbox — gunakan kontainer baru, tanpa kredensial yang terpasang, dan matikan akses jaringan keluar. Kasus terburuknya dia hanya akan menghancurkan sistem filenya sendiri dan Anda tinggal membuang kontainer tersebut."

## Section 4 — Mode Kegagalan

### Sycophancy

Kecenderungan keluaran [model](#model) untuk selalu setuju dengan pengguna secara meyakinkan (sikap ABS/Asal Bapak Senang). Hal ini disebabkan oleh proses [pelatihan (training)](#training): model dibentuk untuk mengutamakan jawaban yang disukai manusia, dan manusia cenderung lebih menyukai persetujuan daripada diberi tahu bahwa mereka salah. Oleh karena itu, model mempelajari bahwa memberikan persetujuan akan mendatangkan imbalan — bahkan ketika persetujuan tersebut sebenarnya salah.

_Bentuk Gejalanya:_

- _Mengalah saat ditekan_ — mengubah jawaban yang benar menjadi salah ketika Anda bertanya "apakah kamu yakin?".
- _Memuji masukan yang buruk_ — menyetujui bahwa rencana Anda yang rusak adalah ide cemerlang sebelum menganalisisnya secara objektif.
- _Bingkai yang bias_ — hasil tinjauan condong positif ketika Anda memberi isyarat bahwa Anda yang menulis kodenya; dan condong negatif ketika Anda mengisyaratkan orang lain yang menulisnya. Artefak yang sama, tetapi menghasilkan penilaian yang berbeda.
- _Meniru_ — mengulangi kesalahan Anda kembali kepada Anda sebagai bentuk konfirmasi persetujuan.

_Uji Diagnostik:_ apakah model akan mengatakan hal ini tanpa adanya arahan dari Anda? Jika satu-satunya hal yang berubah adalah nada bicara atau cara Anda membingkai pertanyaan, maka itu adalah perilaku sycophancy, bukan perubahan analisis yang nyata.

_Solusi:_ sembunyikan preferensi Anda. Tuliskan perintah secara netral — gunakan "tinjau kode ini" alih-alih "apakah kode ini bagus?".

_Hindari:_ menggunakan istilah "sycophancy" untuk setiap jawaban salah yang kebetulan menyenangkan Anda. Tanpa uji diagnostik, istilah tersebut tidak memiliki nilai lebih dari sekadar kata "salah".

_Contoh Penggunaan:_

"Ia mengatakan rencana perubahan struktur kode (refactor) saya terlihat bagus, tetapi saat saya bertanya 'apakah kamu yakin?', ia langsung menarik kembali seluruh ucapannya."

"Itu adalah contoh klasik sycophancy — ia setuju di awal karena Anda terdengar yakin, lalu mengalah karena Anda terdengar ragu. Kualitas rencana Anda tidak berubah, yang berubah hanyalah nada bicara Anda. Lakukan [pembersihan (clearing)](#clearing) dan tanyakan kembali tanpa menunjukkan isyarat keyakinan atau keraguan."

### Hallucination

Keluaran dari [model](#model) yang salah, tetapi disajikan dengan sangat meyakinkan. Ada dua jenis kesalahan dengan penyebab dan solusi yang berbeda:

| Jenis                      | Bentuk Kesalahan                                                                                                                                    | Penyebab                                                                                                                                                                      | Solusi                                                                                                       |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| _Faktualitas (Factuality)_ | Informasi atau fakta yang salah atau dikarang sendiri — seperti fungsi kode yang sebenarnya tidak ada, struktur API yang salah, atau rujukan palsu. | Celah dalam [pengetahuan parametrik](#parametric-knowledge) model, sering kali karena melewati tanggal [batas pengetahuan (knowledge cutoff)](#knowledge-cutoff). | Muat [pengetahuan kontekstual (contextual knowledge)](#contextual-knowledge) yang tepat.               |
| _Kesetiaan (Faithfulness)_ | Hasil kerja melenceng dari pengetahuan kontekstual yang dimuat, instruksi dari pengguna, atau alur logika yang dibuat model sebelumnya.             | [Penurunan perhatian (attention degradation)](#attention-degradation); kualitas kerja memburuk di [zona bodoh (dumb zone)](#smart-zone).                          | Lakukan [bersihkan (clear)](#clearing) sesi obrolan atau [ringkas (compact)](#compaction) informasi. |

Proses [prediksi token berikutnya (next-token prediction)](#next-token-prediction) menghasilkan teks yang lancar mengalir tidak peduli apakah fakta di baliknya nyata atau tidak — model tidak memiliki sistem peringatan internal jika ia tidak mengetahui sesuatu, sehingga fungsi kode hasil karangan akan ditampilkan dengan gaya bahasa meyakinkan yang sama persis seperti kode yang benar. Kode halusinasi dirancang agar terlihat masuk akal: bentuk kodenya persis seperti apa yang _seharusnya_ terlihat jika API tersebut memang ada, dan inilah yang membuatnya mudah lolos dari peninjauan sekilas dan baru ketahuan salah saat dijalankan.

Anda harus tahu jenis halusinasi mana yang sedang Anda hadapi, karena solusi untuk jenis yang satu justru akan memperburuk jenis yang lainnya. Masalah faktualitas berarti model kekurangan pengetahuan: solusinya adalah menambahkan konteks — seperti dokumen panduan, file definisi tipe data, atau berkas kode terkait. Masalah kesetiaan berarti pengetahuan tersebut sebenarnya sudah ada tetapi kalah berebut perhatian: solusinya adalah mengurangi konteks obrolan. Salah mendiagnosis masalah kesetiaan sebagai masalah faktualitas akan membuat Anda menempelkan lebih banyak dokumen baru, yang justru memperluas konteks dan memperparah masalah kelencengan tersebut. Ketika agen membuat kesalahan, periksa terlebih dahulu apakah informasi yang benar sebenarnya sudah ada di dalam konteks obrolan sebelum menentukan solusi mana yang harus diambil.

_Hindari:_ menggunakan istilah "halusinasi" begitu saja sebagai sinonim dari kata "salah" — karena tanpa menyebutkan jenisnya, istilah tersebut tidak memiliki nilai diagnosis untuk membantu penyelesaian masalah.

_Contoh Penggunaan:_

"Dia mengarang metode `parseAsync` pada aturan schema kita."

"Apakah itu masalah faktualitas atau kesetiaan?"

"Metode itu sebenarnya ada di dokumen panduan yang saya tempel — dia hanya berhenti membacanya setelah [giliran](#turn) percakapan ke-40."

"Berarti itu masalah kesetiaan. Lakukan penyusutan (compact) dan muat ulang obrolan, tidak perlu menambahkan dokumen panduan lagi."

### Parametric knowledge

Apa yang "diketahui" oleh [model](#model) dari proses [pelatihan (training)](#training), yang disimpan di dalam kumpulan [parameter](#parameters)-nya. Dibekukan pada saat pelatihan selesai — model tidak dapat melihat isi parameternya secara langsung ataupun memperbaruinya. Ada detail yang terbuang dalam proses perapatan data: miliaran fakta dipadatkan ke dalam jumlah parameter yang terbatas, sehingga fakta-fakta yang jarang muncul akan menjadi kabur. Ini adalah sumber kelancaran model dalam menjelaskan topik umum, sekaligus penyebab terjadinya karangan fakta (fabrikasi) pada topik yang tidak umum. Istilah ini merupakan padanan dari [pengetahuan kontekstual (contextual knowledge)](#contextual-knowledge).

Pengetahuan parametrik tidak disimpan dalam bentuk tabel fakta kaku. Proses pelatihan tidak pernah membekali model dengan database untuk mencari data; pelatihan hanya menyesuaikan nilai parameter hingga model mampu menebak teks dengan baik, dan model yang dapat memprediksi teks tentang suatu topik dengan baik akan berperilaku seolah-olah ia memahami topik tersebut. Tingkat keandalan pengetahuan ini sangat bergantung pada seberapa sering topik tersebut muncul dalam data pelatihan: topik dengan jutaan contoh akan direproduksi secara akurat, sementara untuk topik yang hanya muncul beberapa kali, model akan menebak berdasarkan bentuk topik serupa yang diketahuinya. Bagi model, proses mereproduksi ingatan dan menebak jawaban adalah mekanisme yang persis sama, sehingga ia tidak bisa membedakan mana yang sedang dilakukannya. Jawaban hasil karangan akan disajikan dengan kelancaran bahasa yang sama meyakinkannya seperti jawaban yang benar. [Halusinasi](#hallucination) adalah kejadian di mana tebakan model tersebut salah.

Pengetahuan parametrik juga bisa usang. Parameter berhenti berubah setelah melewati [batas pengetahuan (knowledge cutoff)](#knowledge-cutoff), sehingga pustaka kode yang dirilis atau diganti namanya setelah tanggal batas tersebut tidak akan eksis di dalamnya, dan API yang sudah berubah akan tetap diingat dalam wujud lamanya.

Untuk mengatasi kedua celah tersebut — topik yang terlalu langka dan topik yang terlalu baru — solusinya sama: karena pengetahuan tidak dapat ditambahkan ke dalam parameter model yang sudah beku, informasi tersebut harus disediakan sebagai pengetahuan kontekstual.

_Contoh Penggunaan:_

"Dia menulis kode React dengan sangat sempurna tetapi terus mengarang fungsi pada SDK internal kita."

"React tersimpan sangat padat di dalam pengetahuan parametrik model — karena memiliki jutaan contoh data pelatihan. Sedangkan SDK Anda tidak ada di sana, sehingga model mengisi celah tersebut dengan bentuk kode yang sekadar terlihat masuk akal. Coba muat dokumen panduan SDK ke dalam [konteks](#context) obrolan."

### Knowledge cutoff

Tanggal batas akhir pengetahuan yang dimiliki oleh [model](#model) di dalam parameternya ([pengetahuan parametrik](#parametric-knowledge)). Pustaka kode (library), API, serta peristiwa yang terjadi setelah tanggal batas ini akan menjadi jebakan yang memicu model mengarang-ngarang kode pemrograman (fabrikasi), kecuali jika dokumen panduannya dimuat sebagai [pengetahuan kontekstual (contextual knowledge)](#contextual-knowledge). Setiap versi rilis model memiliki tanggal batas pengetahuannya masing-masing.

Batas pengetahuan ini ada karena cara pembuatan model itu sendiri: proses [pelatihan (training)](#training) menanamkan potret data teks ke dalam [parameter](#parameters) model, dan setelah proses itu selesai, parameter tersebut akan dibekukan (frozen). Model tidak menyadari bahwa pengetahuannya memiliki batas akhir — ketika ditanya tentang hal baru yang rilis setelah tanggal batas, model tidak akan menolaknya, melainkan memperkirakan jawabannya berdasarkan hal terdekat yang diketahuinya. Inilah yang membuat jebakan tersebut tidak disadari: kode pemrograman yang ditulis berdasarkan pustaka versi usang akan terlihat masuk akal, sering kali berhasil dijalankan tanpa error sintaksis, namun gagal pada bagian fitur yang sebenarnya sudah berubah.

Solusinya selalu sama: masukkan informasi terbaru ke dalam [konteks](#context) obrolan. Muat catatan perubahan (changelog), arahkan agen ke file definisi tipe data dari versi pustaka yang terinstal di komputer, atau minta agen membaca dokumen panduan terbaru dari web. Informasi apa pun di dalam konteks obrolan akan mengesampingkan memori usang yang ada di dalam parameter model.

_Contoh Penggunaan:_

"Dia terus menulis kode menggunakan aturan penulisan SDK versi 3 — padahal kita sudah memakai versi 5."

"SDK versi 5 dirilis setelah tanggal batas pengetahuan model tersebut. Coba muat catatan perubahan (changelog) versi 5 sebagai pengetahuan kontekstual, jika tidak, dia akan terus mengarang kode berdasarkan memori parameter versi lamanya."

### Contextual knowledge

Fakta atau data yang dapat dibaca secara langsung oleh [agen](#agent) dari [konteks](#context) obrolan saat ini — seperti instruksi tugas dari pengguna, file yang telah dibaca agen, [hasil alat (tool result)](#tool-result), dan konten [AGENTS.md](#agentsmd) yang dimuat di awal [sesi](#session). Ini adalah padanan dari [pengetahuan parametrik (parametric knowledge)](#parametric-knowledge): pengetahuan parametrik didapatkan dengan cara _mengingat_ dari dalam parameter model, sementara pengetahuan kontekstual didapatkan dengan cara _membaca_ langsung dari [jendela konteks](#context-window). [Halusinasi](#hallucination) jauh lebih jarang terjadi ketika agen bekerja berdasarkan pengetahuan kontekstual — karena jawabannya ada langsung di hadapannya, bukan digali dari memori model yang samar.

Dari kedua jenis pengetahuan tersebut, hanya pengetahuan kontekstual yang dapat Anda kendalikan. Parameter model bersifat tetap dan tidak bisa diubah (frozen), sehingga satu-satunya cara untuk membekali [model](#model) dengan pengetahuan baru yang tidak dimilikinya — seperti SDK internal perusahaan, pustaka kode yang dirilis setelah tanggal [batas pengetahuan (knowledge cutoff)](#knowledge-cutoff), atau keputusan rapat kemarin — adalah dengan meletakkannya ke dalam konteks obrolan. Banyak pekerjaan praktis dalam coding berbasis [AI](#ai) berpusat pada hal ini: meletakkan fakta yang tepat di hadapan model pada saat ia membutuhkannya.

Ketika pengetahuan kontekstual bertentangan dengan pengetahuan parametrik, pengetahuan kontekstual biasanya akan menang. Tempelkan dokumen panduan API versi terbaru, maka model akan mengikutinya daripada memori lamanya tentang API versi usang — meskipun memori lama tersebut terkadang masih bisa bocor keluar, terutama jika sesi obrolan sudah terlalu panjang. Jika agen terus kembali menggunakan pola penulisan kode yang usang padahal dokumen panduan baru sudah dimasukkan, itu tandanya pengetahuan parametrik bocor menembus pengetahuan kontekstual; mengulangi koreksi atau memindahkan posisi dokumen lebih dekat ke tugas yang dikerjakan akan sangat membantu.

Berbeda dari pengetahuan parametrik yang gratis digunakan, pemakaian pengetahuan kontekstual membutuhkan biaya. Setiap informasi yang dimuat ke dalam jendela konteks akan memakan kuota [token](#token) dan berebut porsi [anggaran perhatian](#attention-budget) model, sehingga memuat informasi sebanyak-banyaknya tidak selalu menjadi keputusan yang baik — tujuannya adalah meletakkan fakta yang benar-benar relevan saja di dalam jendela obrolan, bukan semua fakta dimasukkan.

_Gunakan istilah ini_ hanya ketika Anda sedang membandingkannya dengan pengetahuan parametrik; jika tidak, cukup sebut sebagai **konteks**.

_Hindari:_ istilah "memori kerja" (working memory) — karena pengetahuan kontekstual adalah apa yang ada di dalam jendela obrolan _saat ini_; sementara [sistem memori (memory system)](#memory-system) adalah sistem yang memasukkan konten dari sesi sebelumnya ke sesi saat ini. Keduanya berada pada skala yang berbeda, jadi jangan disamakan.

_Contoh Penggunaan:_

"Kenapa dia bisa menulis kode API dengan sangat tepat saat saya menempelkan dokumen panduan, tetapi malah mengarang-ngarang kode saat tidak saya tempelkan?"

"Saat dokumen ditempelkan, agen menggunakan pengetahuan kontekstual — dia membacanya langsung dari halaman obrolan. Tanpa dokumen tersebut, dia terpaksa mengandalkan pengetahuan parametrik sehingga fungsi-fungsi API yang jarang dipakai menjadi samar dalam ingatannya."

### Attention relationship

Saat memprediksi setiap [token](#token), [model](#model) akan mempertimbangkan semua token lain di dalam [konteks](#context) obrolan — beberapa dipertimbangkan secara mendalam, sementara yang lain hampir diabaikan sama sekali. Hubungan berpasangan antara dua token ini disebut **hubungan perhatian (attention relationship)**. Pasangan token yang bermakna (seperti kata ganti "dia" dengan nama "Sarah", atau kode panggilan `getUser()` dengan fungsi pendefinisiannya `function getUser`) akan saling memengaruhi lebih kuat daripada token yang tidak berhubungan. Sebuah konteks yang berisi N token memiliki sekitar N² hubungan perhatian.

Hubungan berpasangan inilah yang memunculkan pemahaman semu dari model. Ketika model berhasil mengartikan kata ganti nama, itu karena hubungan perhatian antara kata ganti tersebut dan nama aslinya terjalin kuat. Ketika ia memanggil fungsi dengan argumen yang benar, hubungan antara lokasi pemanggilan kode dan file definisi yang dibaca sebelumnya sedang bekerja. Semua ini tidak dicari dari database kamus tetap — melainkan dihitung secara langsung pada setiap [permintaan penyedia model (model provider request)](#model-provider-request), untuk setiap pasang token.

Jumlah hubungan N² ini sangat penting untuk dipahami karena pertumbuhannya jauh lebih cepat daripada yang biasa kita bayangkan:

| Ukuran Konteks | Hubungan Berpasangan (~N²) |
| -------------- | -------------------------- |
| 1.000 token    | ~1 juta                    |
| 10.000 token   | ~100 juta                  |
| 100.000 token  | ~10 miliar                 |

Setiap hubungan berpasangan ini juga dihitung lebih dari sekali. Model memiliki beberapa "attention head" (kepala perhatian) — jumlah pastinya untuk model tercanggih saat ini tidak dipublikasikan, namun perkiraan kasarnya sekitar lima puluh hingga seratus — dan setiap kepala menghitung hubungan versinya sendiri untuk setiap pasangan token. Jadi, setiap angka hubungan pada tabel di atas digandakan sebanyak jumlah attention head tersebut. Itu adalah jumlah perhitungan yang sangat banyak.

Hanya sebagian kecil dari hubungan ini yang benar-benar penting untuk menyelesaikan suatu tugas. Hubungan antara instruksi Anda dan kode yang akan diubah adalah salah satu dari sedikit hubungan yang berguna; hampir semua hal lain di dalam wadah obrolan adalah kebisingan. Dan kedua jenis hubungan ini tumbuh dengan kecepatan berbeda: hubungan yang penting jumlahnya cenderung tetap, sementara total wadah hubungan tumbuh secara kuadrat (kuadrat dari panjang teks). Pada 1.000 token, hubungan yang Anda pedulikan adalah satu dari sejuta; sedangkan pada 100.000 token, hubungan tersebut menjadi satu dari sepuluh miliar. Inilah hitungan matematika di balik [anggaran perhatian](#attention-budget), dan [penurunan perhatian (attention degradation)](#attention-degradation) adalah apa yang kita rasakan ketika hubungan penting tersebut mendapatkan porsi perhatian yang terlalu kecil.

_Contoh Penggunaan:_

"Agen ini terus mencampuradukkan dua simbol `user` yang ada di dalam perubahan kode — sepertinya kita sudah masuk ke [zona bodoh (dumb zone)](#smart-zone)."

"Ya, hubungan perhatian antara lokasi pemanggilan kode dan deklarasinya saling bertabrakan — karena bentuk tokennya sama, tetapi memiliki ikatan (binding) yang berbeda. Coba ubah nama salah satunya agar hubungan pasangannya menjadi lebih jelas."

### Attention budget

Setiap [token](#token) memiliki kapasitas pengaruh (pengaruh perhatian) yang terbatas untuk dibagikan ke seluruh [konteks](#context). Pengaruh yang kuat pada [satu hubungan](#attention-relationship) akan mengurangi kapasitas perhatian untuk hubungan lainnya. Anggaran perhatian (attention budget) ini dihitung per-token dan ukurannya tidak bertambah ketika isi percakapan bertambah panjang. Itulah mengapa [sesi](#session) yang terlalu panjang membuat pemahaman agen melemah.

Bayangkan ini seperti sinyal dan kebisingan suara. Instruksi Anda adalah sinyal suara dengan volume tetap; sementara setiap token lain di dalam [jendela konteks](#context-window) adalah suara pesaing di dalam ruangan. Instruksi tersebut tidak pernah mengecil secara teks — ia tetap ada di sana, huruf demi huruf — tetapi seiring bertambahnya isi obrolan, suasana ruangan menjadi semakin bising, sehingga rasio sinyal terhadap kebisingan (signal-to-noise ratio) menurun. Sebuah instruksi yang awalnya terdengar paling keras pada konteks 10 ribu token, akan berubah menjadi sekadar bisikan latar belakang pada konteks 150 ribu token. Ini adalah mekanisme di balik [penurunan perhatian (attention degradation)](#attention-degradation): model tidak benar-benar 'lupa', melainkan sinyal instruksi Anda tenggelam dalam kebisingan.

Gejalanya terlihat seperti pembangkangan — agen menyetujui suatu aturan di awal percakapan, lalu perlahan mengabaikannya, dan menempelkan ulang aturan tersebut hanya membantu untuk waktu yang singkat. Penyebabnya bukan karena instruksi Anda yang salah, melainkan karena informasi lain di dalam jendela percakapan yang berebut perhatian.

Hal yang bisa Anda kendalikan adalah apa saja yang dimasukkan ke dalam konteks. Informasi yang tidak mendukung tugas tidaklah netral — itu adalah kebisingan yang mengaburkan informasi penting lainnya. Jaga agar jendela percakapan tetap kecil, lakukan [pembersihan (clear)](#clearing) ketika konteks yang menumpuk tidak lagi sebanding dengan manfaatnya, dan tulis ulang aturan yang penting daripada mengandalkan penyebutan di awal obrolan.

_Contoh Penggunaan:_

"Kenapa agen ini terus mengabaikan struktur tabel (schema) yang saya tempel di bagian atas obrolan?"

"Kita sudah masuk ke [zona bodoh (dumb zone)](#smart-zone) — anggaran perhatian setiap token itu terbatas, sementara obrolan kita terus memanjang. Sinyal pada struktur tabel tersebut sekarang harus berebut perhatian dengan ribuan token baru."

### Attention degradation

Seiring bertambah panjangnya suatu [sesi](#session), [anggaran perhatian](#attention-budget) dari setiap [token](#token) akan terbagi ke lebih banyak pesaing baru. Sinyal fokus pada [hubungan yang penting](#attention-relationship) akan melemah, sementara kebisingan dari [konteks](#context) yang tidak relevan akan berkerumun masuk. Padahal [model](#model)-nya sama, [parameter](#parameters)-nya juga sama — hanya saja ada lebih banyak mulut yang harus diberi makan dari piring yang sama. Fenomena ini adalah penyebab efek [zona pintar/bodoh](#smart-zone).

Gejalanya terlihat seperti penurunan kualitas model di tengah sesi: aturan yang dipatuhinya selama satu jam pertama mulai terabaikan, agen kembali menanyakan hal-hal yang sudah diberi tahu, atau menulis kode yang mengabaikan file yang dibacanya tadi. Tidak ada yang berubah pada model itu sendiri — satu-satunya variabel yang berubah adalah seberapa banyak konteks obrolan yang sedang dibacanya saat ini.

Penurunan ini terjadi secara bertahap, sehingga sulit disadari jika Anda hanya melihat dari dalam sesi yang sedang berlangsung. Tidak ada pesan error dan tidak ada batas yang jelas; setiap [giliran](#turn) obrolan hanya terasa sedikit lebih buruk daripada sebelumnya. Saat kesalahan mulai terlihat jelas, sebenarnya Anda sudah berada di dalam zona bodoh (dumb zone) selama beberapa waktu.

Cara memulihkannya adalah dengan membuang konteks obrolan lama, bukan menambahkannya. Menempelkan ulang instruksi yang diabaikan hanya akan menambah pesaing baru di dalam jendela percakapan yang sudah penuh, dan hal itu hanya membantu sebentar saja. Langkah yang berhasil: [bersihkan (clear)](#clearing) percakapan dan muat ulang hanya file yang dibutuhkan oleh tugas tersebut, atau lakukan proses [ringkas (compact)](#compaction), atau [oper (hand off)](#handoff) pekerjaan ke sesi yang baru. Anggaplah penurunan kepatuhan agen terhadap instruksi Anda sebagai sinyal bahwa obrolan sudah terlalu panjang, bukan karena modelnya yang bermasalah.

_Contoh Penggunaan:_

"Agen ini sudah masuk jauh ke zona bodoh — dia mulai mengarang fungsi-fungsi umum yang tidak ada di dalam file tipe data."

"Ini adalah penurunan perhatian (attention degradation). Definisi tipe datanya masih ada di dalam konteks, tetapi sinyal pemahamannya terkubur di bawah semua percakapan yang kita tambahkan sejak tadi. Bersihkan sesi dan muat ulang."

### Smart zone

Fase awal di dalam suatu [sesi](#session) obrolan di mana sang [agen](#agent) berada di dalam "zona pintar" (smart zone) — ia bekerja secara tajam, fokus, dan ingatan memorinya sangat baik. Seiring bertambah panjangnya sesi obrolan, agen perlahan meluncur ke "zona bodoh" (dumb zone): hasil kerjanya menjadi ceroboh, pelupa, membuat lebih banyak kesalahan, serta memicu lebih banyak [halusinasi](#hallucination) kesetiaan (faithfulness). Padahal [model](#model) dan [harness (sistem penjalan)](#harness)-nya sama — hanya saja kapasitas [konteks](#context) obrolannya bertambah panjang. Ini adalah efek nyata dari terjadinya [penurunan perhatian (attention degradation)](#attention-degradation). Pada model-model tercanggih saat ini, zona bodoh biasanya dimulai saat isi percakapan mencapai sekitar 125 ribu hingga 150 ribu [token](#token) — meskipun batasan ini masih diperdebatkan. Segera lakukan tindakan [bersihkan (clear)](#clearing) sesi atau [ringkas (compact)](#compaction) informasi ketika sesi obrolan mulai menumpuk; jangan memaksakan pengerjaan terus berjalan.

Penurunan kualitas ini berjalan secara bertahap, sehingga mudah terlewat dari pengawasan. Tidak ada pesan error dan tidak ada batas wilayah yang terlihat jelas; agen hanya mulai bekerja sedikit lebih buruk, lalu perlahan menjadi jauh lebih buruk. Ciri-ciri umumnya: agen melupakan instruksi yang Anda berikan dua puluh giliran pesan yang lalu, mengulangi kesalahan yang sebenarnya sudah diperbaikinya tadi, atau menyatakan sesuatu dengan sangat yakin padahal bertentangan dengan konteks obrolan aktif. Karena penurunannya berjalan halus, respon umum kita biasanya adalah terus melanjutkan obrolan dan menjelaskan ulang — tindakan yang justru menambah isi konteks obrolan dan memperparah masalah.

Pembagian zona pintar/bodoh ini tidak mengikuti batas maksimal dari [jendela konteks](#context-window). Sesi percakapan bisa saja sudah berada jauh di dalam zona bodoh meskipun sebagian besar kapasitas jendela konteksnya masih kosong: kapasitas maksimal adalah batas di mana sistem penjalan menolak melanjutkan pengerjaan, namun kualitas kerja model sudah menurun jauh sebelum batas tersebut tercapai. Buatlah rencana kerja berdasarkan batas zona pintar, bukan batas maksimal jendela konteks — anggaran kapasitas praktis untuk menyelesaikan suatu tugas adalah jumlah token yang bisa dijalankan agen dengan kualitas baik, bukan jumlah token maksimal yang secara teknis bisa ditampung oleh memori model.

Zona pintar adalah anggaran memori, dan tugas-tugas yang tidak berhubungan akan menghabiskannya. Setiap tugas yang diselesaikan di dalam satu sesi obrolan akan memakan kuota token, sehingga memulai tugas kedua di dalam sesi yang sama berarti Anda memulainya di posisi yang lebih dekat dengan zona bodoh. Membatasi satu tugas untuk satu sesi obrolan akan memberikan porsi zona pintar paling tajam untuk setiap tugas tersebut. Ketika satu tugas berukuran terlalu besar untuk satu zona pintar, bagilah tugas tersebut: lakukan [serah terima (handoff)](#handoff) atau penyusutan informasi di sela-sela fase tugas yang logis, lalu biarkan sesi baru menyelesaikan bagian berikutnya.

_Contoh Penggunaan:_

"Dia menyelesaikan tiga komponen pertama dengan sangat sempurna, tapi merusak komponen yang keempat."

"Kalian sudah keluar dari zona pintar — modelnya masih sama, hanya saja sekarang sudah masuk jauh ke dalam zona bodoh. Lakukan penyusutan (compact) dan muat ulang rencana kerjanya, komponen berikutnya pasti akan selesai dengan baik."

## Section 5 — Operan Tugas (Handoff)

### Clearing

Mengakhiri [sesi](#session) yang sedang berjalan saat ini dan memulai sesi baru yang segar. Pesan berikutnya akan dimulai dengan sesi yang bersih dan [jendela konteks](#context-window) yang kosong. Tindakan ini biasanya dipicu secara manual oleh pengguna.

Membersihkan sesi (clearing) adalah obat mujarab untuk jendela percakapan yang sudah kotor (polluted context). Selama sesi berlangsung, semua hal akan menumpuk: percobaan coding yang gagal, arahan yang salah, [hasil alat (tool result)](#tool-result) yang kedaluwarsa, dan rencana kerja yang ditinggalkan. [Model](#model) akan membaca ulang semua sampah tersebut pada setiap [giliran](#turn) obrolan, dan riwayat yang buruk ini akan mengganggu pengerjaan tugas baru. Saat sesi obrolan sudah berjalan terlalu panjang, sang [agen](#agent) biasanya mulai tidak fokus dan sulit diatur — instruksi jelas yang Anda berikan diabaikan, kualitas kodenya menurun, dan menegurnya untuk bekerja lebih baik tidak akan membantu karena kebisingan informasi yang mengalihkan perhatiannya masih tersimpan di dalam [konteks](#context). Pembersihan akan melenyapkan semua kebisingan tersebut.

Pembersihan sesi tidak menghapus rekaman obrolan Anda. Sebagian besar [harness (sistem penjalan)](#harness) menyimpan riwayat sesi di komputer Anda, sehingga transkrip percakapan masih bisa dibaca atau dilanjutkan kembali. Hal yang hilang hanyalah memori aktif agen saat bekerja: model bersifat [stateless (tidak mengingat riwayat)](#stateless), sehingga sesi baru tidak akan tahu apa pun yang diketahui oleh sesi sebelumnya. Jika sesi lama menyimpan keputusan atau progres kerja penting yang dibutuhkan untuk sesi berikutnya, mintalah agen menulis [artefak operan (handoff artifact)](#handoff-artifact) terlebih dahulu, lalu mulailah sesi baru dengan mengarahkan agen ke berkas operan tersebut.

Bandingkan proses ini dengan [penyusutan (compaction)](#compaction), yang merangkum sesi lama ke dalam konteks baru alih-alih memulainya dari kosong. Pembersihan adalah alat yang lebih tegas: tidak ada informasi yang dibawa ke sesi baru, termasuk sampah-sampah informasinya.

_Contoh Penggunaan:_

"Agen ini terjebak dalam siklus pengulangan pada tes yang gagal."

"Bersihkan saja sesinya — mulai sesi baru dengan file rencana kerja dan file tes. Tidak ada gunanya memaksa agen bertarung dengan konteks obrolan lama yang sudah bising."

### Handoff

Memindahkan [konteks](#context) dari satu [sesi](#session) ke sesi lainnya. Wadah pembawa informasinya bervariasi — bisa menggunakan [artefak operan (handoff artifact)](#handoff-artifact) tertulis, ringkasan di memori ([penyusutan (compaction)](#compaction)), dan lainnya. Berbeda dari proses [pembersihan (clearing)](#clearing) yang tidak mentransfer informasi sama sekali. Alasan pemindahan ini beragam: berganti peran (dari perencana → pelaksana), memulai tugas mandiri ([AFK](#afk)), membagi tugas ke beberapa sesi paralel, atau untuk melegakan kapasitas [jendela konteks](#context-window).

Sesi penerima akan memulai tugas dengan kondisi konteks kosong — [model](#model) bersifat [stateless (tidak menyimpan riwayat)](#stateless), dan tidak ada rekaman dari sesi lama yang terlihat oleh sesi baru. Apa pun yang dibutuhkan oleh sesi berikutnya harus dibawa secara eksplisit; informasi lainnya akan terbuang. Sifat serah terima yang "searah" (tanpa jalan kembali) inilah yang menentukan bentuk informasi yang dibawa: sesi baru tidak bisa bertanya kepada sesi lama tentang apa maksud instruksinya, sehingga bahan informasi yang dibawa harus dapat dipahami secara mandiri.

| Mekanisme      | Bentuk                                               | Karakteristik                                                                                   |
| -------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Artefak operan | Berkas di dalam [lingkungan kerja](#environment) | Anda dapat membaca dan memperbaikinya terlebih dahulu; dapat digunakan kembali di berbagai sesi |
| Penyusutan     | Ringkasan di dalam jendela konteks                   | Berjalan otomatis dan murah; lebih sulit diperiksa secara visual; hanya untuk satu sesi penerus |

Tanda kegagalan dari serah terima yang buruk adalah perdebatan ulang (relitigation): sesi baru membuka kembali keputusan yang sebenarnya sudah diselesaikan oleh sesi lama. Hal ini terjadi karena informasi yang dibawa hanya mencatat keputusan apa yang diambil, bukan mengapa keputusan itu diambil. Nilailah keberhasilan serah terima dari apa yang bisa dilakukan oleh sesi baru yang memiliki informasi awal nol.

_Contoh Penggunaan:_

"Sesi perencanaan ini sudah mulai penuh dan berat — apakah sebaiknya saya lanjut saja?"

"Lakukan serah terima (handoff). Tulis keputusan-keputusannya ke dalam dokumen rencana kerja, bersihkan sesi, lalu mulai fase implementasi di sesi baru yang membaca dari dokumen tersebut."

### Primary source

Sumber kebenaran dalam wujud aslinya — seperti file kode program asli, transkrip percakapan utuh, file catatan log mentah, atau respon API yang sebenarnya. Bukan berupa laporan rangkuman dari objek tersebut; melainkan objek itu sendiri. Istilah ini merupakan padanan dari [sumber sekunder (secondary source)](#secondary-source).

Jika Anda ingin mengetahui apa yang dilakukan oleh sistem kode Anda, maka file kode program tersebut adalah sumber primernya. Dokumen panduan, diagram arsitektur, dan file README hanyalah deskripsi penjelas dari kode tersebut — yang akurat saat ditulis, tetapi dapat tertinggal sejak saat itu. Ketika sebuah [agen](#agent) dengan sangat percaya diri menyatakan hal yang salah tentang proyek Anda, pertanyaan pertama yang harus diajukan adalah dokumen sumber mana yang dibacanya: agen yang membaca dokumen panduan akan mewarisi keusangan dari dokumen tersebut; sedangkan agen yang membaca langsung file kodenya sedang membaca kebenaran yang aktual saat ini.

Biaya pemrosesan adalah alasan mengapa sumber primer tidak selalu dijadikan pilihan bawaan (default). Memuat dokumen sumber primer ke dalam [jendela konteks](#context-window) memakan biaya yang mahal — seluruh isi file, seluruh transkrip, dan setiap [token](#token) akan ditagih sebagai [token input](#input-tokens) serta berebut porsi [anggaran perhatian](#attention-budget) model. Nilai lebih yang Anda dapatkan dari biaya tersebut adalah kelengkapan informasi: tidak ada data yang disaring terlebih dahulu oleh penilaian orang lain mengenai apa yang dianggap penting. Ringkasan yang ditulis bulan lalu tidak mungkin memuat detail kecil yang mendadak menjadi sangat penting hari ini; tetapi file sumber primer asli akan selalu memuatnya.

Gunakan sumber primer ketika presisi tinggi sangat dibutuhkan — seperti aturan penulisan argumen fungsi yang tepat, isi pesan error yang sebenarnya, atau baris kode spesifik yang memicu kegagalan sistem. Sebagian besar seni mengelola [konteks](#context) obrolan adalah memutuskan kapan Anda harus membayar biaya untuk memuat sumber primer dan kapan dokumen sumber sekunder dirasa sudah cukup.

_Contoh Penggunaan:_

"Agen mengatakan bahwa logika mencoba ulang (retry) kita menggunakan jeda waktu yang bertambah secara eksponensial, tetapi saya melihat dia terus memborbardir server tujuan tanpa jeda waktu."

"Dia membaca penjelasan tersebut dari dokumen rencana desain lama. Arahkan dia langsung ke berkas modul logika mencoba ulang yang asli — biasakan bekerja menggunakan sumber primer ketika perilaku nyata sistem sangat krusial."

### Secondary source

Sebuah laporan atau ulasan tentang [sumber primer (primary source)](#primary-source) yang berada satu tingkat di luarnya — seperti dokumen panduan yang menjelaskan sistem kode, ringkasan yang menjelaskan transkrip percakapan, atau laporan hasil pencarian data. Dokumen ini jauh lebih murah untuk dimuat ke dalam [jendela konteks](#context-window) dibanding dokumen sumber aslinya, dan sengaja dirancang dengan mengurangi detail informasi (lossy): siapa pun yang menulis dokumen tersebut telah menyaring apa saja hal yang dianggap penting, sehingga apa pun detail yang dibuang akan menjadi tidak terlihat oleh pembaca yang hanya membaca ringkasan tersebut.

Banyak pekerjaan dalam rekayasa [konteks](#context) (context engineering) berpusat pada pembuatan sumber-sumber sekunder ini. Proses [penyusutan (compaction)](#compaction) mengubah catatan riwayat [sesi](#session) obrolan menjadi ringkasan yang membekali sesi berikutnya. Sebuah [sub-agen (subagent)](#subagent) menghabiskan kuota konteksnya untuk melakukan pencarian data yang bising lalu kembali membawa laporan singkat. Sebuah [artefak operan (handoff artifact)](#handoff-artifact) merangkum keputusan-keputusan penting sesi obrolan ke dalam file yang akan dibaca sesi berikutnya. [Sistem memori](#memory-system) menyaring apa yang dipelajari selama sesi obrolan ke dalam file catatan. Masing-masing metode tersebut melakukan kompromi yang sama: mengorbankan kejelasan detail demi menyisakan ruang kapasitas memori obrolan.

Kegagalan sumber sekunder terjadi dalam dua bentuk. Pertama, hilangnya informasi detail (lossy) — misalnya ringkasan penyusutan yang kehilangan poin penting keputusan struktur data, atau laporan hasil pencarian yang melewatkan kasus ekstrem. Kedua, terjadinya pergeseran informasi (drift) — dokumen sumber aslinya sudah berubah tetapi catatan penjelasnya tidak diperbarui, sehingga dokumen panduan mendeskripsikan arsitektur sistem kuartal lalu dengan tingkat kepercayaan kuartal ini. Ketika sang [agen](#agent) bekerja menggunakan sumber sekunder yang mengalami salah satu kegagalan tersebut, ia akan bekerja dengan sangat percaya diri di atas landasan informasi yang salah; solusinya adalah mengirim agen kembali untuk membaca dokumen sumber primernya.

Meskipun memiliki risiko kegagalan, bukan berarti menggunakan sumber sekunder adalah sebuah kesalahan. Kapasitas jendela konteks sangat terbatas dan pemuatan sumber primer memakan biaya besar; tanpa adanya ringkasan, laporan, dan dokumen serah terima, tugas berukuran besar tidak akan muat di memori. Keahlian yang dibutuhkan adalah mengetahui detail mana saja yang aman dikorbankan — serta memverifikasinya kembali ke sumber primer ketika ada keraguan. Sumber sekunder yang dirancang dengan baik akan menyertakan [penunjuk konteks (context pointer)](#context-pointer) kembali ke file aslinya — misalnya ringkasan yang mencantumkan nama berkas transkrip asal pembuatannya, atau dokumen panduan yang mencantumkan nama berkas kode program yang dijelaskannya — sehingga ketika ringkasan tersebut dirasa kurang lengkap, agen dapat mengikuti penunjuk tersebut untuk membaca file aslinya sendiri daripada menebak-nebak.

_Contoh Penggunaan:_

"Dokumen serah terima menulis bahwa sistem autentikasi sudah selesai dibuat, tetapi sesi baru terus-menerus mendapati fungsi penyegaran token (token refresh) yang rusak."

"Dokumen tersebut adalah sumber sekunder — sesi sebelumnya mencatat apa yang mereka yakini selesai, bukan apa yang nyata di lapangan. Minta sesi baru menjalankan pengujian autentikasi dan percayalah pada hasil kerja sumber primernya."

### Handoff artifact

Sebuah dokumen yang digunakan sebagai wadah pembawa informasi dalam proses [serah terima (handoff)](#handoff) — ditulis ke dalam [lingkungan kerja](#environment) oleh satu [sesi](#session) obrolan untuk dibaca oleh sesi berikutnya. Dokumen [spesifikasi (spec)](#spec), [tiket (ticket)](#ticket), dan dokumen rencana kerja semuanya adalah bentuk dari artefak operan.

Alasan penting untuk menulis dokumen ini: [model](#model) bersifat [stateless (tidak menyimpan riwayat)](#stateless), sehingga tidak ada informasi di dalam suatu sesi yang dapat bertahan setelah Anda melakukan [pembersihan (clearing)](#clearing) sesi. Keputusan rapat, batasan aturan, dan rencana kerja setengah jadi — semuanya akan lenyap bersama [konteks](#context) obrolan yang menampungnya. Namun, lingkungan kerja (filesystem komputer) tetap bertahan permanen. Menuliskan status-status penting ke dalam sebuah file akan menyimpannya di tempat yang aman agar dapat dibaca kembali oleh sesi obrolan berikutnya.

Artefak ini merupakan [sumber sekunder (secondary source)](#secondary-source) — yaitu sebuah laporan tentang hasil kerja suatu sesi, bukan pekerjaan aslinya itu sendiri. Hal inilah yang membuatnya cukup ringkas untuk membekali sesi baru yang segar, tetapi juga bisa berisiko menyesatkan sesi tersebut: artefak hanya mencatat apa yang diyakini oleh sesi penulisnya, sehingga apa pun detail yang terlewat atau salah tulis tidak akan terlihat oleh sesi pembacanya. Ketika ada klaim atau asumsi yang krusial, sesi berikutnya harus memverifikasinya kembali secara langsung ke [sumber primer (primary source)](#primary-source) — seperti berkas kode pemrograman atau hasil pengujian — alih-alih langsung mempercayainya begitu saja.

Artefak operan yang baik ditulis agar mudah dipahami oleh sesi baru yang sama sekali tidak memiliki konteks sebelumnya. Tuliskan lokasi jalur file secara konkret daripada sekadar menulis "file yang kita diskusikan tadi". Tuliskan apa saja keputusan yang telah diambil beserta alasannya, agar sesi berikutnya tidak perlu merundingkannya kembali dari awal. Tuliskan apa saja yang sudah selesai dikerjakan dan apa saja sisa tugasnya. Mengarahkan sesi saat menulis dokumen ini akan sangat membantu: "tulis dokumen serah terima untuk sesi baru yang sama sekali belum tahu apa-apa tentang pekerjaan ini".

Alternatif wadah pembawa informasi lainnya adalah proses [penyusutan (compaction)](#compaction) yang merangkum data langsung di dalam memori obrolan. Namun, penggunaan berkas artefak fisik memiliki dua keuntungan utama: ia tersimpan di dalam penyimpanan komputer Anda sehingga Anda dapat membaca dan memperbaikinya terlebih dahulu sebelum dijalankan, serta dapat digunakan kembali — satu dokumen spesifikasi yang sama dapat digunakan untuk membekali lima sesi kerja paralel sekaligus.

_Contoh Penggunaan:_

"Bagaimana cara membagi tugas ini di antara [agen](#agent) perencana dan agen pelaksana?"

"Mintalah agen perencana menulis sebuah artefak operan (handoff artifact) — yang berisi jalur file, keputusan, dan batasan aturan. Sesi agen pelaksana kemudian dibuka dengan diarahkan ke berkas tersebut dan bekerja menggunakan petunjuk di dalamnya."

### Spec

Sebuah [artefak operan (handoff artifact)](#handoff-artifact) yang menjelaskan suatu pekerjaan besar lintas beberapa [sesi](#session) — fokus pada apa yang sedang dibangun, bukan bagaimana teknis setiap sesi menyelesaikan tugasnya. Dokumen ini terus diperbarui seiring berjalannya pekerjaan. Terdiri dari kumpulan [tiket (ticket)](#ticket).

File spesifikasi (spec) ada karena sesi obrolan bersifat sekali pakai sedangkan pekerjaan besar tidak demikian. Apa pun tugas yang membutuhkan upaya lebih dari satu kapasitas [jendela konteks](#context-window) membutuhkan tempat penyimpanan di luar [konteks](#context) — yaitu di suatu tempat di dalam [lingkungan kerja](#environment) agen yang dapat bertahan dari proses [pembersihan (clearing)](#clearing) obrolan, baik berupa file di dalam repositori proyek, GitHub issue, atau sistem pelacak tiket lainnya yang dapat dijangkau agen. Spesifikasi adalah tempat penyimpanan tersebut: memuat tujuan akhir, batasan aturan, keputusan yang telah diambil sejauh ini, serta daftar tiket beserta statusnya. Setiap sesi obrolan yang baru dapat membacanya untuk mengetahui perkembangan tugas saat itu tanpa mewarisi kebisingan informasi yang menumpuk dari sesi sebelumnya.

Dokumen spesifikasi memiliki gaya penulisan yang familier, sebagian besar diadaptasi dari cara tim pengembang menuliskan catatan kerja mereka. Dokumen persyaratan produk (PRD / Product Requirements Document) cenderung berfokus pada apa dan mengapa dari sisi pengguna — seperti fitur, perilaku sistem, dan kriteria penerimaan. Dokumen desain (Design Doc) atau RFC cenderung lebih teknis — seperti pendekatan solusi yang dipilih, alternatif yang ditolak, serta pertimbangan untung-ruginya. Untuk skala kecil, sebuah file `plan.md` sederhana berisi daftar centang tiket sudah cukup melakukan tugas yang sama untuk pengembangan fitur lintas sesi. Gaya penulisannya tidak terlalu penting dibanding peran fungsinya: bagi [agen](#agent), dokumen-dokumen tersebut adalah hal yang sama — yaitu pernyataan tujuan tetap yang dibacanya di awal setiap sesi.

_Contoh Penggunaan:_

"Apakah sebaiknya pengerjaan seluruh proyek ini dilakukan di dalam satu sesi obrolan saja?"

"Jangan, tuliskan rencana tersebut sebagai file spesifikasi (spec) — bagi menjadi beberapa tiket terpisah, lalu jalankan setiap tiket di sesinya masing-masing. Mencoba mengerjakan seluruh proyek di dalam satu konteks obrolan tunggal akan membuat agen masuk ke [zona bodoh (dumb zone)](#smart-zone) sebelum tugas Anda selesai setengah jalan."

### Ticket

Sebuah [artefak operan (handoff artifact)](#handoff-artifact) yang membatasi ruang lingkup pekerjaan untuk satu [sesi](#session). Tiket dapat berdiri sendiri, atau digantungkan pada dokumen [spesifikasi (spec)](#spec) sebagai salah satu bagian darinya. Suatu tiket dapat menghalangi (memblokir) atau dihalangi oleh tiket lain yang setara, sehingga urutan pekerjaan ditentukan oleh grafik ketergantungan (dependency graph) mereka, bukan dari rencana linear yang kaku.

Batasan utama yang menentukan keberhasilan sebuah tiket adalah ukurannya: satu sesi kerja. Sebuah tiket harus dapat diselesaikan sebelum sesi tersebut keluar dari [zona pintar (smart zone)](#smart-zone) — dan batasan ini dapat diuji secara langsung. Jika sesi kerja Anda untuk tiket-tiket tersebut secara rutin mengalami penurunan kualitas sebelum pekerjaannya selesai, berarti tiket-tiket tersebut terlalu besar; bagilah menjadi beberapa tiket yang lebih kecil. Sebaliknya, jika setiap sesi menghabiskan sebagian besar [konteks](#context) hanya untuk tahap persiapan sebelum melakukan pekerjaan selama lima menit, berarti tiket tersebut terlalu kecil; gabungkanlah.

Tiket yang baik ditulis untuk pembaca yang tidak memiliki konteks informasi lainnya. Tiket tersebut memuat tujuan akhir, kriteria penerimaan, serta [penunjuk konteks (context pointer)](#context-pointer) ke file dan keputusan yang relevan — cukup rinci agar sesi baru dapat langsung bekerja tanpa harus menebak-nebak kembali apa yang diketahui oleh sesi sebelumnya.

Grafik ketergantungan ini juga merupakan kunci untuk membuka potensi pengerjaan secara paralel. Tiket-tiket yang bersifat independen — yaitu daun-daun terluar dari grafik ketergantungan — masing-masing dapat dijalankan di sesinya sendiri pada waktu yang bersamaan. Ini adalah cara yang efektif untuk menjalankan beberapa agen secara sekaligus.

_Contoh Penggunaan:_

"Dari mana sebaiknya saya mulai mengerjakan spesifikasi migrasi ini?"

"Lihatlah grafik ketergantungan tiketnya — perubahan skema menghalangi pengisian data (backfill), lalu pengisian data menghalangi pengalihan API. Pilih tiket yang tidak terhalang oleh apa pun (daun terluar) dan jalankan satu sesi kerja untuk tiket tersebut."

### Compaction

Sebuah proses [serah terima (handoff)](#handoff) yang dilakukan langsung di dalam memori: riwayat dari [sesi](#session) sebelumnya akan diringkas, dan ringkasan tersebut akan menjadi modal awal untuk memulai sesi baru yang segar. Proses ini sengaja dirancang untuk mereduksi informasi (lossy): transkrip obrolan asli adalah [sumber primer (primary source)](#primary-source), sedangkan ringkasannya adalah [sumber sekunder (secondary source)](#secondary-source) — di mana kejelasan detail dikorbankan demi mendapatkan sisa kapasitas memori. Proses ini dapat dipicu secara manual oleh pengguna, atau berjalan otomatis melalui fitur [penyusutan otomatis (autocompact)](#autocompact).

Mekanismenya: kapasitas [jendela konteks](#context-window) terbatas, dan sesi obrolan yang panjang lambat laun akan memenuhinya — setiap [hasil alat (tool result)](#tool-result), pembacaan berkas, atau keputusan salah yang pernah dibuat akan tetap tersimpan di riwayat obrolan. Ketika kapasitas mulai penuh, [harness (sistem penjalan)](#harness) akan meminta [model](#model) untuk merangkum sesi obrolan, lalu membuang riwayat percakapan yang lama, dan memulai sesi baru dengan bekal ringkasan tersebut. Apa pun detail yang tidak masuk ke dalam ringkasan tersebut akan hilang dari memori aktif agen. Beberapa sistem penjalan meringankan risiko ini dengan menyimpan transkrip obrolan lama di komputer Anda dan memberikan [penunjuk konteks (context pointer)](#context-pointer) ke berkas tersebut di dalam ringkasan — sumber sekunder menautkan kembali ke sumber primernya, sehingga detail yang terbuang dari ringkasan dapat dipulihkan dengan membaca kembali transkrip aslinya.

Ringkasan ini ditulis oleh model, sehingga instruksi pembuatannya bisa diarahkan oleh Anda. Kalimat seperti "Pertahankan keputusan tentang struktur tabel" membuat ringkasan yang dihasilkan menjadi lebih terarah. Pemilihan waktu juga penting — lakukan penyusutan di sela-sela fase tugas (setelah rencana kerja selesai disepakati), bukan di tengah-tengah pengerjaan tugas.

Bandingkan dengan [pembersihan (clearing)](#clearing), yang membuang semua riwayat dan memulai sesi dari nol: penyusutan (compaction) berusaha membawa poin-poin penting ke sesi baru; sedangkan pembersihan berasumsi poin-poin penting tersebut sudah Anda catat di tempat lain yang lebih aman.

_Contoh Penggunaan:_

"[Konteks](#context) obrolan kita sudah mulai penuh, padahal saya masih harus menjalankan pengujian kode."

"Lakukan penyusutan sebelum memulai — tulis hal-hal penting yang harus dipertahankan ke dalam instruksi peringkasan, agar sesi baru tetap mengingat keputusan struktur tabel dan membuang eksplorasi yang tidak perlu."

### Autocompact

[Penyusutan (compaction)](#compaction) yang dipicu secara otomatis oleh [harness (sistem penjalan)](#harness) ketika kapasitas [jendela konteks](#context-window) hampir penuh.

Sistem penjalan (harness) akan mengamati seberapa penuh kapasitas jendela konteks. Ketika penggunaan kapasitas tersebut melewati ambang batas tertentu — biasanya sekitar 80% — sistem akan berhenti sejenak, meminta [model](#model) membuat ringkasan dari seluruh [sesi](#session) yang berjalan sejauh ini, lalu memulai sesi baru yang bersih dengan dibekali ringkasan tersebut. Setelah itu, pekerjaan dilanjutkan kembali seolah tidak terjadi apa-apa.

Namun, sebenarnya ada hal penting yang terjadi. Proses penyusutan ini bersifat mereduksi informasi (lossy), dan penyusutan otomatis (autocompact) terjadi pada momen yang tidak bisa Anda pilih. Penyusutan manual biasanya dilakukan di akhir fase tugas, di mana Anda bisa menentukan detail apa saja yang harus tetap diingat oleh model. Sebaliknya, penyusutan otomatis dapat terjadi di tengah-tengah pengerjaan tugas kapan saja batas kapasitas tercapai — mungkin saat baru setengah jalan merombak kode (refactoring) — di mana model akan menentukan sendiri keputusan mana saja yang dianggap layak untuk disimpan dalam ringkasan. Gejala khasnya: sang [agen](#agent) tetap bekerja dengan percaya diri tetapi sebenarnya dia telah melupakan aturan penting yang Anda berikan sejam lalu, dan Anda baru menyadarinya ketika hasil kerjanya mulai bertentangan dengan aturan tersebut.

Cara pencegahannya adalah dengan tidak membiarkan fitur otomatis ini berjalan sendiri. Perhatikan indikator kapasitas konteks Anda dan lakukan penyusutan secara manual di akhir fase kerja yang logis, atau tulis keputusan-keputusan penting ke dalam file rencana kerja atau [artefak operan (handoff artifact)](#handoff-artifact) di komputer Anda, di mana informasi tersebut aman dan tidak akan hilang akibat peringkasan otomatis. Sebagian besar sistem penjalan juga memungkinkan Anda menyesuaikan ambang batas ini — mempercepat atau menundanya, atau mematikan fitur penyusutan otomatis sepenuhnya — sehingga Anda bisa mengatur sisa kapasitas aman sebelum proses dipicu.

_Contoh Penggunaan:_

"Agen ini sepertinya tidak ingat lagi apa yang kita putuskan tentang struktur tabel tadi."

"Fitur penyusutan otomatis (autocompact) berjalan di antara [giliran](#turn) percakapan — keputusan awal kita diringkas oleh model dan kemungkinan ada detail yang terbuang. Muat ulang file rencana, atau lakukan penyusutan manual di lain waktu agar Anda bisa mengontrol detail apa saja yang harus disimpan."

## Section 6 — Memori & Pengarahan

### Memory system

Sebuah sistem yang berupaya membuat [agen](#agent) bersifat [stateful (menyimpan keadaan/riwayat)](#stateful) di berbagai [sesi](#session) obrolan. Sistem ini menyimpan informasi ke dalam [lingkungan kerja](#environment) selama sesi berlangsung dan memuatnya kembali ke dalam [jendela konteks](#context-window) di awal sesi berikutnya, sehingga agen tetap memiliki kesinambungan ingatan bahkan setelah pengguna melakukan [pembersihan (clearing)](#clearing) sesi.

Sistem memori memiliki dua jalur kerja. Jalur tulis (write path): selama sesi berlangsung, agen mencatat apa saja yang dipelajarinya — misalnya preferensi yang Anda sebutkan atau fakta tentang proyek Anda — ke dalam file di lingkungan kerja komputer Anda. Jalur baca (read path): di awal sesi baru, [harness (sistem penjalan)](#harness) memuat file-file catatan tersebut, atau indeks dari berkas tersebut, kembali ke dalam jendela konteks. Banyak sistem penjalan dilengkapi dengan sistem memorinya sendiri — salah satunya adalah perintah `/memory` di Claude Code — tetapi Anda juga bisa membuatnya sendiri: misalnya dengan membuat folder berisi kumpulan catatan dan menambahkan instruksi di file [AGENTS.md](#agentsmd) agar agen membacanya.

Konsekuensi yang harus dihadapi sama seperti memuat konten otomatis lainnya. Catatan ingatan akan menumpuk, sehingga sebagian besar sistem memori hanya memuat indeks berupa satu baris kalimat saja dan menyembunyikan isi lengkapnya di balik [penunjuk konteks (context pointer)](#context-pointer) alih-alih menuliskan semuanya secara langsung. Selain itu, ingatan tersebut adalah [sumber sekunder (secondary source)](#secondary-source), sehingga informasinya bisa kedaluwarsa: fakta proyek yang dicatat pada bulan Maret akan dibaca dengan tingkat kepercayaan yang sama tingginya pada bulan Juni, padahal proyek kodenya mungkin sudah berubah. Sistem memori memerlukan pemangkasan catatan secara berkala, sama seperti halnya file AGENTS.md.

_Contoh Penggunaan:_

"Saya harus terus memberi tahu agen ini bahwa kita menggunakan Postgres, bukan MySQL."

"Pasang sistem memori (memory system) — biarkan dia menulis apa yang dipelajarinya ke dalam [sistem file](#filesystem) pada [giliran](#turn) obrolan pertama, lalu muat kembali berkas itu di awal sesi berikutnya. [Model](#model) itu sendiri sebenarnya bersifat [stateless (tidak menyimpan riwayat)](#stateless); sistem memori ini hanya memalsukan kesinambungan ingatan."

### AGENTS.md

Sebuah file di dalam [lingkungan](#environment) kerja proyek yang secara otomatis dimuat oleh [harness (sistem penjalan)](#harness) ke dalam [jendela konteks](#context-window) di awal setiap [sesi](#session) — berfungsi sebagai instruksi atau panduan tetap proyek untuk sang [agen](#agent). Ini adalah aturan umum di berbagai sistem; beberapa aplikasi penjalan agen memiliki nama file sendiri (contohnya Claude Code menggunakan file `CLAUDE.md`).

Karena file ini dimuat secara otomatis, ini menjadi salah satu cara agar Anda tidak perlu mengulang instruksi yang sama di setiap sesi baru. Mengingat [model](#model) memiliki sifat [stateless (tidak mengingat riwayat sesi sebelumnya)](#stateless) — koreksi yang Anda berikan di satu sesi akan terlupakan di sesi berikutnya, sehingga Anda mungkin harus terus memberi tahu agen baru bahwa proyek ini menggunakan `pnpm`, tes dijalankan dengan opsi tertentu, atau folder tertentu dibuat otomatis dan jangan diubah. Jika Anda sudah mengoreksi agen untuk hal yang sama sebanyak dua kali, maka aturan koreksi tersebut sangat layak untuk dimasukkan ke dalam `AGENTS.md`.

Isi yang cocok untuk file ini adalah informasi apa pun yang tidak bisa diketahui langsung oleh agen dari membaca kode pemrograman: perintah untuk menjalankan (build) atau menguji aplikasi, aturan penulisan kode yang tidak terlihat jelas, serta batasan ketat (seperti "jangan pernah mengedit folder client yang dibuat otomatis"). Tulis secara singkat dan jelas — tujuannya adalah instruksi cepat, bukan dokumentasi panjang lebar.

Konsekuensinya adalah semua yang tertulis di dalamnya akan selalu dibaca oleh agen di awal. Instruksi yang menumpuk, padahal sebagian besar tidak penting untuk tugas saat itu, akan menghabiskan kuota token dan membingungkan agen. Semakin banyak instruksi yang dibaca sekaligus, semakin tidak konsisten model dalam mengikuti setiap instruksi tersebut.

_Hindari:_ menggunakan `AGENTS.md` untuk informasi yang seharusnya [diungkapkan secara bertahap](#progressive-disclosure). Informasi apa pun di dalam file ini akan memakan biaya [token](#token) pada setiap [giliran](#turn) percakapan di setiap sesi, peduli apakah sesi tersebut membutuhkannya atau tidak. Panduan gaya penulisan kode sebaiknya diletakkan di dalam berkas [keaktifan keahlian (skill)](#skill) atau dirujuk dengan [penunjuk konteks (context pointer)](#context-pointer); simpan `AGENTS.md` hanya untuk aturan umum yang berlaku di mana saja.

_Contoh Penggunaan:_

"Kenapa setiap memulai sesi baru, kuota token kita sudah terpakai 4 ribu token?"

"Coba periksa file `AGENTS.md` — sepertinya ada yang menyalin seluruh panduan penulisan kode ke sana, padahal harusnya dimasukkan lewat fitur keahlian (skill)."

### Progressive disclosure

Metode memuat hanya [konteks](#context) yang benar-benar dibutuhkan oleh [agen](#agent) saat ini, dan mengganti sisa informasi lainnya menggunakan [penunjuk konteks (context pointer)](#context-pointer). Metode ini diadopsi dari dunia desain antarmuka (UI design), yang berarti hanya menampilkan tombol kendali yang relevan dengan tugas pengguna saat itu dan menyembunyikan sisanya di balik tombol klik.

Teknik ini digunakan karena pemuatan konteks menimbulkan dua jenis kerugian sekaligus. Setiap [token](#token) yang dimuat di awal akan ditagih sebagai [token input](#input-tokens) pada setiap [giliran](#turn) pesan baru, dan setiap token tersebut akan memakan [anggaran perhatian](#attention-budget) model peduli apakah agen membutuhkannya atau tidak. File [AGENTS.md](#agentsmd) yang dipenuhi dengan seluruh isi panduan penulisan kode, alur kerja rilis aplikasi, dan aturan database justru akan membuat kemampuan agen menurun untuk semua tugas tersebut — karena instruksi penting untuk tugas aktif terdistorsi oleh instruksi lain yang tidak relevan. Ciri khasnya adalah ketika agen mulai mengabaikan aturan yang sebenarnya ada di dalam konteks obrolan: aturan tersebut ada di sana, tetapi terkubur di bawah informasi lainnya.

Pengungkapan bertahap membalikkan kondisi ini. Jaga agar lapisan informasi yang selalu dimuat di awal tetap berukuran kecil — misalnya cukup satu baris kalimat penjelasan per topik diikuti dengan penunjuk ke lokasi detailnya berada. Agen akan membaca panduan penulisan kode hanya saat ia menulis komponen tampilan, membaca panduan rilis hanya saat melakukan deployment, dan tidak membaca keduanya saat ia sedang memperbaiki tes kode pemrograman yang gagal. Modul [keahlian (skills)](#skill) adalah wujud penerapan pola ini di dalam [harness (sistem penjalan)](#harness): deskripsi singkatnya akan dimuat di awal setiap [sesi](#session), sementara instruksi lengkapnya baru dibaca ketika fitur tersebut dipicu.

_Contoh Penggunaan:_

"Apakah sebaiknya saya memasukkan seluruh isi panduan gaya penulisan kode ke dalam file `AGENTS.md`?"

"Jangan — gunakan metode pengungkapan bertahap. Rujuk panduan gaya tersebut sebagai modul keahlian (skill) yang baru dimuat oleh agen saat ia benar-benar perlu menulis komponen kode. Informasi di dalam `AGENTS.md` akan memakan biaya token di setiap giliran percakapan."

### Context pointer

Sebuah rujukan atau penyebutan di dalam suatu dokumen yang mengarah ke dokumen lainnya, sehingga [agen](#agent) dapat memuat dokumen tersebut ke dalam [jendela konteks](#context-window) hanya ketika tugas yang dikerjakannya membutuhkan informasi tersebut. Ini adalah fondasi utama dari metode [pengungkapan bertahap (progressive disclosure)](#progressive-disclosure).

Alasan utama menggunakan penunjuk (pointer) — daripada menuliskan langsung seluruh isinya di tempat — adalah masalah efisiensi biaya. Sebuah penunjuk hanya memakan ruang satu baris kalimat saja di dalam jendela konteks. Dokumen yang dirujuk mungkin berisi ribuan [token](#token), namun token tersebut tidak akan memakan biaya apa pun sebelum agen benar-benar mengikuti penunjuk tersebut. Menuliskan langsung 2.000 token panduan rilis di dalam [AGENTS.md](#agentsmd) akan membuat Anda membayar biaya token tersebut di setiap awal [sesi](#session) baru; tetapi jika Anda menggantinya dengan kalimat "proses deploy: silakan baca `internal/deploy.md`", maka hanya sesi yang benar-benar melakukan deployment saja yang akan memuat dokumen tersebut. Agen akan mengikuti penunjuk ini melalui [panggilan alat (tool call)](#tool-call) ketika tugas yang diberikan sesuai.

Agar penunjuk dapat bekerja dengan baik, dibutuhkan dua hal: jalur lokasi file yang tetap (stable path) dan deskripsi yang cukup agar agen tahu kapan rujukan tersebut perlu dibaca. Jalur file saja tanpa keterangan tidak akan menarik perhatian agen; kalimat "baca `internal/deploy.md`" tanpa penjelasan isi akan diabaikan oleh sesi yang sebenarnya membutuhkannya. Tuliskan rujukan tersebut sesuai dengan kategori tugasnya: "untuk rilis aplikasi, deploy, atau pembatalan rilis (rollback) — baca `internal/deploy.md` terlebih dahulu".

Penunjuk konteks dapat ditemukan di mana saja: baris instruksi di file AGENTS.md, deskripsi [keahlian (skill)](#skill) (sistem penjalan memuat deskripsinya, sementara isi keahliannya menunggu di balik deskripsi tersebut), nama-nama file di dalam daftar folder, serta tautan antar-dokumen.

Penunjuk juga dapat menghubungkan [sumber sekunder (secondary source)](#secondary-source) kembali ke [sumber primer (primary source)](#primary-source) asalnya — seperti ringkasan penyusutan yang menyebutkan nama berkas transkrip asli, atau dokumen panduan yang mencantumkan nama berkas kode pemrograman yang dijelaskannya. Hal ini membuat hilangnya informasi dari ringkasan dapat dipulihkan: ketika ringkasan dirasa tidak cukup lengkap, agen dapat mengikuti penunjuk tersebut untuk membaca dokumen aslinya, alih-alih menebak-nebak dari ringkasan yang ada.

_Hindari:_ istilah "referensi" (reference) — karena terlalu formal dan kurang menggambarkan bahwa proses mengikuti tautan tersebut akan memuat konteks baru. _Hindari:_ istilah "portal" — karena terlalu berlebihan.

_Contoh Penggunaan:_

"File `AGENTS.md` kita ukurannya sudah sangat besar."

"Sebagian besar isinya harus diubah menjadi penunjuk konteks (context pointer), bukan ditulis langsung semua isinya di sana. Biarkan aturan wajib tetap tertulis langsung; ubah panduan deploy dan panduan gaya kode menjadi modul keahlian (skill) dan sisakan penunjuk konteksnya saja di file tersebut."

### Skill

Sebuah modul kemampuan terkemas yang diajarkan kepada agen — berisi kumpulan instruksi dan sumber daya untuk menyelesaikan suatu tugas spesifik dengan baik, disimpan di dalam [lingkungan kerja](#environment) sampai [penunjuk konteks (context pointer)](#context-pointer) memuatnya ke dalam [jendela konteks](#context-window) ketika tugas tersebut dikerjakan. Ini adalah modul unit dari metode [pengungkapan bertahap (progressive disclosure)](#progressive-disclosure) di dalam [harness (sistem penjalan)](#harness).

Fitur keahlian (skills) adalah standar terbuka yang didefinisikan di situs [agentskills.io](https://agentskills.io) — awalnya dikembangkan oleh Anthropic dan kini telah diadopsi oleh sebagian besar sistem penjalan terkemuka, sehingga modul keahlian yang ditulis sekali dapat bekerja di berbagai sistem. Format modul keahlian berupa sebuah folder yang berisi:

- File `SKILL.md` — berisi metadata (minimal nama dan deskripsi keahlian) serta instruksi langkah kerja itu sendiri
- Pilihan lainnya: skrip program yang dapat dijalankan oleh [agen](#agent)
- Pilihan lainnya: templat berkas dan materi rujukan yang ditunjuk oleh instruksi kerja

Secara bawaan, hanya nama dan deskripsi keahlian saja yang masuk ke dalam [konteks](#context) obrolan. Ketika tugas yang diberikan cocok, agen baru memuat isi lengkap dokumen instruksinya. Sebelum hal itu terjadi, modul keahlian ini hampir tidak memakan ruang memori sama sekali — hanya memakan satu atau dua kalimat [token](#token), peduli seberapa panjang dan tebal dokumen instruksi lengkapnya di dalam komputer.

Hal inilah yang membedakan modul keahlian dengan file [AGENTS.md](#agentsmd), yang selalu dimuat di setiap [sesi](#session) percakapan apa pun jenis tugasnya. Modul keahlian hanya dibaca ketika jenis pekerjaan spesifik yang relevan muncul — seperti merilis aplikasi, merancang struktur layanan baru, atau menulis migrasi database — dan diabaikan pada sisa waktu pengerjaan lainnya.

_Hindari:_ istilah "[alat (tool)](#tool)" — karena alat adalah apa yang _dijalankan_ oleh agen; sedangkan keahlian (skill) adalah dokumen instruksi yang _dibaca_ oleh agen.

_Contoh Penggunaan:_

"Di mana sebaiknya saya meletakkan file panduan deploy aplikasi?"

"Sebagai sebuah modul keahlian (skill) — agen akan memuatnya hanya ketika tugasnya berkaitan dengan deploy. Jika diletakkan di file `AGENTS.md`, itu akan menghabiskan kuota token di setiap [giliran](#turn) obrolan untuk sesuatu yang hanya kita pakai seminggu sekali."

### Subagent

Sebuah [agen](#agent) yang dijalankan oleh agen lain melalui [panggilan alat (tool call)](#tool-call). Subagen berjalan di dalam [sesi](#session) obrolannya sendiri dengan [jendela konteks (context window)](#context-window) miliknya sendiri, dan melaporkan kembali satu [hasil alat (tool result)](#tool-result). Hal ini berbeda dari proses [operan tugas (handoff)](#handoff) — di mana agen induk secara khusus mengharapkan adanya jawaban kembali; sedangkan operan tugas tidak memiliki jalur pengembalian data. **Subagen tidak dapat menjalankan subagen lainnya** — pohon hubungan ini hanya sedalam satu tingkat. Subagen ada untuk mengisolasi [konteks](#context), bukan untuk menyusun hierarki yang rumit.

Tujuan utamanya adalah menjaga agar pekerjaan yang menghasilkan banyak informasi tidak relevan (kebisingan) tidak mengotori konteks agen induk. Pencarian yang luas atau aktivitas membaca file yang panjang menghasilkan banyak halaman berisi hasil alat, yang sebagian besar hanya berguna sementara sampai jawaban ditemukan. Jika dijalankan di dalam agen induk, semua informasi tersebut akan terus menetap di dalam konteks agen induk sepanjang sesi berjalan. Namun, jika dijalankan di dalam subagen, kebisingan tersebut akan mengisi jendela konteks sekali pakai — dan hanya laporan akhirnya saja yang akan masuk ke konteks agen induk. Laporan ini merupakan [sumber sekunder (secondary source)](#secondary-source): agen induk menerima penjelasan subagen tentang apa yang ditemukannya, bukan data mentahnya, sehingga apa pun yang dilewatkan dalam laporan tersebut tidak akan dapat dilihat oleh agen induk.

Subagen juga berjalan secara bersamaan (konkuren) — agen induk dapat menyebarkan beberapa subagen sekaligus untuk menyelesaikan bagian pekerjaan yang independen secara paralel.

_Contoh Penggunaan:_

"Hasil pencarian kata kunci (grep) ini membuat jendela konteks saya penuh sesak."

"Jalankan subagen untuk melakukan pencarian tersebut — subagen akan menghabiskan jendela konteksnya sendiri untuk memproses kebisingan hasil pencarian dan hanya melaporkan kembali dua jalur file yang benar-benar Anda butuhkan."

## Section 7 — Pola Kerja

### Human-in-the-loop

Sebuah pola kerja di mana satu atau beberapa manusia mendampingi [agen](#agent) selama [sesi](#session) obrolan berlangsung — untuk meninjau hasil, mengarahkan tindakan, atau berkolaborasi secara langsung (real-time). Manusia hadir dan terlibat secara aktif, tidak hanya sekadar menyetujui atau menolak tindakan agen secara kaku.

Pola ini bertolak belakang dengan pola kerja otomatis [AFK (away from keyboard)](#afk), di mana agen bekerja sendiri tanpa pengawasan dan Anda baru menilai hasilnya setelah selesai. Konsep keterlibatan manusia (human-in-the-loop) berguna untuk menangkap masalah selagi biayanya masih murah: Anda dapat melihat ketika agen mulai membuka file yang salah, salah memahami kebutuhan tugas, atau mulai terjebak ke jalan buntu, lalu langsung mengarahkannya dengan satu kalimat singkat — daripada Anda baru mengetahui kesalahan tersebut setelah agen melakukan pekerjaan secara percaya diri selama dua puluh menit di atas landasan yang salah. Agen tidak selalu menyadari kapan mereka keluar dari jalur; jika dibiarkan bekerja sendiri, mereka cenderung terus memaksa maju daripada berhenti dan bertanya.

Pola mana yang cocok digunakan sangat bergantung pada jenis pekerjaannya. Tugas yang memiliki spesifikasi jelas, berisiko rendah, dan mudah diverifikasi sangat cocok diselesaikan secara AFK. Sebaliknya, tugas yang memiliki banyak ketidakjelasan (ambigu), tidak dapat dibatalkan (irreversible), atau di mana Anda akan kesulitan meninjau hasil akhirnya — seperti pemindahan database (migrasi schema), keputusan desain yang rumit, atau apa pun yang menyentuh sistem produksi aktif — sangat cocok diselesaikan dengan tetap mendampingi agen (in the loop). Pertimbangan utamanya adalah: seberapa besar kerugian akibat salah melangkah, dan seberapa lambat Anda akan menyadarinya?

Beberapa pekerjaan secara alami memang mengharuskan Anda berada di dalam siklus proses karena tanggapan Anda adalah bahan inputnya. Metode [Grilling (tanya-jawab intensif)](#grilling) hanya bisa berjalan jika Anda ada di sana untuk menjawab pertanyaan-pertanyaan; sementara metode [pembuatan prototipe (prototyping)](#prototyping) hanya bisa berjalan jika Anda ada di sana untuk menanggapi hasil kodenya secara langsung.

Mendampingi agen secara terus-menerus akan menyita perhatian Anda, padahal perhatian manusia adalah sumber daya yang terbatas. Salah satu cara agar dapat bekerja lebih efisien dengan agen adalah dengan memindahkan lebih banyak tugas keluar dari siklus pendampingan secara aman — yaitu dengan dibekali rencana kerja, [pemeriksaan otomatis](#automated-check), serta [tinjauan manusia](#human-review) di bagian akhir alih-alih melakukan pengawasan sepanjang proses kerja berjalan.

_Contoh Penggunaan:_

"Apakah tugas ini sebaiknya dijalankan secara AFK saja semalaman?"

"Jangan, ini tugas pemindahan database (migrasi schema) — biarkan tetap berjalan dalam pendampingan manusia (human-in-the-loop). Saya ingin melihat setiap langkahnya dan mengarahkan agen jika dia salah memilih kolom data untuk pengisian."

### AFK

Away from keyboard (jauh dari keyboard). Sebuah pola kerja di mana pengguna memulai [sesi](#session) lalu meninggalkan [agen](#agent) bekerja sendiri tanpa pengawasan. Ini adalah cara melipatgandakan produktivitas dalam coding berbasis [AI](#ai) — banyak sesi AFK dapat berjalan bersamaan saat Anda tidur, makan, atau mengerjakan hal lain. Agar aman, pola ini biasanya membutuhkan [mode izin](#permission-mode) yang longgar dan sistem [sandboxing (lingkungan terisolasi)](#sandbox).

Saat Anda tidak ada di tempat, agen akan menangani ketidakpastian dengan cara yang berbeda. Ketika Anda mengawasi, keputusan yang membingungkan akan diajukan sebagai pertanyaan dan Anda bisa langsung menjawabnya. Namun, begitu Anda pergi, agen akan memilih jawaban bawaan sendiri (default) dan terus berjalan, di mana setiap keputusan berikutnya akan didasarkan pada tebakan pertama tersebut. Kegagalan khas dari pola ini adalah ketika Anda kembali dan melihat hasil kerja berjam-jam yang selesai dengan penuh percaya diri, tetapi ternyata dibangun di atas keputusan yang salah pada sepuluh menit pertama. Hasil kerjanya tidak berantakan — hasilnya rapi dan masuk akal, hanya saja masuk akal untuk hal yang salah.

Karena Anda tidak bisa memberikan masukan selama agen berjalan, berikan masukan sebelum dan sesudahnya. Sebelum memulai: selesaikan ketidakpastian sejak awal — misalnya lewat sesi [grilling (tanya-jawab intensif)](#grilling) atau menulis [spesifikasi (spec)](#spec) — sehingga agen tidak perlu banyak menebak sendiri. Selama berjalan: [pemeriksaan otomatis](#automated-check) dan [tinjauan otomatis](#automated-review) menggantikan perhatian yang tidak bisa Anda berikan, sehingga sistem langsung gagal (fail fast) jika ada kesalahan yang bisa dideteksi secara teknis. Setelah selesai: proses kerja harus berakhir pada sesuatu yang bisa ditinjau kembali — seperti Pull Request (PR), bukan perubahan yang langsung digabungkan (merge) ke kode utama. AFK tidak menghilangkan [tinjauan manusia](#human-review); pola ini hanya menunda semua tinjauan ke bagian akhir. Itulah mengapa hasil akhir yang diberikan harus benar-benar layak untuk ditinjau. Ini juga alasan mengapa [AX (pengalaman agen)](#ax) sangat penting dalam sesi AFK — saat tidak ada yang mengawasi, lingkungan kerja adalah satu-satunya panduan yang dimiliki oleh agen.

_Hindari:_ istilah "agen latar belakang" (background agent) — karena istilah ini terlalu fokus pada mesin ("berjalan di latar belakang") alih-alih pola kerja manusianya ("pengguna sedang pergi"). AFK menekankan fakta yang sebenarnya penting: pengguna tidak sedang mengawasi jalannya proses.

_Contoh Penggunaan:_

"Saya menjalankan tugas ini secara AFK — tiga agen terisolasi melakukan perbaikan kode (refactor), dan saya tinggal memeriksa PR-nya besok pagi."

"Apakah kita akan [melewati perizinan](#agent-mode)?"

"Ya, tapi dengan akses [sistem file](#filesystem) hanya-baca (read-only) dan tanpa jaringan internet."

### Automated check

Sebuah verifikasi pasti (deterministik) yang berjalan di dalam [lingkungan kerja](#environment) — seperti pengujian (test), pengecekan tipe data, pembersih kode (lint), pembuatan program (build), dan pre-commit hooks. Hasilnya hanya lulus/gagal (pass/fail), tanpa adanya penilaian subjektif. Ini adalah sinyal utama yang digunakan oleh [agen](#agent) untuk memperbaiki kesalahannya sendiri tanpa perlu melibatkan orang lain. Pengujian yang tidak stabil (flaky test) adalah bentuk pemeriksaan yang rusak, bukan berarti tidak ada pemeriksaan; pemeriksaan otomatis dirancang untuk selalu memberikan hasil yang pasti dan konsisten.

Proses perbaikan mandiri bekerja dalam sebuah siklus. Agen melakukan perubahan kode, menjalankan pemeriksaan melalui [panggilan alat (tool call)](#tool-call), dan hasil kegagalan tersebut akan masuk kembali ke dalam [jendela konteks](#context-window)-nya — misalnya berupa pesan error tipe data lengkap dengan nama file dan baris kodenya, atau kegagalan pengujian yang memuat nilai ekspektasi vs nilai riil. Laporan tersebut sudah cukup bagi agen untuk memperbaiki masalah dan menjalankan pemeriksaan kembali, terus berputar hingga semuanya lulus tanpa perlu campur tangan manusia. Konsistensi inilah yang membuat siklus perbaikan dapat dipercaya: kode yang sama harus selalu menghasilkan putusan yang sama, sehingga status "lulus" benar-benar memiliki arti. Pemeriksaan yang tidak konsisten (flaky) akan merusak siklus ini — agen mungkin akan mencoba "memperbaiki" kode yang sebenarnya sudah benar, atau terus mencoba melewati kegagalan yang nyata.

Inilah mengapa pemeriksaan otomatis yang baik merupakan bagian besar dari kualitas [AX (pengalaman agen)](#ax) dalam sebuah proyek. Agen yang bekerja di dalam proyek dengan aturan tipe data yang ketat, rangkaian tes yang cepat, dan linter akan mampu menangkap sebagian besar kesalahannya sendiri sebelum Anda mengetahuinya; sedangkan agen di proyek yang tidak memiliki semua itu akan langsung mengirimkan apa pun kode yang dihasilkannya. Perbedaan ini sangat terasa pada pengerjaan otomatis [AFK (away from keyboard)](#afk), di mana pemeriksaan otomatis adalah satu-satunya verifikasi yang terjadi selama agen berjalan. Namun, pemeriksaan otomatis hanya mendeteksi apa yang diujinya saja — status hijau (lulus) berarti kriteria yang diuji telah terpenuhi, bukan berarti logika keseluruhan kode sudah benar. Celah yang memerlukan penilaian subjektif dan logika kontekstual inilah yang menjadi tugas dari [tinjauan otomatis](#automated-review) dan [tinjauan manusia](#human-review).

_Hindari:_ istilah "feedback loop" (siklus umpan balik) atau "backpressure" — karena kedua istilah ini mencampuradukkan antara pemeriksaan otomatis yang kaku dengan tinjauan subjektif. _Hindari:_ menggunakan istilah "test" secara umum — karena pengujian (test) adalah bagian dari pemeriksaan otomatis, tetapi tidak semua pemeriksaan otomatis adalah pengujian (misalnya pengecekan tipe data).

_Contoh Penggunaan:_

"Agen terus mengirimkan kode yang rusak pada sesi kerja otomatis (AFK)."

"Pemeriksaan otomatis apa saja yang dipasang di dalam [sandbox (lingkungan terisolasi)](#sandbox)?"

"Baru pengujian unit (unit test) saja."

"Tambahkan pengecekan tipe data (typecheck) dan linter — agen akan memperbaikinya sendiri dari laporan pemeriksaan itu sebelum PR diajukan."

### Automated review

Proses di mana sebuah [agen](#agent) meninjau hasil kerja agen lainnya, sering kali menggunakan [model](#model) atau [system prompt (instruksi sistem)](#system-prompt) yang berbeda. Proses ini bersifat tidak pasti (non-deterministik) karena menggunakan penilaian subjektif. Dapat dijalankan di mana saja — sebelum penggabungan kode (merge) pada PR, setelah kode masuk ke riwayat commit, atau di tengah sesi sebagai [sub-agen (subagent)](#subagent). Penggunaan LLM sebagai penilai (LLM-as-judge) di dalam integrasi otomatis (CI) dikategorikan sebagai tinjauan otomatis, bukan [pemeriksaan otomatis](#automated-check); apa yang dilakukan oleh penilai tersebutlah yang menentukan kategorinya, bukan di mana ia dijalankan.

Pemisahan agen pemeriksa dari agen pembuat kode adalah kunci keberhasilan metode ini. Meminta agen yang menulis kode untuk memeriksa hasil karyanya sendiri tidak akan memberikan banyak hasil — [sesi](#session) obrolan yang menghasilkan bug tersebut juga berisi jalan pikiran yang melahirkan bug tersebut, sehingga agen akan membaca kesimpulannya sendiri sebagai bentuk pembenaran. Sebaliknya, agen peninjau yang menggunakan [jendela konteks](#context-window) baru tidak memiliki keterikatan pemikiran tersebut: ia melihat perubahan kode (diff) seperti orang asing melihatnya, dan inilah esensi dari sebuah tinjauan. Menggunakan model yang berbeda atau instruksi sistem khusus tinjauan akan memperjelas proses ini — memberikan sudut pandang yang berbeda, dan instruksi sistem dapat difokuskan pada apa yang benar-benar Anda pedulikan (seperti keamanan, keselarasan API, atau kinerja) alih-alih instruksi samar seperti "cari masalah".

Metode ini berada di antara lapisan peninjauan lainnya. Pemeriksaan otomatis bersifat pasti dan mendeteksi kesalahan teknis yang bisa diuji secara mekanis; sementara [tinjauan manusia](#human-review) membutuhkan biaya besar dan paling sulit untuk ditingkatkan kapasitasnya (scale). Tinjauan otomatis berada di tengah-tengah keduanya: ia menangkap masalah-masalah yang membutuhkan penilaian subjektif — seperti nama fungsi yang membingungkan atau kasus-kasus ekstrem (edge cases) yang terlewat — dengan biaya komputasi mesin yang sangat murah. Karena sifatnya yang tidak pasti, ia bisa saja melewatkan sesuatu atau menandai hal yang sebenarnya bukan masalah; anggaplah ini sebagai penyaring awal untuk meningkatkan standar kualitas minimum sebelum kode tersebut diperiksa oleh manusia, bukan sebagai pengganti peninjauan manusia.

_Hindari:_ istilah "tinjauan AI" atau "tinjauan agen" — karena terlalu samar dan sulit dibedakan dengan agen pembuat kode itu sendiri.

_Contoh Penggunaan:_

"Kita mendapatkan terlalu banyak PR berkualitas buruk dari pengerjaan otomatis [AFK (away from keyboard)](#afk)."

"Tambahkan langkah tinjauan otomatis sebelum penggabungan kode (merge) — gunakan model yang berbeda dengan instruksi sistem terpisah, khusus difokuskan untuk memeriksa celah keamanan dan perubahan aturan API."

### Human review

Proses di mana pengguna membaca secara langsung kode yang dihasilkan oleh [agen](#agent) dan memberikan penilaian atas kualitasnya. Menilai di sini berarti membaca berkas perbedaan kode (diff) atau file yang berubah; membaca _deskripsi penjelasan_ dari agen mengenai apa yang dikerjakannya tidaklah dihitung sebagai tinjauan — karena cerita narasi bukanlah hasil karya aslinya. Deskripsi tersebut hanyalah [sumber sekunder (secondary source)](#secondary-source) yang ditulis oleh pihak yang sedang dinilai; sementara diff adalah [sumber primer (primary source)](#primary-source) yang wajib dibaca dalam proses peninjauan.

Penggunaan agen akan meningkatkan jumlah kode program yang dihasilkan, sehingga proses peninjauan sering kali menjadi hambatan kecepatan kerja. Salah satu solusi yang berguna adalah dengan membagi strategi peninjauan menjadi beberapa lapisan. [Pemeriksaan otomatis](#automated-check) akan menangkap kesalahan teknis yang pasti, [tinjauan otomatis](#automated-review) akan menangkap kesalahan logika yang terdeskripsikan, dan [tinjauan manusia (human review)](#human-review) disimpan hanya untuk hal-hal yang memerlukan penilaian subjektif Anda — misalnya apakah perubahan kode tersebut sudah tepat, apakah pendekatannya sesuai dengan arsitektur proyek, atau apakah fitur tersebut memang perlu dibuat.

Proses peninjauan juga jauh lebih mudah dilakukan di awal. Membaca dokumen rencana kerja sebelum pengerjaan dimulai, atau melihat berkas diff kecil di tengah proses pengerjaan hanya memakan waktu beberapa menit; sedangkan membongkar seluruh cabang kode (branch) yang sudah selesai setelah sesi otomatis [AFK (away from keyboard)](#afk) akan memakan waktu jauh lebih lama. Penempatan titik pemeriksaan tinjauan ini adalah keputusan penting dalam metode [human-in-the-loop (keterlibatan manusia)](#human-in-the-loop), bukan sekadar pelengkap di akhir.

_Hindari:_ menggunakan istilah "code review" saja — karena maknanya bisa rancu antara peninjauan oleh manusia atau oleh sistem otomatis.

_Contoh Penggunaan:_

"Saya sudah melakukan tinjauan manusia (human review) pada hasil kerja otomatis (AFK)."

"Kamu membaca file perubahannya (diff) atau hanya membaca ringkasannya?"

"Membaca diff. Ringkasannya menulis bahwa agen menghapus kode pemrograman yang sudah mati — tapi ternyata fungsi yang dihapus tersebut masih dipanggil dari file lain yang dibuat otomatis."

### Vibe coding

Sebuah pola kerja di mana pengguna langsung menerima kode dari [agen](#agent) tanpa melakukan [peninjauan manusia (human review)](#human-review). Perbedaan perubahan kode (diff) diperlakukan sebagai sesuatu yang tidak transparan — hal yang penting adalah apakah program tersebut berjalan dengan benar, bukan apa isi kode di dalamnya. Proses [peninjauan otomatis (automated review)](#automated-review) dan [pemeriksaan otomatis (automated checks)](#automated-check) mungkin masih tetap berjalan; praktik _vibe coding_ tidak melarang ataupun mengharuskan keduanya.

Istilah ini berasal dari Andrej Karpathy, yang [mencetuskan istilah tersebut pada awal tahun 2025](https://x.com/karpathy/status/1886192184808149383): Anda "sepenuhnya berserah pada suasana hati (vibes)" dan "bahkan lupa bahwa kode tersebut ada" — cukup jelaskan apa yang Anda inginkan, terima hasil kode yang dikembalikan, dan nilai hasilnya dengan cara menjalankannya secara langsung.

Vibe coding menukar ketelitian pemeriksaan dengan kecepatan kerja. Membaca perubahan kode biasanya merupakan langkah paling lambat dalam pekerjaan berbasis agen, sehingga meniadakan langkah ini akan menghilangkan hambatan utama tersebut. Untuk kode yang dampak kegagalannya rendah — seperti kode [purwarupa (prototypes)](#prototyping), skrip sekali pakai, atau alat bantu internal — pertukaran tersebut masih masuk akal. Namun, risikonya akan meningkat seiring dengan masa pakai kode dan tingkat kepentingan sistem tersebut.

Kerugian dari praktik ini biasanya baru akan terasa di kemudian hari. Perubahan yang dilakukan dengan cara vibe coding akan menumpuk menjadi suatu basis kode yang tidak pernah dibaca oleh siapa pun, dan perilaku program adalah satu-satunya hal yang diperiksa — sehingga segala sesuatu yang tidak tampak pada perilaku luar program, seperti kunci rahasia yang tidak sengaja tertulis ke dalam berkas log, penanganan kasus khusus yang terlewat, atau pemrosesan data yang salah secara diam-diam, akan ikut terkirim tanpa disadari. Pertama kali seseorang mendiagnosis kesalahan (debug) pada sistem tersebut adalah pertama kalinya kode tersebut benar-benar dibaca. Ketika peninjauan manusia ditiadakan, maka bentuk verifikasi otomatis apa pun yang masih berjalan — seperti unit test, sistem tipe data (types), atau peninjauan otomatis — menjadi satu-satunya pintu gerbang penyaring yang dilalui oleh kode tersebut.

_Hindari:_ penggunaan istilah "vibe coding" sebagai sinonim untuk "penulisan kode AI berkualitas rendah" — istilah ini merujuk pada sikap peninjauan yang diambil, bukan kualitas dari kode yang dihasilkan.

_Contoh Penggunaan:_

"Apakah Anda sudah membaca apa saja yang diubah oleh agen pada alur autentikasi (auth flow)?"

"Saya melakukan vibe coding — proses masuk log (login) masih berfungsi, hanya itu yang saya periksa."

"Baca dahulu perubahan kodenya sebelum Anda kirim (push); melakukan vibe coding pada bagian autentikasi adalah penyebab bocornya kunci rahasia ke dalam berkas log."

### Design concept

Pemahaman bersama mengenai apa yang sedang dibangun, yang dimiliki secara selaras antara pengguna dan [agen](#agent), namun terpisah dari dokumen fisik apa pun. Istilah ini dipopulerkan oleh Brooks dalam bukunya _The Design of Design_: percakapan, [artefak operan (handoff artifact)](#handoff-artifact), dan kode program adalah dokumen fisik (aset) yang berupaya menangkap atau mewujudkan konsep desain tersebut, namun tidak ada satu pun dari aset itu yang _merupakan_ konsep desain itu sendiri. Kualitas konsep desain ini dirasakan langsung melalui kualitas percakapan yang membangunnya.

Istilah ini menjelaskan penyebab di balik rasa frustrasi yang sering kita rasakan: agen menuliskan kode yang persis seperti yang Anda minta, namun hasilnya tetap saja salah. Penyebab utamanya biasanya adalah karena Anda sendiri belum sepenuhnya tahu apa yang Anda inginkan. Konsep desain tersebut belum matang di dalam kepala Anda — instruksi (prompt) Anda baru menangkap bagian-bagian yang sudah Anda pikirkan, dan diam untuk bagian-bagian yang belum terpikirkan. Agen kemudian mengisi keheningan tersebut dengan asumsinya sendiri, karena tidak ada panduan keselarasan yang bisa diikutinya. Tidak ada sistem yang rusak. Konsep desain bersama belum terbentuk, karena memang belum ada konsep utuh yang bisa dibagikan.

Anda dapat mengetahui bahwa konsep desain telah dipahami bersama dengan cara yang sama seperti yang Anda lakukan terhadap rekan kerja manusia: pihak lain mulai menjawab pertanyaan yang belum Anda tanyakan dengan cara yang persis seperti yang Anda harapkan. Sebelum momen itu tercapai, proses kerja masih berupa percakapan — metode [grilling (tanya-jawab intensif)](#grilling) adalah bentuk sengaja dari hal ini — dan menulis [spesifikasi (spec)](#spec) terlalu cepat hanya akan mengunci ketidakselarasan tersebut ke dalam dokumen fisik yang permanen. Konsep desain juga akan terus berkembang seiring Anda belajar; dokumen fisik akan selalu tertinggal di belakangnya, itulah mengapa spesifikasi yang setia pada pemahaman minggu lalu masih bisa menyesatkan sesi kerja minggu ini.

_Contoh Penggunaan:_

"Agen ini menulis kode yang persis seperti yang saya minta, tapi hasilnya tetap saja salah."

"Kalian belum memiliki konsep desain bersama (design concept) — dia mengisi bagian yang kosong dengan asumsinya sendiri. Teruskan mengobrol hingga aturan pembatalan, pengembalian dana, dan pemenuhan pesanan sebagian sudah selaras di antara kalian berdua sebelum Anda memintanya menulis file spesifikasi."

### Grilling

Sebuah teknik untuk mematangkan [konsep desain (design concept)](#design-concept) bersama dengan [agen](#agent): agen akan mewawancarai pengguna secara mendalam (metode Sokratik) satu per satu keputusan, sambil mengajukan rekomendasi jawaban untuk masing-masing poin. Teknik ini memperlambat proses pembuatan rencana kerja yang terburu-buru — tidak ada [artefak operan (handoff artifact)](#handoff-artifact) yang ditulis sampai konsep desain tersebut benar-benar stabil.

Teknik ini lahir karena agen sering kali mengisi celah keputusan yang kosong secara diam-diam. Ketika diminta menulis [spesifikasi (spec)](#spec) dari instruksi singkat sepanjang dua baris kalimat saja, agen tidak akan berhenti ketika menemui bagian keputusan yang belum Anda tentukan — ia akan memilih jawaban bawaan (default) tebakannya sendiri dan menuliskannya di sana. Hasilnya memang tampak lengkap, dan tebakan tersebut tidak dapat dibedakan dari pilihan sadar Anda, sehingga Anda baru menyadarinya di akhir: saat proses tinjauan kode, atau saat fitur yang dibangun menangani kasus ekstrem dengan cara yang tidak pernah Anda setujui. Wawancara intensif (grilling) membalikkan kondisi ini — alih-alih menebak, agen diwajibkan bertanya kepada Anda.

Ini adalah teknik [human-in-the-loop (keterlibatan manusia)](#human-in-the-loop): jawaban Anda adalah bahan inputnya. Ketika sebuah pertanyaan tidak dapat dijawab langsung melalui percakapan — misalnya karena Anda harus melihat wujud fiturnya terlebih dahulu — gantilah ke metode [pembuatan prototipe (prototyping)](#prototyping).

_Contoh Penggunaan:_

"Dia langsung menulis spesifikasi dan membuat logika pembatalan pesanan yang salah."

"Lakukan grilling (tanya-jawab intensif) terlebih dahulu — paksa dia bertanya kepada Anda tentang pembatalan sebagian, pengembalian dana, dan batas waktu sebelum dia menulis apa pun ke dokumen. Lebih murah menyelesaikan masalah lewat obrolan daripada merombak kode pemrograman."

### Prototyping

Meminta [agen](#agent) membuat versi awal yang cepat dan kasar dari sesuatu, berguna ketika proses obrolan terlalu abstrak (kurang representatif) dan Anda membutuhkan wujud fisik nyata untuk didiskusikan bersama.

Metode [grilling (tanya-jawab intensif)](#grilling) menyelesaikan keputusan desain melalui percakapan. Percakapan memang murah, namun representasinya rendah: beberapa pertanyaan tidak dapat dijawab hanya dengan kata-kata — seperti bagaimana sensasi interaksi tombol saat diklik, apakah struktur API terasa nyaman saat dipanggil di kode pemrograman nyata, atau apakah tata letak tampilan tetap rapi saat dimuat data yang sesungguhnya. Proses tanya-jawab sering kali menemui pertanyaan di mana jawaban jujur Anda adalah "saya tidak tahu, saya harus melihat wujudnya dulu." Setelah titik itu, diskusi hanya akan berputar-putar tanpa ujung. Sebagai gantinya, mintalah agen membangun wujud kasarnya terlebih dahulu, lihat hasilnya, dan kembalilah ke obrolan dengan membawa jawaban pasti.

Keberadaan agen dapat memangkas biaya pembuatan program, yang membuat metode ini sangat praktis dilakukan. Versi kasar yang dulunya membutuhkan waktu seharian untuk dirancang, sekarang dapat selesai dalam hitungan menit, sehingga sangat layak untuk rutin dilakukan. Ini adalah teknik [human-in-the-loop (keterlibatan manusia)](#human-in-the-loop): prototipe dibuat agar Anda dapat mengevaluasi dan merespon hasilnya secara langsung.

Proses evaluasi ini biasanya tidak berhenti pada pandangan pertama. Lakukan proses iterasi pada prototipe tersebut — lihat hasilnya, minta perubahan kode, dan lihat kembali hasilnya — sehingga setiap putaran akan menyelesaikan keputusan demi keputusan langsung di atas wujud nyata, dengan tingkat representasi yang jauh lebih tinggi daripada sekadar obrolan.

Prototipe tidak harus selalu berakhir menjadi sampah. Anda dapat membangun bagian-bagian yang sedang Anda evaluasi dengan standar kualitas siap rilis (production-ready), sehingga ketika keputusan desain sudah disepakati, komponen atau API yang Anda uji dapat langsung dipindahkan ke dalam proyek utama. Hal ini menjadikan pembuatan prototipe sebagai bahan rujukan utama untuk dimasukkan ke dalam dokumen [spesifikasi (spec)](#spec).

_Contoh Penggunaan:_

"Kita sudah menghabiskan waktu setengah jam berdebat tentang apakah wizard pengisian data ini sebaiknya dibuat satu halaman penuh atau dibagi menjadi tiga langkah."

"Kata-kata tidak akan menyelesaikan perdebatan ini — minta agen membuat prototipe untuk kedua opsi tersebut. Kita tinggal mencobanya dan akan tahu jawabannya dalam lima menit."

### DX

Developer experience (DX / Pengalaman Pengembang) — seberapa mudah suatu proyek kode dan rangkaian alat kerjanya membantu manusia untuk bekerja dengan baik. DX yang baik ditandai dengan siklus umpan balik yang cepat, pesan error yang jelas, dokumentasi yang benar-benar menjawab pertanyaan Anda, serta proses persiapan sistem yang langsung berhasil dalam sekali coba. Istilah ini sudah ada jauh sebelum era coding berbasis AI; di dalam kamus ini, istilah tersebut utamanya digunakan sebagai pembanding untuk [AX (pengalaman agen)](#ax).

DX berfokus pada interaksi antara manusia dengan kode pemrograman — tidak lebih. Perbedaan utama antara pengembang manusia dengan agen adalah manusia bersifat [stateful (menyimpan keadaan/riwayat)](#stateful) sedangkan agen bersifat [stateless (tidak menyimpan riwayat)](#stateless). Manusia hanya perlu mempelajari struktur proyek sekali saja dan ingatan tersebut akan terbawa ke hari-hari berikutnya. Itulah mengapa proyek dengan DX yang buruk masih bisa ditolerir oleh manusia: mereka menyiasati integrasi otomatis (CI) yang lambat dengan mengumpulkan perubahan sebelum mengirimkannya (push), menyiasati dokumentasi yang hilang dengan bertanya sekali di Slack, dan menyiasati struktur kode yang membingungkan dengan mengingat-ingat letak setiap file. Cara-cara alternatif ini menumpuk, dan tim pengembang tetap bisa produktif di dalam proyek yang sebenarnya mempersulit mereka.

[Agen](#agent) menghadapi proyek kode yang sama tanpa kemampuan mengingat tumpukan pengalaman tersebut. Karena bersifat stateless di berbagai [sesi](#session), agen akan mempelajari ulang struktur proyek dari nol setiap saat — agen memang diuntungkan oleh pengujian yang cepat dan pesan error yang jelas, namun apa pun yang berhasil dia pahami kemarin akan terlupakan hari ini kecuali informasi tersebut ditulis langsung ke dalam [lingkungan](#environment) kerja, yang hanya bisa dibaca oleh agen melalui [hasil alat (tool result)](#tool-result). Celah inilah yang dinamakan AX: bagian-bagian dari DX yang tetap berguna ketika pengembangnya adalah sebuah agen komputer, ditambah kebutuhan-kebutuhan khusus yang tidak dimiliki oleh manusia, seperti menjaga kapasitas [jendela konteks](#context-window) tetap lega.

Adanya titik temu di antara keduanya membuat investasi pada DX sering kali meningkatkan kualitas AX secara cuma-cuma — seperti penggunaan aturan tipe data yang ketat, tes yang cepat, dan struktur kode yang teratur akan membantu manusia sekaligus agen. Namun, perbedaan di antara keduanya juga berarti investasi DX tidak selalu berguna bagi AX: dokumen panduan awal kerja (onboarding) yang indah akan membantu manusia selama seminggu pertama, tetapi tidak membantu agen sama sekali kecuali jika dokumen tersebut dapat diakses melalui file [AGENTS.md](#agentsmd).

_Contoh Penggunaan:_

"DX proyek kita baik-baik saja — pengembang baru sudah bisa mulai menulis kode dalam waktu seminggu."

"Bisa produktif karena ada pengembang senior yang menemani mereka selama seminggu itu. Agen tidak punya waktu seminggu itu; coba periksa kualitas AX proyek secara terpisah."

### AX

Agent experience (AX / Pengalaman Agen) — seberapa baik [lingkungan](#environment) kerja di dalam kode pemrograman disiapkan agar [agen](#agent) bisa bekerja dengan optimal. AX adalah padanan bagi agen dari istilah [DX (pengalaman pengembang/developer experience)](#dx) yang ditujukan untuk manusia. Ketika agen yang sama berkinerja baik di satu proyek (repositori) tetapi berkinerja buruk di proyek lain — padahal menggunakan [model](#model) dan [harness (sistem penjalan)](#harness) yang persis sama — perbedaannya biasanya terletak pada AX. Kecenderungan kita adalah menyalahkan model atau menulis ulang instruksi (prompt); padahal solusi sebenarnya sering kali ada pada perbaikan struktur kode di dalam proyek tersebut.

AX yang baik memiliki tiga dimensi utama:

| Dimensi              | Wujud AX yang baik                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pemeriksaan otomatis | [Pemeriksaan otomatis](#automated-check) yang cepat dan pasti — seperti pengecekan tipe data, pengujian (test), dan perapian kode (lint) — sehingga agen bisa memperbaiki kesalahannya sendiri tanpa bantuan manusia.                                                                                                                                                        |
| Arsitektur           | Kode pemrograman yang mudah dijelajahi oleh agen tanpa harus membaca seluruh file: struktur yang teratur, fungsi kompleks yang disembunyikan di balik antarmuka kecil, dan penamaan yang memperjelas fungsi kerja berkas.                                                                                                                                                          |
| Konteks kosong       | File [AGENTS.md](#agentsmd), [keahlian (skills)](#skill), dan [alat (tools)](#tool) dijaga agar tetap ringkas, sehingga sebagian besar kapasitas [jendela konteks](#context-window) tetap kosong untuk menyelesaikan tugas, menjaga agen tetap berada di dalam [zona pintar (smart zone)](#smart-zone) alih-alih tenggelam dalam informasi tidak penting. |

AX dan DX memang saling beririsan — pemeriksaan otomatis yang baik dan arsitektur yang rapi membantu programmer manusia sekaligus agen — namun keduanya memiliki perbedaan arah. Manusia bisa mentolerir informasi lisan ("tanya Sarah tentang modul pembayaran"), sistem integrasi yang lambat, atau kebiasaan tidak tertulis di kantor; agen sama sekali tidak bisa. Agen tidak bisa membaca petunjuk pop-up di layar (tooltip) atau grafik dasbor yang indah; mereka membutuhkan laporan kegagalan berupa teks tertulis di dalam [hasil alat (tool result)](#tool-result). Sebuah proyek bisa saja memiliki DX yang bagus namun AX yang sangat buruk.

_Hindari:_ menganggap AX sama persis dengan DX — karena target penggunanya (agen komputer vs manusia) membutuhkan pendekatan pengembangan yang berbeda.

_Contoh Penggunaan:_

"Agen ini menulis kode yang sangat bagus di bagian API proyek kita, tapi menulis kode sampah di bagian tampilan depan (frontend)."

"Proyek API kita memiliki aturan tipe data yang ketat dan sistem tes yang cepat; sedangkan frontend tidak punya keduanya dan malah memuat empat puluh keahlian sekaligus. Itu adalah masalah perbedaan kualitas AX, bukan salah modelnya."

