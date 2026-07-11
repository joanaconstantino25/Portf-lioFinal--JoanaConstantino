/*
Nome: Joana Constantino
Número de estudante: 3230253
Nome do exercício: Portfólio Final — Processing Sketches
Ano letivo: 3.º ano, 2025–2026
Semestre: 2.º
Unidade curricular: Laboratório de Projeto II
Curso: LDGM
Escola: ESAD.CR
Docente: Luis Carradas
Data de avaliação: [COLOCA A DATA]
*/

/*
Sketch 01 — Interactive Composition
Este sketch cria uma composição interativa em que os círculos reagem
à posição do rato dentro da área visual.
*/

let interactiveSketch = function (p) {
  p.setup = function () {
    let canvas = p.createCanvas(600, 420);
    canvas.parent("sketch-one");
  };

  p.draw = function () {
    p.background(17);

    for (let i = 0; i < 8; i++) {
      let x = 60 + i * 70;
      let y = p.height / 2;
      let size = p.dist(p.mouseX, p.mouseY, x, y);

      size = p.map(size, 0, 500, 80, 20);
      size = p.constrain(size, 20, 80);

      p.noFill();
      p.stroke(247);
      p.strokeWeight(2);
      p.circle(x, y, size);
    }

    p.noStroke();
    p.fill(247);
    p.textSize(14);
    p.text("move the mouse", 24, p.height - 24);
  };

  p.windowResized = function () {
    p.resizeCanvas(p.select("#sketch-one").width, 420);
  };
};

/*
Sketch 02 — Generative Pattern
Este sketch cria um padrão geométrico simples. Sempre que o utilizador
clica na área, o padrão muda através de um novo valor aleatório.
*/

let patternSketch = function (p) {
  let seed = 10;

  p.setup = function () {
    let canvas = p.createCanvas(600, 420);
    canvas.parent("sketch-two");
  };

  p.draw = function () {
    p.background(247);
    p.randomSeed(seed);

    let spacing = 48;

    for (let x = 24; x < p.width; x += spacing) {
      for (let y = 24; y < p.height; y += spacing) {
        let size = p.random(10, 34);

        p.noFill();
        p.stroke(17);
        p.strokeWeight(1.5);

        if (p.random() > 0.5) {
          p.circle(x, y, size);
        } else {
          p.rectMode(p.CENTER);
          p.square(x, y, size);
        }
      }
    }

    p.noStroke();
    p.fill(17);
    p.textSize(14);
    p.text("click to regenerate", 24, p.height - 24);
  };

  p.mousePressed = function () {
    seed = p.random(1000);
  };

  p.windowResized = function () {
    p.resizeCanvas(p.select("#sketch-two").width, 420);
  };
};

new p5(interactiveSketch);
new p5(patternSketch);