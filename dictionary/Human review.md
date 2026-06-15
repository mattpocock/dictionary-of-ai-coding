---
description: Pengguna memeriksa kode yang dihasilkan agen dan menilainya. Membaca diff adalah kunci; membaca ringkasan tidak cukup.
---

Proses di mana pengguna membaca secara langsung kode yang dihasilkan oleh [agen](./Agent.md) dan memberikan penilaian atas kualitasnya. Menilai di sini berarti membaca berkas perbedaan kode (diff) atau file yang berubah; membaca _deskripsi penjelasan_ dari agen mengenai apa yang dikerjakannya tidaklah dihitung sebagai tinjauan — karena cerita narasi bukanlah hasil karya aslinya. Deskripsi tersebut hanyalah [sumber sekunder (secondary source)](./Secondary%20source.md) yang ditulis oleh pihak yang sedang dinilai; sementara diff adalah [sumber primer (primary source)](./Primary%20source.md) yang wajib dibaca dalam proses peninjauan.

Penggunaan agen akan meningkatkan jumlah kode program yang dihasilkan, sehingga proses peninjauan sering kali menjadi hambatan kecepatan kerja. Salah satu solusi yang berguna adalah dengan membagi strategi peninjauan menjadi beberapa lapisan. [Pemeriksaan otomatis](./Automated%20check.md) akan menangkap kesalahan teknis yang pasti, [tinjauan otomatis](./Automated%20review.md) akan menangkap kesalahan logika yang terdeskripsikan, dan [tinjauan manusia (human review)](./Human%20review.md) disimpan hanya untuk hal-hal yang memerlukan penilaian subjektif Anda — misalnya apakah perubahan kode tersebut sudah tepat, apakah pendekatannya sesuai dengan arsitektur proyek, atau apakah fitur tersebut memang perlu dibuat.

Proses peninjauan juga jauh lebih mudah dilakukan di awal. Membaca dokumen rencana kerja sebelum pengerjaan dimulai, atau melihat berkas diff kecil di tengah proses pengerjaan hanya memakan waktu beberapa menit; sedangkan membongkar seluruh cabang kode (branch) yang sudah selesai setelah sesi otomatis [AFK (away from keyboard)](./AFK.md) akan memakan waktu jauh lebih lama. Penempatan titik pemeriksaan tinjauan ini adalah keputusan penting dalam metode [human-in-the-loop (keterlibatan manusia)](./Human-in-the-loop.md), bukan sekadar pelengkap di akhir.

_Hindari:_ menggunakan istilah "code review" saja — karena maknanya bisa rancu antara peninjauan oleh manusia atau oleh sistem otomatis.

_Contoh Penggunaan:_

"Saya sudah melakukan tinjauan manusia (human review) pada hasil kerja otomatis (AFK)."

"Kamu membaca file perubahannya (diff) atau hanya membaca ringkasannya?"

"Membaca diff. Ringkasannya menulis bahwa agen menghapus kode pemrograman yang sudah mati — tapi ternyata fungsi yang dihapus tersebut masih dipanggil dari file lain yang dibuat otomatis."
