---
description: Pemahaman bersama tentang aplikasi yang sedang dibangun, dimiliki oleh pengguna dan agen tetapi terpisah dari berkas fisik.
---

Pemahaman bersama mengenai apa yang sedang dibangun, yang dimiliki secara selaras antara pengguna dan [agen](./Agent.md), namun terpisah dari dokumen fisik apa pun. Istilah ini dipopulerkan oleh Brooks dalam bukunya _The Design of Design_: percakapan, [artefak operan (handoff artifact)](./Handoff%20artifact.md), dan kode program adalah dokumen fisik (aset) yang berupaya menangkap atau mewujudkan konsep desain tersebut, namun tidak ada satu pun dari aset itu yang _merupakan_ konsep desain itu sendiri. Kualitas konsep desain ini dirasakan langsung melalui kualitas percakapan yang membangunnya.

Istilah ini menjelaskan penyebab di balik rasa frustrasi yang sering kita rasakan: agen menuliskan kode yang persis seperti yang Anda minta, namun hasilnya tetap saja salah. Penyebab utamanya biasanya adalah karena Anda sendiri belum sepenuhnya tahu apa yang Anda inginkan. Konsep desain tersebut belum matang di dalam kepala Anda — instruksi (prompt) Anda baru menangkap bagian-bagian yang sudah Anda pikirkan, dan diam untuk bagian-bagian yang belum terpikirkan. Agen kemudian mengisi keheningan tersebut dengan asumsinya sendiri, karena tidak ada panduan keselarasan yang bisa diikutinya. Tidak ada sistem yang rusak. Konsep desain bersama belum terbentuk, karena memang belum ada konsep utuh yang bisa dibagikan.

Anda dapat mengetahui bahwa konsep desain telah dipahami bersama dengan cara yang sama seperti yang Anda lakukan terhadap rekan kerja manusia: pihak lain mulai menjawab pertanyaan yang belum Anda tanyakan dengan cara yang persis seperti yang Anda harapkan. Sebelum momen itu tercapai, proses kerja masih berupa percakapan — metode [grilling (tanya-jawab intensif)](./Grilling.md) adalah bentuk sengaja dari hal ini — dan menulis [spesifikasi (spec)](./Spec.md) terlalu cepat hanya akan mengunci ketidakselarasan tersebut ke dalam dokumen fisik yang permanen. Konsep desain juga akan terus berkembang seiring Anda belajar; dokumen fisik akan selalu tertinggal di belakangnya, itulah mengapa spesifikasi yang setia pada pemahaman minggu lalu masih bisa menyesatkan sesi kerja minggu ini.

_Contoh Penggunaan:_

"Agen ini menulis kode yang persis seperti yang saya minta, tapi hasilnya tetap saja salah."

"Kalian belum memiliki konsep desain bersama (design concept) — dia mengisi bagian yang kosong dengan asumsinya sendiri. Teruskan mengobrol hingga aturan pembatalan, pengembalian dana, dan pemenuhan pesanan sebagian sudah selaras di antara kalian berdua sebelum Anda memintanya menulis file spesifikasi."
