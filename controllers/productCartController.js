let carrito= require("../views/source/users"); //se requiere el usuario, ya que el carrito pertenece a un usuario. 


let controller={

    productCart:(req,res)=>{
        res.render("productCart")
    },
}

module.exports = controller;