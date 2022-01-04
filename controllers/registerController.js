const fs = require('fs');
const path = require('path');

//para los errores que lleguen por el formulario
const { validationResult } = require('express-validator');

//requiero la base de datos
const db = require('../database/models');
const sequelize = db.sequelize;

const bcrypt = require('bcryptjs');

let controller={

    register:(req,res)=>{
        let errors = validationResult(req);
        res.render("register",{ errors: errors.array(),old: req.body }) //errors y old estan definidos para evitar que errors genere conflicto en el primer caso
    },
    formulario:(req,res)=>{
        
        let errors = validationResult(req);
        
        if (errors.isEmpty()) { //si no hay errores en lo qe envia el formulario.
            db.User.create({
                usuario: req.body.usuario,
                id_categoria:2,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password,10),
                fecha: req.body.fecha,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                domicilio: req.body.domicilio,
                avatar: req.file.filename,
               })
               .then (() => {
                res.redirect("/")
               })
               .catch(e=>{
                console.log(e)
            })
            
        } else {
            res.render("register", { errors:errors.array(), old: req.body });
        }
       
    },
}

module.exports = controller;