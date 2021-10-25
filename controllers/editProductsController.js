const fs = require('fs');
const path = require('path');

/* En la constante "productos" ya tienen los productos que están JSON */
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let controller = {
    edit:(req,res)=>{
        let id=req.params.id;
        const producto = productos.find(producto =>{
            return producto.id == id
        })
        res.render("editProduct",{
            producto: producto
        })
    },
    update:(req,res)=>{
        //Editamos el producto que va a llegar por parámetro (su ID)
        res.send("Producto con id " + req.params.id + " editado y guardado")
    },
    delete:(req,res)=>{
        // Eliminamos el producto que llegó por parametro su ID
		res.send("Producto con id " + req.params.id + " eliminado")
    }
}

module.exports = controller;