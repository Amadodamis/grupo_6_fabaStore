let users= require("../views/source/users"); //se requiere el usuario, ya que el carrito pertenece a un usuario. 

let user=users[0]; //llamo al usuario admin en el futuro se debera llamar al usuario en cuestion

let controller={

    productCart:(req,res)=>{
        res.render("productCart", {user:user})
    }
}


module.exports = controller;