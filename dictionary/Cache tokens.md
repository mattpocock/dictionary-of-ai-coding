---
description: Token input yang disimpan penyedia model dari permintaan sebelumnya melalui cache awalan, dengan tarif yang jauh lebih murah.
---

[Token input](./Input%20tokens.md) yang disimpan oleh [penyedia model (provider)](./Model%20provider.md) dari [permintaan penyedia model (model provider request)](./Model%20provider%20request.md) sebelumnya agar tidak perlu diproses ulang dari awal. Ketika permintaan-permintaan yang berurutan memiliki awalan yang sama persis, penyedia model akan menggunakan kembali hasil pemrosesan sebelumnya melalui [cache awalan (prefix cache)](./Prefix%20cache.md) dan mengenakan tarif yang jauh lebih murah untuk bagian yang tersimpan tersebut. Fitur inilah yang membuat [sesi](./Session.md) percakapan panjang tetap ramah di kantong — tanpa fitur ini, setiap [giliran](./Turn.md) percakapan baru akan membuat Anda membayar penuh untuk seluruh riwayat obrolan dari awal.

Alasan mengapa hal ini sangat penting adalah cara penghitungan biaya sesi. [Model](./Model.md) bersifat [stateless (tidak mengingat riwayat)](./Stateless.md), sehingga setiap kali Anda mengirimkan pesan baru, sistem sebenarnya mengirimkan kembali seluruh isi obrolan dari awal — termasuk [system prompt (instruksi sistem)](./System%20prompt.md), semua pesan sebelumnya, dan setiap [hasil alat (tool result)](./Tool%20result.md) — sebagai token input. Di giliran ke-50, setiap pesan baru akan membawa riwayat obrolan sepanjang 50 giliran sebelumnya, dan Anda harus membayar tarif penuh untuk semua itu, berkali-kali. Cache mengubah hitungan ini: token dari awalan obrolan yang identik yang sudah diproses oleh penyedia model akan dihitung sebagai token cache (cache tokens), dengan tarif yang biasanya hanya sepersepuluh dari tarif input biasa atau bahkan kurang. Pada sesi yang panjang, sebagian besar token yang Anda kirimkan berupa token cache, sehingga biaya tagihan Anda tetap wajar.

Contoh berikut menunjukkan kapan token dapat disimpan dalam cache dan kapan tidak. Setiap huruf mewakili satu blok percakapan; setiap permintaan mengirimkan percakapan dari awal hingga titik tersebut:

| Permintaan Mengirimkan | Masuk Cache | Dibayar Tarif Penuh | Alasan                                                                               |
| ---------------------- | ----------- | ------------------- | ------------------------------------------------------------------------------------ |
| `AB`                   | tidak ada   | `AB`                | Permintaan pertama — belum ada kecocokan riwayat                                     |
| `ABC`                  | `AB`        | `C`                 | `AB` adalah awalan yang persis sama dengan permintaan sebelumnya                     |
| `ABCD`                 | `ABC`       | `D`                 | Awalan obrolan masih utuh dan tidak berubah                                          |
| `AXCD`                 | `A`         | `XCD`               | Perubahan kode atau teks mengubah `B` menjadi `X`; pencocokan cache terhenti di sana |

Cache ini sangat sensitif terhadap perubahan: ia mencocokkan awalan yang persis sama. Jika ada hal kecil saja yang berubah di bagian awal percakapan — misalnya [harness (sistem penjalan)](./Harness.md) mengubah urutan file, penanda waktu (timestamp) diperbarui, atau representasi file bergeser sedikit — cache akan meleset (cache miss) mulai dari titik perubahan tersebut dan semua bagian setelahnya akan ditagih dengan tarif input penuh. Cache juga akan kedaluwarsa setelah beberapa menit tidak ada aktivitas obrolan, sehingga sesi yang dilanjutkan kembali setelah jeda lama akan membayar pemrosesan riwayat obrolan penuh sekali lagi. Jika biaya sesi Anda mendadak melonjak tanpa sebab yang jelas, bandingkan jumlah token cache dengan token input di laporan penggunaan Anda — kegagalan cache akan langsung terlihat di sana.

_Contoh Penggunaan:_

"Biaya untuk sesi panjang terasa sangat mahal — delapan dolar hanya untuk merapikan kode (refactor)."

"Coba periksa penggunaan token cache Anda. Jika sistem penjalan (harness) terus mengubah urutan system prompt atau posisi file di setiap giliran obrolan, awalan cache akan rusak dan Anda harus membayar penuh tarif input di setiap permintaan."
