
// forma simples de função criando objeto

const pessoa1 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 25
};

console.log(`Olá ${pessoa1.nome} você tem ${pessoa1.idade} anos`);


// forma automatizada apenas chamando a funação


function criaPessoa (nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade
  };
}
const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
const pessoa2 = criaPessoa('Fabiana', 'Castro', 30)
console.log(pessoa1.nome, pessoa2.idade);


// Usando this

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
      console.log(`Minha idade é ${this.idade}`);
    },

    incrementaIdadde() {
      this.idade++;
    }

  };

  pessoa1.fala();
  pessoa1.incrementaIdadde();
  pessoa1.fala();



  const a = {
    nome: 'joao',
    sobrenome: 'otavio'
  };

  const b = {...a};

  a.nome = 'Fabio';
  console.log(b);


  //! Constructor functions

  function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); //* congelar mudanças no objeto
  }

  const p1 = new Pessoa('Luiz', 'Mel');
  const p2 = new Pessoa('Maria', 'Paula');

  