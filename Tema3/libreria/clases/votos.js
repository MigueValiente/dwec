class votos{

    constructor(puntuacion,comentario,cliente,libro){
        this.puntuacion = puntuacion;
        this.comentario = comentario;
        this.cliente = cliente;
        this.libro = libro;
    }

    get puntuacion(){
        return `${this._puntuacion}`;
    }

    set puntuacion(puntuacion){
        this._puntuacion=puntuacion;
    }

    get comentario(){
        return `${this._comentario}`;
    }

    set comentario(comentario){
        this._comentario=comentario;
    }

    get cliente(){
        return `${this._cliente}`;
    }

    set cliente(cliente){
        this._cliente=cliente;
    }

    get libro(){
        return `${this._libro}`;
    }

    set libro(libro){
        this._libro=libro;
    }


}