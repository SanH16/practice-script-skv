// ============================ Javasciprt Array Multidimensi ============================

// Untuk membuat array multidimensi dapat dideklarasikan seperti ini
// let namaArray = [
//   [elemen1, elemen2],
//   [elemen3, elemen4],
//   [elemen5, elemen6],
// ];

// contoh sederhana
let inventory = [
  ["Kaos Polos", 21],
  ["Jaket Hoodie", 13],
  ["Topi", 7],
];

console.log(inventory);
/* Output:
  [
   ["Kaos Polos", 21],
   ["Jaket Hoodie", 13],
   ["Topi", 7],
  ]
*/
console.log(inventory[0][0]); // Output: Kaos Polos
console.log(inventory[0][1]); // Output: 21
console.log(inventory[1][0]); // Output: Jaket Hoodie
console.log(inventory[1][1]); // Output: 13
console.log(inventory[2][0]); // Output: Topi
console.log(inventory[2][1]); // Output: 7

// contoh lainnya
let buah = [
  ["Apel", 5],
  ["Pisang", 10],
  ["Semangka", 1],
  ["Durian", 1],
];
console.log(buah);

// ============ Cara Mengakses array Multidimensi ============

// namaArray[indexBaris][indexKolom];
console.log(buah[2][0]); // Semangka
console.log(inventory[2][0]); // Semangka

// ============ Contoh Menggunakan Array method pada Multidimensi ============
let transport = [
  ["Mobil", 4],
  ["Motor", 2],
  ["Truk", 6],
];

console.log(transport);
transport.push(["Pesawat", 6]); // push
console.log(transport);
console.log(transport[3]); // tampilkan hanya pesawat

// contoh hapus

let clothes = [
  ["Kaos Polos", 21],
  ["Jaket Hoodie", 13],
  ["Topi", 7],
];

let item = clothes[2][0];
let jumlahTerjual = clothes[2][1];

// Buat kode kamu di bawah ini
let hapus = clothes.splice(1, 1);

// let hasil = `Total penjualan ${item} ada sebanyak ${jumlahTerjual} item`;
console.log(`Total penjualan ${item} ada sebanyak ${jumlahTerjual} item`);

// ===========================
