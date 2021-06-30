function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;


  // Object.defineProperty (this, 'estoque', {
  //   enumerable: true, // mostra a chave
  //   value: estoque,  // valor
  //   writable: true, // pode alterar
  //   configurable: false // configurável
  // });


  Object.defineProperties (this, {
    nome: {
      enumerable: true, // mostra a chave
      value: nome,  // valor
      writable: true, // pode alterar
      configurable: false // configurável
    },
    preco: {
      enumerable: true, // mostra a chave
      value: preco,  // valor
      writable: false, // pode alterar
      configurable: false // configurável
    },
  });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.preco = 50;
console.log(Object.getOwnPropertyDescriptor(p1, 'estoque'));  
//* { value: 3, writable: true, enumerable: true, configurable: true }
console.log(p1)