class CocheVacio{

}

class Vehiculo{
    constructor(matricula,modelo,marca){
        this.matricula=matricula;
        this.modelo=modelo;
        this.marca=marca;
    }

    mostrarVehiculo(vehiculo){
        return `El vehiculo con matricula ${vehiculo.matricula} es de la marca ${vehiculo.marca} y es del modelo ${vehiculo.modelo}`;
    }

    get matricula(){
        return `VG: ${this._matricula}`;
    }

    set matricula(matricula){
        this._matricula=matricula;
    }

    get marca(){
        return `VG: ${this._marca}`;
    }

    set marca(marca){
        this._marca=marca;
    }

    get modelo(){
        return `VG: ${this._modelo}`;
    }

    set modelo(modelo){
        this._modelo=modelo;
    }

    toString(){
        return `Matricula: ${this.matricula}\nMarca: ${this.marca}\nModelo: ${this.modelo}`;
    }

}

class Coche extends Vehiculo{

    constructor(matricula,modelo,marca,ruedas){
        super(matricula,modelo,marca);
        this.ruedas = ruedas;
    }

    get matricula(){
        return `C: ${this._matricula}`;
    }

    set matricula(matricula){
        this._matricula=matricula;
    }

    get marca(){
        return `C: ${this._marca}`;
    }

    set marca(marca){
        this._marca=marca;
    }

    get modelo(){
        return `C: ${this._modelo}`;
    }

    set modelo(modelo){
        this._modelo=modelo;
    }

    get ruedas(){
        return `C: ${this._ruedas}`
    }

    set ruedas(ruedas){
        this._ruedas=ruedas;
    }

    toString(){
        return `Matricula: ${this.matricula}\nMarca: ${this.marca}\nModelo: ${this.modelo}\nRuedas: ${this.ruedas}`;
    }
    
}

let vehiculo1 = new Vehiculo("54153-WED","Boing-747","Avion");

let citroen = new Coche("21412-DPP","C3","Citroen",2);
let renault = new Coche("31235-NFA","Megane","Renault",2);
let ford = new Coche("93479-IUW","Fiesta","Ford",2);

citroen.modelo = "TuPuT4m4Dr3";
ford['marca']="Chevrolet";

// citroen.prueba = "PRUEBA";
// citroen.funcion = function(){};


// for(let prop in citroen){
//     console.log(`${prop}:${citroen[prop]}`);
// }



// console.log(Coche.mostrarCoche(citroen));
// console.log(Coche.mostrarCoche(renault));
// console.log(Coche.mostrarCoche(ford));
// console.log(citroen);
// console.log(citroen.toString);
// console.log(citroen.toString());
// console.log(""+citroen);
// console.log(""+citroen.toString);
// console.log(""+citroen.toString());