const fs = require('fs');
const path = require('path');

//requiero la base de datos
const db = require('../database/models');
const sequelize = db.sequelize;

let controller={
    
    index: (req, res) => {
        db.Product.findAll( 
            {
            include:["marca","tipoDeProducto"],
            raw:true,  
            nest:true,
            })
            .then(prod => {
                if(req.session.userLogged != undefined){
                    console.log(req.session.userLogged)
                }
                
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
            include:["marca","tipoDeProducto"],
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

    },

    busqueda:(req,res)=>{
        db.Product.findAll( 
            {
            include:["marca","tipoDeProducto"],
            raw:true,  
            nest:true,
            })
            .then(prod => {
                let busqueda=req.body.busqueda.toLowerCase(); //para simplificar problemas en la busqueda de minuscula y mayuscula la busqueda se realiza en lower case y se compara contra otro lowercase
                let modelo;
                let marca;
                let tipoProd;

                let prod2=[]
                prod.forEach(element => {

                    modelo=element.modelo.toLowerCase()
                    marca=element.marca.nombreMarca.toLowerCase()
                    tipoProd=element.tipodeproducto.tipo_de_producto.toLowerCase()

                    if (modelo.includes(busqueda)){
                        prod2.push(element)
                    }
                    else{
                        if(marca.includes(busqueda)){
                            prod2.push(element)
                        }else{
                            if(tipoProd.includes(busqueda)){
                                prod2.push(element)
                            }
                        }
                    }

                });//fin foreach


                res.render('products.ejs', {prod:prod2})
             })


            .catch(e=>{
                console.log(e)
            })
                 
    }//fin busqueda


}//fin controller


module.exports = controller;