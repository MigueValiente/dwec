function comprobarExpresionRegular(expresion,input){
    let esCorrecto = false;
    if(expresion.test(input.value)){
        input.classList.remove("invalido");
        input.classList.add("valido");
        esCorrecto = true;
    }else{
        input.classList.add("invalido");
        input.classList.remove("valido");
    }
    return esCorrecto;
}

function comprobarNombreProyecto(inputNombreP){
    let expresion = /^[a-zA-Z]{2,}$/g;
    // let inputNombreP = null;
    // if(event === null || event === undefined){
    //     inputNombreP = document.getElementById("nombreP");
    // }else{
    //     inputNombreP = event.target;
    // }
    return comprobarExpresionRegular(expresion,inputNombreP);
}

function comprobarDuracion(inputDuracion){
    let valor = parseInt(inputDuracion.value);
    if(typeof(valor) === "number"){
        if(valor >= 6 && valor <= 24){
            inputDuracion.classList.remove("invalido");
            inputDuracion.classList.add("valido");
        }else{
            inputDuracion.classList.add("invalido");
            inputDuracion.classList.remove("valido");
        }
    }else{
        inputDuracion.classList.add("invalido");
        inputDuracion.classList.remove("valido");
    }
}

function comprobarNombreJefe(inputJefe){
    let expresion = /^[A-Z]{1}[a-z]{1,}\s[A-Z]{1}[a-z]{1,}$/g;
    return comprobarExpresionRegular(expresion,inputJefe);
}

function comprobarTipo(inputTipo){
    let expresion = /^[a-z]{1,}$/g;
    if(inputTipo.value !== ""){
        return comprobarExpresionRegular(expresion,inputTipo);
    }else{
        inputTipo.classList.add("invalido");
    }
    
}

function comprobarTerminos(inputTerminos){
    if(inputTerminos.checked){
        
    }else{
        alert("tienes que aceptar los terminos");
    }
}

function comprobarFormulario(event){
    event.preventDefault();
    esFormularioCorrecto = false;
    let esNombreProyectoCorrecto = comprobarNombreProyecto(document.getElementById("nombreP"));
    let esDuracionCorrecto = comprobarDuracion(document.getElementById("duracion"));
    let esNombreJefeCorrecta = comprobarNombreJefe(document.getElementById("jefe"));
    let esTipoCorrecto = comprobarTipo(document.getElementById("tipo"));
    let esTerminosCorrecto = comprobarTerminos(document.getElementById("terminos"));

    if(esNombreProyectoCorrecto && esDuracionCorrecto && esNombreJefeCorrecta && esTipoCorrecto && esTerminosCorrecto){
        esFormularioCorrecto = true;
        event.target.submit();
    }else{
        alert("EXISTEN ERRORES EN EL FORMULARIO");
    }

    return esFormularioCorrecto;
}


document.addEventListener("DOMContentLoaded", function(event) {
    //ASOCIANDO NOMBRE PROYECTO
    let inputNombreP = document.getElementById("nombreP");
    inputNombreP.addEventListener("change",function(event){comprobarNombreProyecto(event.target)});
    //ASOCIANDO DURACION
    let inputDuracion = document.getElementById("duracion");
    inputDuracion.addEventListener("change",function(event){comprobarDuracion(event.target)});
    //ASOCIANDO NOMBRE JEFE
    let inputNombreJefe = document.getElementById("jefe");
    inputNombreJefe.addEventListener("change",function(event){comprobarNombreJefe(event.target)});
    //ASOCIANDO TIPO PROYECTO
    let inputTipo = document.getElementById("tipo");
    inputTipo.addEventListener("change",function(event){comprobarTipo(event.target)});
    //ASOCIANDO TERMINOS
    let inputTerminos = document.getElementById("terminos");
    inputTerminos.addEventListener("change",function(event){comprobarTerminos(event.target)});

    console.log("Todavía queda el evento del formulario, asociado cuando se carga el DOM");
    //Comprobar que todos los datos del formulario estan bien
    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit",function(event){
        comprobarFormulario(event);
    });
});