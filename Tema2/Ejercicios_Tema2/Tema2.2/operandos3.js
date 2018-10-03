//Implementar las siguientes funciones para que pasen una serie de pruebas
//Usando solo estructuras de control para ello.

//Devuelves 1 si a es mayor que b
//Devuelves -1 si a es menor que b
//Devuelves 0 si a es igual b

function quienEsMayor(a,b){
    let resultado;
    if(comprobarNumero(a) && comprobarNumero(b)){
        resultado = 0;
        if(a < b){
            resultado = -1;   
        }else if(a > b){
            resultado = 1;
        }
    }else{
        resultado = `ERROR`;
    }

    return resultado;
    
}

//Dado un array de elementos, devuelve la suma de todos aquellos que los elementos sean pares
function sumarElementosPares(elementos){
    let suma = 0;
    if(elementos instanceof Array){
        for (let elemento of elementos) {
            if(comprobarNumero(elemento)){
                if(elemento%2 === 0)
                    suma+= elemento;
            }
        }
    }else{
        return `ERROR`;
    }
    return `La suma de los elementos pares es ${suma}`;
}

//Dado un array de elementos devuelve el valor mas grande de todos ellos.
function escogerValorMasGrande(elementos){
    if(elementos instanceof Array){
        if(elementos.length > 0){
            var numeroMax = Number.MIN_VALUE;    
            for (let elemento of elementos) {
                if(quienEsMayor(elemento,numeroMax) === 1){
                    numeroMax = elemento;
                }
            }
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
        for (let x of cadena) {
            cadenaInvertida = x+cadenaInvertida;
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
        for (let elemento of elementos) {
            if(comprobarNumero(elemento)){
                if(elemento%2 !== 0){
                    arrayImpares.push(elemento);
                }
            }
        }
    }else{
        return `ERROR`;
    }
    return `La cantidad de números impares es ${arrayImpares.length}`;
}

function comprobarNumero(x){
    if(typeof x === "number" && x !== Infinity && x >= Number.MIN_VALUE && x <= Number.MAX_VALUE){
        return true;
    }else{
        return false;
    }
}

let arrayPrueba = [1/0,undefined,null,2.5,"Prueba",4,5,6];

let x = (typeof 1/0);


function validarDNI(dni){
    let resultado = false;
    let numero = parseInt(dni.substr(0,8));
    let letra = dni.substr(8,1);
    if(typeof dni === "string"){
        if(dni.length === 9){
            if(!isNaN(numero) && typeof letra ==="string"){
                if(letra === calcularLetra(numero)){
                    resultado = true;
                }
            }
        }
    }
    return resultado;
}

function calcularLetra(numero){
    var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    let resto = numero%23;
    let letra = letras[resto];
    return letra;
}

console.log(`Resultado quienEsMayor: ${quienEsMayor(5,8)}`);
console.log(`Resultado sumarElementosPares: ${sumarElementosPares(arrayPrueba)}`);
console.log(`Resultado escogerValorMasGrande: ${escogerValorMasGrande(arrayPrueba)}`);
console.log(`Resultado invertirUnaPalabra: ${invertirUnaPalabra("Hola")}`);
console.log(`Resultado contarElementosImpares: ${contarElementosImpares(arrayPrueba)}`);
console.log(validarDNI("29518833N"));


