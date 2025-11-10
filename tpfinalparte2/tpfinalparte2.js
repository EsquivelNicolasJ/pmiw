let pntlJuego;

function setup() {
  createCanvas(640, 480);
  pntlJuego = new Juego();
}

function draw() {
  image(fondo, 0, 0);
  pntlJuego.dibujar();
}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    pntlJuego.Jugador.posX -= pntlJuego.Jugador.velocidad;
  }
  if (keyCode === RIGHT_ARROW) {
    pntlJuego.Jugador.posX += pntlJuego.Jugador.velocidad;
  }

 
  if (pntlJuego.Jugador.posX < 0) pntlJuego.Jugador.posX = 0;
  if (pntlJuego.Jugador.posX + pntlJuego.Jugador.tamX > width) {
    pntlJuego.Jugador.posX = width - pntlJuego.Jugador.tamX;
  }
}
