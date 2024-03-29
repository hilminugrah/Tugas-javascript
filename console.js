function cekUsia(umur) {
    if (umur >= 17) {
        console.log("Anda memiliki cukup umur untuk membuat sim.");
    } else {
        console.log("Maaf, Anda belum mencapai usia yang diperlukan untuk membuat sim.");
    }
}

cekUsia(16); 
cekUsia(22); 


let kontak = {
    nama: "Asep berlian",
    email: "asepberlian@example.com",
    telepon: "081223243567"
};


function displayContactInfo(kontak) {
    console.log("Nama: " + contact.nama);
    console.log("Email: " + contact.email);
    console.log("Telepon: " + contact.telepon);
}

console.log("Informasi Kontak:");
displayContactInfo(contact);