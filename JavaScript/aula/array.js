const alunos = ['joao', 'maria'];
//               0       1


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

alunos.slice(0, 1ou-1) // fatia (escolhe) elementos

alunos instanceof Array // true false se é array

alunos.length // tamanho array


console.log(alunos);


// deixa array independente

const a = [1,2,3];
const b = [...a]; // por mais que eu altere o B não altera o A