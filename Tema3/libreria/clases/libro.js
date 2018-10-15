class libro{

    constructor(titulo,ISBN,autor,fechaLanzamiento,genero,precio){
        this.titulo = titulo;
        this.ISBN = ISBN;
        this.autor = autor;
        this.fechaLanzamiento = fechaLanzamiento;
        this.genero = genero;
        this.precio = precio;
    }

    get titulo(){
        return `${this._titulo}`;
    }

    set titulo(titulo){
        this._titulo=titulo;
    }

    get ISBN(){
        return `${this._ISBN}`;
    }

    set ISBN(ISBN){
        this._ISBN=ISBN;
    }

    get autor(){
        return `${this._autor}`;
    }

    set autor(autor){
        this._autor=autor;
    }

    get fechaLanzamiento(){
        return `${this._fechaLanzamiento}`;
    }

    set fechaLanzamiento(fechaLanzamiento){
        this._fechaLanzamiento=fechaLanzamiento;
    }

    get genero(){
        return `${this._genero}`;
    }

    set genero(genero){
        this._genero=genero;
    }

    get precio(){
        return `${this._precio}`;
    }

    set precio(precio){
        this._precio=precio;
    }

}