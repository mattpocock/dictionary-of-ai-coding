---
description: Artefak operan tugas yang mencakup pekerjaan untuk satu sesi. Dapat berdiri sendiri atau menjadi bagian dari spesifikasi.
---

Sebuah [artefak operan (handoff artifact)](./Handoff%20artifact.md) yang membatasi ruang lingkup pekerjaan untuk satu [sesi](./Session.md). Tiket dapat berdiri sendiri, atau digantungkan pada dokumen [spesifikasi (spec)](./Spec.md) sebagai salah satu bagian darinya. Suatu tiket dapat menghalangi (memblokir) atau dihalangi oleh tiket lain yang setara, sehingga urutan pekerjaan ditentukan oleh grafik ketergantungan (dependency graph) mereka, bukan dari rencana linear yang kaku.

Batasan utama yang menentukan keberhasilan sebuah tiket adalah ukurannya: satu sesi kerja. Sebuah tiket harus dapat diselesaikan sebelum sesi tersebut keluar dari [zona pintar (smart zone)](./Smart%20zone.md) — dan batasan ini dapat diuji secara langsung. Jika sesi kerja Anda untuk tiket-tiket tersebut secara rutin mengalami penurunan kualitas sebelum pekerjaannya selesai, berarti tiket-tiket tersebut terlalu besar; bagilah menjadi beberapa tiket yang lebih kecil. Sebaliknya, jika setiap sesi menghabiskan sebagian besar [konteks](./Context.md) hanya untuk tahap persiapan sebelum melakukan pekerjaan selama lima menit, berarti tiket tersebut terlalu kecil; gabungkanlah.

Tiket yang baik ditulis untuk pembaca yang tidak memiliki konteks informasi lainnya. Tiket tersebut memuat tujuan akhir, kriteria penerimaan, serta [penunjuk konteks (context pointer)](./Context%20pointer.md) ke file dan keputusan yang relevan — cukup rinci agar sesi baru dapat langsung bekerja tanpa harus menebak-nebak kembali apa yang diketahui oleh sesi sebelumnya.

Grafik ketergantungan ini juga merupakan kunci untuk membuka potensi pengerjaan secara paralel. Tiket-tiket yang bersifat independen — yaitu daun-daun terluar dari grafik ketergantungan — masing-masing dapat dijalankan di sesinya sendiri pada waktu yang bersamaan. Ini adalah cara yang efektif untuk menjalankan beberapa agen secara sekaligus.

_Contoh Penggunaan:_

"Dari mana sebaiknya saya mulai mengerjakan spesifikasi migrasi ini?"

"Lihatlah grafik ketergantungan tiketnya — perubahan skema menghalangi pengisian data (backfill), lalu pengisian data menghalangi pengalihan API. Pilih tiket yang tidak terhalang oleh apa pun (daun terluar) dan jalankan satu sesi kerja untuk tiket tersebut."
