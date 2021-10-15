

/////// Cartola
/*
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
*/


/*
fetch('pessoas.json')
  .then(resposta => resposta.json())
  .then(json => carregaElementosNaPagina(json));
*/
  
///////// Pessoas
  

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = '';
  let valor = document.querySelector('.busca');
  let valorNome = valor.value.toLowerCase();
  let valorNomeSplit = valorNome.split(' ');
  
  valor.focus();
  valor.value = ``;

    axios('https://raw.githubusercontent.com/rafaelcastrobr/CourseFullStack/f1746bbbfb2fb7db251a2f2e51786967510a8f61/JavaScript/exercicio/ModeloAP/pessoas.json')
    .then(resposta => carregaElementos(resposta.data))
    
    function carregaElementos(json) {
      
      let p = document.createElement('p');
      for(let pessoa of json) {
        let pessoaNome = pessoa.nome.toLowerCase();
        let pessoaSeparada = pessoaNome.split(' ');

          p.innerHTML = `Buscando..`
          resultado.appendChild(p);
        
        setTimeout(function(){
          resultado.innerHTML = '';
        }, 500)
        
        setTimeout(function() {
          if((valorNomeSplit[1]) && pessoaSeparada[0] === valorNomeSplit[0] && pessoaSeparada[1] === valorNomeSplit[1]){
            p = document.createElement('p');
            p.classList.add('yes');
            p.innerHTML = pessoa.nome;
            p.innerHTML += ' '+ pessoa.email;
            resultado.appendChild(p);
          } 

        }, 600)

        setTimeout(function () {
          if((!valorNomeSplit[1]) && pessoaSeparada[0] === valorNomeSplit[0]) {
            p = document.createElement('p');
            p.classList.add('yes');
            p.innerHTML = pessoa.nome;
            p.innerHTML += ' '+ pessoa.email;
            resultado.appendChild(p);
          }
          
        }, 600)
        
      
        setTimeout(function () {
          if(!p.classList.contains('yes')) {
            p.innerText = `Não Encontrado`;
            resultado.innerHTML = '';
            resultado.appendChild(p);
          }
        }, 900);
        
      
      }
    };

});