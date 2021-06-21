// Atribuição via desestruturação 
const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda', 
  idade: 30,
  endereco: {
      rua: 'Av Brasil',
      numero: 320
  }
};


// // pega e transforma em variavel
  const {nome} = pessoa;

// // altera nome da váriavel
const { nome: n} = pessoa;
console.log(n);

// // pega e transforma em variaveis resultado dentro de chaves
  const {endereco: { rua, numero }} = pessoa;

  console.log(nome, rua, numero);


// // (...) = usa o resto do objeto ou array
  const { nome = 'Não existe'} = pessoa;  //define padrão
  console.log(nome);

