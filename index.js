// Deklarasi variabel menggunakan var
var angka = 10;

// Deklarasi variabel menggunakan let (lebih umum digunakan saat ini)
let nama = "John";

// Deklarasi konstanta menggunakan const (nilainya tidak dapat diubah)
const PI = 3.14;

// Mengakses variabel
console.log(angka); // Output: 10
console.log(nama);  // Output: John
console.log(PI);    // Output: 3.14

let usia = 18;

if (usia >= 18) {
  console.log("Anda dewasa.");
} else {
  console.log("Anda masih anak-anak.");
}


let hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari kerja.");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Hari libur akhir pekan.");
    break;
  default:
    console.log("Hari tidak valid.");
}
