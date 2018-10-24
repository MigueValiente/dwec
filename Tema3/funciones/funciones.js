// console.log(sumarNumeros(5,10));

// function sumarNumeros(x, y) {
// return x +y;
// }

// let sumarNumeros= function(x, y) {
// return x +y;
// }

// console.log(sumarNumeros());

let prueba2 = function (x){
    return `Hola ${x}`;
}

console.log(prueba2("Pepe"));

function fibonacci(num){
    if (num <= 2) {
        return 1;
    }
    return fibonacci(num-1)+fibonacci(num-2);
}

console.log(fibonacci(5));

function multiply(a, b=5){
    return a*b;
}

console.log(multiply(5));


function multiply(multiplicador, ...valores){
    let i = 0;
    console.log(arguments);
    for(i = 0;i < valores.length; i++){
        valores[i] = valores[i] *multiplicador;}
        return valores;
    }
    var arr= multiply(2, 1, "Pepe", 3);
    console.log(arr); // [2, 4, 6]