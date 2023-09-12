// ============================ Javasciprt .forEach() ============================

// array.forEach((value, index, array) => {
//   // kode program
// });

// contoh forEach
let colors = ["blue", "red", "green", "purple"];
colors.forEach((data) => {
  // data diinisialisasikan sebagai value
  console.log(data);
});

// foreach mengecek index
let person = ["hsan", "san", "santeh", "alexs"];
person.forEach((value, index) => {
  if (index % 2 === 0) {
    // menampilkan index bernilai genap : 0, 2, 4, dst..
    console.log(value, index);
  } else {
    console.log("not allowed", index);
  }
});

// contoh lain
let hewan = ["Ayam", "Buaya", "Cicak", "Domba"];

// Buat kode kamu di bawah ini
hewan.forEach((item) => {
  if (item.charAt(0) < "C") {
    // atau bisa menggunakan item[0] < "C"
    console.log(item);
  } else {
    console.log("error");
  }
});

// ============================ Javasciprt .map() ============================

// arr.map((value, index, array) => {
//     // kode program
//   });

const input = [100, 50, 60, 10];

// manipulasi array dengan .map()
const output = input.map((data) => {
  return data / 10;
});
console.log(input); // sebelum
console.log(output); // sesudah | hasil map

// bisa juga jika menggunakan forEach ditambah method push()

const arr = [100, 50, 60, 10];
const result = [];

arr.forEach((data) => {
  result.push(data / 10);
});

console.log(result); // hasilnya sama seperti map

// contoh lain map()
let makanan = ["Nasi", "Ayam", "Pisang"];

let gorengMakanan = makanan.map((item) => {
  return item + " Goreng";
});

console.log(gorengMakanan);
