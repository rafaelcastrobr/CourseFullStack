let // Sempre usar, não usar [var]
const // Sempre usar para números fixos

`` // usar para concatenar e assim usar ${váriavel}
${váriavel} // váriavel dentro de [``]

let num1 = 10;
console.log(`João tem ${num1} anos`)




confirm('Pergunta') // Retorna sempre [True] or [False]




Number // converte String para número [aceitando número inteiro e decimal] ao invés de 
// parseFloat[aceita número decimal]
// parseInt[aceita só número inteiro]




let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

  [varA, varB, varC] = [varB, varC, varA] // Da os valores às variavies sem perder seus valores anteriores
//   A     B    C         A     B     C
// entrega os valores /  recebes valores na ordem das entregas



// operação ternária
condição ? 'valor true' : 'valor false';
//      se            se não