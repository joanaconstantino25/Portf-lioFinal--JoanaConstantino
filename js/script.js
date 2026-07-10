/*
Nome: Joana Constantino
Número de estudante: 3230253
Nome do exercício: Portfólio Final
Ano letivo: 3.º ano, 2025–2026
Semestre: 2.º
Unidade curricular: Laboratório de Projeto II
Curso: LDGM
Escola: ESAD.CR
Docente: Luis Carradas
Data de avaliação: [COLOCA A DATA]
*/

/* 
Este ficheiro utiliza p5.js para manipular elementos da página.
A função altera uma palavra no HTML quando o utilizador clica no botão.
*/

let focusWords = ["Image", "Video", "Web", "Campaign", "Motion", "Design"];
let currentWord = 0;

function setup() {
  noCanvas();

  let button = select("#focus-button");

  if (button) {
    button.mousePressed(changeFocusWord);
  }
}

function changeFocusWord() {
  let wordElement = select("#focus-word");

  currentWord = currentWord + 1;

  if (currentWord >= focusWords.length) {
    currentWord = 0;
  }

  if (wordElement) {
    wordElement.html(focusWords[currentWord]);
  }
}