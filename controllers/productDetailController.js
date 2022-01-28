const fs = require('fs');
const path = require('path');

const db = require('../database/models');
const sequelize = db.sequelize;

let controller={
  // Vista del detalle del producto por ID
    productDetail: (req, res) => {
        db.Product.findByPk(req.params.id,{
            include:["marca","tipodeproducto"],
            raw:true,  
            nest:true
        }).then(producto => {
                //guardo el producto en session de los ultimos productos visitados.
                
                if (req.session.userLogged !=undefined){
                    req.session.ultimosProductos.push(producto)
                }
                res.render('productDetail.ejs', {producto:producto});
            })
            .catch(e=>{
                console.log(e)
            });
        }
    }

module.exports = controller;