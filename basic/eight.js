// ============================ Arrow Fucntion ============================

// function
function addOperations(num1, num2) {
  return num1 + num2;
}
console.log(addOperations(9, 10)); //masukkan argument sesuai parameter

// function expression
const example = function (num1, num2) {
  const count = num1 - num2;
  return count;
};
console.log(example(10, 9)); //masukkan argument sesuai parameter

// arrow function
const exampleArrow = (num1, num2) => {
  const hasil = num1 * num2;
  return hasil;
};
console.log(exampleArrow(10, 10)); //masukkan argument sesuai parameter

// arrow function tanpa parameter
const animal = () => {
  const dog = ["Pug", "Pitbull", "Chihuahua"];
  return dog[Math.floor(Math.random() * dog.length)];
};
console.log(animal()); // output random

// contoh implisit return value | memanggila fungsi tanpa di deklarasikan terlebih dahulu
function greeting(name) {
  return `Hi ${name}`;
}

console.log(greeting("Einstein")); // Output: Hi Einstein

// implisit menggunakan arrow fucntion
const greeting2 = (name) => `Hi ${name}`;
console.log(greeting2("Zucker"));

// ==================== default parameter ====================

// contoh sederhana
function panggang(bahan, durasi, suhu) {
  return `Panggang ${bahan} selama ${durasi} pada suhu ${suhu}`;
}
console.log(panggang("Roti", "10 menit", "100 C")); // Output: Panggang Roti selama 10 menit pada suhu 100 C

// contoh 2
function makeCoffe(bahan = "(bubuk kopi)", durasi = "(yang diperlukan)", suhu = "(yang sesuai)") {
  return `Masukkan ${bahan} selama ${durasi} pada suhu ${suhu}`;
}
console.log(makeCoffe()); // memanggil fungsi tanpa memberi argument karena ada default parameter
console.log(makeCoffe("Kopi Gula Aren", "5 menit")); // hanya 2 argumen, parameter lainnya tampil default

// contoh menggunakan arrow func
const sayHi = (name = "Anonymous") => {
  return `Hai Mr. ${name}, how ae you ?`;
};
console.log(sayHi()); // memanggil fungsi tanpa memberi argument
console.log(sayHi("Sanz")); // memanggil fungsi dengan memberi argument
