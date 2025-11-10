class HitboxObjetos {
  constructor(){
    this.posX = 0;
    this.posY = 0;
    this.tamX = 52;
    this.tamY = 43;
    this.Color = color(255,0,0,50);
  }

  dibujar(){
    // ✅ centrar rect dentro del objeto
    this.posX = this.obj.posX + this.obj.tamX/2 - this.tamX/2;
    this.posY = this.obj.posY + this.obj.tamY/2 - this.tamY/2;

    fill(this.Color);
    rect(this.posX, this.posY, this.tamX, this.tamY);
  }
}
