// ============================ Javasciprt .includes() ============================

// array.includes("--data yang kita cari--");
// mengembalikan nilai boolean true / false

const foods = ["siomay", "dimsum", "gyoza", "pangsit"];

const isThereDimsum = foods.includes("dimsum");
const isTherePizza = foods.includes("pizza");

// console.log(isThereDimsum); // Output: true
// console.log(isTherePizza); // Output: false

// ======== contoh jika ingin return boolean menggunakan find() ========
console.log(!!foods.find((data) => data === "dimsum")); // tambahkan double negasi untuk return boolean

// contoh penggunaan double negasi agar return boolean

const pizza = foods.find((data) => data === "pizza");

console.log(pizza);
// Output: undefined karena return value jika menggunakan find()

// Jika undefined diberi negasi
console.log(!undefined);
// Output: true --> sedangkan kita mengharapkan jika undefined, berarti kondisi false.

// maka agar hasilnya negatif, kita beri double negasi
console.log(!!undefined);
// Output: false

// ============ Contoh memeriksa dan menambahkan nama makanan ============
const foodies = ["siomay", "dimsum", "gyoza", "pangsit"];

// Buat kode kamu di bawah ini
const checkFood = (foodName) => {
  let isNotEmptyString = foodName !== "";
  let foodIsIncluded = foodies.includes(foodName);

  if (isNotEmptyString && foodIsIncluded) {
    console.log("Makanan sudah tersedia");
    console.log(foodies);
  } else {
    foodies.push(foodName);
    console.log(foodies);
  }
};
checkFood("Kwetiaw");
