// ============================ Javasciprt .reduce() ============================

// reduce bisa digunakan untuk memodifikasi array

// arr.reduce((total, value, index, array) => {
//     // kode program
//   }, initialValue);

// contoh jika menggunakan forEach()
let arrAngka = [1, 2, 3, 4, 5];
let hasil = 0;

arrAngka.forEach((value) => {
  hasil += value;
});

console.log(hasil);
// Output: 15

// contoh jika menggunakan reduce()
const arr = [1, 2, 3, 4, 5];

const result = arr.reduce((total, value) => {
  return total + value;
});
console.log(result); // total akan menjumlahan setiap element array

// ============================ menggunakan initialValue .reduce() ============================
const angka = [1, 2, 3, 4, 5];

const jumlah = angka.reduce((total, value) => {
  return total + value;
}, 5);
/*
iterasi ke 1 --> 5 + 1
iterasi ke 2 --> 6 + 2
iterasi ke 3 --> 8 + 3
iterasi ke 4 --> 11 + 4
iterasi ke 5 --> 15 + 5

hasil = 20

*/
console.log(jumlah);
// ========================================================

// ============================ merubah struktur data dengan .reduce() ============================

// contoh data dari API
let fruits = ["Jambu", "Apel", "Mangga", "Jambu", "Jeruk", "Apel"]; // misal data dari API

let fruitList = fruits.reduce((list, fruit) => {
  // memeriksa apakah buah tersebut sudah ada dalam objek atau belum
  if (list[fruit]) {
    list[fruit] += 1; // jika ada yang sama, nilainya + 1
  } else {
    list[fruit] = 1; // jika belum ada, beri nilai 1
  }
  return list; // mengembalikan objek
}, {}); // initial valuenya adalah objek

console.log(fruitList);

// contoh lain dari .reduce()
let nilai = [100, 80, 80, 70, 90];

let jumlahNilai = nilai.reduce((total, item) => {
  return total + item;
});

let rataRata = jumlahNilai / nilai.length;

console.log(rataRata); // output 84
