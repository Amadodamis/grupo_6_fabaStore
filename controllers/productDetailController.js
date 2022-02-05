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
                let offline=true //si el usuario esta offline , arranca en true
                let admin= false;
                if (req.session.userLogged != undefined){
                    offline=false
                    if(req.session.userLogged.id_categoria == 1){
                        admin=true
                    }
                }
                
                res.render('productDetail.ejs', {producto:producto,offline:offline,admin:admin});
            })
            .catch(e=>{
                console.log(e)
            });
        }
    }

module.exports = controller;