const fs = require('fs');
const path = require('path');

const bcrypt = require('bcryptjs');
//para los errores que lleguen por el formulario
const { validationResult } = require('express-validator');

//usuario guarda funcionalidades para la lista de usuarios 
const usuario = require('../models/Usuario');

/* En la constante "usuarios" ya tienen los usuarios que están JSON */
const usuariosFilePath = path.join(__dirname, '../data/usersDataBase.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

let controller = {
    edit:(req,res)=>{
        let id=req.params.id;
        const usuarioAEditar = usuarios.find(usuarioAEditar =>{
            return usuarioAEditar.id == id
        })
        res.render("editUser",{
            usuarioAEditar: usuarioAEditar
        })
    },
    update:(req,res)=>{
        //Editamos el usuario que va a llegar por parámetro (su ID)
        let id = req.params.id;
        let usuarioParaEditar = usuarios.find(usuarioParaEditar => {
            return usuarioParaEditar.id == id
        })
        let usuarioEditado ={
            id: id,
            usuario: req.body.usuario,
            email: req.body.email,
            password: req.body.password,
            fecha: req.body.fecha,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            domicilio: req.body.domicilio,
            avatar: req.file ? req.file.filename : usuarioParaEditar.avatar,
            admin: req.body.admin,
        }

        usuarios.forEach((usuarioParaEditar, index) => {
            if(usuarioParaEditar.id == id){
                usuarios[index] = usuarioEditado
            }
        });

        fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null , " "))
        res.redirect("/")
    },
    delete:(req,res)=>{
        // Eliminamos el usuario que llegó por parametro su ID
		/*res.send("usuario con id " + req.params.id + " eliminado")*/
        let id = req.params.id;
		/* Modificamos el Array */
		let finalUsuarios = usuarios.filter(usuario => {
			return usuario.id != id
		});

		fs.writeFileSync(usuariosFilePath, JSON.stringify(finalUsuarios,null," "))
		res.redirect("/")
    }
}

module.exports = controller;