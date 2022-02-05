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
                console.log(prod)
                res.render('products.ejs', {prod})
        })
        .catch(e=>{
                console.log(e)
            })
    },
    productsByCategory:(req,res)=>{
        console.log(req.query)
        
        db.Product.findAll( 
            {
            include:["marca","tipodeproducto"],
            raw:true,  
            nest:true,
            })
            .then(prod => {
                let categoria=req.query.categoria;
                

                let prod2=[]
                prod.forEach(element => {

                    if (element.tipodeproducto.tipo_de_producto === categoria){
                        prod2.push(element)
                    }
                });
               console.log(prod2)
              
                res.render('products.ejs', {prod:prod2})
        })
        .catch(e=>{
                console.log(e)
            })

    }
}

module.exports = controller;