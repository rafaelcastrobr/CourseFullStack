/* 
let nome = 'Rafael0';

console.log(nome, 'Pereira');
*/

const nome = 'Rafael';
const sobrenome = 'Castro';
const idade = 30;
const peso = 90;
const altura = 1.75;
let imc = (peso / (altura * altura)).toFixed(1);
let anoNascimento = 2021 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos,', 'pesa', peso, 'Kg.');
console.log('Tem', altura, 'de altura e', 'seu IMC é de', imc);
console.log(nome, sobrenome, 'nasceu em', anoNascimento)


