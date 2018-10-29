let comparar = (x,y) => {
    let res = 0;
    if(x>y){
        res = 1;
    }else if(y>x){
        res = -1;
    }
    return res;
};

function eliminarIguales(array1,array2){
    let arrayJuntos = array1.concat(array2);
    arrayJuntos.sort(comparar);
    let arrayRes = [];
    for (let i = 0; i < arrayJuntos.length; i++) {
        if(arrayJuntos[i] !== undefined){
            if(arrayJuntos[i] !== arrayJuntos[i+1] && arrayJuntos[i] !== arrayJuntos[i-1]){
            arrayRes.push(arrayJuntos[i]);
            }
        }
        
    }
    return arrayRes;
}

let a1 = [1,2,3,4];
let a2 = [3,2,6];

// console.log(eliminarIguales(a1,a2));


function invertir(array1,inicio,fin){
    let invertido = array1.slice(inicio,fin+1);
    invertido.reverse();
    let ini = array1.slice(0,inicio);
    let end = array1.slice(fin+1,array1.length);
    let nuevoArray = ini.concat(invertido,end);
    return nuevoArray;
}

let a3 = [5,6,10,15,20,25,30,40];
let a4 = [1,2,3,4,5,6,7,8,9,10];

console.log(invertir(a3,2,5));
console.log(invertir(a4,3,7));

// let numeros2 = [1,2,3,4,5,6,7,8,9,11,12,20,21,22];
// console.log(numeros2.sort());
// console.log(numeros2.sort(comparar));

// console.log(comparar(1,1));
// console.log(comparar(3,4));
// console.log(comparar(5,2));