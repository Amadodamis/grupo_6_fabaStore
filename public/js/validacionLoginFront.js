window.onload = function(){
    // expresiones para validar 
    const expresiones = {
        password: /^.{1,12}$/, // 1 a 12 digitos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }
    const campos = {
        email: false,
        password: false,
    }
    // atrapo el formulario
    const formulario = document.getElementById("formulario")
    // atrapo los inputs de todo el formulario
    const inputs = document.querySelectorAll("#formulario input")
    
    const validarFormulario = function (e){
        switch (e.target.name) {
            case "email":
            validarCampos(expresiones.email, e.target, "email")
            break;
            case "password":
            validarCampos(expresiones.password, e.target, "password")
            break;
        }
    }
     // cree la funcion validarCampos que toma una expresion, input y campo que contenga cada campo del formulario
     const validarCampos = function(expresion, input, campo){
        
        //el if recive la expresion, input y campo que obtiene de algun case del switch 
            if(expresion.test(input.value)){
               //cada uno de los document agregan o remueven uno de las 4 clases que agregue en el css de StyleRegisterLogin
                document.getElementById(`${campo}`).classList.remove("incorrecto")
                document.getElementById(`${campo}`).classList.add("correcto")
                document.getElementById(`error-${campo}`).classList.remove("error-formulario-activo")
                document.getElementById(`error-${campo}`).classList.add("error-formulario")
                document.getElementById(`${campo}`).classList.add("fa-check-circle")
                document.getElementById(`${campo}`).classList.remove("fa-times-circle")
                campos[campo] = true;
            }else{
                document.getElementById(`${campo}`).classList.remove("correcto")
                document.getElementById(`${campo}`).classList.add("incorrecto")
                document.getElementById(`error-${campo}`).classList.remove("error-formulario")
                document.getElementById(`error-${campo}`).classList.add("error-formulario-activo")
                document.getElementById(`${campo}`).classList.add("fa-times-circle")
                document.getElementById(`${campo}`).classList.remove("fa-check-circle")
                campos[campo] = false;
            }
            
        }

    inputs.forEach((input) => {
        input.addEventListener("keyup", validarFormulario)
        input.addEventListener("blur", validarFormulario)
    })

    //atrapo el submit del formulario
     formulario.addEventListener("submit", function(event){
        
        if(campos.password && campos.email){
            //este campo esta vacio para que si se cumplen las condiciones siga el curso normal
        }else{
            // aca pongo todos los eventos en default y agrego a una clase de un div para que me muestre un mensaje.
            document.getElementById("mensaje-Formulario-no-exito").classList.add("mensaje-Formulario-no-exito-activo")
            event.preventDefault();
        }
        
    })
    

    








}