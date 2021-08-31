// callback > promise >async/await

const fs = require('fs');

function rand(min=1, max=3) {
  min*=1000;
  max*=1000;
  return Math.floor(Math.random()*(max-min)+min);
}

function esperaAi(msg, tempo){
  return new Promise((resolve, reject)=>{
    setTimeout(() =>{
      if(typeof msg !== 'string'){
        reject('Cai no Erro');
        return;
      }
      resolve(msg.toUpperCase() + '-Passei');
      return;
    }, tempo);
  });
}

async function executa() {
  try {
    const fase1 = await esperaAi('Fase 1', rand());
    console.log(fase1);
  
    const fase2 = await esperaAi('Fase 2', rand());
    console.log(fase2);
  
    const fase3 = await esperaAi('Fase 3', rand());
    console.log(fase3);
  
    console.log('Terminanos', fase3)
  } catch(e) {
    console.log(e)
  }

}

executa()
/*
//! callback
fs.readFile('./in1.txt', (err, contents) => {
  fs.readFile('./in2.txt', (err2, contents2) =>{
    console.log(err, String(contents))
    console.log(err2, String(contents2))
  })
});

// promises
const readFile = file => new Promise((resolve, reject) => {
  fs.readFile(file, (err, contents) =>{
    if(err){
      reject(err)
    }else {
      resolve(contents)
    }
  })
})


const init = async() =>{
  try{
    const contents = await readFile('./aula/promises/promis/in1.txt');
    const contents2 = await readFile('./aula/promises/promis/in2.txt');
    return String(contents) + String(contents2);
  }catch(err){
    console.log(err)
  }
}
init()
  .then(contents => console.log(contents))

  */

/*
//promise
readFile('./promis/in1.txt')
  .then(contents =>{
    console.log(null, String(contents))
  })

  */


