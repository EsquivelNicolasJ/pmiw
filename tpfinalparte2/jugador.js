class Jugador {
  constructor(){
    this.posX = 290;
    this.posY = 300;
    this.tamX = 110;
    this.tamY = 190;
    this.velocidad = 5;

    this.hitboxJugador = new HitboxJugador();
  }
   
  dibujar(){
    
    image(bodoni, this.posX, this.posY, this.tamX, this.tamY);
    this.hitboxJugador.posX = this.posX + this.tamX / 2 - this.hitboxJugador.tamX / 2;
    this.hitboxJugador.dibujar();
  }

}
