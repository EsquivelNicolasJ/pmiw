class HitboxJugador {
  constructor(){
    this.posX = 320;
    this.posY = 410;
    this.Color = color(25,70);
  }

  dibujar(){ 
    noStroke();
    fill(this.Color);
    rect(this.posX, this.posY, 48, 30);
  }
}
