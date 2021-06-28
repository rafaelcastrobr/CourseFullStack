const alunos = ['joao', 'maria', 'felipe'];
//               0       1        2

// busca o indice 2 e remove o mesmo..
const removidos = nomes.splice(2, 1);

// busca o indice 2 remove e adiciona no lugar o gerson
const removidos = nomes.splice(2, 1, 'gerson');


//* splice (indice, delete, el1, el2, el3.)

// adiciona elemento no final
 alunos.push('Otavio');
 alunos.push('Flávio');


 // adiciona elemento no começo
 alunos.unshift('Carlos');

// exclui ultimo elemento
 alunos.pop();

// exclui primeiro eleemento
 alunos.shift();

// deleta qualquer elemento
delete alunos[2]; // retorna vazio


const nome = 'Luiz Otavio Miranda';
const nomes = nome.split(' '); //* Separa palavras pelo espaço, pode ser traço, vírgula.
const nomes = nome.join(' '); //* Junta se estiver em array ['felipe', 'marcos'] = felipe marcos
console.log(nomes);

alunos.slice(0, 1 ou -1) // fatia (escolhe) elementos

alunos instanceof Array // true false se é array

alunos.length // tamanho array


console.log(alunos);


// deixa array independente

const a = [1,2,3];
const b = [...a]; // por mais que eu altere o B não altera o A


// concatenar array
const a3 = a1.concat(a2); // [1,2,3,4,5,6]
const a3 = a1.concat(a2, [7,8,9], 'carlos');
const a3 = [...a1, 'lucas', ...a2]; // ...spread (espalha) 