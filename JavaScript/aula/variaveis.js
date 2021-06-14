/* 
let nome = 'Rafael0';

console.log(nome, 'Pereira');
*/

const nome = 'Rafael Castro';
const idade = 30;
const peso = 90;
const alturaEmM = 1.75;
let imc = (peso / (alturaEmM * alturaEmM)).toFixed(1);
let anoNascimento = 2021 - idade;

console.log(`${nome} tem ${idade} anos, pesa ${peso} Kg`);
console.log(`Tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`)


