// =================== array ===================

// let namaGuru = ['Farisi', 'Wijang', 'Rahmat']
// namaGuru.push('Hasan', 'San')
// namaGuru.shift()//hapus array pertama
// namaGuru.pop()//hapus array trakhir

// alert(namaGuru)

// =================== for looping ===================
console.log("nama saya San Tech"); //example

const namaGuru = ["San", "Hasan", " Wijang", "Farisi"];

//3 statement looping for
for (let i = 0; i < namaGuru.length; i++) {
  //i1 = 0
  //i2 = 0
  //i3 = 0
  //i4 = 0
  // dst
  console.log(namaGuru[i]);
}

// while loop mencari kondisi baru eksekusi
//hanya akan tampil sesuai yang ada di dalam kondisi
let i = 0;
while (i < 10) {
  i++;
  console.log("while");
}

//do loop mengeksekusi dulu (konteksnya : satu kali (i++)) baru mencari kondisi
//akan tetap tampil karena dieksekusi satu kali diawal
let untukDo = 0;
do {
  untukDo++;
  console.log("do while");
} while (untukDo < 10);

// =================== Tugas kecil ===================
// 1. promp untuk mengetahui saldo akhir dari apa yang diinputkan oleh user
// 2. menentukan hari dari tanggal yang ada saat ini di pc kalian

//soal 1 jawaban
// let saldoAwal = parseInt(prompt('Masukkan Saldo awal anda'));
// let saldoTambahan = parseInt(prompt('Masukkan Saldo tambahan anda'));
// let hutang = parseInt(prompt('Masukkan Hutang anda'));
// const saldoAkhir = saldoAwal + saldoTambahan - hutang;

// alert(
//     `Saat ini Saldo Awal anda sebesar Rp.${saldoAwal}
// Saldo Tambahan sebesar Rp.${saldoTambahan}🧸
// Hutang yang belum dibayar Rp.${hutang}💳
// Maka total Saldo anda sebesar Rp.${saldoAkhir}💸`,
// )

//soal 2 jawaban
const today = [`Senin`, `Selasa`, `Rabu`, `Kamis`, `Jumat`, `Sabtu`, `Minggu`];
let hari = new Date().getDay();
if ((hari = today[hari - 1])) {
  hasil = hari;
}

// hari = 'Senin' //wkwkwk cheat
console.log(`hari ini adalah hari ${hari}`);

console.log("============= new ============");
//=============================== new =======================
// operator ternary
//variabel = (kondisi true) ? nilai1 : nilai2;
// Artinya apabila kondisi true, maka variabel akan diberi nilai1
// Apabila kondisi false, maka variabel akan diberi nilai2
let trash = "Sampah";
let spamming = trash === "Bebas" ? "Kotoran" : "Bersih";

console.log(spamming);

console.log("============= new 2 ============");
// =========================== new 2 ==============
// == : sama kayak fifty fifty atau operand OR
// === : 100% harus benar, baik tipe data dan values
let x = 3;
let comparison = x == "3";

console.log(comparison);

console.log("============= new 3 ============");
//============================= new 3 =================
let bil1 = 6;
let bil2 = 7;

console.log(bil1 <= 10 && bil2 >= 100);
console.log(bil1 <= 10 || bil2 >= 100);

console.log("============= function ============");
//============================= function =================
function parameter(parameter1, parameter2) {
  console.log(parameter1 + parameter2);
}
parameter(10, 6);

//return
function penambahan(param1, param2) {
  return param1 + param2;
}

console.log(penambahan(10, 9));

console.log("============= hoisting : keterbalikan function ============");
//============================= hoisting =================
// bisa return function terlebih dahulu, namun tidak bisa jika menggunakan variabel di dalam function
helloGuys();

function helloGuys() {
  let manusia = {
    nama: "Adhitya",
    work: "Programming",
  };

  console.log(`Hai ${manusia.nama}, apakah benar kamu punya cita-cita sebagai ${manusia.work}`);
}

console.log("----------- global & lokal scope ------------");
//============================= scope =================
// Global : apabila mendeklarasi variabel diluar dari function maka dapat dipanggil oleh siapapun
// lokal : apabila mendeklarasi variabel didalam function maka hanya dapat dipanggil oleh function tersebut

//contoh Global scope
let kendaraan = {
  tipe: "Mobil",
  warna: "Merah",
};

const jenisKendaraan = function () {
  console.log(`Apakah kamu suka kendaraan ${kendaraan.tipe}, berwarna ${kendaraan.warna} ?`);
};

// contoh Lokal scope
function helloWorld() {
  let human = {
    names: "Adhitya",
    pekerjaan: "Programming",
  };

  console.log(`Hai ${human.names}, apakah benar kamu punya cita-cita sebagai ${human.pekerjaan} ?`);
}

jenisKendaraan();
console.log(kendaraan); //memanggil deklarasi publik yang dimiliki variabel kendaraan

helloWorld();

console.log("----------- check ------------");
//============================= check =================
let berkenalan = function () {
  return "Hallo, nama saya San.";
};

console.log(berkenalan() + " Nama kamu siapa ?");

console.log("----------- soal ------------");
//============================= soal =================
let carName = "Kijang";

function displayCarName() {
  let carName = "Honda";

  return "Mobil ini bermerk " + carName;
}

console.log(displayCarName());

console.log("----------- Object ------------");
//============================= object =================
// cara 1 literal
// let namaObject = {
//     namaProperty: values
// }

// cara 2 dengan kata kunci new
// let namaObject = new Object();
// namaObject.namaProperty = values;

let orang = {
  nama: "Adhitya",
  umur: 20,
  pekerjaan: "Front-End Web",
  tampilTglLahir: function () {
    //function didalam object
    console.log("16 February 2003");
  },
};

// add
//orang.hobi = 'Membaca';

// delete
//delete orang.hobi;

//memanggil semua yang ada di dalam object
console.log(orang);
orang.tampilTglLahir();

// atau memanggil dengan spesifik tertentu
console.log(orang["nama"]);
console.log(orang["umur"]);
console.log(orang.pekerjaan);
