// EJERCICIOS CON LOS OPERANDOS

function asignacionDeValoresSumar(){

    let x = 2;
    let y = 1;

    x += y;

    return x === 3;
}


function asignacionDeValoresRestar(){

    let x = 10;
    let y = 5;

    x -= y;

    return x === 5;
}

function asignacionDeValoresMultiplicacion(){

    let x = 7;
    let y = 5;

    x *= y;

    return x === 35;
}

function asignacionDeValoresResto(){

    let x = 5;
    let y = 2;

    x = x % y;

    return x === 1;
}

function comparacionIgualdad(){

    let x = undefined;
    let y = null;

    let resultado = x == y; 

    return resultado;
}

function comparacionIgualdadEstricto(){

    let x = undefined;
    let y = null;

    let resultado = x !== y;

    return resultado;
}

function compararcionMayorIgual(){

    let x = 6;
    let y = 6;

    let resultado = x >= y;

    return resultado;
}


function incremento(){

    let x = 0;

    while(x < 5){
        x++;
    }

    return x === 5;
}


function decremento(){

    let x = 10;

    while(x > 5){
        x--;
    }

    return x === 5;
}


function igualdadIncremento(){

    let x = 5;

    return x++ === 5;
}

function comparacionAND(){
    var x = true;
    var y = true;

    let resultado = x && y;

    return resultado;
}

function comparacionOR(){
    var x = false;
    var y = true;

    let resultado = x || y;

    return resultado;
}

function comparacionNOT(){
    var x = false;

    let resultado = !x;

    return resultado;
}
//debugger;
console.log(`Prueba sumar: ${asignacionDeValoresSumar()}`);
console.log(`Prueba restar: ${asignacionDeValoresRestar()}`);
console.log(`Prueba multiplicar: ${asignacionDeValoresMultiplicacion()}`);
console.log(`Prueba resto: ${asignacionDeValoresResto()}`);
console.log(`Prueba igualdad: ${comparacionIgualdad()}`);
console.log(`Prueba igualdad estricta: ${comparacionIgualdadEstricto()}`);
console.log(`Prueba mayorIgual: ${compararcionMayorIgual()}`);
console.log(`Prueba incremento: ${incremento()}`);
console.log(`Prueba decremento: ${decremento()}`);
console.log(`Prueba igualdadIncremento: ${igualdadIncremento()}`);
console.log(`Prueba AND: ${comparacionAND()}`);
console.log(`Prueba OR: ${comparacionOR()}`);
console.log(`Prueba NOT: ${comparacionNOT()}`);

