let productos=require("../views/source/products");


let controller = {
    upload: (req,res)=>{
        res.render("uploadProducts",{productos:productos})
    },
    formulario: (req,res)=>{
        res.redirect("/")
    },
    edit:(req,res)=>{
        let producto=req.params.productoId;
        res.render("editProduct",{prod:productos[producto]})
    }
}

module.exports = controller;