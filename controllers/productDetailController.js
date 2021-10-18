let productos=require("../views/source/products");

let controller={

    productDetail:(req,res)=>{
        let id=req.params.id;
        res.render("productDetail",{prod:productos[id]})
    },
}

module.exports = controller;