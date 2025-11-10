class tiempo{

constructor(){
 this.posX = 10;
  this.posY = 10;
  this.Color = color(255,0,255);

  }
  dibujar(){
    stroke(5);
  fill(this.Color);
  rect(this.posX, this.posY, 120,40);
  }
}
