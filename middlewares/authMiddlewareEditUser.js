function authMiddlewareEditUser (req,res,next) {
    if (req.session.userLogged.id_categoria== 1){
        next();
    }else{
            //si hay usuario logueado, y el usuario id coincide con el solicitado con la url deja entrar
            if (req.session.userLogged && (req.session.userLogged.id==req.params.id)) { 
                next();
            }else{
                return res.redirect("/login") // si el usuario intenta acceder a un edit user que no es el suyo es redirigido al login
            }
    }


}
module.exports = authMiddlewareEditUser