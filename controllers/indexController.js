let arrayProductos=require("../views/source/products");

let controller={

    index:(req,res)=>{
        res.render("index",{prod:arrayProductos})
    },
    detalle: (req, res) => {
        let producto = arrayProductos.find(producto => producto.id == req.params.productoId);
        res.render("productDetail", { producto: producto });
    }
}

module.exports = controller;