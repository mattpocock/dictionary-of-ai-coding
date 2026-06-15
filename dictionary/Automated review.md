---
description: Agen yang meninjau pekerjaan agen lain, sering kali menggunakan model/system prompt berbeda. Tidak pasti karena memakai penilaian.
---

Proses di mana sebuah [agen](./Agent.md) meninjau hasil kerja agen lainnya, sering kali menggunakan [model](./Model.md) atau [system prompt (instruksi sistem)](./System%20prompt.md) yang berbeda. Proses ini bersifat tidak pasti (non-deterministik) karena menggunakan penilaian subjektif. Dapat dijalankan di mana saja — sebelum penggabungan kode (merge) pada PR, setelah kode masuk ke riwayat commit, atau di tengah sesi sebagai [sub-agen (subagent)](./Subagent.md). Penggunaan LLM sebagai penilai (LLM-as-judge) di dalam integrasi otomatis (CI) dikategorikan sebagai tinjauan otomatis, bukan [pemeriksaan otomatis](./Automated%20check.md); apa yang dilakukan oleh penilai tersebutlah yang menentukan kategorinya, bukan di mana ia dijalankan.

Pemisahan agen pemeriksa dari agen pembuat kode adalah kunci keberhasilan metode ini. Meminta agen yang menulis kode untuk memeriksa hasil karyanya sendiri tidak akan memberikan banyak hasil — [sesi](./Session.md) obrolan yang menghasilkan bug tersebut juga berisi jalan pikiran yang melahirkan bug tersebut, sehingga agen akan membaca kesimpulannya sendiri sebagai bentuk pembenaran. Sebaliknya, agen peninjau yang menggunakan [jendela konteks](./Context%20window.md) baru tidak memiliki keterikatan pemikiran tersebut: ia melihat perubahan kode (diff) seperti orang asing melihatnya, dan inilah esensi dari sebuah tinjauan. Menggunakan model yang berbeda atau instruksi sistem khusus tinjauan akan memperjelas proses ini — memberikan sudut pandang yang berbeda, dan instruksi sistem dapat difokuskan pada apa yang benar-benar Anda pedulikan (seperti keamanan, keselarasan API, atau kinerja) alih-alih instruksi samar seperti "cari masalah".

Metode ini berada di antara lapisan peninjauan lainnya. Pemeriksaan otomatis bersifat pasti dan mendeteksi kesalahan teknis yang bisa diuji secara mekanis; sementara [tinjauan manusia](./Human%20review.md) membutuhkan biaya besar dan paling sulit untuk ditingkatkan kapasitasnya (scale). Tinjauan otomatis berada di tengah-tengah keduanya: ia menangkap masalah-masalah yang membutuhkan penilaian subjektif — seperti nama fungsi yang membingungkan atau kasus-kasus ekstrem (edge cases) yang terlewat — dengan biaya komputasi mesin yang sangat murah. Karena sifatnya yang tidak pasti, ia bisa saja melewatkan sesuatu atau menandai hal yang sebenarnya bukan masalah; anggaplah ini sebagai penyaring awal untuk meningkatkan standar kualitas minimum sebelum kode tersebut diperiksa oleh manusia, bukan sebagai pengganti peninjauan manusia.

_Hindari:_ istilah "tinjauan AI" atau "tinjauan agen" — karena terlalu samar dan sulit dibedakan dengan agen pembuat kode itu sendiri.

_Contoh Penggunaan:_

"Kita mendapatkan terlalu banyak PR berkualitas buruk dari pengerjaan otomatis [AFK (away from keyboard)](./AFK.md)."

"Tambahkan langkah tinjauan otomatis sebelum penggabungan kode (merge) — gunakan model yang berbeda dengan instruksi sistem terpisah, khusus difokuskan untuk memeriksa celah keamanan dan perubahan aturan API."
