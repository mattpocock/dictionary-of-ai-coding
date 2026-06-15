---
description: Satu putaran komunikasi dari harness ke penyedia model. Harness mengirim konteks; penyedia mengirim satu tanggapan balik.
---

Satu siklus perjalanan bolak-balik pengiriman data dari [harness (sistem penjalan)](./Harness.md) ke [penyedia model (model provider)](./Model%20provider.md). Sistem penjalan mengirimkan seluruh [konteks](./Context.md) aktif; dan penyedia model mengirimkan satu tanggapan balik (berupa [panggilan alat (tool call)](./Tool%20call.md) atau jawaban akhir). Satu pesan dari Anda dapat memicu banyak permintaan ke penyedia model jika sang [agen](./Agent.md) memanggil [alat (tools)](./Tool.md) pemrograman — di mana setiap [hasil alat (tool result)](./Tool%20result.md) akan memicu permintaan baru berikutnya.

Setiap permintaan membawa seluruh data: mulai dari [system prompt (instruksi sistem)](./System%20prompt.md), riwayat percakapan lengkap sejauh ini, hingga setiap hasil kerja alat. [Model](./Model.md) bersifat [stateless (tidak menyimpan riwayat)](./Stateless.md), sehingga penyedia model tidak menyimpan data apa pun di server mereka di antara setiap permintaan — permintaan ke-40 akan mengirimkan kembali apa yang dikirimkan oleh permintaan ke-39, ditambah satu hasil kerja alat terbaru. Layanan [cache awalan (prefix cache)](./Prefix%20cache.md) disediakan untuk membuat proses pengulangan kirim ini menjadi murah dan terjangkau.

Permintaan ini juga merupakan unit dasar penghitungan biaya. Jumlah [Token input](./Input%20tokens.md), [token output](./Output%20tokens.md), dan diskon cache semuanya dihitung per permintaan. Itulah mengapa pertanyaan sederhana yang Anda ajukan bisa memakan biaya yang mengejutkan: biayanya tidak dihitung dari panjang pesan Anda, melainkan dari seberapa banyak jumlah permintaan yang terjadi dikalikan dengan ukuran jendela konteks yang dibawa oleh masing-masing permintaan tersebut.

Sangat penting untuk membedakan antara "permintaan penyedia model" dengan [giliran](./Turn.md) percakapan (turn). Satu giliran percakapan adalah satu kali tanya-jawab antara Anda dengan agen, sementara satu giliran percakapan tersebut — misalnya perintah "perbaiki tes yang gagal" — bisa berkembang menjadi rantai beberapa permintaan di latar belakang:

| Permintaan | Jawaban Model                         | Tindakan Sistem Penjalan (Harness)                     |
| ---------- | ------------------------------------- | ------------------------------------------------------ |
| 1          | Panggilan alat: jalankan tes          | Menjalankan tes, menambahkan laporan kegagalan         |
| 2          | Panggilan alat: baca file tes         | Menambahkan isi file tes ke riwayat                    |
| 3          | Panggilan alat: baca file kode sumber | Menambahkan isi file kode sumber ke riwayat            |
| 4          | Panggilan alat: edit file kode sumber | Mengubah kode file, menambahkan hasil edit ke riwayat  |
| 5          | Panggilan alat: jalankan tes lagi     | Menjalankan tes kembali, menambahkan laporan tes lulus |
| 6          | Jawaban akhir: "selesai, tes lulus"   | Menampilkan jawaban akhir tersebut kepada Anda         |

Terjadi enam kali permintaan penyedia model untuk menyelesaikan satu giliran pesan dari Anda — di mana setiap permintaan mengirimkan kembali seluruh konteks obrolan dari awal. Ketika Anda heran ke mana perginya kuota [token](./Token.md) Anda, hitunglah jumlah permintaan yang terjadi di latar belakang, bukan jumlah giliran pesannya.

_Contoh Penggunaan:_

"Satu pertanyaan pendek ini menghabiskan empat puluh ribu token?"

"Lihat riwayat panggilan alatnya — ada dua belas kali pencarian grep, delapan pembacaan berkas, dan empat kali edit kode. Setiap hasil alat memicu satu permintaan penyedia model baru, dan seluruh awalan [sesi](./Session.md) dikirim ulang di setiap proses permintaan tersebut."
