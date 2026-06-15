---
description: Tidak membawa informasi ke depan. Model bersifat stateless lintas permintaan; agen stateless lintas sesi secara default.
---

Tidak membawa informasi ke depan. [Model](./Model.md) bersifat _stateless_ (tidak menyimpan riwayat) di berbagai [permintaan penyedia model (model provider request)](./Model%20provider%20request.md) — setiap permintaan mengirimkan kembali seluruh isi [jendela konteks (context window)](./Context%20window.md), karena model tidak memiliki cara untuk melihat hal lain. Sebuah [agen](./Agent.md) secara default bersifat _stateless_ di berbagai [sesi](./Session.md) obrolan: sesi baru dimulai dalam keadaan kosong, tanpa jejak dari sesi sebelumnya. Istilah ini merupakan padanan dari [stateful (menyimpan status)](./Stateful.md).

Model itu sendiri bersifat stateless secara permanen: [parameter](./Parameters.md) miliknya dibekukan setelah proses [pelatihan (training)](./Training.md), dan tidak ada hal yang Anda lakukan saat [inferensi (inference)](./Inference.md) yang dapat mengubahnya. Model tidak belajar dari koreksi Anda, tidak ingat pernah diberitahu hal yang sama kemarin, dan tidak akan mengenali Anda lebih dekat — meskipun percakapan terasa sebaliknya. Perasaan adanya kesinambungan dalam suatu sesi dibuat oleh [harness (sistem penjalan)](./Harness.md), yang menyimpan transkrip percakapan dan mengirimkannya kembali bersama setiap permintaan baru. Model tidak mengingat percakapan; ia membaca ulang percakapan tersebut.

Konsekuensi praktisnya: jika Anda ingin sesuatu diingat di berbagai sesi obrolan, Anda harus menulisnya di suatu tempat yang akan dibaca kembali oleh agen. Tempat tersebut adalah file [AGENTS.md](./AGENTS.md.md), [sistem memori (memory system)](./Memory%20system.md), dan [artefak operan (handoff artifact)](./Handoff%20artifact.md) — berkas-berkas yang dimuat ke dalam [konteks](./Context.md) pada sesi berikutnya, menggantikan memori yang tidak dimiliki oleh model. Ketika agen terus melakukan kesalahan yang sama padahal sudah Anda koreksi sebelumnya, pertanyaannya bukan mengapa agen tidak belajar — karena ia memang tidak bisa — melainkan di mana koreksi tersebut harus ditulis agar setiap sesi baru di masa mendatang dapat membacanya.

_Contoh Penggunaan:_

"Mengapa dia selalu lupa aturan penulisan kode setiap kali saya melakukan [pembersihan (clearing)](./Clearing.md)?"

"Modelnya bersifat stateless — sesi baru dimulai dalam keadaan kosong. Jika Anda ingin aturan itu tetap diingat, tuliskan di AGENTS.md atau file memori yang dimuat oleh sistem penjalan di awal sesi."
