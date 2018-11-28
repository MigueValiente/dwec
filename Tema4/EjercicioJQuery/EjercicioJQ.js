let formulario = $("#formulario");
let nombre = $("#nombre");
let apellidos = $("#apellidos");
let edad = $("#edad");
// let nombreV = $("#nombre").val();
// let apellidosV = $("#apellidos").val();
// let edadV = $("#edad").val();


function validarNombre(){
    let errores = [];
    let expresion = /^[a-zA-Z]{3,}$/g;
    if(nombre.val().length === 0){
        errores.push("El nombre no puede esatr vacio.");
    }

    if(!expresion.test(nombre.val())){
        errores.push("El nombre debe tener minimo 3 caracteres.");
    }
    return errores;
}

function validarApellidos(){
    let errores = [];
    let expresion = /^([a-zA-Z]{3,}[\s])+([a-zA-Z]{3,})$/g;
    if(apellidos.val().length === 0){
        errores.push("Los apellidos no pueden estar vacios.");
    }

    if(!expresion.test(apellidos.val())){
        errores.push("Los apellidos deben tener minimo 3 caracteres cada uno y 1 espacio.");
    }
    return errores;
}

function validarEdad(){
    let errores = [];
    let expresion = /^[0-9]+$/g;
    if(edad.val() === null){
        errores.push("La edad no puede estar vacia.");
    }
    if(edad.val() < 18){
        errores.push("Debe tener más de 18 años.");
    }
    return errores;
}


function marcarInputErroneo(input,errores){
    input.removeClass("valido");
    input.addClass("invalido");
    errores.forEach( error => {
        input.next(".errores").append(error);
    });
}

function marcarInputCorrecto(input){
    input.removeClass("invalido");
    input.addClass("valido");
}

function validarCampo(input,funcionValidacion){
    let correcto = false;
    input.next(".errores").empty();
    let errores = funcionValidacion();

    if(errores.length > 0){
        marcarInputErroneo(input,errores);
    }else{
        correcto = true;
        marcarInputCorrecto(input);
    }
    return correcto;
}



$(document).ready(function(){
    $("#formulario").submit(
        function(event){
            event.preventDefault();
            $("#submit").disabled = true ;

            $("#spinner").show(500,function(){
                $("#submit").removeAttr("disabled");
            })
            let errores = [];
            errores.push(validarCampo(nombre,validarNombre));
            errores.push(validarCampo(apellidos,validarApellidos));
            errores.push(validarCampo(edad,validarEdad));

            if(errores.some(x => !x)){
                $("#alert").show(100);
                $("#spinner").hide();
            }else{
                $("#alert").hide();
                formulario.submit();
            }

            $("#spinner").hide();    
        }
    );

    nombre.keypress(function(){
        validarCampo(nombre,validarNombre)
    });

    nombre.change(function(){
            validarCampo(nombre,validarNombre)
    })

    apellidos.keypress(function(){
        validarCampo(apellidos,validarApellidos)
    });
    
    apellidos.change(function(){
        validarCampo(apellidos,validarApellidos)
    });

    edad.keypress(function(){
        validarCampo(edad,validarEdad)
    });

    edad.change(function(){
        validarCampo(edad,validarEdad)
    });


    
    }
)