function comprobarNombre(nombre){
    mensaje = "";
    if(nombre.match(/(^([A-ZÁÉÍÓÚ]{1}[a-záéíóú]{2,})(\s[A-ZÁÉÍÓÚ]{1}[a-záéíóú]{2,})*)$/g) !== null){
        mensaje = "El nombre es correcto.";
    }else{
        mensaje = "El nombre no es correcto";
    }
    return mensaje;
}

function comprobarTelefono(telefono){
    mensaje = "";
    if(telefono.match(/(^([67]{1}[0-9]{8}))$/) !== null){
        mensaje = "El telefono es correcto.";
    }else{
        mensaje = "El telefono es incorrecto";
    }
    return mensaje;
}

function comprobarEmail(email){
    mensaje = "";
    if(email.match(/^[a-zA-Z0-9_]{5,}@[a-z]{5,}(\.[a-z]{2,})*\.es$/) !== null){
        mensaje = "El email es correcto.";
    }else{
        mensaje = "El email es incorrecto";
    }
    return mensaje;
}

function contarPalabras(frase,palabra){
    let contador = 0;
    let expr = new RegExp(`(\\s+${palabra}\\s+\\W)`,'g');
    console.log(expr);
    let res = frase.match(expr);
    if(res !== null){
        contador = res.length;
    }else{
        let mensaje = "No se ha encontrado la palabra en la frase.";
        return mensaje;
    }
    return `La palabra ${palabra} se ha repetido ${contador} veces.`;
}

// console.log(comprobarNombre("Manolo Perez"));
// console.log(comprobarTelefono("642543545"));
// console.log(comprobarTelefono("744383545"));
// console.log(comprobarTelefono("542596790"));
// console.log(comprobarEmail("miguevaliente96_@gamial.es"));
console.log(contarPalabras("De estoy cansado de esta clase de nade cliente, denada","de"));