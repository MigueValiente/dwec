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
        if(palabra != " "){
            nuevaFrase += `${palabra} `;
        }
    }
    return nuevaFrase;
}


function quitarLetrasDividir(cadena1,cadena2){
    let dividendo = "";
    let divisor = "";
    let resultado = 0;

    let expr = new RegExp(`[0-9]+`,`g`);

    let numerosCadena1 = cadena1.match(expr);
    let numerosCadena2 = cadena2.match(expr);

    for (let numero of numerosCadena1) {
        dividendo += numero;
    }

    for (let numero of numerosCadena2) {
        divisor += numero;
    }

    resultado = parseInt(dividendo)/parseInt(divisor);

    try{
       if(!isFinite(resultado)){
        throw new Error("El número es infinito.");
       }
    }catch(err){
        console.log(err.message);
    }

    return resultado;
    
}

function quitarLetrasDividirF(cadena1,cadena2){
    let dividendo = 0;
    let divisor = 0;
    let resultado = 0;

    let expr = new RegExp(`([0-9]+.[0-9]+)|([0-9]+)`,`g`);

    let numerosCadena1 = cadena1.match(expr);
    let numerosCadena2 = cadena2.match(expr);

    for (let numero of numerosCadena1) {
        dividendo += Number(numero);
    }

    for (let numero of numerosCadena2) {
        divisor += Number(numero);
    }

    resultado = parseFloat(dividendo)/parseFloat(divisor);

    try{
       if(!isFinite(resultado)){
        throw new Error("El número es infinito.");
       }
    }catch(err){
        console.log(err.message);
    }

    return resultado;
    
}



// console.log(frase);
// console.log(mayusMinus(frase));
// console.log(agregarCadena(frase,5,"pepe"));
// console.log(sacarPalabras(frase,3));
//console.log(quitarLetrasDividir("Hol4 Mund15","Adi2os"));
console.log(quitarLetrasDividirF("Hol4.5 Mu2nd1.5","Adi3.2os1.8"));