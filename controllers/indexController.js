let Productos=require("../views/source/products");


let controller={

    index:(req,res)=>{  // vista de la pantalla principal
        res.render("index",{prod:Productos}) //
    },

    detail: (req, res) => {
        let product = Productos.find(product => product.id == req.params.productId);
        res.render("productDetail", { product: product });
    }
}

module.exports = controller;

