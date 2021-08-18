class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if(this.ligado) {
      console.log(`${this.nome} já ligado`);
      return;
    } 
    this.ligado = true;
  }

  desligar() {
    if(!this.ligado) {
      console.log(`${this.nome} já desligado`);
      return;
    }
    this.ligado = false;

  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor) {
    super(nome);
    this.cor = cor;
  }
};

const c1 = new Smartphone('Xiaomi', 'Preto');
c1.ligar();
c1.desligar();
c1.desligar();
console.log(c1)