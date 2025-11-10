class Jugador{
   constructor(){
      this.posX = 290;
      this.posY = 300;
      this.Color = color(0,255,0);
      this.velocidad = 2
      this.moverJugador
      this.hitboxJugador = new HitboxJugador();
   }
   
   dibujar(){
 
     image(bodoni,this.posX, this.posY, 110, 190);

     this.hitboxJugador.dibujar(); 
     this.hitboxJugador.posX = this.posX;
  this.hitboxJugador.posY = this.posY + 190; // ajustar según tamaño del sprite

  this.hitboxJugador.dibujar();
   }
     mover() {
    if (this.x>width) {
      this.x=-this.tam;
    }
    this.x+=3;
  }
  moverJugador(direccion) {
  this.posX += direccion * this.velocidad;
}


    if (keyCode=RIGHT_ARROW) {
      this.posX++;
    }
  }
