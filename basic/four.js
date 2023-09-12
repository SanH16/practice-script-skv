// Javascript Conditional

// kondisi if contoh 1
const sudahMakan = "belum";

if (sudahMakan === "sudah") {
  console.log("Perut kenyang");
} else if (sudahMakan === "belum") {
  console.log("Perut masih keroncongan");
} else {
  console.log("Perut Lapar weh");
}

// kondisi if contoh 2
let nilaiAndi = 95;

if (nilaiAndi > 80) {
  console.log("SANGAT MEMUASKAN");
} else if (nilaiAndi >= 60 && nilaiAndi <= 80) {
  console.log("MEMUASKAN");
} else {
  console.log("JANGAN MENYERAH, COBA LAGI!");
}

// switch case
let seragamSekolah;
let hari = "senin";

switch (hari) {
  case "senin":
    seragamSekolah = "kemeja putih bawahan merah";
    break;
  case "selasa":
    seragamSekolah = "kemeja hijau bawahan hitam";
    break;
  case "rabu":
    seragamSekolah = "kemeja putih bawahan putih";
    break;
  case "kamis":
    seragamSekolah = "kemeja batik merah bawahan hitam";
    break;
  case "jumat":
    seragamSekolah = "baju pramuka";
    break;
  default:
    seragamSekolah = "baju bebas";
}

console.log(seragamSekolah);

// Misalnya pada contoh kita di atas, murid diharuskan mengenakan seragam "kemeja putih bawahan merah" untuk hari "senin" sampai "kamis", maka kita bisa mengubah kode di atas menjadi:
let hobi;
let nama = "milea";

switch (nama) {
  case "hasan":
  case "abdul":
  case "michael":
  case "adhit":
    hobi = "Main game sambil ngoding";
    break;
  case "milea":
    hobi = "nonton film";
    break;
  default:
    hobi = "ya ndaktau";
}

console.log(hobi);

//contoh switch case 2
const browser = "firefox";

switch (browser) {
  case "edge":
    console.log("Browser Anda tidak mendukung aplikasi ini");
    break;
  case "chrome":
  case "firefox":
  case "safari":
    console.log("Browser Anda mendukung aplikasi ini");
    break;
  default:
    console.log("Semoga tampilan aplikasi ini cukup baik");
}

console.log("--------------------- For Loop ---------------------");
// for (pernyataan1; pernyataan2; pernyataan3) {
//   // kode yang akan dijalankan ketika pernyataan2 benar (true)
// }

// Penjelasan kode di atas:
// pernyataan1 digunakan untuk menentukan nilai awal berjalannya loop.
// pernyataan2 digunakan untuk mendefinisikan kondisi berjalannya sebuah loop. Apabila nilai kondisinya false, maka loop akan berakhir.
// pernyataan3 digunakan untuk menambah atau mengurangi nilai awal pada pernyataan1 setiap kali loop dijalankan.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("--------------------- While Loop ---------------------");
let nilai = 1;

while (nilai <= 10) {
  console.log(nilai++);
}

console.log("--------------------- Do While ---------------------");
let nomor = 0;

do {
  nomor += 1;
  console.log(nomor);
} while (nomor < 10);

console.log("--------------------- For/in Loop ---------------------");
// for (propertiObjek in namaObjek) {
//   // kode yang akan dijalankan
// }

// Penjelasan kode di atas:
// for (propertiObjek in namaObjek) berarti untuk setiap propertiObjek di namaObjek, maka jalankan kode di dalam {}. Variabel propertiObjek bisa diganti dengan nama variabel apapun.

// deklarasi objek terlebih dahulu
const buku = {
  pengarang: "adhitya hasan",
  judul: "Buku programming",
  tahun: 2023,
};

for (x in buku) {
  console.log(x, ":", buku[x]);
}

console.log("--------------------- For/of Loop ---------------------");
// for (let element of namaVariabel) {
//   // kode yang akan dijalankan
// }
// Penjelasan kode di atas:

// for (let element of namaVariabel) berarti untuk setiap element di namaVariabel, maka jalankan kode di dalam {}. Variabel element bisa diganti dengan nama variabel apapun.

// deklarasi variabel terlebih dahulu
const namaBuku = ["Buku HTML: Belajar html dalam 5 hari", "Buku CSS", "Buku Javascript"];

for (let x of namaBuku) {
  console.log(x);
}
