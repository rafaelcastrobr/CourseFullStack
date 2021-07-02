//! Prototype esconde uma função para todos objetos
//* __proto__: object

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
};

const pessoa1 = new Pessoa('Maria', 'O.');
const pessoa2 = new Pessoa('Fabio', 'Orvalho.');



//console.log(pessoa1.nomeCompleto());
//console.log(pessoa2.nomeCompleto());


//! Manipulando Prototype

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
};

const produto1 = new Produto('Camiseta', 25);
produto1.desconto(50);
console.log(produto1);