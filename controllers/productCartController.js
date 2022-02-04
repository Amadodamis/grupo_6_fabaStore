const fs = require('fs');
const path = require('path');

let users= require("../views/source/users"); /*se requiere el usuario, si bien los usuarios estan en una base de datos json//
                                            el carrito tiene una propiedad que todavia no se configurar. */  

let user=users[0]; //Lo igualo al usuario 0, (anonimo)  

let controller={
    productCart: (req, res)=>{

       
        res.render("productCart", {user:user})
    },
    
    }

module.exports = controller;