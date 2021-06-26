/** 
* ! Função construtora necessita do
* @new Pessoa
*/

function Pessoa(nome, sobrenome) {
  //! Atributos ou métodos privados
  const ID = 12345;
  const metodoInterno = function() {

  };

  //! Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  //! arrow function
  this.metodo = () => {
    console.log(this.nome + ': Sou um método');
  };
}

const p1 = new Pessoa('Luiz', 'Fabio');
const p2 = new Pessoa('Fabio', 'Marco');

p2.metodo();