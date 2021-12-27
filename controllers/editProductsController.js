const fs = require('fs');
const path = require('path');

//requiero la base de datos
const db = require('../database/models/');

/* En la constante "productos" ya tienen los productos que están JSON */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let controller = {
    edit:(req,res)=>{

        let id=req.params.id;
        db.Product.findByPk(id,{
            include:["marca","tipodeproducto"],
            raw:true,  
            nest:true,     
            })
            .then(producto => {
                res.render('EditProduct.ejs', {producto:producto});
            });
    },
    update:(req,res)=>{
        //Editamos el producto que va a llegar por parámetro (su ID)
        let productToEdit = db.Product.findByPk(req.params.id);

        //conversion de los "si" en valores booleanos.
        if(req.body.ofertaBooleano=="Si"){req.body.ofertaBooleano=true}else{req.body.ofertaBooleano=false}
        if(req.body.stockBooleano=="Si"){req.body.stockBooleano=true}else{req.body.stockBooleano=false}
        
        //edicion del producto
        /*db.Product.update(
            {
                modelo: req.body.modelo,
                marca: req.body.marca,
                tipoProducto: req.body.tipoProducto,
                img: req.file ? req.file.filename : productToEdit.img,
                precio: req.body.precio,
                stock: req.body.stockBooleano,
                stockCant: req.body.stockCant,
                oferta: req.body.ofertaBooleano,
                ofertaPorcentaje: req.body.ofertaPorcentaje,
                especificaciones: req.body.especificaciones
            },
            {
             where: {id: req.params.id}
            })
            .then (() => {
                res.redirect("/")
               })*/
    },

    delete:(req,res)=>{
        // Eliminamos el producto que llegó por parametro su ID
		/*res.send("Producto con id " + req.params.id + " eliminado")*/
        let id = req.params.id;
		/* Modificamos el Array */
		let finalProductos = productos.filter(producto => {
			return producto.id != id
		});

		fs.writeFileSync(productsFilePath, JSON.stringify(finalProductos,null," "))
		res.redirect("/products")
    }
}

module.exports = controller;