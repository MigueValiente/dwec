class liga{

    constructor(nombre,temporada){
        this.nombre = nombre;
        this.temporada = temporada;
        this.equipos = [];
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get temporada(){
        return this._temporada;
    }

    set temporada(temporada){
        this._temporada = temporada;
    }

    get equipos(){
        return this._equipos;
    }

    set equipos(equipos){
        this._equipos = equipos;
    }

    agregarEquipo(equipo) {
        this._equipos.push(equipo);
    }

    toString(){
        let salto = '<br/>';
        let resultado = "";
        resultado = `${this.nombre}${salto}`;
        resultado += `Temporada ${this.temporada}${salto}`;
        resultado += '<ul>';
        this.equipos.forEach(equipo => {
            resultado += `<li>${equipo.toString()}</li>`;
        });
        resultado += '</ul>';
        return resultado;
    }

    
    
}

class equipo{

    constructor(nombre,ciudad){
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.jugadores = [];
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get ciudad(){
        return this._ciudad;
    }

    set ciudad(ciudad){
        this._ciudad = ciudad;
    }

    get jugadores(){
        return this._jugadores;
    }

    set jugadores(jugadores){
        this._jugadores = jugadores;
    }

    agregarJugador(jugador){
        this.jugadores.push(jugador);
    }

    toString(){
        let salto = '<br/>';
        let resultado = "";
        resultado = `Equipo: ${this.nombre}${salto}`;
        resultado += `Ciudad: ${this.ciudad}${salto}`;
        resultado += '<ul>';
        this.jugadores.forEach(jugador => {
            resultado += `<li>${jugador.nombre}</li>`;
        });
        resultado += '</ul>';
        return resultado;
    }
}

class jugador{

    constructor(nombre){
        this.nombre = nombre;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    toString(){
        return this.nombre;
    }
}