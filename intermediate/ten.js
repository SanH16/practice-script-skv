// ============================ Javasciprt Menambah data dalam Array Multidimensi ============================

/* contoh data jika diilustrasikan menggunakan table

No.	Nama Produk	        Penjualan
1	Kaos polos	        21
2	Jacket Hoodie	    13
3	Topi	            7

*/

/* Push sisa data dari Penjualan kedalam Stok Tersisa

No.	Nama Produk	        Penjualan	Stok Tersisa
1	Kaos polos	        21	        79
2	Jacket Hoodie	    13	        87
3	Topi	            7	        93
*/

let inventory = [
  ["Kaos Polos", 21],
  ["Jacket Hoodie", 13],
  ["Topi", 7],
];

console.log("-------------- Sebelum ditambah Sisa Stok --------------\n", inventory);

// contoh menggunakan .for()

// total produk dikurangi data yg terjual
for (let i = 0; i < inventory.length; i++) {
  let stokTersisa = 100 - inventory[i][1]; // kurangi isi dari value[kolom] dengan stok barang (100)
  inventory[i].push(stokTersisa); // push nilai yang telah dikurangi kedalam Stok Tersisa (kolom baru)
}

console.log("-------------- Setelah ditambah Sisa Stok --------------\n", inventory);

// contoh menggunakan .forEach()
let data = [
  ["Kaos Polos", 21],
  ["Jacket Hoodie", 13],
  ["Topi", 7],
];
console.log("-------------- Contoh .forEach( SEBELUM ) --------------\n", data);

data.forEach((dataInventory) => {
  let stokTersisa = 100 - dataInventory[1];
  dataInventory.push(stokTersisa);
});
console.log("-------------- Contoh .forEach( SESUDAH ) --------------\n", data);

// contoh menggunakan .map()
let array = [
  ["Nike air", 31],
  ["Adidas", 35],
  ["Vans", 15],
];
console.log("-------------- Contoh .map( SEBELUM ) --------------\n", array);

array.map((item) => {
  let sisaStok = 100 - item[1];
  item.push(sisaStok);
});

array.map((row) => {
  row.map((kolom) => {
    console.log(kolom);
  });
});

console.log("-------------- Contoh .map( SETELAH ) --------------\n", array);

console.log(`Nama : ${array[0][0]} stok: ${array[0][1]} sisa: ${array[0][2]}`);
