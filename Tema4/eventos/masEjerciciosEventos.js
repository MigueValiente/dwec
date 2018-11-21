let etiquetaBody = document.getElementById("cuerpo");
let etiquetaArchivo = document.getElementById("archivo");
let etiquetaBoton = document.getElementById("boton");

function posicionRaton(event){
    let x = event.pageX;
    let y = event.pageY;
    let h3X = document.getElementById("x");
    h3X.innerHTML = `${x}`;
    let h3Y = document.getElementById("y");
    h3Y.innerHTML=`${y}`;
}

etiquetaBody.addEventListener("mouseover",function(event){
    posicionRaton(event);
});

function teclaPulsada(event){
    let tecla = event.key;
    let p = document.getElementById("tecla");
    p.innerHTML = `Se ha pulsado la tecla ${tecla}`;
}

etiquetaBody.addEventListener("keypress",function(event){
    teclaPulsada(event);
});

function soltarArchivo(event){
    alert("Cuidao");
}

etiquetaArchivo.addEventListener("dragover",function(event){
    soltarArchivo(event);
});

function desactivarBotton(event){
    etiquetaBoton.disabled = true;
}

etiquetaBoton.addEventListener("click",function(event){
    desactivarBotton(event);
})