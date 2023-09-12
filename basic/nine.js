// ============================ Javasciprt Rest and Spread Operator ============================

// contoh penggunaan REST PARAMETER
function arrLength(...parameters) {
  // jika parameter banyak
  console.log(parameters);
  return `Panjang array adalah : ${parameters.length}`;
}
console.log(arrLength(1, 2, 3, 4, "Eyow", 20, "Ya"));

// contoh SPREAD OPERATOR (Parameter)
const num = [1, 2, 3, 4, 5];
console.log(...num); //mengambil semua isi array menggunakan SPREAD OPERATOR

// contoh Object
const person = {
  name: "Adhitya Hasan",
  age: 20,
  jobs: "Software Engineering",
};
const { name, ...anotherKeyValue } = person;
console.log(anotherKeyValue); // yg tampil hanya age, jobs, dst (jika ada)

// contoh split (memisahkan) sebuah string dan menjadikannya sebuah element terpisah menggunakan SPREAD OPERATOR
const nama = "michael";
console.log([...nama]); //  output : m, i, c, h, a, e, l

// contoh lain REST PARAMETER
const bar = (param1, param2, ...params) => {
  console.log("Argument pertama ", param1);
  console.log("Argument pertama ", param2);
  console.log("Sisa argument ", params);
};

bar("A", "B", "C", "D", "E");
// Output:
// Argument pertama  A
// Argument pertama  B
// Sisa argument ["C", "D", "E"]

// Menduplikasi array dengan SPREAD OPERATOR
let arrayAsli = [1, 2, 3];

let arrayDuplikat = [...arrayAsli]; // arrayDuplikat = [1, 2, 3]
console.log(arrayDuplikat);

// Menggabungkan array dengan SPREAD OPERATOR
let array1 = ["San", "Tech"];
let array2 = ["fizz", "buzz"];

array1 = [...array1, ...array2];
console.log(array1);

// Menambah propery dan value didalam Object menggunakan SPREAD OPERATOR
let orang = {
  nama: "Hasan",
  umur: 28,
};

orang = { ...orang, jobs: "Software Engineering", hobby: "Coding", graduated: true };
console.log(orang);

// Menggabungkan OBJECT menggunakan SPREAD OPERATOR
const object1 = { name: "anon", age: 20, grads: false };
const object2 = { a: 1, b: 2 };
const objectMerge = { ...object1, ...object2 };
console.log(objectMerge);
