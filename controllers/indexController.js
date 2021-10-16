let arrayProductos=require("../views/source/products");

let controller={

    index:(req,res)=>{
        res.render("index",{prod:arrayProductos})
    },
    detail: (req, res) => {
        let product = arrayProductos.find(product => product.id == req.params.productId);
        res.render("productDetail", { product: product });
    }
}

module.exports = controller;