const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

/* En la constante "usuarios" ya tienen los usuarios que están JSON */
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const usuarios = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

let tipoUsuario={
    id: "",
    modelo:"",
    marca:"",
    tipoProducto:"",
    img:"",
    precio:"",
    stock:"",
    stockCant:"",
    oferta:"",
    ofertaPorcentaje:"",
    precioConOferta:"",
    cuotasSinInteres:"",
    cantCuotas: "",
    interescuota: "",
    precioEnCuotas: "",
    especificaciones:""
    }

let controller={

    register:(req,res)=>{
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            res.render("register")
        } else {
            res.render("register", { errors: errors.mapped(), old: req.body });
        }
    },
    formulario:(req,res)=>{

        //requiero la informacion del formulario y la guardo en form
        let form=req.body;

        //requiero los datos de la foto que cargue desde el navegador.
        let file=req.file;

        //Guardo el valor del ultimo numero de producto
        let id=usuarios.length+1;

        //especifico el tipo de dato que va a ser
        let usuarioNuevo=tipoUsuario;

        res.redirect("/")
    }
}

module.exports = controller;