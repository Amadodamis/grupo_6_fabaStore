function guestMiddleware (req,res,next) {
    if (req.session.userLogged) {
        return res.redirect("/perfilUsuario")
    };
    next();
}

module.exports = guestMiddleware