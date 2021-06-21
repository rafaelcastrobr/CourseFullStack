const paragrafos = document.querySelector('.container');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let i of ps) {
  
  i.style.backgroundColor = backgroundColorBody;
  i.style.color = '#fff'
}