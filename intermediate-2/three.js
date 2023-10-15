// ============================ Javasciprt Regex | Match and Flags ============================

/**
 * .match() sama seperti .exec() yaitu sebuah method bawaan (built-in) dari JavaScript.
 * Namun .match() jika disisipkan suatu flag akan menghasilkan hasil yang beda dengan .exec().
 
 * Contoh penggunaan .match():
 */

// ! contoh
const regex = /i/;
const words = "Indonesian";
const result = regex.exec(words);

console.log(words.match(regex)); // index : 7
console.log(result); // index : 7

/**
 * ! Flag
 * Special Character yang sering digunakan untuk flag adalah:
 
 * g, untuk mencari ke dalam seluruh string yang ingin dicari. 
 * i, untuk mengabaikan aturan case-sensitive.
 * Tidak mempermasalahkan besar kecilnya sebuah karakter. Tidak membedakan antara A dan a.
 */

//  Contoh penggunaann flags g:
const flags = /n/g; // g : mencari n ke dalam seluruh variable string kata
const kata = "Indonesia";
console.log(kata.match(flags)); // output : 'n', 'n'

/**
 * ? Flags juga bisa digunakan dengan menggabungkan beberapa special character.
 */

// Contoh penggunaan flag g dan i:

const flagsGI = /i/gi; // gi : mencari i ke dalam seluruh variable string kata (uppercase & lowercase)
const kataGI = "Indonesia";
console.log(kataGI.match(flagsGI)); // output : 'I', 'i'

/**
 * ? Latihan soal skv
 */

// Buat kode kamu di bawah ini
const myRegex = /skilvul/i;
const wordz = "Saya belajar coding di Skilvul setiap hari";
const resultz = wordz.match(myRegex);
console.log(resultz); // output berada pada index 23
