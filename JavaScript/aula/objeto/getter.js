function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePv = estoque;
  Object.defineProperty (this, 'estoque', {
    enumerable: true, // mostra a chave
    // // value: estoque, // valor
    // // writable: true, // pode alterar
    configurable: true, // configurável
    get: function() {
      return estoquePv;
    },
    set: function(valor) {
      if (typeof valor !== 'number') {
        console.log('Mensagem');
        return;
      }
      estoquePv = valor;
    }
  });

}

const p1 = new Produto('Camiseta', 20, 0);
p1.estoque = 'cavalo';
console.log(p1.estoque)