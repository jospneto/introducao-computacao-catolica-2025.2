const nome = 'Rafael';
let idade = 18;

switch(nome){
  case 'José Neto':
    console.log('Professor');
    idade = 23;
    break;
  case 'Allan':
    console.log('Viciado em Hollow Knight');
    idade = 45;
    break;
  default:
    console.log('Nenhum dos casos');
    idade = 1;
    break;    
}

console.log('idade:', idade);
