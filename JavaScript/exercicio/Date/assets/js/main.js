

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
  const mes = nomeMes(data.getMonth() + 1);
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

  let diaDaSemana;

  switch(week) {
    case 0:
      diaDaSemana = `Domingo`;
      return diaDaSemana;
    case 1:
      diaDaSemana = `Segunda-Feira`;
      return diaDaSemana;
    case 2:
      diaDaSemana = `Terça-Feira`;
      return diaDaSemana;
    case 3:
      diaDaSemana = `Quarta-Feira`;
      return diaDaSemana;
    case 4:
      diaDaSemana = `Quinta-Feira`;
      return diaDaSemana;
    case 5:
      diaDaSemana = `Sexta-Feira`;
      return diaDaSemana;
    case 6:
      diaDaSemana = `Sábado`;
      return diaDaSemana;
  }
}

// altera nome do mês
function nomeMes(mes) {
  
  let nomeDoMes;

  switch(mes) {
    case 1:
      nomeDoMes = `Janeiro`;
      return nomeDoMes;
    case 2:
      nomeDoMes = `Fevereiro`;
      return nomeDoMes;
    case 3:
      nomeDoMes = `Março`;
      return nomeDoMes;
    case 4:
      nomeDoMes = `Abril`;
      return nomeDoMes;
    case 5:
      nomeDoMes = `Maio`;
      return nomeDoMes;
    case 6:
      nomeDoMes = `Junho`;
      return nomeDoMes;
    case 7:
      nomeDoMes = `Julho`;
      return nomeDoMes;
    case 8:
      nomeDoMes = `Agosto`;
      return nomeDoMes;
    case 9:
      nomeDoMes = `Setembro`;
      return nomeDoMes;
    case 10:
      nomeDoMes = `Outubro`;
      return nomeDoMes;
    case 11:
      nomeDoMes = `Novembro`;
      return nomeDoMes;
    case 12:
      nomeDoMes = `Dezembro`;
      return nomeDoMes;                                                                                                     
  }

}

//escreve
function escreveTela() {
  const dataAgora = dataAtual();
  const resultadoData = tagResultado();
  resultadoData.innerHTML = dataAgora;

}

escreveTela();
  