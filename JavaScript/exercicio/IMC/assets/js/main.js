const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
});

function IMC (peso, altura) {
  return (peso / (altura ** 2));
} 

function calcular() {
  const resultado = document.getElementById('resultado');
  let peso = Number(document.getElementById('peso').value);
  let altura = Number(document.getElementById('altura').value);
  
  let imc = IMC(peso, altura).toFixed(1);
  
  if (imc < 18.5) {
    resultado.innerHTML = `<p>Seu IMC é ${imc} (Abaixo do peso)</p>`;
  } else if (peso > 500) {
    resultado.innerHTML = `<p>Digite novamente o peso</p>`;
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultado.innerHTML = `<p>Seu IMC é ${imc} (Peso normal)</p>`;
  } else if (imc >= 25 && imc <= 29.9) {
    resultado.innerHTML = `<p>Seu IMC é ${imc} (Sobrepeso)</p>`;
  } else if (imc >= 30 && imc <= 34.9) {
    resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 1)</p>`;
  } else if (imc >= 35 && imc <= 39.9) {
    resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 2)</p>`;
  } else if (imc >= 40) {
    resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 3)</p>`;
  } else {
    resultado.innerHTML = `<p>Valor inválido</p>`;
  }
}


