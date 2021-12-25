const fs = require('fs');
const path = require('path');

//requiero la base de datos
const db = require('../database/models/');

/* En la constante "productos" ya tienen los productos que están JSON */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let controller = {
    edit:(req,res)=>{
        /*let id=req.params.id;
        const producto = productos.find(producto =>{
            return producto.id == id
        })
        res.render("editProduct",{
            producto: producto
        })*/
        db.Product.findByPk(req.params.id)
            .then(producto => {
                res.render('EditProduct.ejs', {producto:producto});
            });
    },
    update:(req,res)=>{
        //Editamos el producto que va a llegar por parámetro (su ID)
        /*let id = req.params.id;
        let productToEdit = productos.find(product => {
            return product.id == id
        })
        let editedProduct ={
            id: id,
            modelo: req.body.producto,
            marca: req.body.marca,
            tipoProducto: req.body.tipo,
            img: req.file ? req.file.filename : productToEdit.img,
            precio: req.body.precio[0],
            stock: req.body.stock[0],
            stockCant: req.body.stock[1],
            oferta: req.body.stock[2],
            ofertaPorcentaje: req.body.descuento,
            precioConOferta: req.body.precio[1],
            cuotasSinInteres: req.body.cuotas[0],
            cantCuotas: req.body.cuotas[1],
            interescuota: req.body.cuotas[2],
            precioEnCuotas: req.body.cuotas[3],
            especificaciones: req.body.cuotas[4] 
        }

        productos.forEach((producto, index) => {
            if(producto.id == id){
                productos[index] = editedProduct
            }
        });

        fs.writeFileSync(productsFilePath, JSON.stringify(productos, null , " "))
        res.redirect("/")*/
        let productToEdit = db.Product.findByPk(req.params.id);
        db.Product.update(
            {
                modelo: req.body.producto,
                marca: req.body.marca,
                tipoProducto: req.body.tipo,
                img: req.file ? req.file.filename : productToEdit.img,
                precio: req.body.precio[0],
                stock: req.body.stock[0],
                stockCant: req.body.stock[1],
                oferta: req.body.stock[2],
                ofertaPorcentaje: req.body.descuento,
                precioConOferta: req.body.precio[1],
                cuotasSinInteres: req.body.cuotas[0],
                cantCuotas: req.body.cuotas[1],
                interescuota: req.body.cuotas[2],
                precioEnCuotas: req.body.cuotas[3],
                especificaciones: req.body.cuotas[4]
            },
            {
             where: {id: req.params.id}
            })
            .then (() => {
                res.redirect("/")
               })
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