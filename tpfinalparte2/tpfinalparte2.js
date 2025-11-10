let pntlJuego;

function setup(){
createCanvas(640,480);

pntlJuego = new Juego();
}
function draw(){
  image(fondo,0,0);
pntlJuego.dibujar();
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    pntlJuego.Jugador.moverJugador(-1);
  }
  if (keyCode === RIGHT_ARROW) {
    pntlJuego.Jugador.moverJugador(1);
  }

}
