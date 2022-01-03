const fs = require('fs');
const path = require('path');

const bcrypt = require('bcryptjs');
//para los errores que lleguen por el formulario
const { validationResult } = require('express-validator');

//requiero la base de datos
const db = require('../database/models');
const sequelize = db.sequelize;


let controller = {
///////////////////La vista de la edicion del usuario se carga por defecto con los datos del session////////////////////////////////////////////////
/////El intento de editar un usuario que no coincide redirije al login.    
edit:(req,res)=>{
        let user=req.session.userLogged;

        res.render("editUser",{
            usuarioAEditar: user})

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
             where: {id: req.session.userLogged.id}
            })

            .then (() => {
                //Despues de editar el usuario(con exito) elimino session y cookies ya que si el usuario continua logeado despues del edit, 
                //los cambios en la base de datos se generan, pero no se actualizan en la pagina. Por lo tanto se debe volver a logear.
                req.session.destroy();
                res.clearCookie("recordame")
                res.redirect("/")
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
        req.session.destroy();
        res.clearCookie("recordame")
        res.redirect("/")
        }

        )
            
    }
}

module.exports = controller;