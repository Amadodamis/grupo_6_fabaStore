const fs = require('fs');
const path = require('path');

/* constante "productos" ya tienen los productos que están en JSON */

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


let controller={

    productDetail:(req,res)=>{
        let id=req.params.id;
        const producto = productos.find(producto =>{
            return producto.id == id
        })

        res.render("productDetail",{
            producto: producto
        })
    },
}

module.exports = controller;