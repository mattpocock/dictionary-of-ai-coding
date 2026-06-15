---
description: Pengalaman pengembang (DX): kemudahan proyek dan alat kerja bagi manusia untuk bekerja — dokumen, kecepatan pengujian, error.
aliases:
  - Developer experience
---

Developer experience (DX / Pengalaman Pengembang) — seberapa mudah suatu proyek kode dan rangkaian alat kerjanya membantu manusia untuk bekerja dengan baik. DX yang baik ditandai dengan siklus umpan balik yang cepat, pesan error yang jelas, dokumentasi yang benar-benar menjawab pertanyaan Anda, serta proses persiapan sistem yang langsung berhasil dalam sekali coba. Istilah ini sudah ada jauh sebelum era coding berbasis AI; di dalam kamus ini, istilah tersebut utamanya digunakan sebagai pembanding untuk [AX (pengalaman agen)](./AX.md).

DX berfokus pada interaksi antara manusia dengan kode pemrograman — tidak lebih. Perbedaan utama antara pengembang manusia dengan agen adalah manusia bersifat [stateful (menyimpan keadaan/riwayat)](./Stateful.md) sedangkan agen bersifat [stateless (tidak menyimpan riwayat)](./Stateless.md). Manusia hanya perlu mempelajari struktur proyek sekali saja dan ingatan tersebut akan terbawa ke hari-hari berikutnya. Itulah mengapa proyek dengan DX yang buruk masih bisa ditolerir oleh manusia: mereka menyiasati integrasi otomatis (CI) yang lambat dengan mengumpulkan perubahan sebelum mengirimkannya (push), menyiasati dokumentasi yang hilang dengan bertanya sekali di Slack, dan menyiasati struktur kode yang membingungkan dengan mengingat-ingat letak setiap file. Cara-cara alternatif ini menumpuk, dan tim pengembang tetap bisa produktif di dalam proyek yang sebenarnya mempersulit mereka.

[Agen](./Agent.md) menghadapi proyek kode yang sama tanpa kemampuan mengingat tumpukan pengalaman tersebut. Karena bersifat stateless di berbagai [sesi](./Session.md), agen akan mempelajari ulang struktur proyek dari nol setiap saat — agen memang diuntungkan oleh pengujian yang cepat dan pesan error yang jelas, namun apa pun yang berhasil dia pahami kemarin akan terlupakan hari ini kecuali informasi tersebut ditulis langsung ke dalam [lingkungan](./Environment.md) kerja, yang hanya bisa dibaca oleh agen melalui [hasil alat (tool result)](./Tool%20result.md). Celah inilah yang dinamakan AX: bagian-bagian dari DX yang tetap berguna ketika pengembangnya adalah sebuah agen komputer, ditambah kebutuhan-kebutuhan khusus yang tidak dimiliki oleh manusia, seperti menjaga kapasitas [jendela konteks](./Context%20window.md) tetap lega.

Adanya titik temu di antara keduanya membuat investasi pada DX sering kali meningkatkan kualitas AX secara cuma-cuma — seperti penggunaan aturan tipe data yang ketat, tes yang cepat, dan struktur kode yang teratur akan membantu manusia sekaligus agen. Namun, perbedaan di antara keduanya juga berarti investasi DX tidak selalu berguna bagi AX: dokumen panduan awal kerja (onboarding) yang indah akan membantu manusia selama seminggu pertama, tetapi tidak membantu agen sama sekali kecuali jika dokumen tersebut dapat diakses melalui file [AGENTS.md](./AGENTS.md.md).

_Contoh Penggunaan:_

"DX proyek kita baik-baik saja — pengembang baru sudah bisa mulai menulis kode dalam waktu seminggu."

"Bisa produktif karena ada pengembang senior yang menemani mereka selama seminggu itu. Agen tidak punya waktu seminggu itu; coba periksa kualitas AX proyek secara terpisah."
