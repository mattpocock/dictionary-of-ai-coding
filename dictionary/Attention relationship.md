---
description: Hubungan berpasangan antara dua token. Pasangan yang relevan saling memengaruhi lebih kuat. Konteks N token memiliki ~N² hubungan.
---

Saat memprediksi setiap [token](./Token.md), [model](./Model.md) akan mempertimbangkan semua token lain di dalam [konteks](./Context.md) obrolan — beberapa dipertimbangkan secara mendalam, sementara yang lain hampir diabaikan sama sekali. Hubungan berpasangan antara dua token ini disebut **hubungan perhatian (attention relationship)**. Pasangan token yang bermakna (seperti kata ganti "dia" dengan nama "Sarah", atau kode panggilan `getUser()` dengan fungsi pendefinisiannya `function getUser`) akan saling memengaruhi lebih kuat daripada token yang tidak berhubungan. Sebuah konteks yang berisi N token memiliki sekitar N² hubungan perhatian.

Hubungan berpasangan inilah yang memunculkan pemahaman semu dari model. Ketika model berhasil mengartikan kata ganti nama, itu karena hubungan perhatian antara kata ganti tersebut dan nama aslinya terjalin kuat. Ketika ia memanggil fungsi dengan argumen yang benar, hubungan antara lokasi pemanggilan kode dan file definisi yang dibaca sebelumnya sedang bekerja. Semua ini tidak dicari dari database kamus tetap — melainkan dihitung secara langsung pada setiap [permintaan penyedia model (model provider request)](./Model%20provider%20request.md), untuk setiap pasang token.

Jumlah hubungan N² ini sangat penting untuk dipahami karena pertumbuhannya jauh lebih cepat daripada yang biasa kita bayangkan:

| Ukuran Konteks | Hubungan Berpasangan (~N²) |
| -------------- | -------------------------- |
| 1.000 token    | ~1 juta                    |
| 10.000 token   | ~100 juta                  |
| 100.000 token  | ~10 miliar                 |

Setiap hubungan berpasangan ini juga dihitung lebih dari sekali. Model memiliki beberapa "attention head" (kepala perhatian) — jumlah pastinya untuk model tercanggih saat ini tidak dipublikasikan, namun perkiraan kasarnya sekitar lima puluh hingga seratus — dan setiap kepala menghitung hubungan versinya sendiri untuk setiap pasangan token. Jadi, setiap angka hubungan pada tabel di atas digandakan sebanyak jumlah attention head tersebut. Itu adalah jumlah perhitungan yang sangat banyak.

Hanya sebagian kecil dari hubungan ini yang benar-benar penting untuk menyelesaikan suatu tugas. Hubungan antara instruksi Anda dan kode yang akan diubah adalah salah satu dari sedikit hubungan yang berguna; hampir semua hal lain di dalam wadah obrolan adalah kebisingan. Dan kedua jenis hubungan ini tumbuh dengan kecepatan berbeda: hubungan yang penting jumlahnya cenderung tetap, sementara total wadah hubungan tumbuh secara kuadrat (kuadrat dari panjang teks). Pada 1.000 token, hubungan yang Anda pedulikan adalah satu dari sejuta; sedangkan pada 100.000 token, hubungan tersebut menjadi satu dari sepuluh miliar. Inilah hitungan matematika di balik [anggaran perhatian](./Attention%20budget.md), dan [penurunan perhatian (attention degradation)](./Attention%20degradation.md) adalah apa yang kita rasakan ketika hubungan penting tersebut mendapatkan porsi perhatian yang terlalu kecil.

_Contoh Penggunaan:_

"Agen ini terus mencampuradukkan dua simbol `user` yang ada di dalam perubahan kode — sepertinya kita sudah masuk ke [zona bodoh (dumb zone)](./Smart%20zone.md)."

"Ya, hubungan perhatian antara lokasi pemanggilan kode dan deklarasinya saling bertabrakan — karena bentuk tokennya sama, tetapi memiliki ikatan (binding) yang berbeda. Coba ubah nama salah satunya agar hubungan pasangannya menjadi lebih jelas."
