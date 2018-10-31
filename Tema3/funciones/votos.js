class votos{

    constructor(num){
        this.num = num;
    }
}


function mayorQue4(votos){
    return votos.some(x => x.num > 4);
}

function incrementarEn1(votos){
    votos.forEach(x => x.num++);
}

function votosNegativos(votos){
    return votos.map(x => x.num = -x.num);
}

function mediaVotos(votos){
    let suma = votos.reduce(sumar);
    let media = suma/votos.length;
    return media;
}

function mayorVoto(votos){
    let votoMayor= votos.reduceRight(comparar);
    return votoMayor
}

function sumar(total,voto){
    let t = undefined;
    if(typeof(total) === "object"){
        t = total.num; 
    }else{
        t = total;
    }
    return t + voto.num;
}

function comparar(voto1,voto2){
    let t = undefined;

    if(voto1.num > voto2.num){
        t = voto1;
    }else{
        t = voto2;
    }
    
    return t;
}

let v1 = new votos(1);
let v2 = new votos(5);
let v3 = new votos(3);
let v4 = new votos(2);
let v5 = new votos(4);

let v6 = new votos(1);
let v7 = new votos(5);
let v8 = new votos(3);
let v9 = new votos(2);
let v10 = new votos(4);

let puntuaciones = [v1,v2,v3,v4,v5];
let puntuaciones2 =[v6,v7,v8,v9,v10];

console.log("Funcion mayor que 4");
console.log(mayorQue4(puntuaciones));
console.log("Funcion incrementar en 1");
incrementarEn1(puntuaciones2);
console.log(puntuaciones2);
// console.log("Funcion votos negativos");
// console.log(votosNegativos(puntuaciones));
console.log("Funcion media");
console.log(mediaVotos(puntuaciones));
console.log("Funcion mayor voto");
console.log(mayorVoto(puntuaciones));