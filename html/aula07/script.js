// let paragrafo = document.getElementsByTagName("p");
// let primeiroParagrafo = paragrafo[0];
// primeiroParagrafo.style.color = 'green';
document.body.style.background = 'black';

let nome = document.getElementById("nome")?.value;
let senha = document.getElementById("senha")?.value;
let botao = document.getElementById("botao");

function exibir(){
  window.location.href = 'https://ge.globo.com';
}

// function trocaDeCor(){
//   if(primeiroParagrafo.style.color === 'red' && primeiroParagrafo.textContent === 'Flamengo'){
//     primeiroParagrafo.style.color = 'green';
//     primeiroParagrafo.innerText = 'Palmeiras';
//   }else{
//     primeiroParagrafo.style.color = 'red';
//     primeiroParagrafo.innerText = 'Flamengo';
//   }

//   primeiroParagrafo.style.transition = 'all 1.5s ease-out';
// }