---
description: Fakta yang bisa dibaca agen langsung dari konteks saat ini. Kebalikan dari pengetahuan parametrik.
---

Fakta atau data yang dapat dibaca secara langsung oleh [agen](./Agent.md) dari [konteks](./Context.md) obrolan saat ini — seperti instruksi tugas dari pengguna, file yang telah dibaca agen, [hasil alat (tool result)](./Tool%20result.md), dan konten [AGENTS.md](./AGENTS.md.md) yang dimuat di awal [sesi](./Session.md). Ini adalah padanan dari [pengetahuan parametrik (parametric knowledge)](./Parametric%20knowledge.md): pengetahuan parametrik didapatkan dengan cara _mengingat_ dari dalam parameter model, sementara pengetahuan kontekstual didapatkan dengan cara _membaca_ langsung dari [jendela konteks](./Context%20window.md). [Halusinasi](./Hallucination.md) jauh lebih jarang terjadi ketika agen bekerja berdasarkan pengetahuan kontekstual — karena jawabannya ada langsung di hadapannya, bukan digali dari memori model yang samar.

Dari kedua jenis pengetahuan tersebut, hanya pengetahuan kontekstual yang dapat Anda kendalikan. Parameter model bersifat tetap dan tidak bisa diubah (frozen), sehingga satu-satunya cara untuk membekali [model](./Model.md) dengan pengetahuan baru yang tidak dimilikinya — seperti SDK internal perusahaan, pustaka kode yang dirilis setelah tanggal [batas pengetahuan (knowledge cutoff)](./Knowledge%20cutoff.md), atau keputusan rapat kemarin — adalah dengan meletakkannya ke dalam konteks obrolan. Banyak pekerjaan praktis dalam coding berbasis [AI](./AI.md) berpusat pada hal ini: meletakkan fakta yang tepat di hadapan model pada saat ia membutuhkannya.

Ketika pengetahuan kontekstual bertentangan dengan pengetahuan parametrik, pengetahuan kontekstual biasanya akan menang. Tempelkan dokumen panduan API versi terbaru, maka model akan mengikutinya daripada memori lamanya tentang API versi usang — meskipun memori lama tersebut terkadang masih bisa bocor keluar, terutama jika sesi obrolan sudah terlalu panjang. Jika agen terus kembali menggunakan pola penulisan kode yang usang padahal dokumen panduan baru sudah dimasukkan, itu tandanya pengetahuan parametrik bocor menembus pengetahuan kontekstual; mengulangi koreksi atau memindahkan posisi dokumen lebih dekat ke tugas yang dikerjakan akan sangat membantu.

Berbeda dari pengetahuan parametrik yang gratis digunakan, pemakaian pengetahuan kontekstual membutuhkan biaya. Setiap informasi yang dimuat ke dalam jendela konteks akan memakan kuota [token](./Token.md) dan berebut porsi [anggaran perhatian](./Attention%20budget.md) model, sehingga memuat informasi sebanyak-banyaknya tidak selalu menjadi keputusan yang baik — tujuannya adalah meletakkan fakta yang benar-benar relevan saja di dalam jendela obrolan, bukan semua fakta dimasukkan.

_Gunakan istilah ini_ hanya ketika Anda sedang membandingkannya dengan pengetahuan parametrik; jika tidak, cukup sebut sebagai **konteks**.

_Hindari:_ istilah "memori kerja" (working memory) — karena pengetahuan kontekstual adalah apa yang ada di dalam jendela obrolan _saat ini_; sementara [sistem memori (memory system)](./Memory%20system.md) adalah sistem yang memasukkan konten dari sesi sebelumnya ke sesi saat ini. Keduanya berada pada skala yang berbeda, jadi jangan disamakan.

_Contoh Penggunaan:_

"Kenapa dia bisa menulis kode API dengan sangat tepat saat saya menempelkan dokumen panduan, tetapi malah mengarang-ngarang kode saat tidak saya tempelkan?"

"Saat dokumen ditempelkan, agen menggunakan pengetahuan kontekstual — dia membacanya langsung dari halaman obrolan. Tanpa dokumen tersebut, dia terpaksa mengandalkan pengetahuan parametrik sehingga fungsi-fungsi API yang jarang dipakai menjadi samar dalam ingatannya."
