//Student

const student = [
  {
    id: 1,
    first_name: "Alberik",
    last_name: "Hanscomb",
    email: "ahanscomb0@bing.com",
    gender: "Male",
    ip_address: "73.8.170.12",
  },
  {
    id: 2,
    first_name: "Basilius",
    last_name: "Blezard",
    email: "bblezard1@springer.com",
    gender: "Male",
    ip_address: "12.155.95.138",
  },
  {
    id: 3,
    first_name: "Devina",
    last_name: "Revington",
    email: "drevington2@squarespace.com",
    gender: "Female",
    ip_address: "158.144.164.160",
  },
  {
    id: 4,
    first_name: "Domingo",
    last_name: "Grinyakin",
    email: "dgrinyakin3@facebook.com",
    gender: "Male",
    ip_address: "111.181.113.242",
  },
  {
    id: 5,
    first_name: "Sarine",
    last_name: "Cone",
    email: "scone4@macromedia.com",
    gender: "Female",
    ip_address: "116.147.23.71",
  },
  {
    id: 6,
    first_name: "Connie",
    last_name: "Drohane",
    email: "cdrohane5@npr.org",
    gender: "Female",
    ip_address: "229.160.238.158",
  },
  {
    id: 7,
    first_name: "Neville",
    last_name: "Schule",
    email: "nschule6@shop-pro.jp",
    gender: "Genderqueer",
    ip_address: "251.143.170.68",
  },
  {
    id: 8,
    first_name: "Urson",
    last_name: "Penhearow",
    email: "upenhearow7@themeforest.net",
    gender: "Male",
    ip_address: "210.191.175.16",
  },
  {
    id: 9,
    first_name: "Dana",
    last_name: "Feige",
    email: "dfeige8@ehow.com",
    gender: "Female",
    ip_address: "160.174.220.41",
  },
  {
    id: 10,
    first_name: "Ado",
    last_name: "Kobpa",
    email: "akobpa9@bbc.co.uk",
    gender: "Male",
    ip_address: "85.39.192.226",
  },
];

const maleStudent = student.filter((value === value.gender) === "Male");

console.log({ maleStudent });

const findSpesificStudent = student.find((val === val.id) === 2);
