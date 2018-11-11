class voto{

    constructor(bool){
        this.bool = bool; 
    }
}


let v1 = new voto(true);
let v2 = new voto(false);
let v3 = new voto(false);
let v4 = new voto(true);
let v5 = new voto(false);

let votos = [v1,v2,v3,v4,v5];


let cadenas = ["Hola","esto","es ","un a","pr ueba"];

function hayEspacios(cadena){
    return !/([\s])/.test(cadena);
}

console.log(cadenas.find(x => !/([\s])/.test(x)));

// console.log(votos.filter(x => x.bool === true));