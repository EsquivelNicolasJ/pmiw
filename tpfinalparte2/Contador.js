class contador{
  constructor(){
  this.posX = 10
  this.posY = 40
  this.Color = color(0,255,255);

  }
  dibujar(){
   stroke(5);
    fill(this.Color);
  rect(this.posX, this.posY, 120,30);
  }
  
}
