// Nicolas Javier Esquivel - PMIW - Comision 1 - tp1 
//Link Youtube: https://youtu.be/Z5yCXzeE7yE

let Foto;
let negro, Blanco;
let cambiarANegro = false;

let cx = 200, cy = 200;

let tamMax = 400, tamMin = 50, paso = 29;
let tamMax2 = 80, tamMin2 = 25, paso2 = 27;

let AnchoV = 15, AltoV = 79, SeparacionV = 15;
let x1 = 5, x2 = 170, x3 = 247, x4 = 495;

let AnchoH = 79, AltoH = 15, SeparacionH = 15;
let y1 = 5, y2 = 170, y3 = 395, y4 = 245;

function preload() {
  Foto = loadImage('data/Foto.jpg');
}

function setup() {
  createCanvas(800, 400);
  Foto.resize(400,400);
  rectMode(CENTER);
}

function draw() {
  background(255);
  image(Foto, 0, 0);
  push();
  translate(400, 0);

  CuadrosConcentricos(cx, cy, tamMax, tamMin, paso);
  
  barrasV(x1, x2, SeparacionV, cy, AnchoV, AltoV);
  barrasV(x3, x4, SeparacionV, cy, AnchoV, AltoV);
  
  barrasH(y1, y2, SeparacionH, cx, AnchoH, AltoH);
  barrasHInv(y3, y4, SeparacionH, cx, AnchoH, AltoH);
  
  CuadrosConcentricos(cx, cy, tamMax2, tamMin2, paso2);

  pop();
}

function CuadrosConcentricos(x, y, max, min, p) {
  negro = false;
  for (let i = max; i >= min; i -= p) {
    if (negro) {
      fill(255);
    } else {
      if (cambiarANegro) {
        let intensidad = IntensidadC(mouseX);
        fill(intensidad, 0, 0);
      } else {
        fill(0);
      }
    }
    rect(x, y, i, i);
    negro = !negro;
  }
}

function barrasV(xi, xf, paso, y, w, h) {
  Blanco = false;
  for (let x = xi; x <= xf - w; x += paso) {
    if (Blanco) {
      if (cambiarANegro) {
        let intensidad = IntensidadC(mouseX);
        fill(0, 0, intensidad);
      } else {
        fill(0);
      }
    } else {
      fill(255);
    }
    noStroke();
    rect(x, y, w, h);
    Blanco = !Blanco;
  }
}

function barrasH(yi, yf, paso, x, w, h) {
  Blanco = false;
  for (let y = yi; y <= yf - h; y += paso) {
    if (Blanco) {
      if (cambiarANegro) {
        let intensidad = IntensidadC(mouseX);
        fill(0, 0, intensidad);
      } else {
        fill(0);
      }
    } else {
      fill(255);
    }
    noStroke();
    rect(x, y, w, h);
    Blanco = !Blanco;
  }
}

function barrasHInv(yi, yf, paso, x, barrasAncho, barrasAlto) {
  Blanco = false;
  for (let y = yi; y >= yf; y -= paso) {
    if (Blanco) {
      if (cambiarANegro) {
        let intensidad = IntensidadC(mouseX);
        fill(0, 0, intensidad);
      } else {
        fill(0);
      }
    } else {
      fill(255);
    }
    noStroke();
    rect(x, y, barrasAncho, barrasAlto);
    Blanco = !Blanco;
  }
}

function IntensidadC(posX) {
  return map(posX, 400, 800, 0, 255);
}

function mousePressed() {
  if (!cambiarANegro) {
    cambiarANegro = true;
  }
}

function keyPressed() {
  if (key === 'r') {
    cambiarANegro = false;
  }
}
