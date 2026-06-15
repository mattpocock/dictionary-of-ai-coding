---
description: Hasil model yang salah tetapi meyakinkan. Dua jenis: faktualitas (fakta buatan) & kesetiaan (melenceng dari konteks).
---

Keluaran dari [model](./Model.md) yang salah, tetapi disajikan dengan sangat meyakinkan. Ada dua jenis kesalahan dengan penyebab dan solusi yang berbeda:

| Jenis                      | Bentuk Kesalahan                                                                                                                                    | Penyebab                                                                                                                                                                      | Solusi                                                                                                       |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| _Faktualitas (Factuality)_ | Informasi atau fakta yang salah atau dikarang sendiri — seperti fungsi kode yang sebenarnya tidak ada, struktur API yang salah, atau rujukan palsu. | Celah dalam [pengetahuan parametrik](./Parametric%20knowledge.md) model, sering kali karena melewati tanggal [batas pengetahuan (knowledge cutoff)](./Knowledge%20cutoff.md). | Muat [pengetahuan kontekstual (contextual knowledge)](./Contextual%20knowledge.md) yang tepat.               |
| _Kesetiaan (Faithfulness)_ | Hasil kerja melenceng dari pengetahuan kontekstual yang dimuat, instruksi dari pengguna, atau alur logika yang dibuat model sebelumnya.             | [Penurunan perhatian (attention degradation)](./Attention%20degradation.md); kualitas kerja memburuk di [zona bodoh (dumb zone)](./Smart%20zone.md).                          | Lakukan [bersihkan (clear)](./Clearing.md) sesi obrolan atau [ringkas (compact)](./Compaction.md) informasi. |

Proses [prediksi token berikutnya (next-token prediction)](./Next-token%20prediction.md) menghasilkan teks yang lancar mengalir tidak peduli apakah fakta di baliknya nyata atau tidak — model tidak memiliki sistem peringatan internal jika ia tidak mengetahui sesuatu, sehingga fungsi kode hasil karangan akan ditampilkan dengan gaya bahasa meyakinkan yang sama persis seperti kode yang benar. Kode halusinasi dirancang agar terlihat masuk akal: bentuk kodenya persis seperti apa yang _seharusnya_ terlihat jika API tersebut memang ada, dan inilah yang membuatnya mudah lolos dari peninjauan sekilas dan baru ketahuan salah saat dijalankan.

Anda harus tahu jenis halusinasi mana yang sedang Anda hadapi, karena solusi untuk jenis yang satu justru akan memperburuk jenis yang lainnya. Masalah faktualitas berarti model kekurangan pengetahuan: solusinya adalah menambahkan konteks — seperti dokumen panduan, file definisi tipe data, atau berkas kode terkait. Masalah kesetiaan berarti pengetahuan tersebut sebenarnya sudah ada tetapi kalah berebut perhatian: solusinya adalah mengurangi konteks obrolan. Salah mendiagnosis masalah kesetiaan sebagai masalah faktualitas akan membuat Anda menempelkan lebih banyak dokumen baru, yang justru memperluas konteks dan memperparah masalah kelencengan tersebut. Ketika agen membuat kesalahan, periksa terlebih dahulu apakah informasi yang benar sebenarnya sudah ada di dalam konteks obrolan sebelum menentukan solusi mana yang harus diambil.

_Hindari:_ menggunakan istilah "halusinasi" begitu saja sebagai sinonim dari kata "salah" — karena tanpa menyebutkan jenisnya, istilah tersebut tidak memiliki nilai diagnosis untuk membantu penyelesaian masalah.

_Contoh Penggunaan:_

"Dia mengarang metode `parseAsync` pada aturan schema kita."

"Apakah itu masalah faktualitas atau kesetiaan?"

"Metode itu sebenarnya ada di dokumen panduan yang saya tempel — dia hanya berhenti membacanya setelah [giliran](./Turn.md) percakapan ke-40."

"Berarti itu masalah kesetiaan. Lakukan penyusutan (compact) dan muat ulang obrolan, tidak perlu menambahkan dokumen panduan lagi."
