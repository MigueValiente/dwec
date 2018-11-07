// 1.Crear un formulario
// 2.Crear 10 div dentro del formulario
// 3.Cada div tiene el mismo numero de inputs que su posicion
// 4.Cada input en posicion par es de color rojo y el impar verde
// 5.Cada input un id distinto y el valor representa su posicion
// 6.Crear un boton dentro del formulario 

function crearForm(numeroDiv){
    //Crea el formulario
   let form = document.createElement("form");
   form.id = "form1";
   form.name = "formulario";
   form.method = "POST";
    //Crea el numero de div introducido
   for (let i = 1; i <= numeroDiv; i++) {
       let d = document.createElement("div");
       //Crear los input
       for (let j = 1; j <= i; j++) {
           let input = document.createElement("input");
           input.type = "text";
           input.id = `${i}.${j}`;
           input.value = `${i}.${j}`;
           input.autocomplete = "off";
           input.setAttribute("onmouseover","cambiarRosa("+input.id+")");
           if(j%2 === 0){
               input.className = "par";
           }else{
               input.className = "impar";
           }
           d.appendChild(input);
       }
       form.appendChild(d);
   }
   let boton = document.createElement("input");
   boton.type = "button";
   boton.name = "boton";
   boton.setAttribute("onclick","cambiarColores()");
   boton.id = "boton";
   boton.value = "Cambiar colores";
   form.appendChild(boton);
   document.body.appendChild(form);
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
    

crearForm(10);


