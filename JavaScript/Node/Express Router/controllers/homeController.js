exports.paginaInicial = (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar Form</button>
    </form>
    `);
}