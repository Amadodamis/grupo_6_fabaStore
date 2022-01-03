const fs = require('fs');
const path = require('path');



//requiero la base de datos

const db = require('../database/models');
const sequelize = db.sequelize;

let controller={
    
    index: (req, res) => {
        db.Product.findAll( 
            {
            include:["marca","tipodeproducto"],
            raw:true,  
            nest:true,
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