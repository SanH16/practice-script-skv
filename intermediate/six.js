// ============================ Javasciprt .findIndex() ============================

// finIndex()
// mencari index tanpa memberikan spesifik code, namun sesuai kondisi yang diinginkan. misal huruf pertama...
// struktur kode
// arr.findIndex((value, index, array) => {
//   // kode program
// });

// contoh
let animals = ["Girrafe", "Burung", "Pinguin", "Jerapah", "Gajah"];

let animal = animals.findIndex((value) => value[0] === "B");

console.log(animal); // mengembalikan nilai berupa index 1

// contoh lain
let angka = [14, 24, 55, 60, 32, 85];

let cariIndexAngka = angka.findIndex((item) => {
  return item % 5 === 0 && item % 10 === 0;
});

console.log(cariIndexAngka); // output 55 karena habis dibagi 5 dan 10
