// ============================ Javasciprt Looping Array Multidimensi ============================

// Contoh 1 : Melakukan looping data Array Menggunakan .for()

let inventory = [
  ["Kaos Polosan", 9],
  ["Celana Sobek", 15],
  ["Jacket", 5],
  ["Sneakers", 2],
];

for (let i = 0; i < inventory.length; i++) {
  for (let j = 0; j < inventory[i].length; j++) {
    console.log(inventory[i][j]); // namaArray[indexBaris][indexKolom]
  }
}

// Contoh 2 : jika menggunakan .forEach()

let shirts = [
  ["Kaos Aja", 2],
  ["Celana Jeans", 1],
  ["Jacket Varcity", 10],
  ["Shoes", 15],
];

shirts.forEach((baris) => {
  baris.forEach((kolom) => {
    console.log(kolom);
  });
});

// contoh lain menggunakan .forEach()
let hewan = [
  ["Harimau", "Karnivora"],
  ["Gajah", "Herbivora"],
  ["Gorila", "Omnivora"],
];

// Buat kode kamu dibawah ini
hewan.forEach((baris) => {
  baris.forEach((kolom) => {
    console.log(kolom);
  });
});

// ---------------------------------------------
let s = "";
for (let i = 0; i < 10; i++) {
  s += "-- -- -";
}
console.log(s);
// ---------------------------------------------

// Contoh 3 : jika menggunakan .map()
shirts.map((itemBaris) => {
  itemBaris.map((itemKolom) => {
    console.log(itemKolom);
  });
});
