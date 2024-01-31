const botaoPlayPlause = document.getElementById("play-pause");
const botaoSeguinte = document.getElementById("seguinte");
const botaoAnterior = document.getElementById("retroceder");
const capituloAudio = document.getElementById("capitulo-audio");
const nomeCapitulo = document.getElementById('capitulo')

const nCapitulos = 10;

let playing = 0;
let capituloAtual = 1;

function tocarFaixa() {
  capituloAudio.play();
  botaoPlayPlause.classList.remove("bi-play-circle-fill");
  botaoPlayPlause.classList.add("bi-pause-circle-fill");
}

function pausarFaixa() {
  capituloAudio.pause();
  botaoPlayPlause.classList.remove('bi-pause-circle-fill"');
  botaoPlayPlause.classList.add("bi-play-circle-fill");
}

function playAndPause() {
  if (playing === 0) {
    tocarFaixa();
    playing = 1;
  } else {
    pausarFaixa();
    playing = 0;
  }
}

function nomeFaixaCapitulo(){
  nomeCapitulo.innerHTML = 'Cápítulo ' + capituloAtual;
}

function proximaFaixa() {
  if (capituloAtual === nCapitulos) {
    capituloAtual = 1;
  } else {
    capituloAtual += 1;
  }
  capituloAudio.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
  tocarFaixa();
  playing = 1;
  nomeFaixaCapitulo()
}

function retrocederFaixa() {
  if (capituloAtual === 1) {
    capituloAtual = nCapitulos;
  } else {
    capituloAtual -= 1;
  }
  capituloAudio.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
  tocarFaixa();
  playing = 1;
  nomeFaixaCapitulo()
}

botaoPlayPlause.addEventListener("click", playAndPause);
botaoSeguinte.addEventListener("click", proximaFaixa);
botaoAnterior.addEventListener("click", retrocederFaixa);
