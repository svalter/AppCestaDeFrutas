
import imgLogo from '../../assets/logo.png'
import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

const cesta = {
  topo: {
    titulo: "Detalhes da Cesta"
  },
  detalhes: {
    nome: "Cesta de Verduras",
    logoFazenda: imgLogo,
    nomeFazenda: "Jenny Jack Farm",
    descricao: "ma cesta de produtos selecionados cuidadosamente direto da fazenda para sua cozinha",
    preco: "R$ 40,85",
    botao: "Comprar",
  },
  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "Tomate",
        imagem: tomate,
      },
      {
        nome: "Brócolis",
        imagem: brocolis,
      },
      {
        nome: "Batata",
        imagem: batata,
      },
      {
        nome: "Pepino",
        imagem: pepino,
      },
      {
        nome: "Abóbora",
        imagem: abobora,
      }
    ]
  }
}
export default cesta;