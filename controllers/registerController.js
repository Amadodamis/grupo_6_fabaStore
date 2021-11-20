const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

/* En la constante "usuarios" ya tienen los usuarios que están JSON */
const usuariosFilePath = path.join(__dirname, '../data/usersDataBase.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

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
        // Creación de un nuevo usuario por formulario
        let nuevoUsuario = {
            id: usuarios[usuarios.length -1].id + 1,
            usuario: req.body.usuario,
            email: req.body.email,
            password: req.body.password,
            fecha: req.body.fecha,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            domicilio: req.body.domicilio,
            avatar: req.file.filename,
            admin: false
        }

        usuarios.push (nuevoUsuario);
        fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios,null," "));
        res.redirect("/")
    }
}

module.exports = controller;