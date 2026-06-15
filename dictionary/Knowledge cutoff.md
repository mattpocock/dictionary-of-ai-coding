---
description: Tanggal batas akhir pengetahuan parametrik model. Pustaka kode/API baru bisa memicu fabrikasi kode kecuali panduannya dimuat.
---

Tanggal batas akhir pengetahuan yang dimiliki oleh [model](./Model.md) di dalam parameternya ([pengetahuan parametrik](./Parametric%20knowledge.md)). Pustaka kode (library), API, serta peristiwa yang terjadi setelah tanggal batas ini akan menjadi jebakan yang memicu model mengarang-ngarang kode pemrograman (fabrikasi), kecuali jika dokumen panduannya dimuat sebagai [pengetahuan kontekstual (contextual knowledge)](./Contextual%20knowledge.md). Setiap versi rilis model memiliki tanggal batas pengetahuannya masing-masing.

Batas pengetahuan ini ada karena cara pembuatan model itu sendiri: proses [pelatihan (training)](./Training.md) menanamkan potret data teks ke dalam [parameter](./Parameters.md) model, dan setelah proses itu selesai, parameter tersebut akan dibekukan (frozen). Model tidak menyadari bahwa pengetahuannya memiliki batas akhir — ketika ditanya tentang hal baru yang rilis setelah tanggal batas, model tidak akan menolaknya, melainkan memperkirakan jawabannya berdasarkan hal terdekat yang diketahuinya. Inilah yang membuat jebakan tersebut tidak disadari: kode pemrograman yang ditulis berdasarkan pustaka versi usang akan terlihat masuk akal, sering kali berhasil dijalankan tanpa error sintaksis, namun gagal pada bagian fitur yang sebenarnya sudah berubah.

Solusinya selalu sama: masukkan informasi terbaru ke dalam [konteks](./Context.md) obrolan. Muat catatan perubahan (changelog), arahkan agen ke file definisi tipe data dari versi pustaka yang terinstal di komputer, atau minta agen membaca dokumen panduan terbaru dari web. Informasi apa pun di dalam konteks obrolan akan mengesampingkan memori usang yang ada di dalam parameter model.

_Contoh Penggunaan:_

"Dia terus menulis kode menggunakan aturan penulisan SDK versi 3 — padahal kita sudah memakai versi 5."

"SDK versi 5 dirilis setelah tanggal batas pengetahuan model tersebut. Coba muat catatan perubahan (changelog) versi 5 sebagai pengetahuan kontekstual, jika tidak, dia akan terus mengarang kode berdasarkan memori parameter versi lamanya."
