const fs = require('fs');
const path = require('path');
const Usuario = require ("../models/Usuario")
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

/* En la constante "usuarios" ya tienen los usuarios que están JSON */
const usuariosFilePath = path.join(__dirname, '../data/usersDataBase.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

let controller={

    login:(req,res)=>{
        res.render("login")
    },
    procesoLogin: (req,res) => {
        let usuarioALoguearse = Usuario.findByField("email", req.body.email);

        if (usuarioALoguearse) {
            let estaOKLaPassword = bcrypt.compareSync(req.body.password, usuarioALoguearse.password);
            if (estaOKLaPassword) {
                return res.send ("perfilUsuario");
            }
            return res.render("login", {
                errors: {
                    email: {
                        msg: "Las credenciales son inválidas"
                    }
                }
            })
        }
        return res.render("login", {
            errors: {
                email: {
                    msg: "No se encuentra este email en nuestra base de datos"
                }
            }
        })
    },
    formulario:(req,res)=>{
        res.redirect("/")
    }
}

module.exports = controller;