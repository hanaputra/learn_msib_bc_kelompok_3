// Deklarasi variabel menggunakan var
var umur = 20;

// Deklarasi variabel menggunakan let (lebih umum digunakan saat ini)
let nama = "Aan";

// Deklarasi konstanta menggunakan const (nilainya tidak dapat diubah)
const TTL = 21;

// Mengakses variabel
console.log(umur); // Output: 20
console.log(nama);  // Output: Aan
console.log(TTL);    // Output: 3.14

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
