
class Camiseta {
  constructor(preco, tam, cor) {
    this.preco=preco,
    this.tam=tam,
    this.cor=cor
  }
}

Camiseta.prototype.aumento = function (valor){
  this.preco += valor;
}

const c = new Camiseta(12, 'GG', 'verde')
c.aumento(50)
console.log(c)

class Calca extends Camiseta {
  constructor(preco, tam, cor){
    super(preco, tam, cor);
  }
}

Calca.prototype = Object.create(Camiseta.prototype)

const l = new Calca(20, '12', 'branco');
l.aumento(3)
console.log(l)
