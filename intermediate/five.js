// ============================ Javasciprt .find() ============================

// arr.find((value, index, array) => {
//   // kode program
// });

// contoh sederhana  perbandingan find() dan filter()

let people = [
  {
    name: "Jane",
    age: 20,
  },
  {
    name: "Doe",
    age: 15,
  },
];

let janeFind = people.find((item) => item.name === "Jane");

let janeFilter = people.filter((item) => item.name === "Jane");

console.log(janeFind);
// Output: {name: 'Jane', age: 20} --> bentuk object

console.log(janeFilter);
// Output: [{ name: 'Jane', age: 20 }] --> bentuk array of object

// contoh lainnya
let number = [1, 2, 3, 4, 5, 6, 7];

let moreThanThree = number.find((data) => data > 3);
let lebihDariTiga = number.filter((data) => data > 3);

console.log(moreThanThree);
// Output: 4

console.log(lebihDariTiga);
// Output: [4,5,6,7]

// ============================ contoh find nama hewan ============================
let hewan = ["Harimau", "Gajah", "Jerapah", "Ular"];

// let cariHewan = hewan.find(item => {
//     return item[0] == 'J' && item[item.length-1] == 'h';
// })

// refactoring code dengan implicit return value agar lebih sederhana
let cariHewan = hewan.find((item) => item > "J" && item < "h");
console.log(cariHewan);
