let productos=require("../views/source/products");

let controller={

    productDetail:(req,res)=>{
        res.render("productDetail",{productos:productos})
    },
}

module.exports = controller;