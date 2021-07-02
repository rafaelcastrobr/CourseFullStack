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
  for (let i = 2; i > valor;i++) {
    let resultado = i * valor;
    if (resultado > 9) {
      resultado = 0;
      cpfMultiplica1R = resultado;
    } 
    if (resultado <= 9) {
     cpfMultiplica1R = resultado;
    }
  
  };

});

 console.log(cpfMultiplica1);
