//! Filter

// Filter função recebe (valor, indice, array)
const numeros = [5, 60, 40, 1, 9, 3, 29];
const numerosFil = numeros.filter(valor => valor > 10);


// Filtrando

const pessoas = [
  { nome: 'Luis', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoaComMais50 = pessoas.filter(obj => obj.idade > 50);
const pessoaLetraA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'))
//console.log(pessoaLetraA);

//! MAP

const numeros01 = [5, 60, 40, 1, 9, 3, 29];
const numerosEmDobro = numeros01.map(valor => valor * 2);
//console.log(numerosEmDobro);

const pessoas01 = [
  { nome: 'Luis', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const pessoas01String = pessoas01.map(obj => obj.nome);
const pessoaNomeRemove = pessoas01.map(obj => ({ idade: obj.idade }));
//* delete obj.nome;

const comIds = pessoas01.map(function (obj, indice) {
  const newObj = { ...obj }; //* não altera objeto original
  newObj.id = indice;
  return newObj;
});
//console.log(comIds);
//console.log(pessoas01);

//! Reduce (acumulador)

const pessoas02 = [
  { nome: 'Luis', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const maisVelha = pessoas02.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});

//console.log(maisVelha);

//! Filter + MAP + Reduce

const numeros02 = [5, 60, 40, 1, 9, 3, 29];
const numerosPares = numeros
  .filter(valor => valor % 2 === 0)
  .map(valor => valor * 2)
  .reduce((ac, valor) => ac + valor);

console.log(numerosPares);

//! forEach

const a1 = [5, 60, 40, 1, 9, 3, 29];

for (let valor of a1) {
  //console.log(valor)
}




