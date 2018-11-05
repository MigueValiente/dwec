function mostrarNombre(){
    let inputNombre = document.getElementById("nombre");
    console.log(inputNombre.value);
}

function mostrarNombre2(){
    let inputNombre = document.getElementsByName("pepito");
    // for (let i of inputNombre) {
    //     console.log(i.value);
    // }
    // for (let i = 0; i < inputNombre.length; i++) {
    //     console.log(inputNombre[i].value);
    // }
    inputNombre.forEach(element => {
        console.log(element.value);
    });
}

function mostrarDatos(){
    let inputNombre = document.querySelectorAll("input[name=pepito]");
    inputNombre.forEach(element => {
        console.log(element.value);
    });
}