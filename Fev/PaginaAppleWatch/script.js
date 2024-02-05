const imagemVisualizacao = document.getElementById("imagem-visualizacao");
const tituloProduto = document.getElementById("titulo-produto");
const subTituloCor = document.getElementById("nome-cor-selecionada");
const miniImagem0 = document.getElementById("0-imagem-miniatura");
const miniImagem1 = document.getElementById("1-imagem-miniatura");
const miniImagem2 = document.getElementById("2-imagem-miniatura");

const azulInverno = {
  nome: "Azul-inverno",
  pasta: "imagens-azul-inverno",
};

const meiaNoite = {
  nome: "Meia-noite",
  pasta: "imagens-meia-noite",
};

const verdeCipreste = {
  nome: "Verde-cipreste",
  pasta: "imagens-verde-cipreste",
};

const estelar = {
  nome: "Estelar",
  pasta: "imagens-estelar",
};

const rosaClaro = {
  nome: "Rosa-claro",
  pasta: "imagens-rosa-claro",
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ["41 mm", "45 mm"];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem() {
  const idOpcaoSelecionada = document.querySelector(
    '[name="opcao-imagem"]:checked'
  ).id;
  imagemSelecionada = idOpcaoSelecionada.charAt(0);
  imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`;
}

function trocarTamanho() {
  // Mudar a variavel 'tamanhoSelecionado'
  const idOpcaoSelecionada = document.querySelector(
    '[name="opcao-tamanho"]:checked'
  ).id;
  tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
  // Mudar o titulo de acordo com o mm
  tituloProduto.innerText = `Pusleira loop esportiva  para caixa de ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}.`;
  // Mudar o tamanho da imagem de acordo com o mm
  if (opcoesTamanho[tamanhoSelecionado] === "41 mm") {
    imagemVisualizacao.classList.add("caixa-pequena");
  } else {
    imagemVisualizacao.classList.remove("caixa-pequena");
  }
}

function trocarCor() {
  const idOpcaoSelecionada = document.querySelector(
    '[name="opcao-cor"]:checked'
  ).id;
  corSelecionada = idOpcaoSelecionada.charAt(0);

  tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}.`;
  subTituloCor.innerText = `Cor - ${opcoesCores[corSelecionada].nome}`;

  miniImagem0.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-0.jpeg`;
  miniImagem1.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-1.jpeg`;
  miniImagem2.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-2.jpeg`;

  imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`;
}
