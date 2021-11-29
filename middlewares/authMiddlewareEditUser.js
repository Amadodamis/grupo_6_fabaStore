function authMiddlewareEditUser (req,res,next) {
    if (req.session.userLogged && (req.session.userLogged.id==req.params.id)) { //si no hay usuario logeado, redirije a login.
        next();
    }else{
        return res.redirect("/login")
    }
}
module.exports = authMiddlewareEditUser