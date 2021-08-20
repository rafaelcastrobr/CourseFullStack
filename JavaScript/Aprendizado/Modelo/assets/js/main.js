const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  let busca = document.querySelector('.busca');
  let buscaValor = busca.value.toLowerCase()
  let resultado = document.querySelector('.resultado');
  console.log(buscaValor)

  resultado.innerHTML = ``;
  busca.value = ``;
  busca.focus();


axios('cartola.json')
      .then(resposta => carregaElementos(resposta.data))

  function carregaElementos(json) {
    let idIn; //id jogador
    let nomesIn; // nome jogador
    
    let posIn; // id da posiçao
    let posicaoFinal;

    let timesCb; // nome do time relacionado a id

    for(let cartola of json) {
      let atletas = cartola.atletas;
      let clube = cartola.clubes;
      let pos = cartola.posicoes;
      
      for(let infos in atletas) { 
        nomesIn = atletas[infos].apelido;
        let nomesInMin = nomesIn.toLowerCase();
        posIn = atletas[infos].posicao_id
        
        if(nomesInMin === buscaValor) {
          idIn = atletas[infos].clube_id;
          for(let posicao in pos) {
            if(pos[posicao].id === posIn){
              posicaoFinal = pos[posicao].nome;
              }
            }
            for(let id in clube) {
              timesCb = clube[id].nome;
              if(clube[id].id === idIn){
                resultado.innerHTML += `${nomesIn} - ${clube[id].nome} - ${posicaoFinal} <br>`;
              }
            }
          
        }
      }
      
    }
  }
});



/*
Time 
    function carregaElementos(json) {
      for(let cartola of json) {
        let clube = cartola.clubes
          for(let id in clube){
            let escudo = clube[id].escudos;
            let times = clube[id].nome
            for(let escudos in escudo){
              let t = escudo[escudos];
              console.log(escudo["60x60"])
            }
          }
      }
    }


*/





/*

  const btn = document.querySelector('.btn');
  btn.addEventListener('click', () => {
    let busca = document.querySelector('.busca');
    let buscaValor = busca.value
    let resultado = document.querySelector('.resultado');

    axios('cartola.json')
      .then(resposta => carregaElementos(resposta.data))


    function carregaElementos(json) {
      for(let cartola of json) {
        let clube = cartola.clubes
          for(let id of clube){
            console.log(id.nome)
            
            
            if(id === buscaValor){
              resultado.innerHTML = 'Flamengo'
            }
            if(id === buscaValor){
              resultado.innerHTML = 'curitiba'
            }
            
          }
      }
    }
  })
*/
