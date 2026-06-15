---
description: Model yang dipadukan dengan alat, system prompt, dan jendela konteks, yang berinteraksi bergantian dengan pengguna. Model yang sedang berjalan.
---

Sebuah [model](./Model.md) yang dipadukan dengan [harness (sistem penjalan)](./Harness.md) beserta [alat (tools)](./Tool.md), [system prompt (instruksi sistem)](./System%20prompt.md), dan [jendela konteks](./Context%20window.md), yang saling bertukar [giliran](./Turn.md) dengan pengguna. _Claude Code adalah sebuah agen. Cursor adalah sebuah agen. Claude.ai adalah sebuah agen._ Agen adalah apa yang sebenarnya Anda ajak bicara — ini adalah model yang sedang aktif dan dikonfigurasi untuk tujuan tertentu.

Berbeda dari sebagian besar istilah dalam kamus ini, "agen" tidak merujuk pada bagian mekanis tertentu. Model adalah file berisi kumpulan [parameter](./Parameters.md); sedangkan harness adalah perangkat lunak yang bisa Anda jalankan. Agen bukanlah salah satu dari itu — melainkan kesatuan yang Anda ajak bicara. Orang-orang sering kali memanusiakan (antropomorfisme) [AI](./AI.md), dan agen adalah wujud dari pemanusiaan tersebut: sesuatu yang Anda beri tugas, yang membaca pesan Anda lalu menjawabnya, atau kata "dia" dalam kalimat "dia merusak sistem lagi". Saat Anda mengatakan agen melakukan sesuatu, maksud Anda adalah gabungan model-dan-harness yang melakukannya, tetapi Anda menyebut kombinasi tersebut sebagai satu aktor tunggal.

Ide tentang agen ini sebenarnya lebih tua dari gelombang kecerdasan buatan (AI) saat ini. Agen perangkat lunak (software agent) — program yang didelegasikan tugas tertentu untuk bertindak atas nama Anda — telah menjadi konsep yang sudah ada sejak awal perkembangan AI.

_Hindari:_ istilah "AI itu" atau "bot itu" (terlalu samar — istilah ini mengaburkan apakah yang Anda maksud adalah file parameter model atau sistem penjalannya).

_Contoh Penggunaan:_

"Agen mana yang Anda gunakan untuk memindahkan database (migrasi)?"

"Saya pakai Claude Code untuk lokal, dan Cursor untuk pengerjaan tampilan (UI) — model dasarnya sama, hanya sistem penjalannya (harness) saja yang berbeda."
