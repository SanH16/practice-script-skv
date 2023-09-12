// ============================ Javasciprt Object Shorthand ============================

// example 1
// let firstName = "Adhitya";
// let lastName = "Hasan";

// let person = {
//   firstName,
//   lastName,
// };

// console.log(person);

// arrow function | Object Shorthand
const sayHello = (firsName, lastName) => {
  let person = {
    firsName: firsName,
    lastName: lastName,
  };
  console.log(`Hello ${person.firsName} ${person.lastName}`);
};
sayHello("Adhitya", "Hasan"); // call Object with argument

// example 2 | Object with method

let person = {
  myFirstName: "Adhitya",
  myLastName: "Hasan",
  sayHi: () => {
    console.log(`Eyowezup ${this.myFirstName} ${this.myLastName}, How are u ?`);
  },
};
person.sayHi(); // call method/fungsi in Object

// example 3

let operasiMatematika = {
  nama: "Penjumlahan",
  operasi(angka1, angka2) {
    let hasil = angka1 + angka2;
    return `${this.nama} dari ${angka1} dan ${angka2} adalah ${hasil}`;
  },
};

console.log(operasiMatematika.operasi(3, 5)); // output 8

// example 4

let mahasiswa = (name, npm, hobby) => {
  let anonymous = {
    name: name,
    npm: npm,
    hobbies: [hobby],
    desc: () => {
      console.log(`Eyow ${anonymous.name}, ur npm ${anonymous.npm}, ur hobby ${anonymous.hobbies}`);
    },
  };
  return anonymous.desc();
};
mahasiswa("adhitya Hasan", "2024240088", ["Ngoding", "tidur", "makan"].join(" - "));

// example 5

const product = (productName, productCategory, productPrice) => {
  let product = {
    name: productName,
    categories: [productCategory],
    price: productPrice,
    desc: function () {
      console.log(
        `Nama produk : ${product.name}\nCategory Product : ${product.categories}\nProduct Price : ${product.price} $`
      );
    },
  };
  return product.desc();
};

product("Nike Air Jordan", ["Brand New", "BNIB"].join(" - "), 200);
