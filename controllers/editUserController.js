const fs = require('fs');
const path = require('path');

const bcrypt = require('bcryptjs');
//para los errores que lleguen por el formulario
const { validationResult } = require('express-validator');

//requiero la base de datos
const db = require('../database/models');
const sequelize = db.sequelize;


let controller = {

edit:(req,res)=>{
        let userToEdit=req.url.charAt(1)
        userToEdit=parseInt(userToEdit, 10)  //aca obtengo por url el numero de usuario que quiero editar


        //Primero se evalua el caso en el que el propio user es el que entra a editar su usuario.
        if(userToEdit == req.session.userLogged.id){ 
            let user=req.session.userLogged;
            res.render("editUser",{usuarioAEditar: user})
        }else{
            if(req.session.userLogged.id_categoria==1){
                
                db.User.findOne( 
                    {
                    include:["categoria"],
                    raw:true, nest:true,
                    where:{ id:userToEdit }
                    })
                    .then(user=> {
                        console.log(user)
                        res.render("editUser",{usuarioAEditar: user})
                    })
                    .catch(e=>{
                        console.log(e)
                    })
            }

            //una medida extra, en la que si se logro entrar pero no es admin, rebota a login.
            else{

                res.redirect("/login")
            }
        }

    },


    update:(req,res)=>{
 
        db.User.update(
            {
                usuario: req.body.usuario,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password,10),
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                domicilio: req.body.domicilio,
                avatar: req.file.filename,  
            },
            {
             where: {id: req.body.id}
            })

            .then (() => {
                
                if (req.session.userLogged.id_categoria == 1){ //si la solicitud vino de parte del administrador se redirije al perfil
                    res.redirect("/profile")
                }
                
                else{ //si la solicitud de edicion vino de parte del propio usuario se deslogea y eliminan las cookies

                    req.session.destroy();
                    res.clearCookie("recordame")
                    res.redirect("/")
                }
            })

            .catch(e=>{
                console.log(e)
            })
       
    },

//////////////////////////////////////////////////////BORRAR USUARIO////////////////////////////////////////////////////////////////////////

    delete:(req,res)=>{
        db.User.destroy({
            where: {id: req.params.id}
        })
        //si el usuario se elimina se destruye la cookie y la sesion
        .then(()=>{
        if(req.session.userLogged.id_categoria == 1){ //si la solicitud vino de administrador, continua logeado
            res.redirect("/profile")
        }
        else{ //si el usuario se autoelimina, se destruyen las cookies y se deslogea

            req.session.destroy();
            res.clearCookie("recordame")
            res.redirect("/")
        }
        }

        )
            
    },

    giveAdmin:(req,res)=>{
        db.User.update(
            {
                id_categoria: 1,  
            },
            {
             where: {id: req.params.id}
            })

            .then (() => {
                res.redirect("/profile")
            })

            .catch(e=>{
                console.log(e)
            })
            
    },
    removeAdmin:(req,res)=>{
         db.User.update(
            {
                id_categoria: 2,  
            },
            {
             where: {id: req.params.id}
            })

            .then (() => {
                res.redirect("/profile")
            })

            .catch(e=>{
                console.log(e)
            })
            
    }
}

module.exports = controller;