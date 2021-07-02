/**
 * [x] Pega o cpf tira os dois utimos numeros
 * [x] separa em array 
 * [] multiplicar primeira vez
 * [] somar primeira vez
 * [] criar digito
 * [] adicionar digito
 * [] multiplicar segunda vez
 * [] somar segunda vez
 * [] criar segundo digito
 * [] comparar
 */

let cpf = '111.444.777-35';
let cpfLimpo = cpf.replace(/\D+/g, '');
let cpfSemDig = cpfLimpo.slice(0,-2);
let cpfArray = Array.from(cpfSemDig);

let cpfMultiplica1R = [];
const cpfMultiplica1 = cpfArray.map(function (valor) {
  let i = 2;
  let retultado;
  while (i <= valor) {
    resultado = i * valor;
    console.log(resultado);
    if (resultado > 9) {
      resultado = 0;
    }
  
  };

  for (let i in valor) {
    i = 2;
    console.log(i*valor);
    i++;
    return cpfMultiplica1R;
  }
  
});
console.log(cpfMultiplica1);


