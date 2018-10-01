//Implementar las siguientes funciones para que pasen una serie de pruebas
//Usando solo estructuras de control para ello.

//Devuelves 1 si a es mayor que b
//Devuelves -1 si a es menor que b
//Devuelves 0 si a es igual b

function quienEsMayor(a,b){
    let resultado;
    if(typeof a === "number" && typeof b === "number"){
        resultado = 0;
        if(a < b){
            resultado = -1   
        }else if(a > b){
            resultado = 1
        }
    }else{
        resultado = "ERROR";
    }

    return resultado;
    
}

//Dado un array de elementos, devuelve la suma de todos aquellos que los elementos sean pares
function sumarElementosPares(elemetos){
    let suma = 0;
    if(elemetos instanceof Array){
        for (let i = 0; i < elemetos.length; i++) {
            if(elemetos[i]%2 === 0)
                suma+= elemetos[i];
        }
    }else{
        return `ERROR`;
    }
    return `La suma de los elementos pares es ${suma}`;
}

//Dado un array de elementos devuelve el valor mas grande de todos ellos.
function escogerValorMasGrande(elementos){
    let numeroMax = Number.MIN_VALUE;
    if(elementos instanceof Array){
        for (let i = 0; i < elementos.length; i++) {
            if(elementos[i] > numeroMax)
                numeroMax = elementos[i];
        }
    }else{
        return `ERROR`;
    }
    return `El número más grande es ${numeroMax}`;


}

//Dada una palabra cualquier, devuelve la palabra alreves, por ejemplo: "HOLA" => "ALOH"
function invertirUnaPalabra(cadena){
    let cadenaInvertida = "";
    if (typeof cadena === "string") {
        for (let i = cadena.length-1; i >= 0; i--) {
            cadenaInvertida += cadena[i];
        }
    }else{
        return `ERROR`;
    }
    return `La inversión de la cadena es ${cadenaInvertida}`;
}

//Dada un array, cuenta el numero de elementos impares que contiene
function contarElementosImpares(elementos){
    let arrayImpares = [];
    if(elementos instanceof Array){
        for (let i = 0; i < elementos.length; i++) {
            if(elementos[i]%2 !== 0)
                arrayImpares.push(elementos[i]);
        }
    }else{
        return `ERROR`;
    }
    return `La cantidad de números impares es ${arrayImpares.length}`;
}

let arrayPrueba = [1/0,undefined,null,2.5,"Prueba",4,5,6];

console.log(`Resultado quienEsMayor: ${quienEsMayor("d",2)}`);
console.log(`Resultado sumarElementosPares: ${sumarElementosPares(arrayPrueba)}`);
console.log(`Resultado escogerValorMasGrande: ${escogerValorMasGrande(arrayPrueba)}`);
console.log(`Resultado invertirUnaPalabra: ${invertirUnaPalabra("Hola")}`);
console.log(`Resultado contarElementosImpares: ${contarElementosImpares(arrayPrueba)}`);


