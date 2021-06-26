// função (parametro) 
// retorna ou não algum resultado
// chama função ('da um valor a esse parametro')


// função (parametro = valorPadrão)
// retorna um resultado
// chama função () // ele usa o padrão setado pela função

// função com com variavel depois
function saudacao(nome) {
  return nome;
}

const nome = saudacao('João');
console.log(nome);


// // funçao com variavel dentro
const nome = function (n) {
  return n;
};

console.log(nome('Fabio'));



// função arrow function
const n = n => n;
// variavel - parametro - retorna
// precisa receber só 1 valor / 1 parametro / 1 linha;

console.log(n('Fabio'));


... // resto operation sempre ser o último;


// functions guarda valores em arguments *quando chamadas* (usando function)

/**
* Fabio
* * adicionar valor padrão a um parametro
*! a=6 que se não houver argumento será padrão.
*TODO:          null ou undefined retorna o valor padrão.
*/


function funcao(a=6){
  console.log(a);
}

funcao(2);

(function() {

// tirar funções do escopo global IIFE
// função podendo ser chamada dentro como se fosse fora.
})();

//? usar get ou set
/** get usa para fingir não ser uma função em objetos... 
* set usa para setar um valor(trocar)..
this.exemplo (se refere a pessoa que chamou) */
