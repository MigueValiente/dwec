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

        aplicarFiltro(valor);
    });
}

function mostrarLigas(){
    let contenedor = document.getElementById("contendorLigas");
    contenedor.innerHTML = Liga1.toString();
    contenedor.innerHTML += Liga2.toString();
}

function aplicarFiltro(valor){
    let contenedor = document.getElementById("contendorResultados");
        contenedor.innerHTML = "";
        
    for (let i = 0; i < arrayLigas.length; i++) {
        for (let j = 0; j < arrayLigas[i].equipos.length; j++) {
            if(arrayLigas[i].equipos[j].nombre.includes(valor)){
                contenedor.innerHTML += arrayEquipos[i].toString();
            } 
            
        }
        
    }
}

