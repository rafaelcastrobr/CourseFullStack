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