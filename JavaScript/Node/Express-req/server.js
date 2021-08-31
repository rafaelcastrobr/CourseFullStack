const express = require('express');
const app = express();

app.use(
  express.urlencoded(
    {
      extended: true
    }
  )
);


app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome do cliente: <input type="text" name="nome">
  <button>Enviar Form</button>
  </form>
  `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
  // params  profiles/3
  console.log(req.params);
  // query  profiles/?chave=1&valor=2
  console.log(req.query);
  res.send(req.params);
})

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`O que você enviou foi ${req.body.nome}`);
});

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});