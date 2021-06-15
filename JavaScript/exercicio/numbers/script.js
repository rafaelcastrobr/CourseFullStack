const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');



numeroTitulo.innerHTML = numero;
texto.innerHTML  = `<p>Raiz quadrada: <b>${numero ** 0.5}</b></p>`;
texto.innerHTML  += `<p>${numero} é inteiro: <b>${Number.isInteger(numero)}</b></p>`;
texto.innerHTML  += `<p>É NaN: <b>${Number.isNaN(numero)}</b></p>`;
texto.innerHTML  += `<p>Arredondado para baixo: <b>${Math.floor(numero)}</b></p>`;
texto.innerHTML  += `<p>Arredondado para cima: <b>${Math.ceil(numero)}</b></p>`;
texto.innerHTML  += `<p>Com duas casas decimais: <b>${numero.toFixed(2)}</b></p>`;



// // false true