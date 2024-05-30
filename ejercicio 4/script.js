const form = $("form");
    const msj = $("msj")
    


    form.addEventListener("submit",(e) => {
        const peso = (form["peso"].value);
        const altura = parseFloat(form["altura"].value)
        const imc = peso/altura**2
        alert(imc)
        e.preventDefault();
    });

    form.addEventListener("focusout",() => {
        msj.style.color = "red"
        if (form["peso"].value === "") {
            msj.textContent = " Ingrese su peso..";   
        }  else if (form["peso"].value <= 0) {
            msj.textContent = "Su peso debe ser positivo.";
        }  else if (form["altura"].value === "") {
            msj.textContent = " Ingrese su altura..";
        }  else if(form["altura"].value <= 0) {
            msj.textContent = "Su altura debe ser positiva.";
        }   else {
            msj.textContent = "correcto";
            msj.style.color = "green";
        }
    });

    function $(elemento) {
        return document.getElementById(elemento);
    };