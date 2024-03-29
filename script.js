let judul = document.getElementById('judul');
let paragraf = document.getElementById('paragraf');
let tombol = document.getElementById('tombol')

judul.textContent = 'Persib Bandung';
paragraf.textContent = 'Persib selalu terbaik pangeran biru juara dulu kini dan selamanya persib selalu terbaik';

// Menambahkan event listener ke tombol
tombol.addEventListener('click', function() {
    document.getElementById('judul').innerHTML ="Hilmi Nugraha"
    document.getElementById('paragraf').innerHTML ="kami kembali"
    alert('berhasil di ubah');
});

// Daftar nama buah
let buah = ['Apel', 'Jeruk', 'Pisang', 'Mangga', 'Anggur'];

// Mengambil referensi ke elemen <ul>
let daftarBuah = document.getElementById('daftar-buah');

// Looping untuk menambahkan buah ke dalam daftar
for (let i = 0; i < buah.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = buah[i];
    daftarBuah.appendChild(listItem);
}

function tambah() {
    let angka1 = parseFloat(document.getElementById('angka1').value);
    let angka2 = parseFloat(document.getElementById('angka2').value);
    let hasil = angka1 + angka2;
    document.getElementById('hasil').innerHTML = 'Hasil: ' + hasil;
}

function kurang() {
    let angka1 = parseFloat(document.getElementById('angka1').value);
    let angka2 = parseFloat(document.getElementById('angka2').value);
    let hasil = angka1 - angka2;
    document.getElementById('hasil').innerHTML = 'Hasil: ' + hasil;
}

function kali() {
    let angka1 = parseFloat(document.getElementById('angka1').value);
    let angka2 = parseFloat(document.getElementById('angka2').value);
    let hasil = angka1 * angka2;
    document.getElementById('hasil').innerHTML = 'Hasil: ' + hasil;
}

function bagi() {
    let angka1 = parseFloat(document.getElementById('angka1').value);
    let angka2 = parseFloat(document.getElementById('angka2').value);
    let hasil = angka1 / angka2;
    document.getElementById('hasil').innerHTML = 'Hasil: ' + hasil;
}