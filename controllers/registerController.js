const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

/* En la constante "usuarios" ya tienen los usuarios que están JSON */
const usuariosFilePath = path.join(__dirname, '../data/usersDataBase.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

let controller={

    register:(req,res)=>{
        let errors = validationResult(req);
        res.render("register",{ errors: errors.array(),old: req.body }) //errors y old sad
    },

    formulario:(req,res)=>{
        
        let errors = validationResult(req);
        if (errors.isEmpty()) { //si no hay errores
            let user=req.body;
            // Creación de un nuevo usuario por formulario
            let nuevoUsuario = {
                id: usuarios[usuarios.length -1].id + 1,
                usuario: req.body.usuario,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password,10),
                fecha: "fecha sin definir",
                nombre: "nombre user",
                apellido: req.body.apellido,
                domicilio: req.body.domicilio,
                avatar: "default.jpg",
                admin: false
            }
        
            usuarios.push (nuevoUsuario);
            fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios,null," "));
            res.redirect("/")
            
        } else {
            res.render("register", { errors:errors.array(), old: req.body });
        }
    
    },

    update:(req,res)=>{
        //Editamos el usuario que va a llegar por parámetro (su ID)
        let id = req.params.id;
        let usuarioAEditar = usuarios.find(usuario => {
            return usuario.id == id
        })
        let editedUsuario ={
            id: id,
            usuario: req.body.usuario,
            email: req.body.email,
            password: req.body.password,
            fecha: req.body.fecha,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            domicilio: req.body.domicilio,
            avatar: req.file ? req.file.filename : usuarioAEditar.img,
            admin: req.body.admin
        }

        usuarios.forEach((usuario, index) => {
            if(usuario.id == id){
                usuarios[index] = editedUsuario
            }
        });

        fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null , " "))
        res.redirect("/")
    },

    delete:(req,res)=>{
        // Eliminamos el usuario que llegó por parametro su ID
		/*res.send("Usuario con id " + req.params.id + " eliminado")*/
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