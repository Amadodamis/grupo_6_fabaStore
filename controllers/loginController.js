const fs = require('fs');
const path = require('path');

//requiero la base de datos
const db = require('../database/models');
const sequelize = db.sequelize;

const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');


let controller={

    login:(req,res)=>{
        res.render("login")
    },
   
    procesoLogin: (req,res) => {
        
        //Guardo los datos que llegaron por formulario
        let userEmail=req.body.email;
        

        db.User.findOne( 
            {
            include:["categoria"],
            raw:true, nest:true,
            where:{ email:userEmail }
            })
            .then(user=> {
            //Si el usuario existe en la base de datos. 
                if(user){
                    //EstaOKLAPassword guarda un booleano de la comparacion de la contraseña que ingreso por formulario con la encriptada de la base de datos
                    let estaOKLaPassword= bcrypt.compareSync(req.body.password, user.password);

                    //Si la password es correcta se guarda en session un usuario, su cookie y redirije al perfil
                    if (estaOKLaPassword) { 
                        req.session.userLogged = user;
                        
                        // Cuando se inicia sesion se declara como array el carrito
                        req.session.carrito = [];
                       
                        //Cuando se inicia sesion se crea un array para los ultimos productos visitados.
                        req.session.ultimosProductos=[];    
                       
                        if (req.body.recordame!=undefined){
                        res.cookie("recordame",user.email,{maxAge:30000})
                         }
                        res.redirect("/login/profile")
                    //Si la password es incorrecta lo informa.
                    }else{
                        res.send("Password incorrecta  "+"http://localhost:3032/login")
                    }

            //Si no existe el usuario en la base de datos.   
                }else{

                    res.send("el usuario "+ userEmail + "  no existe.  "+"http://localhost:3032/login")
                }

        })
        .catch(e=>{
                console.log(e)
            })
    },

    profile: (req,res) => {
        //La vista del perfil se hace por ssesion, si el usuario no existe se designa un usuario invitado. COMPLETAR
        if(req.session.userLogged==undefined){
            let usuarioInvitado={
                usuario:"Invitado",
                id:0,
                email:"invitado",
                avatar:"default.jpg"
            };
            res.render("perfilUsuario", { pUser: usuarioInvitado})

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