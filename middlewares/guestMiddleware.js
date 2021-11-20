function guestMiddleware (req,res,next) {
    if (req.session.userLogged) {
        return res.redirect("../views/perfilUsuario")
    };
    next();
}

module.exports = guestMiddleware