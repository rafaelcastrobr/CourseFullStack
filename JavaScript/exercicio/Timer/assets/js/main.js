const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

function zeroEsq(num) {
  return num >= 10 ? `${num}` : `0${num}`;
}

 function zerado() {
  const data = new Date(0);
  const hour = zeroEsq(data.getHours());
  const min = zeroEsq(data.getMinutes());
  const sec = zeroEsq(data.getSeconds());

  return `${hour}:${min}:${sec}`;
};


console.log(zerado());

iniciar.addEventListener('click', function(e) {
  const timer = setInterval(function () {
    return;
  }, 1000);
});


const crono = zerado(timer);
relogio.innerHTML = crono;

pausar.addEventListener('click', function(e) {
  alert('Cliquei');
});

zerar.addEventListener('click', function(e) {
  alert('Cliquei');
});