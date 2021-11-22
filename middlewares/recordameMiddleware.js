function recordameMididdleware(req,res,next){
    if(req.cookies.recordame != undefined && req.session.userLogged== undefined)
    next();
}
module.exports=recordameMiddleware;