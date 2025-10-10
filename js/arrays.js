// Práticas de arrays e objetos

let frutas = ["banana", "uva", "abacate"];

// // console.log("fruta atual:", frutas[1]);
// console.log("frutas:", frutas);

// frutas.push("abacaxi"); //Adicionar valores ao final do array e incrementar o tamanho do array

// console.log("frutas:", frutas);

// // frutas.push(2);

// // console.log("frutas:", frutas);

// const valorPop = frutas.pop();

// console.log("frutas:", frutas);

// frutas.unshift("coco");

// console.log("frutas:", frutas);

// frutas.shift();

// console.log("frutas:", frutas);

// frutas.splice(0, 1); // Os primeiros valores sempre serão referentes ao valor da posição, quantidade de elementos a serem removidos e valor a ser inserido

// console.log("frutas:", frutas);

// const novoArray = frutas.slice(0, 3);

// console.log("novoArray", novoArray);

frutas.forEach((fruta) => console.log("fruta-foreach:", fruta));

const novoArray = frutas.map((fruta) => `fruta: ${fruta}`);

const numeros = [0, 2, 6, 7, 10, 12];

console.log("novoArray:", novoArray);

const newArray = numeros.filter((numero) => numero % 2 === 0);

const numerosMaioresQue6 = numeros.filter((numero) => numero > 6);

console.log("array filtrado por pares: ", newArray);
console.log("numeros maiores que 6: ", numerosMaioresQue6);





