---
description: Mengakhiri sesi saat ini dan memulai yang baru. Pesan berikutnya akan dimulai dengan sesi dan jendela konteks yang kosong.
---

Mengakhiri [sesi](./Session.md) yang sedang berjalan saat ini dan memulai sesi baru yang segar. Pesan berikutnya akan dimulai dengan sesi yang bersih dan [jendela konteks](./Context%20window.md) yang kosong. Tindakan ini biasanya dipicu secara manual oleh pengguna.

Membersihkan sesi (clearing) adalah obat mujarab untuk jendela percakapan yang sudah kotor (polluted context). Selama sesi berlangsung, semua hal akan menumpuk: percobaan coding yang gagal, arahan yang salah, [hasil alat (tool result)](./Tool%20result.md) yang kedaluwarsa, dan rencana kerja yang ditinggalkan. [Model](./Model.md) akan membaca ulang semua sampah tersebut pada setiap [giliran](./Turn.md) obrolan, dan riwayat yang buruk ini akan mengganggu pengerjaan tugas baru. Saat sesi obrolan sudah berjalan terlalu panjang, sang [agen](./Agent.md) biasanya mulai tidak fokus dan sulit diatur — instruksi jelas yang Anda berikan diabaikan, kualitas kodenya menurun, dan menegurnya untuk bekerja lebih baik tidak akan membantu karena kebisingan informasi yang mengalihkan perhatiannya masih tersimpan di dalam [konteks](./Context.md). Pembersihan akan melenyapkan semua kebisingan tersebut.

Pembersihan sesi tidak menghapus rekaman obrolan Anda. Sebagian besar [harness (sistem penjalan)](./Harness.md) menyimpan riwayat sesi di komputer Anda, sehingga transkrip percakapan masih bisa dibaca atau dilanjutkan kembali. Hal yang hilang hanyalah memori aktif agen saat bekerja: model bersifat [stateless (tidak mengingat riwayat)](./Stateless.md), sehingga sesi baru tidak akan tahu apa pun yang diketahui oleh sesi sebelumnya. Jika sesi lama menyimpan keputusan atau progres kerja penting yang dibutuhkan untuk sesi berikutnya, mintalah agen menulis [artefak operan (handoff artifact)](./Handoff%20artifact.md) terlebih dahulu, lalu mulailah sesi baru dengan mengarahkan agen ke berkas operan tersebut.

Bandingkan proses ini dengan [penyusutan (compaction)](./Compaction.md), yang merangkum sesi lama ke dalam konteks baru alih-alih memulainya dari kosong. Pembersihan adalah alat yang lebih tegas: tidak ada informasi yang dibawa ke sesi baru, termasuk sampah-sampah informasinya.

_Contoh Penggunaan:_

"Agen ini terjebak dalam siklus pengulangan pada tes yang gagal."

"Bersihkan saja sesinya — mulai sesi baru dengan file rencana kerja dan file tes. Tidak ada gunanya memaksa agen bertarung dengan konteks obrolan lama yang sudah bising."
