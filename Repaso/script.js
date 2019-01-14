document.addEventListener("DOMContentLoaded", function(event) { 
    
    crearInput();
    mostrarLigas();
});

function crearInput(){
    let contedorInput = document.getElementById("contenedorInputs");
    let inputText = document.createElement("input");
    inputText.setAttribute("type","text");
    inputText.setAttribute("placeholder","Escriba un equipo...");
    inputText.id = "inputEquipo";
    contedorInput.appendChild(inputText);
    
    inputText.addEventListener("change",function(event){
        
        let valor = event.target.value;
        valor = valor.trim();
        
        // aplicarFiltro(valor);
        validarInput(event.target,valor);
    });
}

function validarInput(input,valor){
    let expresion1 = /^[A-Za-z]+$/;
    let expresion2 = /^[A-Z]+$/;
    
    let esCorrectoTodoLetras = expresion1.test(valor);
    let esCorrectoTodoMayusculas = expresion2.test(valor);
    let esCorrectoTamano = valor.length >= 5;

    let divConErrores = document.getElementById("divErroresInput");
    if(divConErrores === null){
        divConErrores = document.createElement('div');
        divConErrores.id = "divErroresInput";
    }else{
        divConErrores.innerHTML = "";
    }

   input.parentNode.insertBefore(divConErrores,input.nextSibling);

    if(!esCorrectoTodoLetras){
        let span = document.createElement('span');
        span.style.color = "red";
        span.innerHTML = "Solo se permiten letras.<br>";
        divConErrores.appendChild(span);
    }

    if(!esCorrectoTodoMayusculas){
        let span = document.createElement('span');
        span.style.color = "red";
        span.innerHTML = "Solo se permiten letras Mayusculas.<br>";
        divConErrores.appendChild(span);
    }

    if(!esCorrectoTamano){
        let span = document.createElement('span');
        span.style.color = "red";
        span.innerHTML = "Debe tener más de 5 caracteres.<br>";
        divConErrores.appendChild(span);
    }

   input.style.border = "";

    if(divConErrores.innerHTML === ""){
       input.style.border = "solid green 1px";
       aplicarFiltro(valor);
    }else{
       input.style.border = "solid red 1px";
    }
}

function mostrarLigas(){
    let contenedor = document.getElementById("contendorLigas");
    contenedor.innerHTML = Liga1.toString();
    contenedor.innerHTML += Liga2.toString();
}

function mostrarEquipo(equipo,div, valor){
    if(equipo.nombre.toUpperCase().includes(valor.toUpperCase())){
        div.innerHTML += equipo.toString();
    }
}

function aplicarFiltro(valor){
    let contenedor = document.getElementById("contendorResultados");
    contenedor.innerHTML = "";

    arrayLigas.forEach(liga => liga.equipos.forEach(equipo => mostrarEquipo(equipo,contenedor,valor)))
}

