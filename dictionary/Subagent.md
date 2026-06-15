---
description: Agen yang dijalankan oleh agen lain melalui panggilan alat. Berjalan di sesinya sendiri dan mengembalikan satu hasil alat.
---

Sebuah [agen](./Agent.md) yang dijalankan oleh agen lain melalui [panggilan alat (tool call)](./Tool%20call.md). Subagen berjalan di dalam [sesi](./Session.md) obrolannya sendiri dengan [jendela konteks (context window)](./Context%20window.md) miliknya sendiri, dan melaporkan kembali satu [hasil alat (tool result)](./Tool%20result.md). Hal ini berbeda dari proses [operan tugas (handoff)](./Handoff.md) — di mana agen induk secara khusus mengharapkan adanya jawaban kembali; sedangkan operan tugas tidak memiliki jalur pengembalian data. **Subagen tidak dapat menjalankan subagen lainnya** — pohon hubungan ini hanya sedalam satu tingkat. Subagen ada untuk mengisolasi [konteks](./Context.md), bukan untuk menyusun hierarki yang rumit.

Tujuan utamanya adalah menjaga agar pekerjaan yang menghasilkan banyak informasi tidak relevan (kebisingan) tidak mengotori konteks agen induk. Pencarian yang luas atau aktivitas membaca file yang panjang menghasilkan banyak halaman berisi hasil alat, yang sebagian besar hanya berguna sementara sampai jawaban ditemukan. Jika dijalankan di dalam agen induk, semua informasi tersebut akan terus menetap di dalam konteks agen induk sepanjang sesi berjalan. Namun, jika dijalankan di dalam subagen, kebisingan tersebut akan mengisi jendela konteks sekali pakai — dan hanya laporan akhirnya saja yang akan masuk ke konteks agen induk. Laporan ini merupakan [sumber sekunder (secondary source)](./Secondary%20source.md): agen induk menerima penjelasan subagen tentang apa yang ditemukannya, bukan data mentahnya, sehingga apa pun yang dilewatkan dalam laporan tersebut tidak akan dapat dilihat oleh agen induk.

Subagen juga berjalan secara bersamaan (konkuren) — agen induk dapat menyebarkan beberapa subagen sekaligus untuk menyelesaikan bagian pekerjaan yang independen secara paralel.

_Contoh Penggunaan:_

"Hasil pencarian kata kunci (grep) ini membuat jendela konteks saya penuh sesak."

"Jalankan subagen untuk melakukan pencarian tersebut — subagen akan menghabiskan jendela konteksnya sendiri untuk memproses kebisingan hasil pencarian dan hanya melaporkan kembali dua jalur file yang benar-benar Anda butuhkan."
