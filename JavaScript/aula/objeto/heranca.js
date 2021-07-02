function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function(porcentagem) {
  this.preco = this.preco - (this.preco* (porcentagem / 100));
};


function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta('Regata', 30, 'Preto');
camiseta.desconto(0);
// console.log(camiseta);


function Caneca(nome, preco, cor, estoque) {
  Produto.call(this, nome, preco);
  this.cor = cor;
  this.estoque = estoque;

  Object.defineProperty(this, 'estoque', {
    get: function() {
      return estoque;
    },
    set: function(valor) {
      return estoque = valor;
    }
  });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Caneca Batman', 40, 'Branco', 10);
caneca.desconto(50);
caneca.estoque = 4;
console.log(caneca);
