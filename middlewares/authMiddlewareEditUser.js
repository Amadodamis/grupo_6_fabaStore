function authMiddlewareEditUser (req,res,next) {
    if (req.session.userLogged && (req.session.userLogged.id==req.params.id)) { //si no hay usuario logeado, redirije a login.
        next();
    }else{
        return res.redirect("/login") // si el usuario intenta acceder a un edit user que no es el suyo es redirigido al login
    }
}
module.exports = authMiddlewareEditUser