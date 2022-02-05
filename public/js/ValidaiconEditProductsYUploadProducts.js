window.onload = function(){
    
    const expresiones = {
        modelo: /^[a-zA-Z0-9\s]{5,30}$/, // Letras, numeros, espacio y de 5 a 30 caracteres
        precio: /[\d*]{1,10}/, // numeros de 1 a 10 digitos
        stockCant: /[\d*]{1,4}/, // numeros del 1 al 9999
        ofertaPorcentaje: /^(\d|[1-9]\d|100)$/, // del 1 al 100
        especificaciones: /^.{20,250}$/, // 20 a 250 digitos.
    }

    const campos = {
        modelo: false,
        precio: false,
        stockCant: false,
        ofertaPorcentaje: false,
        especificaciones: false,
    }

    const formEditProducts = document.getElementById("Form-edit-products")
    const inputs = document.querySelectorAll("#Form-edit-products input")
    

    const validarFormulario = function(e){
        switch (e.target.name){
            case "modelo":
                validarCampos(expresiones.modelo, e.target, "modelo")
            break;
            case "precio":
                validarCampos(expresiones.precio, e.target, "precio")
            break;
            case "stockCant":
                validarCampos(expresiones.stockCant, e.target, "stockCant")
            break;
            case "ofertaPorcentaje":
                validarCampos(expresiones.ofertaPorcentaje, e.target, "ofertaPorcentaje")
            break;
            case "especificaciones":
                validarCampos(expresiones.especificaciones, e.target, "especificaciones")
            break;

        }
    }
    function validarCampos(expresion, input, campo){
        if(expresion.test(input.value)){
            //cada uno de los document agregan o remueven uno de las 4 clases que agregue en el css de StyleRegisterLogin
            document.getElementById(`${campo}`).classList.remove("incorrecto")
            document.getElementById(`${campo}`).classList.add("correcto")
            document.getElementById(`error-${campo}`).classList.remove("error-formulario-activo")
            document.getElementById(`error-${campo}`).classList.add("error-formulario")
            document.getElementById(`${campo}`).classList.remove("fa-times-circle")
            document.getElementById(`${campo}`).classList.add("fa-check-circle")
            //aca hago que el campo del mismo sea true si tiene todas las condiciones bien
            console.log(campos)
            campos[campo] = true;
        }else {
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
    // recorre el array de inputs y por cada vez que aprete una tecla o saque el mouse ejecuta la funcion de validar usuario 
    inputs.forEach((input) => {
        input.addEventListener("keyup", validarFormulario)
        input.addEventListener("blur", validarFormulario)
    })

    formEditProducts.addEventListener("submit", function(event){
        
        if(campos.modelo && campos.precio && campos.stockCant && campos.ofertaPorcentaje && campos.especificaciones){
            
            
        }else{
            document.getElementById("mensaje-Formulario-no-exito").classList.add("mensaje-Formulario-no-exito-activo")
            event.preventDefault();
        }

    })

}