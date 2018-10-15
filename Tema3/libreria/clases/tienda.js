class tienda{

    constructor(nombre,libros,direccion){
        this.nombre = nombre;
        this.libros = libros;
        this.direccion = direccion;
    }

    get nombre(){
        return `${this._nombre}`;
    }

    set nombre(nombre){
        this._nombre=nombre;
    }

    get libros(){
        return `${this._libros}`;
    }

    set libros(libros){
        this._libros=libros;
    }

    get direccion(){
        return `${this._direccion}`;
    }

    set direccion(direccion){
        this._direccion=direccion;
    }
}