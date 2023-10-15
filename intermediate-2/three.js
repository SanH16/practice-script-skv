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
