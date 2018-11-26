function crearForm(numeroDiv){
    let body = $(document.body);
    //Crea el numero de div introducido
    for (let i = 1; i <= numeroDiv; i++) {
        let div = $("<div></div>");
        let h1 = $("<h1></h1>");
        h1.text(`Div nº${i}`);
        div.append(h1);
        $(document.body).append(div);
    }
       //Crear los input
    let divs = $("body div");
    for (let i = 1; i <= divs.length; i++) {
        for (let j = 1; j <= i; j++) {
            let input = $("<input />");
            input.attr("id",`${i}_${j}`);
            input.attr("disabled","true");
            input.attr("value",`${i}.${j}`);
            if(j%2 === 0){
                input.addClass("par");
            }else{
                input.addClass("impar");
            }
            $(divs[i-1]).append(input)
            
        }
   }
   let botonP = $("<button></button>");
   botonP.text("Eliminar Pares");
   botonP.click(function(event){
    let pares = $("body .par");
        for (let i = 0; i < pares.length; i++) {
            pares[i].remove(); 
        }
   });
   $(document.body).append(botonP);

   let botonI = $("<button></button>");
   botonI.text("Eliminar Inputs");
   botonI.attr("data-div","7");
   botonI.click(function(event){
        borrarInputs($(event.target).attr("data-div"));
   });
   $(document.body).append(botonI);

   let texto = $("<input />");
   texto.attr("id","posicionInput");
   texto.attr("type", "text");

   let botonCambiar = $("<button></button>");
   botonCambiar.text("Cambiar Hermanos");
   botonCambiar.click(function(event){
    let posicion = $("#posicionInput").val().trim();
    let input = $(`input[value='${posicion}']`)
    let hIzquierda = input.prev("input");
    let hDerecha = input.next("input");
    if(input.hasClass("impar")){
        hIzquierda.removeClass("par");
        hDerecha.removeClass("par")
        hIzquierda.addClass("impar");
        hDerecha.addClass("impar")
    }else{
        hIzquierda.removeClass("impar");
        hDerecha.removeClass("impar")
        hIzquierda.addClass("par");
        hDerecha.addClass("par")
    }
   });


   $(document.body).append(texto,botonCambiar);
}

function borrarInputs(posicion){
    let div = $("body div").eq(posicion);
    div.find("input.impar").remove();
}

function cambiarClases(){
    let posicion = $("#posicionInput").val().trim();
    let input = $("body div").find(posicion);
    let hIzquierda = input.prev();
    let hDerecha = input.next();
    if(hIzquierda.hasClass("impar")){
        hIzquierda.removeClass("impar");
        hIzquierda.addClass("par");
        hDerecha.removeClass("par");
        hDerecha.addClass("impar");
    }else{
        hIzquierda.removeClass("par");
        hIzquierda.addClass("impar");
        hDerecha.removeClass("impar");
        hDerecha.addClass("par");
    }
}



function cambiarColores(){
    let inputs = document.body.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].className === "par"){
            inputs[i].className = "impar";
        }else if(inputs[i].className === "impar"){
            inputs[i].className = "par";
        }
    }
}   

function cambiarRosa(id){
    let input = document.getElementById(id);
    input.style.backgroundColor = "pink";

}

$(document).ready(
    function(){
        crearForm(10);
    }
);




