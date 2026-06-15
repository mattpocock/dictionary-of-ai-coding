---
description: Pihak yang menyediakan server untuk menjalankan model (inference). Bisa online (OpenAI, Google) atau offline (Ollama).
---

Pihak atau sistem apa pun yang menyediakan server untuk menjalankan [model](./Model.md) ([inferensi](./Inference.md)). Biasanya berupa layanan komputasi awan (cloud) seperti Anthropic, OpenAI, atau Google, tetapi bisa juga dijalankan di komputer sendiri secara lokal (offline) menggunakan Ollama, LM Studio, atau llama.cpp. [Harness (sistem penjalan)](./Harness.md) tidak menjalankan model itu sendiri di komputer Anda; ia meminta penyedia model untuk melakukannya.

Penyedia model menguasai infrastruktur fisik: kumpulan [parameter](./Parameters.md) disimpan di dalam server mereka, dan setiap [permintaan penyedia model (model provider request)](./Model%20provider%20request.md) merupakan proses sistem penjalan mengirimkan [token](./Token.md) melalui jaringan internet dan menerima jawaban prediksi kembali. Hal ini menjadikan penyedia model sebagai sumber utama dari berbagai masalah yang sering kali salah dituduhkan kepada model atau sistem penjalan — seperti pembatasan jumlah pemanggilan API (rate limits), penurunan kapasitas server, dan server mati (down). Ketika sang [agen](./Agent.md) mendadak macet di tengah [sesi](./Session.md) obrolan atau memunculkan pesan error di setiap [giliran](./Turn.md) pesan, halaman status server penyedia model adalah hal pertama yang wajib Anda periksa sebelum mencari penyebab lainnya.

Penyedia model juga menetapkan ketentuan harga: tarif per token untuk [token input](./Input%20tokens.md) dan [token output](./Output%20tokens.md), diskon [cache awalan (prefix cache)](./Prefix%20cache.md), serta model mana saja yang tersedia untuk digunakan. Perlu dicatat bahwa perusahaan penyedia server dan perusahaan pembuat model bisa berbeda — contohnya Amazon Bedrock, Google Vertex, dan OpenRouter menyediakan server untuk menjalankan model buatan perusahaan lain.

Penyedia model lokal menawarkan kontrol penuh dengan mengorbankan kualitas kecerdasan: model yang muat di komputer pribadi Anda berukuran jauh lebih kecil daripada model komersial terkemuka di internet, tetapi tidak ada data yang dikirim keluar komputer Anda dan tidak ada tagihan biaya per token.

_Contoh Penggunaan:_

"Apakah kita bisa menjalankan aplikasi ini secara offline untuk klien yang memiliki batasan jaringan ketat?"

"Ganti penyedia modelnya ke penyedia lokal — pasang Ollama atau llama.cpp di server lokal mereka. Sistem penjalannya tidak masalah, ia hanya akan memanggil alamat URL API yang berbeda."
