function Carro (nome, ano) {
  this.nome = nome;
  this.ano = ano;

  //verifica placa preta)
  const data = new Date;
  let anoFull = data.getFullYear();
  let validade = anoFull - this.ano;
  


  this.escreve = () => {
    console.log(`O carro ${this.nome} do ano ${this.ano} tem ${validade} anos.`);
    if(validade < 30) {
      console.log(`Seu carro não está apto para placa preta. Faltam ${30 - validade} anos`);
    } else {
      console.log(`Seu carro está apto para placa preta. Vá até o DETRAN mais próximo`)
    }
  }
};

const C1 = new Carro('Parati', 1970)
C1.escreve();
const C2 = new Carro('Palio Weekeend', 1998)
C2.escreve();