//Una funcion que dado dos numeros, dividir el primero entre 3 y el segundo entre 4 hasta que nos de un entero, y sumar ambos resultados.

//Usa el codigo de la funcion principal para crear los dividores x e y
function creadorPrincipal(x,y){
    return function(a,b){
        let dividorX = crearDividor(x);
        let dividorY = crearDividor(y);
        let resultado  = dividorX(a)+dividorY(b);
        return resultado;
    }
}

function principal(a,b){
    let dividor3 = crearDividor(3);
    let dividor4 = crearDividor(4);
    let resultado  = dividor3(a)+dividor4(b);
    return resultado;
}

function crearDividor(x){
    function dividorX(y){
        if(y % x !== 0 || y === 0){
            return y;
        }else{
            return dividorX(y/x);
        } 
    }
    return dividorX;
}
let final = creadorPrincipal(3,4);
console.log(final(15,20));

// function dividir34(a,b){
//     let numero1 = a;
//     let numero2 = b;
//     let res1 = 0;
//     let res2 = 0;

//     while(numero1 % 3 === 0){
//         res1 = numero1/3;
//         numero1 = res1;
//     }

//     while(numero2 % 4 === 0){
//         res2 = numero2/4;
//         numero2 = res2;
//     }

//     if(res1 === 0){
//         res1 = numero1;
//     }

//     if(res2 === 0){
//         res2 = numero2;
//     }

//     return (res1+res2);
// }

// function dividir3Recursivo(a){
//     let numero = a;
//     if(numero % 3 !== 0 || a === 0){
//         return a;
//     }else{
//         return dividir3Recursivo(a/3);
//     }
// }
// function dividir4Recursivo(b){
//     let numero = b;
//     if(numero % 3 !== 0 || b === 0){
//         return b;
//     }else{
//         return dividir3Recursivo(b/3);
//     }
// }