function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') {
      reject('BAD VALUE');
      return;
    }
    setTimeout(() => {
      resolve(msg.toLocaleUpperCase() + ' - Passei na promise');
    }, tempo)
  });
}
// Promise.resolve !Aciona primeiro se for true
// Promise.reject !Aciona o falso;

function baixaPagina() {
  const emCache = true;
  
  if(emCache) {
    return Promise.reject('Página em cache');
  }else {
    return esperaAi('Baixei a página', 3000)
  }
}

baixaPagina().then(dadosPagina => {
  console.log(dadosPagina);
}).catch(e => console.log('ERROR', e));


// Promise.all #Busca em todos
// Promise.race #Busca o primeiro a ser executado
/*
const promises = [
  esperaAi('Promise 1', 3000),
  esperaAi('Promise 2', 500),
  esperaAi('Promise 3', 1000),
  //esperaAi(59, 1000),
];
Promise.race(promises)
  .then(function(valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });

*/


/*
esperaAi('Frase 1', rand(1, 3)).then(resposta => {
  console.log(resposta);
  return esperaAi('Frase 2', rand(1, 3));
}).then(resposta => {
  console.log(resposta);
  return esperaAi('Frase 3', rand(1, 3));
}).then(resposta => {
  console.log(resposta);
}).catch(e => {
  console.log('Erro', e)
});

*/
