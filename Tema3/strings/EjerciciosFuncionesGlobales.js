function sumarValoresCadenas(frase){
    let resultado = 0;
    for(let palabra of frase.split(" ")){
        palabra = Number(palabra);
        if(!isNaN(palabra)){
            resultado += palabra;
        }
    }
    return resultado;
}


let frase = "Esto es 1 prueba. Mañana serán 2.";
console.log(sumarValoresCadenas(frase));