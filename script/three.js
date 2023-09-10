console.log("----------- Array ------------");
//============================= array =================
// Array Literal
// let buah = ['Mangga', 'Apel', 'Coklat' 10];
// let hargaBuah = ['5000', '8000', 40000, 200]; // Tipe data di array boleh berbeda

// Array dengan new
// let buah = new Array( 'Mangga', 'Apel', 'Jeruk');
// let hargaBuah = new Array("20000", 30000, 15000); // Tipe data di array boleh berbeda

let murid = ["San", "Adh", "Try"];

murid[0] = "Sansaja"; //mengubah isi array sesuai index

console.log(murid[0]);
console.log(murid.length); // mengetahui jumlah data di dalam Array
console.log(murid[murid.length - 1]); //memanggil index paling akhir
console.log(murid); //memanggil semua yang di dalam Array murid

console.log("----------- Array dengan Function/method ------------");
//============================= object =================
console.log(murid.toString()); // memanggil Array dengan fungsi string
console.log(murid.join(" ")); //menambah sesuatu diantara values/element Array sebagai penghubung

console.log("--------------------- pop ---------------------");
// murid.pop() //mengeluarkan index/element terakhir dari array
// console.log(murid)

console.log("--------------------- push ---------------------");
// murid.push('heyho')//menambah element array dan ditempatkan diposisi akhir
// console.log(murid)

console.log("--------------------- shift ---------------------");
// menghilangkan index/element pertama dari array
// murid.shift()
// console.log(murid)

console.log("--------------------- unshift ---------------------");
// menambahkan index/element baru di posisi pertama dari array
// murid.unshift('Hai')
// console.log(murid)

console.log("--------------------- concat ---------------------");
// contoh 1
// menggabungkan 2 element array yang terpisah menjadi satu berdasarkan variabel
// let orang = ['orang 1', 'orang 2']
// let orangBaru = ['orang 3']
// console.log(orang.concat(orangBaru))

// contoh 2
// let buah = ["pisang", "apel", "jeruk"];
// let sayur = ["tomat", "bayam", "wortel"];
// let biji = ["kedelai", "kacang tanah", "kacang polong"];

// let makanan = buah.concat(sayur, biji);

// console.log(makanan);

console.log("--------------------- slice ---------------------");
// let kelas = ['kelas 1', 'kelas 2', 'kelas 3']
// let kelasLain = kelas.slice(0,2)//mengambil element array dari array yang sudah ada, disini contohnya mengambil index ke 0 sebanyak 2 buah dari variabel 'kelas' maka isi dari 'kelas' akan didapatkan oleh 'kelasLain' yaitu kelas 1 dan kelas 2

// console.log(kelas)
// console.log(kelasLain)

console.log("--------------------- sort ---------------------");
// contoh 1
// let angka = [0, 9, 7, 4, 2, 10, 15]

// console.log(angka.sort())// mengurutkan dari angka/karakter paling pertama, walaupun 10 dan 15 adalah angka yg besar namun method sort akan menampilkan 10 dan 15 terlebih dahulu baru menampilkan angka 2,4,7,9 karena (10, 15) dimulai dengan awalan 1

// //mengurutkan dengan benar
// console.log(angka.sort((a,b) => a-b))// menggunakan callback function di dalam method sort

// contoh 2
// let bilangan = [30, 1, 2, 3.5, 10, 100];

// let urutDariTerkecil = function(a, b) {
//   return a - b;
// };
// let urutDariTerbesar = function(a, b) {
//   return b - a;
// };

// console.log(bilangan.sort(urutDariTerkecil)); // Output: [1, 2, 3.5, 10, 30, 100]
// console.log(bilangan.sort(urutDariTerbesar));

// penjelasan kode diatas :
// Fungsi pembanding akan menghitung apakah a dikurang b akan menghasilkan nilai negatif, positif, atau 0.
// Jika bernilai negatif, maka a akan diurutkan sebelum b.
// Jika bernilai positif, maka b akan diurutkan sebelum a.
// Jika bernilai 0, posisi dari a dan b tidak akan diubah.

console.log("--------------------- reverse ---------------------");
// let angka = [0, 9, 7, 4, 2, 10, 15]
// let nama = ['San', 'Adhitya', 'Michael', 'Chelly', 'Boy']

// //mengurutkan index array dari yang paling terakhir ke paling pertama secara berurutan
// console.log(nama.reverse())
// console.log(angka.reverse())

// contoh 2
// let buah = ["Jeruk", "Apel", "Mangga", "Jambu"];
// buah.sort().reverse();

// console.log(buah); // Output: ["Mangga", "Jeruk", "Jambu", "Apel"]
// penjelasan kode diatas :
// // Array buah akan diurutkan terlebih dahulu element-elementnya dari nilai yang terkecil, hingga yang terbesar dengan menggunakan sort().

// buah.sort(); // output: ["Apel", "Jambu", "Jeruk", "Mangga"]
// //Kemudian, elementnya akan dibalik urutannya berdasarkan index dari yang terbesar hingga yang terkecil dengan menggunakan reverse().

// //posisi setelah sort() ["Apel", "Jambu", "Jeruk", "Mangga"]
// buah.reverse(); // Output: ["Mangga", "Jeruk", "Jambu", "Apel"]

console.log("--------------------- splice ---------------------");
//menyisipkan array di sebelah index yang ada
// array.splice(index, jumlah elemen yg ingin dihapus, item1, ..., itemX);

// let nama = ['San', 'Adhitya', 'Michael', 'Chelly', 'Boy', 100]

// //splice Add
// nama.splice(3,0, 'Heyho') //menyisipkan array baru ke index (3), tidak ada element yg terhapus (0) dan otomatis menggeser array yang ada disebelahnya. maka output 'Heyho' berada sebelum 'Chelly'

// //splice Delete
// nama.splice(3,1) //menghapus array index ke (3) sebanyak (1) element, maka 'Heyho' yang merupakan index ke-3 akan terhapus

// //splice update
// nama.splice(0,1, 'Hasan')// mengubah isi array index ke (0) dan menghapus element pertama (1), maka 'San' akan digantikan menjadi Hasan

// console.log(nama)

console.log("--------------------- math PI (3.14....)---------------------");
// const jariJariLingkaran = 10;
// const pangkatJariJariLingkaran = jariJariLingkaran ** 2;

// const luasLingkaran = Math.PI * pangkatJariJariLingkaran;

// console.log(luasLingkaran)

console.log("--------------------- Math Object Method and Properties ---------------------");
// Objek Math hanya bisa digunakan untuk tipe data number, dan tidak bisa digunakan untuk tipe data BigInt.
console.log(Math.random()); // digunakan untuk menghasilkan angka secara dari 0 hingga 1 (0 termasuk, 1 tidak)

// sqrt : akar pangkat 2
const nilai = 8;
console.log(Math.sqrt(nilai));
// cbrt : akar pangkat 3
console.log(Math.cbrt(nilai));

// mencari angka nilai terbesar
console.log(Math.max(1, 9, 8, 4, 3));
// mencari angka nilai terkecil
console.log(Math.min(1, 9, 8, 4, 3));

// pembulatan nilai angka desimal keatas atau kebawah, misal nilai 8.8 dibulatkan menjadi 9 atau 8.1 dibulatkan menjadi 8
console.log(Math.round(8.8)); // output : 9

// pembulatan desimal menjadi nilai terbesar (pembulatan keatas), misal nilai 6.1 tetap dibulatkan menjadi 7
console.log(Math.ceil(6.1));

// pembulatan nilai angka desimal kebawah, misal nilai 5.9 tetap dibulatkan menjadi 5
console.log(Math.floor(5.9));

// mengembalikan semua nilai angka negatif menjadi positif
console.log(Math.abs(-99)); // output 99

// menghitung hasil dari x pangkat y.
let bil = 6;
let pangkat = 2;

console.log(Math.pow(bil, pangkat)); // Output: 36
