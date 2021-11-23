function userLoggedMiddleware (req,res,next) {
    res.locals.isLogged = false;

    if(req.session.isLogged && req.session.userLogged) {
        res.locals.isLogged = true
    }

    next()
}

module.exports = userLoggedMiddleware