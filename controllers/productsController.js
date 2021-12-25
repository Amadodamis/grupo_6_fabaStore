const fs = require('fs');
const path = require('path');

/* En la constante "productos" ya tienen los productos que están JSON */

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//requiero la base de datos

const db = require('../database/models');
const sequelize = db.sequelize;

let controller={
    
    /*index:(req,res)=>{  // vista de la pantalla principal
        res.render("products",{
            prod:productos})*/

    // Acá va el código para trabajar con los modelos y las tablas de la Base de datos directamente //
    // (falta la info. de las foreign_keys que no se como agregarsela) //

    index: (req, res) => {
        db.Product.findAll({
            include: [{association: "marca"}, {association: "tipodeproducto"}]
        })
        .then(prod => {
            res.render('products.ejs', {prod})
        })
        .catch(e=>{
                console.log(e)
            })
    }
}

module.exports = controller;