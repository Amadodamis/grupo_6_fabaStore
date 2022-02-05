window.onload = function(){
    
    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{2,15}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{8,12}$/, // 8 a 12 digitos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        domicilio: /^[a-zA-Z0-9]/, // Letras y numeros
    }
    const campos = {
        usuario: false,
        email: false,
        password: false,
        nombre: false,
        apellido: false,
        domicilio: false,
    }
    
    const formEditUser = document.getElementById("form-edit-user")
    const inputs = document.querySelectorAll("#form-edit-user input")

    const validarFormulario = function (e){
        // con el e.target.name agarro el nombre del input que me llega
        switch (e.target.name) {
            case "usuario":
                validarCampos(expresiones.usuario, e.target, "usuario")
                break;
            case "email":
                validarCampos(expresiones.email, e.target, "email")
                break;
            case "password":
                validarCampos(expresiones.password, e.target, "password")
                break;
            case "nombre":
                validarCampos(expresiones.nombre, e.target, "nombre")
                break;
            case "apellido":
                validarCampos(expresiones.apellido, e.target, "apellido")
                break;
            case "domicilio":
                validarCampos(expresiones.domicilio, e.target, "domicilio")
            break;
           
        }
    }
    const validarCampos = function(expresion, input, campo){
        //el if recive la expresion, input y campo que obtiene de algun case del switch 
            if(expresion.test(input.value)){
               //cada uno de los document agregan o remueven uno de las 4 clases que agregue en el css de StyleRegisterLogin
                document.getElementById(`${campo}`).classList.remove("incorrecto")
                document.getElementById(`${campo}`).classList.add("correcto")
                document.getElementById(`error-${campo}`).classList.remove("error-formulario-activo")
                document.getElementById(`error-${campo}`).classList.add("error-formulario")
                document.getElementById(`${campo}`).classList.remove("fa-times-circle")
                document.getElementById(`${campo}`).classList.add("fa-check-circle")
                //aca hago que el campo del mismo sea true si tiene todas las condiciones bien
                campos[campo] = true;
            }else{
                document.getElementById(`${campo}`).classList.remove("correcto")
                document.getElementById(`${campo}`).classList.add("incorrecto")
                document.getElementById(`error-${campo}`).classList.remove("error-formulario")
                document.getElementById(`error-${campo}`).classList.add("error-formulario-activo")
                document.getElementById(`${campo}`).classList.remove("fa-check-circle")
                document.getElementById(`${campo}`).classList.add("fa-times-circle")
                // aca hago que el campo sea false si hay un error
                campos [campo] = false;
            }
            
        }
        inputs.forEach((input) => {
            input.addEventListener("keyup", validarFormulario)
            input.addEventListener("blur", validarFormulario)
        })

        formEditUser.addEventListener("submit", function(event){

            if(campos.usuario && campos.password && campos.email && campos.nombre && campos.domicilio && campos.apellido && campos.domicilio){

            }else{
                document.getElementById("mensaje-Formulario-no-exito").classList.add("mensaje-Formulario-no-exito-activo")
                event.preventDefault();
            }
        })
}