let arrayProductos=require("../views/source/products");

let controller={

    index:(req,res)=>{
        res.render("index",{prod:arrayProductos})
    }
}

module.exports = controller;