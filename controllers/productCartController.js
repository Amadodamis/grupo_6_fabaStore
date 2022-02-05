const fs = require('fs');
const path = require('path');

const db = require('../database/models');
const sequelize = db.sequelize;

let controller={
    productCart: (req, res)=>{    
        let vacio=true; let totalApagar=0

        //Primero pregunta si el usuario esta conectado, si lo esta entra
        if (req.session.userLogged !=undefined){ 
            if (Object.keys(req.body).length !== 0){ // si vino una solicitud de agregar carrito se agrega al carrito
                req.session.carrito.push(req.body.idproducto)
            }
            let carrito=req.session.carrito;
            
            db.Product.findAll( 
                {
                include:["marca","tipodeproducto"],
                raw:true,  
                nest:true,
                })
                .then(prod => {
                    let carritoArray=[] //CarritoArray es el array que se va a enviar a el EJS

                    // recorro el bucle hasta que todos los elementos del carrito de session  se busquen.
                   for (let i = 0; i < carrito.length; i++) {
                       carritoArray[i]=prod.find(element => element.id == carrito[i])
                   }

                   carritoArray.forEach(elem=>{
                        totalApagar=totalApagar+(parseInt(elem.precio,10))
                        })
                    if(carritoArray.length >0 ){vacio=false}

                   res.render("productCart",{vacio:vacio, invitado:false,carrito:carritoArray,total:totalApagar})

            })
            .catch(e=>{
                    console.log(e)
                })
        }
        else{ //si el usuario esta desconectado 
            res.render("productCart",{vacio:vacio,invitado:true, carrito:[],total:0})
        }

    },
    
    }

module.exports = controller;