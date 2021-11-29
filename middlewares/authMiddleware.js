function authMiddleware (req,res,next) {
    if (!req.session.userLogged) { //si no hay usuario logeado, redirije a login.
        return res.redirect("/login")
    };
    next();
}

module.exports = authMiddleware