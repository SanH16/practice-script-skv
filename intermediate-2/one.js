// ============================ Javasciprt Recursive ============================

function faktorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * faktorial(n - 1);
    // 4 * faktorial(4-1)
    // 4 * faktorial(3) ... berulang sampai faktorial 1
    // 3 * faktorial(2)
    // 2 * faktorial(1)
    // 1 * faktorial(1)
  }
}

console.log(faktorial(4));

// contoh membalikkan nama dengan function recursive
const balikKata = (str) => {
  if (str === "") {
    return str;
  } else {
    return balikKata(str.substr(1)) + str[0];
  }
};
console.log(balikKata("skilvul"));
