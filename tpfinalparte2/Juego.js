class Juego {

    constructor() {
        this.crearJugador();
        this.crearObjetos();
        this.crearTiempo();
        this.crearContador();
    }

    dibujar() {
        this.Jugador.dibujar();

        // ✅ dibuja los objetos
        this.objetos[0].dibujar();
        this.objetos[1].dibujar();
        this.objetos[2].dibujar();

        this.tiempo.dibujar();
        this.contador.dibujar();
    }

    crearJugador() {
        this.Jugador = new Jugador();
    }

    crearObjetos() {
        this.objetos = [];

        // ✅ asignamos posiciones X diferentes para que no se superpongan
        this.objetos.push(new Objetos(objeto1, 150));
        this.objetos.push(new Objetos(objeto2, 250));
        this.objetos.push(new Objetos(objeto3, 350));
    }

    crearTiempo() {
        this.tiempo = new tiempo();
    }

    crearContador() {
        this.contador = new contador();
    }
}
