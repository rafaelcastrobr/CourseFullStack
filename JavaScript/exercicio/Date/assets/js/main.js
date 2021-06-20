
          // Forma mais simplificada //
// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short'});


// pega tag
function tagResultado() {
  const resultado = document.querySelector('.container h1');
  return resultado;
}

// gerar data
function geraData() {
  const data = new Date();
  return data;
}

// converte data
function dataAtual() {
  const data = geraData();

  const week = nomeDia(data.getDay());
  const dia = addZero(data.getDate());
  const mes = nomeMes(data.getMonth());
  const ano = addZero(data.getFullYear());
  const hora = addZero(data.getHours());
  const min = addZero(data.getMinutes());

  return `${week}, ${dia} de ${mes} de ${ano} ${hora}:${min}`;
}

// adiciona zero
function addZero(num) {
  return num >= 10 ? num : `0${num}`;
}

// altera nome do dia
function nomeDia (week) {

  let diaNome = ['Domingo', 'Segunda', 'Terça', 'Quarta', 
    'Quinta', 'Sexta', 'Sábado'];

  return diaNome[week];
}

// altera nome do mês
function nomeMes(mes) {
  
  let nomeDoMes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio',
      'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

  return nomeDoMes[mes];
}

//escreve
function escreveTela() {
  const dataAgora = dataAtual();
  const resultadoData = tagResultado();
  resultadoData.innerHTML = dataAgora;
}escreveTela();
  