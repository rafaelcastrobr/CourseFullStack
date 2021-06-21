// for clássico - Geralmente com interáveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna  o valor em si (interáveis, arrays ou strings)

const pessoas = ['joao', 'maria'];

for (let i in pessoas) {
  console.log(pessoas[i])
}

console.log('##')


// com objetos não funciona
for (let i of pessoas) {
  console.log(i);
}