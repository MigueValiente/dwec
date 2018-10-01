function concatenarCadenas(){
    //los numeros al ser concatenados se convierten en string
    let clase = "ALUMNO_";
    let x = "DAW_";
    let y = "2017";
    let resultado = `${clase}${x}${y}`;

    return resultado === "ALUMNO_DAW_2017";
}

function operadorTernario(){

    let x = 5;
    let y = 5;

    let resultado = (x === y)? "true" : "false";

    return resultado;

}

function deleteArray(){

    let array = [1,2,3,4,5,6,7,8,9,10];
    delete array[9];

    return array[9] === undefined;

}

function crearArray(){

    let x = [
        1.5,
        "ALUMNOS",
        new Date(),
        3,
        new Date(),
        ,
        null,
    ];
    

    return  x[0] ===  1.5
        && x[1] ===  "ALUMNOS"
        && x[2] instanceof Date
        && typeof x[3] === "number"
        && typeof x[4] === "object"
        && x[5] === undefined
        && x[6] === null;

}

function existeElemento(){

    let x = {};
    x["prueba1"] = "hola";
    x["prueba2"] = 3

    return "prueba1" in x && "prueba2" in x;

}

console.log(`Prueba concatenar cadenas: ${concatenarCadenas()}`);
console.log(`Prueba operador ternario: ${operadorTernario()}`);
console.log(`Prueba deleteArray: ${deleteArray()}`);
console.log(`Prueba crearArray: ${crearArray()}`);
console.log(`Prueba existeElemento: ${existeElemento()}`);