// .fill('X') = ngisi X sebanyak yg ditentukan
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);

console.log(thirdList); // [1, 2, 3, 4, 5, 6]

// let us check if a banana exist in the array

// next
const fruits = ["banana", "orange", "mango", "lemon"];

let index = fruits.indexOf("banana"); // 0

if (index === -1) {
  console.log("This fruit does not exist in the array");
} else {
  console.log("This fruit does exist in the array");
}

// let isIncludesBanana = fruits.includes(searchKeyword.toLowerCase());

//isArray
// if (Array.isArray(isIncludesBanana)) {
//   console.log("This is not an array");
// } else {
//   console.log("This is an array");
// }

// mnext
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.toString());
console.log(numbers.join(" ")); // 1,2,3,4,5

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
console.log(names.toString());

numbers.push(6);
console.log({ numbers });

const copyNumbers = numbers.filter((v, i) => i !== numbers.length - 1);

console.log({ numbers });
console.log(copyNumbers);
