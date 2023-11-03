// ============================ Javasciprt Regex | Assesrtions ============================

/**
 * Assertion digunakan untuk mencocokan karakter yang terdapat dalam suatu kata/kalimat.
 * Beberapa karakter spesial yang sering digunakan dalam assertion adalah:
 
 * ^: Digunakan untuk **mencocokkan awal **dari suatu string. Karakter spesial ini berbeda penggunaannya ketika digunakan dalam kategori Group and Ranges.
 * $: Digunakan untuk **mencocokkan akhir **dari suatu string.
 * \b: Digunakan untuk memberi batasan dari suatu string. Huruf karakter sesudah karakter spesial ini harus tidak diikuti oleh huruf karakter lain.
 * x(?=y) (lookahead): Hasilnya akan berupa 'x' hanya jika setelah 'x' diikuti oleh 'y' tanpa spasi.
 * (?<=y)x (lookbehind): Hasilnya akan berupa 'x' hanya jika sebelum 'x' adalah 'y' tanpa spasi.
 */

console.log("============================= Special ^ =============================");

// Contoh penggunaan karakter spesial ^:
const regex = /^I/g;
const word = "Indonesia";
console.log(word.match(regex)); // Output: ['I']

const regexs = /^i/g;
const words = "Indonesia";
console.log(words.match(regexs)); // Output: null

console.log("============================= Special $ =============================");

// Contoh penggunaan karakter spesial $:
const regex$ = /a$/g;
const word$ = "Indonesia";
console.log(word$.match(regex$)); // Output: ['a']

const regexs$ = /A$/g;
const words$ = "Indonesia";
console.log(words$.match(regexs$)); // Output: null

console.log("============================= Special 'slash b' =============================");

// Contoh penggunaan karakter spesial \b:
const regexb = /ee\b/gi;
const wordb = "Tree";
console.log(wordb.match(regexb)); // Output: ['ee']
