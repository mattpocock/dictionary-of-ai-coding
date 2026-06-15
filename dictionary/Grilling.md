---
description: Metode pematangan konsep desain: agen mewawancarai pengguna secara mendalam untuk menyepakati satu per satu keputusan.
---

Sebuah teknik untuk mematangkan [konsep desain (design concept)](./Design%20concept.md) bersama dengan [agen](./Agent.md): agen akan mewawancarai pengguna secara mendalam (metode Sokratik) satu per satu keputusan, sambil mengajukan rekomendasi jawaban untuk masing-masing poin. Teknik ini memperlambat proses pembuatan rencana kerja yang terburu-buru — tidak ada [artefak operan (handoff artifact)](./Handoff%20artifact.md) yang ditulis sampai konsep desain tersebut benar-benar stabil.

Teknik ini lahir karena agen sering kali mengisi celah keputusan yang kosong secara diam-diam. Ketika diminta menulis [spesifikasi (spec)](./Spec.md) dari instruksi singkat sepanjang dua baris kalimat saja, agen tidak akan berhenti ketika menemui bagian keputusan yang belum Anda tentukan — ia akan memilih jawaban bawaan (default) tebakannya sendiri dan menuliskannya di sana. Hasilnya memang tampak lengkap, dan tebakan tersebut tidak dapat dibedakan dari pilihan sadar Anda, sehingga Anda baru menyadarinya di akhir: saat proses tinjauan kode, atau saat fitur yang dibangun menangani kasus ekstrem dengan cara yang tidak pernah Anda setujui. Wawancara intensif (grilling) membalikkan kondisi ini — alih-alih menebak, agen diwajibkan bertanya kepada Anda.

Ini adalah teknik [human-in-the-loop (keterlibatan manusia)](./Human-in-the-loop.md): jawaban Anda adalah bahan inputnya. Ketika sebuah pertanyaan tidak dapat dijawab langsung melalui percakapan — misalnya karena Anda harus melihat wujud fiturnya terlebih dahulu — gantilah ke metode [pembuatan prototipe (prototyping)](./Prototyping.md).

_Contoh Penggunaan:_

"Dia langsung menulis spesifikasi dan membuat logika pembatalan pesanan yang salah."

"Lakukan grilling (tanya-jawab intensif) terlebih dahulu — paksa dia bertanya kepada Anda tentang pembatalan sebagian, pengembalian dana, dan batas waktu sebelum dia menulis apa pun ke dokumen. Lebih murah menyelesaikan masalah lewat obrolan daripada merombak kode pemrograman."
