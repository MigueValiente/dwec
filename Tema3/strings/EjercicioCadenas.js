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
    return frase.slice(0,posicion).concat(palabra,frase.slice(posicion,frase.length));
}

function sacarPalabras(frase,numeroPalabras){
    let nuevaFrase = "";
    for (let palabra of frase.split(" ",numeroPalabras)) {
        nuevaFrase += `${palabra} `;
    }
    return nuevaFrase;
}



console.log(frase);
console.log(mayusMinus(frase));
console.log(agregarCadena(frase,5,"pepe"));
console.log(sacarPalabras(frase,3));