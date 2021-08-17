class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando.`) 
  }
}

const p1 = new Pessoa('Carlos', 'Alberto');
const p2 = new Pessoa('Almeida', 'Lipe');
const p3 = new Pessoa('Fabio', 'Alberto');

p1.falar();
p2.falar();
p3.falar();