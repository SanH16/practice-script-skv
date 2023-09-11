//Javascript HTML DOM

// var aDate = new Date();
// alert(aDate);

console.log(document.getElementsByTagName("h1")[0].innerText);

// let umur = document.getElementById('umur').value;
// console.log(umur);

//Mendapatkan text di h1 kemudian ditampikan di element paragraf
function tampil() {
  const textH1 = document.getElementsByTagName("h1")[0].innerText;

  document.getElementsByTagName("p")[0].innerText = textH1;
}
//getElementby Nama Class
let classH1 = document.getElementsByClassName("testaja");
console.log(classH1[1]);

//mengakses element-element HTML berdasarkan CSS selectornya HTML menggunakan querySelector
let h2ClassHola = document.querySelectorAll("h2.hola");
console.log(h2ClassHola);
console.log(h2ClassHola[0]);

let idHola2 = document.querySelector("#hola2");
console.log(idHola2);
console.log(idHola2[0]);

// Click Me show message menggunakan onclick event
let klik = document.getElementById("klik");
klik.onclick = showMessage;

function showMessage() {
  alert("Silahkan pelajari berdasarkan Roadmap terlebih dahulu");
}

//Menampilkan value dari input kemudian tampil dalam paragraf
// function inputKeParagraf(){
//     const valueInput = document.getElementsByTagName('input')[0].value;

//     document.getElementsByTagName('p')[0].innerText = valueInput
// }

function inputKeParagraf() {
  const valueInput = document.getElementsByClassName("cek1")[0].value;

  document.getElementsByClassName("uhuy")[0].innerText = valueInput;
}

const checkButton = () => {
  const formInput = document.getElementById("form");
  const result = document.getElementById("result");

  result.textContent = formInput.value;
  result.style.color = "purple";
  result.style.fontSize = "20px";
  result.style.fontWeight = "700";
};

let catImage = document.getElementById("cat-image");
catImage.setAttribute("src", "https://bit.ly/3j6YdWJ");
catImage.setAttribute("alt", "Fish");
catImage.setAttribute("width", "250px");
