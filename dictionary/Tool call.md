---
description: Keluaran model yang menyebutkan nama alat beserta argumennya — hanya teks terstruktur. Penjalan harus membaca dan menjalankannya.
---

Keluaran [model](./Model.md) yang menyebutkan nama [alat (tool)](./Tool.md) beserta argumennya — yang sesungguhnya hanyalah teks terstruktur. Keluaran ini tidak melakukan apa-apa dengan sendirinya; [harness (sistem penjalan)](./Harness.md) yang harus membaca teks tersebut dan menjalankannya. Dihasilkan oleh model dalam satu [permintaan penyedia model (model provider request)](./Model%20provider%20request.md).

Siklus hidup panggilan alat:

| Langkah | Siapa   | Apa yang terjadi                                                                                                    |
| ------- | ------- | ------------------------------------------------------------------------------------------------------------------- |
| 1       | Model   | Mengetahui alat apa saja yang ada berdasarkan penjelasan di [perintah sistem (system prompt)](./System%20prompt.md) |
| 2       | Model   | Mengeluarkan panggilan — nama alat beserta argumennya, biasanya dalam format JSON — lalu berhenti                   |
| 3       | Harness | Mengurai (parse) panggilan tersebut dan mencocokkannya dengan [mode izin (permission mode)](./Permission%20mode.md) |
| 4       | Harness | Menjalankannya jika diizinkan                                                                                       |
| 5       | Harness | Mengirimkan hasilnya kembali sebagai [hasil alat (tool result)](./Tool%20result.md) pada permintaan berikutnya      |

Satu [giliran (turn)](./Turn.md) pengerjaan [agen](./Agent.md) biasanya terdiri dari banyak siklus bolak-balik seperti ini yang dirangkai bersama.

Karena panggilan alat dihasilkan melalui proses [prediksi token berikutnya (next-token prediction)](./Next-token%20prediction.md) seperti halnya teks biasa, panggilan ini bisa saja salah dengan cara yang sama seperti kesalahan keluaran model lainnya: jalur (path) file yang tidak ada, bendera perintah (flag) yang tidak dimiliki oleh perintah tersebut, atau argumen yang sekadar terlihat meyakinkan tetapi tidak tepat. Sistem penjalan menjalankan apa yang tertulis, bukan apa yang dimaksudkan oleh model — kesalahan pengetikan jalur file tidak akan ditangani secara anggun, melainkan akan mengedit file yang salah.

_Contoh Penggunaan:_

"Ia mengatakan telah menjalankan pengujian (test), tetapi stempel waktu (timestamp) file tidak berubah."

"Coba periksa transkrip obrolannya — apakah ia benar-benar mengeluarkan panggilan alat, or hanya menulis kalimat penjelasan seolah-olah ia sedang menjalankannya? Model menghasilkan panggilan alat tersebut, tetapi jika sistem penjalan tidak mengeksekusinya, maka tidak ada tindakan yang benar-benar terjadi."
