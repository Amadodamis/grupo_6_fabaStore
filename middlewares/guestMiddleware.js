function guestMiddleware (req,res,next) {
    if (req.session.userLogged) {   //si hay usuario logeado, redirije a profile
        return res.redirect("/profile")
    };
    next();
}

module.exports = guestMiddleware