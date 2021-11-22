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

        let usuarioALoguearse = usuarios.find( user => user.email==userEmail);
        
        if (usuarioALoguearse) { //si el usuario existe en la base de datos
            let estaOKLaPassword = bcrypt.compareSync(req.body.password, usuarioALoguearse.password); 

            if (estaOKLaPassword) {
                req.session.userLogged = usuarioALoguearse;
                if (req.body.recordame!=undefined){
                    res.cookie("recordame",usuarioALoguearse.email,{maxAge:30000})
                }
                res.redirect("/login/profile")
            }
            
        }
        else{ //si la password es incorrecta devuelve al login
           res.redirect("/login")
        }
    },

    profile: (req,res) => {
        if(req.session.userLogged==undefined){// el usuarios[0] es el invitado.
            res.render("perfilUsuario", { pUser: usuarios[0]})

        }else{
            res.render("perfilUsuario", { pUser: req.session.userLogged }) 
        }
    },
    logout: (req,res)=> {
        req.session.destroy();
        res.clearCookie("recordame")
        res.redirect("/")
    }
}

module.exports = controller;