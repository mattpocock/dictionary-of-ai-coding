---
description: Protokol untuk menghubungkan server alat luar ke harness — cara agen mendapatkan alat tambahan di luar bawaan sistem penjalan.
---

**Model Context Protocol.** Sebuah protokol standar untuk menghubungkan server alat pemrograman luar ke dalam [harness (sistem penjalan)](./Harness.md) — yang menjadi cara bagi [agen](./Agent.md) untuk mendapatkan [alat (tools)](./Tool.md) tambahan di luar alat bawaan yang disediakan oleh sistem penjalan. Agen tidak pernah secara langsung "memanggil MCP"; ia hanya memanggil suatu alat, dan sistem penjalan kebetulan mendapatkan alat tersebut dari sebuah server MCP. Protokol ini juga menyediakan sumber daya (data hanya-baca) dan perintah (templat yang bisa digunakan kembali), namun penyediaan alat adalah fungsi utamanya.

Protokol ini memecahkan masalah integrasi. Tanpa adanya standar ini, setiap sistem penjalan harus membuat integrasi khusus sendiri-sendiri untuk Linear, Slack, database, dll — yang ditulis dan dipelihara secara terpisah untuk setiap aplikasi. Dengan adanya MCP, integrasi cukup ditulis sekali saja sebagai server MCP, dan sistem penjalan apa pun yang mendukung standar MCP dapat langsung menggunakannya. Sistem penjalan akan terhubung ke server tersebut, server akan mengumumkan alat apa saja yang ditawarkannya, dan alat-alat tersebut akan langsung tersedia bagi agen bersanding dengan alat bawaan sistem.

Biaya penggunaan fitur ini dibayar menggunakan kapasitas [konteks](./Context.md). Setiap alat yang diumumkan oleh server MCP menyertakan definisinya — seperti nama, deskripsi, dan struktur parameternya — sementara [model](./Model.md) hanya dapat memanggil alat yang diketahuinya saja. Pendekatan sederhana biasanya memuat seluruh definisi alat ini ke dalam [jendela konteks](./Context%20window.md) sejak awal: jika Anda memasang beberapa server MCP sekaligus, [sesi](./Session.md) baru Anda akan langsung dimulai dengan beban ribuan [token](./Token.md) dari skema alat bahkan sebelum Anda mengetikkan pesan apa pun, menghabiskan [anggaran perhatian](./Attention%20budget.md) model untuk alat-alat yang mungkin tidak akan pernah digunakan dalam tugas tersebut.

Banyak sistem penjalan sekarang menyiasati hal ini dengan fitur pencarian alat (tool search): alih-alih memuat seluruh definisi alat sejak awal, jendela konteks hanya menyimpan [penunjuk konteks (context pointer)](./Context%20pointer.md) ke alat-alat yang tersedia — agen akan mencari alat berdasarkan nama atau fungsinya, dan baru memuat definisi lengkap alat tersebut hanya ketika ia akan menggunakannya. Jika sistem penjalan Anda tidak mendukung fitur ini, biaya token di awal akan tetap terhitung, dan sebaiknya Anda hanya mengaktifkan server MCP yang benar-benar dibutuhkan oleh proyek saja.

_Contoh Penggunaan:_

"Agen perlu membaca tiket bantuan dari aplikasi Linear."

"Konfigurasikan sistem penjalan agar terhubung ke server MCP Linear — server ini akan menyediakan API Linear sebagai alat yang dapat dipanggil oleh agen. Cara ini menghemat waktu Anda daripada harus menulis pembungkus alat khusus."
