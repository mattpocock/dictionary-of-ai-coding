---
description: Meminta agen membuat versi awal yang kasar ketika obrolan terlalu abstrak dan Anda butuh wujud nyata untuk dievaluasi.
---

Meminta [agen](./Agent.md) membuat versi awal yang cepat dan kasar dari sesuatu, berguna ketika proses obrolan terlalu abstrak (kurang representatif) dan Anda membutuhkan wujud fisik nyata untuk didiskusikan bersama.

Metode [grilling (tanya-jawab intensif)](./Grilling.md) menyelesaikan keputusan desain melalui percakapan. Percakapan memang murah, namun representasinya rendah: beberapa pertanyaan tidak dapat dijawab hanya dengan kata-kata — seperti bagaimana sensasi interaksi tombol saat diklik, apakah struktur API terasa nyaman saat dipanggil di kode pemrograman nyata, atau apakah tata letak tampilan tetap rapi saat dimuat data yang sesungguhnya. Proses tanya-jawab sering kali menemui pertanyaan di mana jawaban jujur Anda adalah "saya tidak tahu, saya harus melihat wujudnya dulu." Setelah titik itu, diskusi hanya akan berputar-putar tanpa ujung. Sebagai gantinya, mintalah agen membangun wujud kasarnya terlebih dahulu, lihat hasilnya, dan kembalilah ke obrolan dengan membawa jawaban pasti.

Keberadaan agen dapat memangkas biaya pembuatan program, yang membuat metode ini sangat praktis dilakukan. Versi kasar yang dulunya membutuhkan waktu seharian untuk dirancang, sekarang dapat selesai dalam hitungan menit, sehingga sangat layak untuk rutin dilakukan. Ini adalah teknik [human-in-the-loop (keterlibatan manusia)](./Human-in-the-loop.md): prototipe dibuat agar Anda dapat mengevaluasi dan merespon hasilnya secara langsung.

Proses evaluasi ini biasanya tidak berhenti pada pandangan pertama. Lakukan proses iterasi pada prototipe tersebut — lihat hasilnya, minta perubahan kode, dan lihat kembali hasilnya — sehingga setiap putaran akan menyelesaikan keputusan demi keputusan langsung di atas wujud nyata, dengan tingkat representasi yang jauh lebih tinggi daripada sekadar obrolan.

Prototipe tidak harus selalu berakhir menjadi sampah. Anda dapat membangun bagian-bagian yang sedang Anda evaluasi dengan standar kualitas siap rilis (production-ready), sehingga ketika keputusan desain sudah disepakati, komponen atau API yang Anda uji dapat langsung dipindahkan ke dalam proyek utama. Hal ini menjadikan pembuatan prototipe sebagai bahan rujukan utama untuk dimasukkan ke dalam dokumen [spesifikasi (spec)](./Spec.md).

_Contoh Penggunaan:_

"Kita sudah menghabiskan waktu setengah jam berdebat tentang apakah wizard pengisian data ini sebaiknya dibuat satu halaman penuh atau dibagi menjadi tiga langkah."

"Kata-kata tidak akan menyelesaikan perdebatan ini — minta agen membuat prototipe untuk kedua opsi tersebut. Kita tinggal mencobanya dan akan tahu jawabannya dalam lima menit."
