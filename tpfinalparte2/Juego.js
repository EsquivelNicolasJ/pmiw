class Juego {

    constructor() {
        this.crearJugador();
        this.crearObjetos();
        this.crearTiempo();
        this.crearContador();
    }

    dibujar() {
        this.Jugador.dibujar();

        
        this.objeto1.dibujar();
        this.objeto2.dibujar();
        this.objeto3.dibujar();

        this.tiempo.dibujar();
        this.contador.dibujar();
    }

    crearJugador() {
        this.Jugador = new Jugador();
    }

    crearObjetos() {
    this.objeto1 = new Objeto1(); 
    this.objeto2 = new Objeto2();
    this.objeto3 = new Objeto3();
}


    crearTiempo() {
        this.tiempo = new tiempo();
    }

    crearContador() {
        this.contador = new contador();
    }
}
