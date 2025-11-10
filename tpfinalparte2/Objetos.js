class Objetos {
  constructor(img){
    this.posX = random(150, width - 50); 
    this.posY = 0;                 
    this.tamX = 52;
    this.tamY = 43;
    this.Color = color(255, 0, 0);
    this.velocidad = random(2,5);

    // ✅ imagen única para este objeto
    this.imagen = img;

    this.crearHitboxObjetos(); 
  }

  caida(){
    this.posY += this.velocidad;

    if(this.posY > height){
      this.posY = 0;
      this.posX = random(150, width - 50);
      this.velocidad = random(2,5);
    }
  }

  dibujar(){
    this.caida();

    // ✅ dibuja el objeto con su imagen asignada
    image(this.imagen, this.posX, this.posY, this.tamX, this.tamY);

    // ✅ dibuja hitbox
    this.hitboxObjetos.dibujar();
  }

  crearHitboxObjetos(){
    this.hitboxObjetos = new HitboxObjetos();
    this.hitboxObjetos.obj = this; 
  }
}
