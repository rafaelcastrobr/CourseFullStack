/*
fetch('pessoas.json')
  .then(resposta => resposta.json())
  .then(json => carregaElementosNaPagina(json));
*/
  

  

  const btn = document.querySelector('.btn');
  btn.addEventListener('click', () => {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    let valor = document.querySelector('.busca');
    let valorNome = valor.value.toLowerCase();
    valor.focus();
    valor.value = ``;

      axios('pessoas.json')
      .then(resposta => carregaElementos(resposta.data))
      
      function carregaElementos(json) {
        
        let p = document.createElement('p');
        for(let pessoa of json) {
          let pessoaNome = pessoa.nome.toLowerCase();
          let pessoaSeparada = pessoaNome.split(' ');
          
          if(pessoaSeparada[0] === valorNome){
            p = document.createElement('p');
            p.classList.add('yes');
            p.innerHTML = pessoa.nome;
            p.innerHTML += ' '+ pessoa.email;
            resultado.appendChild(p);
          }
        
          setTimeout(function () {
            if(!p.classList.contains('yes')) {
              p.innerText = `Não Encontrado`;
              resultado.appendChild(p);
            }
          }, 300);
          
        
        }
      };

  });

  
/*

  function carregaElementosNaPagina(json) {
    const table = document.createElement('table');
    for(let pessoa of json) {
      const tr = document.createElement('tr');

      let td = document.createElement('td');
      td.innerHTML = pessoa.nome;
      tr.appendChild(td);

      td = document.createElement('td');
      td.innerHTML = pessoa.idade;
      tr.appendChild(td);

      td = document.createElement('td');
      if(pessoa.sexo.length === 0) {
        td.innerHTML = 'não informado'
        tr.appendChild(td);
      } else {
        td.innerHTML = pessoa.sexo;
        tr.appendChild(td);
      }

      table.appendChild(tr);
    };

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table)
  }

  */