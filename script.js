
function tambahData() {
    // Mengambil nilai input
    const namaInput = document.getElementById("nama");
    const kelasInput = document.getElementById("kelas");

    const nama = namaInput.value.trim();
    const kelas = kelasInput.value.trim();

    // Validasi input
    if (nama === "" || kelas === "") {
        alert("Nama dan kelas harus diisi!");
        return;
    }

    // Mengambil bagian isi tabel
    const tabel = document.getElementById("isiTabel");

    // Membuat baris baru
    const baris = tabel.insertRow();

    // Membuat kolom nomor, nama, kelas, dan aksi
    baris.insertCell(0);
    const kolomNama = baris.insertCell(1);
    const kolomKelas = baris.insertCell(2);
    const kolomAksi = baris.insertCell(3);

    // Memasukkan data dengan aman
    kolomNama.textContent = nama;
    kolomKelas.textContent = kelas;

    // Membuat tombol hapus
    const tombolHapus = document.createElement("button");
    tombolHapus.textContent = "Hapus";
    tombolHapus.type = "button";
    tombolHapus.className = "hapus";

    tombolHapus.onclick = function () {
        hapusData(this);
    };

    kolomAksi.appendChild(tombolHapus);

    // Mengosongkan input
    namaInput.value = "";
    kelasInput.value = "";

    // Memperbarui nomor urut
    perbaruiNomor();
}

function hapusData(tombol) {
    // Menghapus baris yang dipilih
    tombol.closest("tr").remove();

    // Memperbarui nomor setelah dihapus
    perbaruiNomor();
}

function perbaruiNomor() {
    const baris = document.querySelectorAll("#isiTabel tr");

    baris.forEach(function (tr, index) {
        tr.cells[0].textContent = index + 1;
    });
}

// Memastikan nomor awal benar saat halaman dibuka
perbaruiNomor();
