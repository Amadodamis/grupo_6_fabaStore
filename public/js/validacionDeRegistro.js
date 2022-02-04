window.onload = function(){
    // expresiones para validar 
    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{2,15}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{8,12}$/, // 8 a 12 digitos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        domicilio: /^[a-zA-Z0-9]/, // Letras y numeros
    }
    // declare este variable de objetos para que esten en false apenas el usuario este en el formulario así no puede hacer submit de valores nulos
    const campos = {
        usuario: false,
        email: false,
        password: false,
        nombre: false,
        apellido: false,
        avatar: false,
    }
    // atrapo el formulario
    const formulario = document.getElementById("formulario")

    // atrapo los inputs de todo el formulario
    const inputs = document.querySelectorAll("#formulario input")
    
    //declaro un funcion validarFormulario donde tengo un switch que pasa por cada uno de los inputs que recibo del foreach
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
                validarPassword()
                break;
            case "Confpassword":
                validarPassword()
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
    
    // cree la funcion validarCampos que toma una expresion, input y campo que contenga cada campo del formulario
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

    // valido si las contraseñas son iguales comparando los value que me llegan por cada input de las dos contraseñas
    const validarPassword= function(){
        const inputPassword1= document.getElementById("password1")
        const inputPassword2= document.getElementById("confpassword1")
        if(inputPassword1.value !== inputPassword2.value){
            document.getElementById(`confpassword`).classList.remove("correcto")
            document.getElementById(`confpassword`).classList.add("incorrecto")
            document.getElementById(`error-confpassword`).classList.remove("error-formulario")
            document.getElementById(`error-confpassword`).classList.add("error-formulario-activo")
            document.getElementById(`confpassword`).classList.remove("fa-check-circle")
            document.getElementById(`confpassword`).classList.add("fa-times-circle")
            campos ["password"] = false;
        } else{
            document.getElementById(`confpassword`).classList.add("correcto")
            document.getElementById(`confpassword`).classList.remove("incorrecto")
            document.getElementById(`error-confpassword`).classList.add("error-formulario")
            document.getElementById(`error-confpassword`).classList.remove("error-formulario-activo")
            document.getElementById(`confpassword`).classList.remove("fa-times-circle")
            document.getElementById(`confpassword`).classList.add("fa-check-circle")
            campos ["password"] = true;
        }
    }

    // recorre el array de inputs y por cada vez que aprete una tecla o saque el mouse ejecuta la funcion de validar usuario 
    inputs.forEach((input) => {
        input.addEventListener("keyup", validarFormulario)
        input.addEventListener("blur", validarFormulario)
    })
    
     formulario.addEventListener("submit", function(event){

        if(campos.usuario && campos.password && campos.email && campos.nombre && campos.domicilio && campos.apellido){
            
            document.getElementById("mensaje-Formulario-exito").classList.add("mensaje-Formulario-exito-activo")
            setTimeout(() => {
                document.getElementById("mensaje-Formulario-exito").classList.remove("mensaje-Formulario-exito-activo")
            }, 5000);
        }else{
            document.getElementById("mensaje-Formulario-no-exito").classList.add("mensaje-Formulario-no-exito-activo")
            event.preventDefault();
        }
    })

}