// for clássico - Geralmente com interáveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna  o valor em si (interáveis, arrays ou strings)

const pessoas = ['joao', 'maria', 'junior'];

for (let pos in pessoas) {
  let cav = pessoas[pos];
  //console.log(cav)
};

const pessoa = {
  nome: 'Luiz', 
  sobrenome: 'Otavio',
  idade: 30
};

for(let pos in pessoa) {
  console.log(pos, pessoa[pos])
}

// console.log('##')


// com objetos não funciona
for (let i of pessoas) {
  // console.log(i);
}