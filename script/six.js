// ============== ECMAScript ==============

// Javascript var let const

// Tidak error namun tidak recommend
var nama = "San";
var nama = "Adhitya Hasan"; // value terbaru

// Error namun sesuai standar penulisan
let umur = 16;
// let umur = 20; // tidak bisa di deklarasi ulang

// const
const hobby = "Code";
// const hobby = "Code"; // tidak bisa di deklarasi ulang
// hobby = "Sport"; // tidak bisa di re-assignment

console.log(hobby);

// contoh lain untuk const
const warna = ["merah", "kuning", "kelabu"];

// pemberian array baru pada variabel dengan `const` akan menampilkan error
warna = ["hijau", "abu", "biru"]; // Output TypeError: Assignment to constant variable

// namun jika perubahan pada arraynya sendiri masih bisa dilakukan
warna.push("nila", "ungu");

console.log(warna); // Output: ["merah", "kuning", "kelabu", "nila", "ungu"]

// contoh lain untuk let
let judulBuku = "Harry Potter";

if (judulBuku === "Harry Potter") {
  let pengarang = "J.K. Rowling";
}

console.log(pengarang); // Output ReferenceError: pengarang is not defined
