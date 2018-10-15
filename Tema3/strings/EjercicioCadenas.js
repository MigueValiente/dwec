let frase = "Este Es Él ejémplO";

function mayusMinus(frase){
    let fraseCambiada = "";
    for (let i = 0; i < frase.length; i++) {
        let letra = frase.charAt(i);
        if(letra === letra.toUpperCase()){
            fraseCambiada += letra.toLowerCase();
        }else{
            fraseCambiada += letra.toUpperCase();
        } 
    }
    return fraseCambiada;
}

function agregarCadena(frase,posicion,palabra){
    return frase[posicion+1].concat(palabra);
}



console.log(frase);
console.log(mayusMinus(frase));
console.log(agregarCadena(frase,5,"pepe"));