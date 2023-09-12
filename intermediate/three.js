// ============================ Javasciprt .filter() ============================

// arr.filter((value, index, array) => {
//   // kode program
// });

// contoh sederhana mencari data dengan filter
let arrAngka = [1, 2, 3, 4, 5];

let filterArr = arrAngka.filter((item) => {
  return item > 2;
});

console.log(filterArr); // Output: [3, 4, 5]

// contoh lain menggunakan operator perbandingan
const fruits = ["Jambu", "Jeruk", "Apel", "Mangga", "Strawberry", "Jeruk", "Apel", "Apel"];

const apples = fruits.filter((data) => {
  return data === "Apel";
});
console.log(apples);

// contoh lain ganjil genap filter
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const genap = angka.filter((item) => {
  return item % 2 === 0;
});

console.log(genap);
