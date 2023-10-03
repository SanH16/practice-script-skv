// ============================ Javasciprt Regex Method ============================

// cara 1 : const namaVariable = /pola/;
// cara 2 : const namaVariable = new RegExp("pola");

// .exec()
// Digunakan untuk mencari string yang kita inginkan pada pola regex yang tersedia dengan mengembalikan nilai array atau null.
// Contoh penggunaan *method *.exec():

// cara 1
const string = "Saya suka kopi";
const pattern = /kopi/;
const result = pattern.exec(string); // kopi berada di index 10
console.log(result);

// cara 2
const strings = "Indonesia Tanah Air Ku";
const words = ["Tanah", "Air"];
const results = new RegExp(words.join(" ")).exec(strings);
console.log(results);

// .test()
// Digunakan untuk string matching (pengecekan) dari pencarian teks pada pola regex yang tersedia dengan mengembalikan nilai boolean (true/false).

// Contoh jika string yang dicari ditemukan
const regex = /Test/;
console.log(regex.test("Test")); // output : true

// Contoh jika string yang dicari tidak ditemukan
const arrayWords = ["Tes", "Tess", "Test"];
console.log(new RegExp(arrayWords[2]).test("test")); // false karena index-2 bernilai 'Test' bukan 'test'

// contoh sederhana lainnya
const kata = "saya belajar di skilvul.com";
const regexKata = new RegExp("skilvul.com");
const matching = regexKata.exec(kata);
const status = regexKata.test(kata);

console.log("=================================");
console.log(matching);
console.log(status);

// Contoh special characters
console.log("======== Special Characters ========");
const defaultKata = "skilvul";
const patternKata = /skil*l/;
console.log(patternKata.test(defaultKata));
