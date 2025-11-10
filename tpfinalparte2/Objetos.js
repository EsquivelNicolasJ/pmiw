class Objeto1 {
  constructor() {
    this.posX = random(150, 250); 
    this.posY = 0;
    this.tamX = 52;
    this.tamY = 43;
    this.velocidad = random(2, 5);
    this.imagen = objeto1;

    this.crearHitboxObjetos();
  }

  caida() {
    this.posY += this.velocidad;

    if (this.posY > height) {
      this.posY = 0;
      this.posX = random(150, 250); 
      this.velocidad = random(2, 5); 
    }
  }

  dibujar() {
    this.caida();
    image(this.imagen, this.posX, this.posY, this.tamX, this.tamY);
    this.hitboxObjetos.dibujar(this.posX, this.posY, this.tamX, this.tamY);
  }

  crearHitboxObjetos() {
    this.hitboxObjetos = new HitboxObjetos();
  }
}


class Objeto2 {
  constructor() {
    this.posX = random(260, 360); 
    this.posY = 0;
    this.tamX = 52;
    this.tamY = 43;
    this.velocidad = random(2, 5);
    this.imagen = objeto2;

    this.crearHitboxObjetos();
  }

  caida() {
    this.posY += this.velocidad;

    if (this.posY > height) {
      this.posY = 0;
      this.posX = random(260, 360);
      this.velocidad = random(2, 5);
    }
  }

  dibujar() {
    this.caida();
    image(this.imagen, this.posX, this.posY, this.tamX, this.tamY);
    this.hitboxObjetos.dibujar(this.posX, this.posY, this.tamX, this.tamY);
  }

  crearHitboxObjetos() {
    this.hitboxObjetos = new HitboxObjetos();
  }
}


class Objeto3 {
  constructor() {
    this.posX = random(370, 470); 
    this.posY = 0;
    this.tamX = 52;
    this.tamY = 43;
    this.velocidad = random(2, 5);
    this.imagen = objeto3;

    this.crearHitboxObjetos();
  }

  caida() {
    this.posY += this.velocidad;

    if (this.posY > height) {
      this.posY = 0;
      this.posX = random(370, 470);
      this.velocidad = random(2, 5);
    }
  }

  dibujar() {
    this.caida();
    image(this.imagen, this.posX, this.posY, this.tamX, this.tamY);
    this.hitboxObjetos.dibujar(this.posX, this.posY, this.tamX, this.tamY);
  }

  crearHitboxObjetos() {
    this.hitboxObjetos = new HitboxObjetos();
  }
}
