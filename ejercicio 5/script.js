const formulario = $("formulario");
const mensaje = $("mensaje");
const variableA = $("variableA");
const variableB = $("variableB");
const variableC = $("variableC");

formulario.addEventListener("focusout",function(){

    mensaje.style.color = "red"


    if (formulario["variableA"].value === "") {

        mensaje.textContent = "Altura vacia, ingrese la altura";
    }  else if (formulario["variableA"].value < 0) {
        mensaje.textContent = "Altura negativa, ingrese un positivo";
    }  else if (formulario["variableB"].value === "") {
        mensaje.textContent = "Base vacia, ingrese la base";
    }  else if(formulario["variableB"].value < 0) {
        mensaje.textContent = "Base negativa, ingrese un positivo"; 
    }  else if(formulario["variableC"].value < 0) {
        mensaje.textContent = "Base negativa, ingrese un positivo"
    }  else if (formulario["variableC"].value === "") {
        mensaje.textContent = "Base vacia, ingrese la base";


    } else {
        mensaje.textContent = "Todos los datos son correctos!!";
        mensaje.style.color = "green";
        }})

        formulario.addEventListener("submit", function(e){
            
                const altura = parseFloat(formulario["variableA"].value);
                const baseM = parseFloat(formulario["variableB"].value);
                const basem = parseFloat(formulario["variableC"].value);
    
                var area1 = (basem+baseM)*altura / 2
                alert (area1);
    
            e.preventDefault();
        });       

    function $(elemento) {
        return document.getElementById(elemento);
    };

    