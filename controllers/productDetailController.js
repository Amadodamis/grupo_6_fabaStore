const fs = require('fs');
const path = require('path');

const db = require('../database/models');
const sequelize = db.sequelize;

let controller={
  // Vista del detalle del producto por ID
    productDetail: (req, res) => {
        db.Product.findByPk(req.params.id,{
            include:["marca","tipodeproducto"]
        }).then(producto => {
                res.render('productDetail.ejs', {producto});
            })
            .catch(e=>{
                console.log(e)
            });
        }
    }

module.exports = controller;