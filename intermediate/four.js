// ============================ Javasciprt .indexOf() ============================

// arr.indexOf(value, startIndex); // startIndex adalah titik awal pencarian

// Sebenarnya .forEach() bisa digunakan untuk mendapatkan nomor index dari elemen yang dicari,
//tapi .indexOf() menghadirkan solusi yang lebih simpel dan lebih unggul dalam kasus tertentu.

// jika mencari value dengan forEach, akan di cari semua data dan return nya adalah value terakhir.
let arrBuah = ["Jeruk", "Apel", "Semangka", "Apel"];
let indexApel = 0;

arrBuah.forEach((item, index) => {
  if (item == "Apel") {
    indexApel = index;
  }
});

console.log(indexApel);
// Output: 3

// jika menggunakan indexOf() maka akan menampilkan index spesifik jika ditambah startIndex
let fruits = ["Jeruk", "Apel", "Semangka", "Apel", "Mangga"];

let indexFruit = fruits.indexOf("Apel", 2); // menampilkan index Apel [3] karena pencarian dimulai dari data ke-2
console.log(fruits.indexOf("Apel")); // menampilkan index Apel [1] karena tidak menggunakan startIndex

// ============================ Javasciprt .lastIndexOf() ============================

// arr.lastIndexOf(value, startIndex);

// contoh jika mencari index menggunakan.indexOf() iterasi dari kiri - kanan

let arrFruits = ["Pisang", "Apel", "Semangka", "Pisang"];

let indexPisang = arrFruits.indexOf("Pisang", 1);

console.log(indexPisang); // Output: 3

// contoh jika mencari index menggunakan.lastIndexOf() iterasi dari kanan - kiri

let arrBuahan = ["Pisang", "Apel", "Semangka", "Pisang"];

let indexBuahanPisang = arrBuahan.lastIndexOf("Pisang");

console.log(indexBuahanPisang); // Output: 3
