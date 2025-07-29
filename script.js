// Botão de som
document.getElementById("play-audio").addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  music.play();
  document.getElementById("play-audio").style.display = "none";
});

const perguntas = [
  {
    pergunta: "Qual foi a primeira coisa que eu pensei quando te vi?",
    respostas: [
      "Meu Deus... que mulher maravilhosa!",
      "Ela vai virar meu mundo de cabeça pra baixo…",
      "Nem nos meus sonhos imaginei alguém assim…"
    ]
  },
  {
    pergunta: "O que eu mais amo em você?",
    respostas: [
      "Teu jeitinho carinhoso",
      "O brilho no teu olhar",
      "Tudo. Cada detalhe teu me encanta."
    ]
  },
  {
    pergunta: "O que eu faria por você sem pensar duas vezes?",
    respostas: [
      "Largaria tudo só pra te dar um abraço",
      "Viraria noites em claro só pra te ver sorrindo",
      "Lutaria contra o mundo inteiro pra te proteger"
    ]
  },
  {
    pergunta: "Qual o meu maior sonho contigo?",
    respostas: [
      "Morar com você e construir uma família linda",
      "Envelhecer ao teu lado, rindo das nossas histórias",
      "Viajar o mundo inteiro de mãos dadas"
    ]
  }
];

let indiceAtual = 0;

function comecarJogo() {
  mostrarPergunta();
}

function mostrarPergunta() {
  const quiz = document.getElementById("quiz");
  quiz.innerHTML = "";

  const perguntaAtual = perguntas[indiceAtual];
  const titulo = document.createElement("h2");
  titulo.textContent = perguntaAtual.pergunta;
  quiz.appendChild(titulo);

  perguntaAtual.respostas.forEach(resposta => {
    const botao = document.createElement("button");
    botao.textContent = resposta;
    botao.onclick = () => proximaPergunta();
    quiz.appendChild(botao);
  });
}

function proximaPergunta() {
  indiceAtual++;
  if (indiceAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("mensagem-final").classList.remove("hidden");
  }
}
