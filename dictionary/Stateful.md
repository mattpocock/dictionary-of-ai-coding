---
description: Membawa informasi ke depan. Sesi bersifat stateful antar-giliran; agen bisa dibuat stateful antar-sesi lewat sistem memori.
aliases:
  - stateful
---

Kondisi membawa informasi ke langkah berikutnya. Sebuah [sesi](./Session.md) obrolan bersifat _stateful_ di berbagai [giliran](./Turn.md) pesan — di mana [konteks](./Context.md) akan terus bertambah menumpuk selama sesi berjalan, yang menjadi penyebab mengapa sesi panjang perlahan meluncur ke [zona bodoh (dumb zone)](./Smart%20zone.md). Sebuah [agen](./Agent.md) dapat dibuat bersifat _stateful_ lintas **sesi** dengan cara menambahkan [sistem memori (memory system)](./Memory%20system.md) yang menyimpan informasi ke dalam [lingkungan kerja](./Environment.md) dan memuatnya kembali di awal sesi berikutnya. [Model](./Model.md) sendiri tidak pernah bersifat stateful; kesinambungan ingatan yang tampak terjadi hanyalah hasil kerja [harness (sistem penjalan)](./Harness.md) yang mengirimkan kembali konteks obrolan lama. Istilah ini merupakan padanan dari [stateless (tidak menyimpan riwayat)](./Stateless.md).

Tempat penyimpanan status (state) pada setiap lapisan sistem:

| Lapisan          | Bersifat Stateful?   | Mekanisme Kerja                                                                                                                                                     |
| ---------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Model            | Tidak pernah         | Kumpulan [parameter](./Parameters.md) bersifat beku; ia hanya membaca apa yang dikirim di setiap pesan                                                              |
| Sesi             | Lintas giliran pesan | Sistem penjalan menambahkan setiap pesan dan [hasil alat (tool result)](./Tool%20result.md) ke konteks obrolan                                                      |
| Sistem Penjalan  | Lintas sesi obrolan  | File catatan memori, file [AGENTS.md](./AGENTS.md.md), atau [artefak operan (handoff artifact)](./Handoff%20artifact.md) ditulis di komputer dan dimuat ulang nanti |
| Lingkungan Kerja | Selalu               | Berkas data tetap bertahan di komputer tidak peduli apakah sesi obrolan sedang berjalan atau mati                                                                   |

Sifat stateful dari setiap lapisan dibangun dengan cara membaca kembali sesuatu yang disimpan di lapisan di bawahnya: sesi obrolan terasa berkesinambungan karena sistem penjalan mengirimkan kembali riwayat pesan ke model yang stateless, dan agen dapat mengingat informasi lintas sesi karena sistem penjalan memuat kembali catatan file dari lingkungan kerja penyimpanan komputer Anda. Tidak ada informasi status yang pernah disimpan di dalam model itu sendiri.

Sifat menyimpan status ini tidak selalu diinginkan. Segala informasi yang dibawa ke depan akan memengaruhi apa yang terjadi berikutnya, sehingga asumsi salah yang dibuat di awal sesi juga akan terus dibawa sepanjang percakapan berjalan. Proses [pembersihan (clearing)](./Clearing.md) adalah tindakan sengaja untuk membuang status sesi obrolan dan memulai kembali tugas secara bersih berdasarkan apa yang tertulis di dokumen rencana kerja.

_Contoh Penggunaan:_

"Dia mengingat preferensi saya kemarin — apakah itu berarti modelnya sudah mempelajari kebiasaan saya?"

"Tidak, agen tersebut bisa mengingatnya karena sistem penjalan (harness) menulis preferensi Anda ke file catatan memori di komputer Anda dan memuatnya kembali saat awal sesi dimulai. Model itu sendiri sama sekali tidak tahu apa yang terjadi kemarin."
