//PARA INCLUIR COMENTARIOS
/*
*  PARA INCLUIR VARIAS LINEAS DE COMENTARIOS
*
* */


//ESTE SCRIPT ES PARA PRACTICAR LAS DECLARACIONES DE VARIABLES

///esta funcion hay que corregirla para poder porbar las demas

//Primera prueba
function corregirDeclaraciones(){
    var funcion = new Object();
    var ejemplo = "EJEMPLO";
    var prueba123 = 123;
    var pruebaEjemplo = "EJERCICIO";
    var prueba = "PRUEBA";
    var prueba = "PRUEBA";

    return true;
}

//Segunda prueba
function declararNumeros(){
    let numA = 5;
    let numB = 2;
    
    return typeof numA === "number"
       && typeof numB === "number"
       && numA > numB;
}

//Tercera prueba
function declararString(){
    let cadena = "PRuEbA";

    return cadena === "PRuEbA"
        && typeof cadena === "string";
}

//Cuarta prueba
function noDefinido(){
    var x = undefined;
    var y = null;
    return x === undefined
        && y === null;
}

//Quinta prueba
function declararSymbol(){
    let x = Symbol("symbol");
    return typeof x === "symbol";
}

//Sexta prueba
function declararFecha(){
    let hoy = new Date();
    return hoy instanceof Date;

}

//Septima prueba
function declararExpresionRegular(){
    let expresion = new RegExp();
    return expresion instanceof RegExp;
}

//Octava prueba
function declararFuncion(){
    let funcion = function(){};
    return funcion instanceof Function;
}


//Novena prueba
function declararObjeto(){
    class ObjetoPrueba{};
    let objeto = new ObjetoPrueba();
    return objeto instanceof ObjetoPrueba;
}

//Decima prueba
function declararArray(){
    let lista = ["Mal","Mal","Mal","Mal","Correcto"];

    return lista instanceof Array
            && lista.length === 5
            && lista[4] === "Correcto";

}

//Undecima prueba
function declararArrayTipo(){
    let listaEnteros = new Int32Array(10);
    return listaEnteros instanceof Int32Array
            && listaEnteros.length === 10;

}


//Duodecima prueba
function declararVariableGlobal(){
    window.x = "SOY gLOBAL";

    return window.x
            && x === "SOY gLOBAL"
        ;

}

//Prueba 13
function declararPrototipo(){
    let prototipo = function(cadena){
        this.cadena = cadena;
    }

    var objeto = new prototipo("ejemplo");


    return objeto.__proto__ === prototipo.prototype

}

//Prueba 14
function declaracionConRetraso(){
    var y = 35;
    var resultado = y === 35;

    return resultado;
}

//Prueba 15
function declaracionLet(){
    let x = 2;
    let y = "";
    if(x > 1){
         y = "bien";
    }
    return y === "bien";
}

//Prueba 16
function declaracionConst(){
    const valor = 30;
    // valor += 20;
    // valor = 30;
    return valor === 30;
}

console.log("Primera prueba: "+corregirDeclaraciones());
console.log("Segunda prueba: "+declararNumeros());
console.log("Tercera prueba: "+declararString());
console.log("Cuarta prueba: "+noDefinido());
console.log("Quinta prueba: "+declararSymbol());
console.log("Sexta prueba: "+declararFecha());
console.log("Septima prueba: "+declararExpresionRegular());
console.log("Octava prueba: "+declararFuncion());
console.log("Novena prueba: "+declararObjeto());
console.log("Decima prueba: "+declararArray());
console.log("Undecima prueba: "+declararArrayTipo());
console.log("Duodecima prueba: "+declararVariableGlobal());
console.log("Treceava prueba: "+declararPrototipo());
console.log("Catorceava prueba: "+declaracionConRetraso());
console.log("Decimoquinta prueba: "+declaracionLet());
console.log("decimosexta prueba: "+declaracionConst());


