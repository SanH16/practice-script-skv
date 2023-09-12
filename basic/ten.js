// ============================ Javasciprt Destruction ============================

const hobbies = ["Learning", "Sport", "Reading"];

let [firstHobby, , thirdHobby] = hobbies; // jika ingin mengambil isi array tertentu
console.log(firstHobby);
console.log(thirdHobby);

// contoh desktruturisasi (memisahkan) sebuah string
const firsName = "Adhitya";

const [a, b, c, d, e, f] = firsName;
console.log(`${a}, ${b}, ${d}, ${f}`);

// contoh desctruc Object
const person = {
  name: "Hasan",
  age: 20,
  address: "New York",
  idol: ["Jennie Kim", "Go Yoon Jung", "Han Hyo-joo"],
};
let {
  name,
  age,
  address,
  idol: [, secondIdol],
} = person; // destrukturisasi

// console.log(person.address);
console.log(address);
console.log(secondIdol); // Go Yoon Jung (kalau , , = Hyan Hyo-joo)
