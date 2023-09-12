// ============================ Template Literals ============================
const person = {
  firstName: "Adhitya",
  lastName: "Hasan",
};
console.log(person.firstName);
console.log(`Eyow ${person.firstName} ${person.lastName}, What's Good ?`); // template literals

// contoh lain
let nama = "San";
let umur = 20;

let desc = `Halo nama saya ${nama} dan umur saya ${umur}`;
console.log(desc);

// contoh lain
let countAge = `Umur saya tahun depan adalah ${umur + 1}`;
console.log(countAge);

let countAge2 = `Tahun depan saya ${umur + 1 >= 17 ? "bisa" : "tidak bisa"} ikut pemilu`;
console.log(countAge2);

// contoh dengan function
function myName() {
  return "Sesepuh";
}
let introduction = `Hello my name is ${myName()}`;
console.log(introduction);
