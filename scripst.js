// => semana 1
const hamburguer1 = "Second Breakfast";
const veg1 = false;
const numeroDeIngredientes1 = 7;
const preco = 26;
const ingredientes1 = [
  "Hamburguer 180g",
  "pão de batata",
  "tomates",
  "bacon",
  "ovo",
  "molho da casa",
];

console.log(hamburguer1.toUpperCase());
console.log(veg1);
console.log(numeroDeIngredientes1);
console.log(ingredientes1);

const hamburguer2 = "Valfenda(vegano)";
const veg2 = true;
const numeroDeIngredientes2 = 6;
const preco2 = 32;
const ingredientes2 = [
  "Pão de cenoura",
  "hamburguer de lentinlha",
  "tofu grelhado",
  "alface",
  "tomate cereja",
  "maionese vegana caseira",
];
console.log(hamburguer2.toUpperCase());
console.log(veg2);
console.log(numeroDeIngredientes2);
console.log(ingredientes2);

const hamburguer3 = "Rings of Power";
const veg3 = false;
const numeroDeIngredientes3 = 6;
const preco3 = 28;
const ingredientes3 = [
  "Hamburguer 180g",
  "pão australiano",
  "queijo brie",
  "onion rings",
  "alface",
  "molho da casa",
];

console.log(hamburguer3.toUpperCase());
console.log(veg3);
console.log(numeroDeIngredientes3);
console.log(ingredientes3);

const mediaDeIngredientes = (6 + 6 + 7) / 3;
console.log(mediaDeIngredientes);

const hamburguerVegano = veg1 && veg2 && veg3;
console.log(hamburguerVegano);

// => semana 2

const objeto1 = {};
objeto1.nome = hamburguer1;
objeto1.eVegano = veg1;
objeto1.ingredientes = numeroDeIngredientes1;
objeto1.listaDeIgredientes = ingredientes1;

const objeto2 = {};
objeto2.nome = hamburguer2;
objeto2.eVegano = veg2;
objeto2.ingredientes = numeroDeIngredientes2;
objeto2.listaDeIgredientes = ingredientes2;

const objeto3 = {};
objeto3.nome = hamburguer3;
objeto3.eVegano = veg3;
objeto3.ingredientes = numeroDeIngredientes3;
objeto3.listaDeIgredientes = ingredientes3;

console.log(objeto1);
console.log(objeto2);
console.log(objeto3);

//const arrayDeObjetos = [];
//arrayDeObjetos.push(objeto1, objeto2, objeto3);
//console.log(arrayDeObjetos);

const arrayVeg = [];

if (objeto1.eVegano) {
  arrayVeg.push(objeto1);
} else console.log("Não é vegano"); //aqui iria alert mas alert me tira a paciencia

if (objeto2.eVegano) {
  arrayVeg.push(objeto2);
} else console.log("Não é vegano");

if (objeto3.eVegano) {
  arrayVeg.push(objeto3);
} else console.log("Não é vegano");

console.log(arrayVeg);
//for (item of arrayDeObjetos) {
//  if (item.eVegano) {
//    arrayVeg.push(arrayDeObjetos[item]);
//   console.log("true");
//  } else {
//    console.log("false");
// }
//}

console.log(arrayVeg);

// arrayDeObjetos.forEach(function (item) {
//   if (arrayDeObjetos[item.eVegano]) {
//     arrayVeg.push(arrayDeObjetos[item]);
//   } else {
//     console.log("aaa");
//   }
// });
// const arrayVeg = [];
// for (item in arrayDeObjetos)
//   if (arrayDeObjetos[item] === true) {
//     arrayVeg.push(arrayDeObjetos[item]);
//   } else {
//     console.log("aaa");
//   }

// => semana 3

//for (let hamburguer of arrayVeg) {
// arrayVeg.listaDeIgredientes = arrayVeg.listaDeIgredientes.("- ");
//}

//semana 6
//const items = document.querySelectorAll(".items");
//const search = document.querySelector("input[type= 'seacrh']");

//search.oninput = () => {
//  content.innerHTML = "";

//  items
//    .filter((item) => item.toLowerCase().includes(search.value.toLowerCase()))
//    .forEach((item) => addHTML(item));
//};
