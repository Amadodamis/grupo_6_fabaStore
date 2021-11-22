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
        //se busca en el json si el email ingresado existe en la base de datos y guarda el usuario solicitado en Usuario a logearse
        let userEmail=req.body.email;
        let password=req.body.password;

        let usuarioALoguearse = usuarios.find( user => user.email==userEmail);
        
        if (usuarioALoguearse) { //si el usuario existe en la base de datos
            let estaOKLaPassword = bcrypt.compareSync(req.body.password, usuarioALoguearse.password); 

            if (estaOKLaPassword) {
                req.session.userLogged = usuarioALoguearse;
                res.redirect("/login/profile")
            }
            
        }
        else{ //si la password es incorrecta devuelve al login
           res.redirect("/login")
        }
    },

    profile: (req,res) => {
        res.render("perfilUsuario", { pUser: req.session.userLogged }) 
    },
    logout: (req,res)=> {
        req.session.destroy();
        res.redirect("/")
    }
}


module.exports = controller;