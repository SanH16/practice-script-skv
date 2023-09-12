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
  sayHi: function () {
    console.log(`Eyowezup ${this.myFirstName} ${this.myLastName}, How are u ?`);
  },
};
person.sayHi(); // call method in Object

// example 3

let mahasiswa = (name, npm, hobby) => {
  let anonymous = {
    name: name,
    npm: npm,
    hobbies: [hobby],
    desc: function () {
      console.log(`Eyow ${anonymous.name}, ur npm ${anonymous.npm}, ur hobby ${anonymous.hobbies}`);
    },
  };
  return anonymous.desc();
};
mahasiswa("adhitya Hasan", "2024240088", ["Ngoding", "tidur", "makan"].join(" - "));
