class Controle{
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  aumentarVol (){
    this.volume += 2;
  }
  diminuirVol(){
    this.volume -=2;
  }

  static pilha() {
    console.log(`Vou trocar`);
  }
} 

Controle.pilha();