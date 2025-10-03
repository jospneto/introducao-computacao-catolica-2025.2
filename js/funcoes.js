function soma(a, b){
  return a + b;
} //Declaração por function;

const subtracao = (a, b) => {
  return a - b;
} //Arrow function;

const valorDaSoma = soma(1, 2);
const valorSubtracao = subtracao(2, 1);

const array = [1, 2, 3, 4, "nome"];

console.log('valor soma 1:', valorDaSoma);
console.log('valor soma 2:', soma(2, 5));
console.log('valor da subtracao:', valorSubtracao);
console.log('====================================')

const print = (messagem, i, array) => {
   console.log(messagem, i, array[i]);
}

for(let i=0; i < array.length; i++){
  print("array-indice:", i, array);
}

let i = 0

while (i < array.length){
  print("while-indice", i, array);
  i++;
}

do {
  print("do-while-indice", i, array);
  i++;
} while(i < array.length);