const fs = require('fs');
const path = require('path');

/* En la constante "usuarios" ya tienen los usuarios que están JSON */
const usuariosFilePath = path.join(__dirname, '../data/usersDataBase.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));




//////////////////////////////////////////////////////////////////


function recordameMiddleware(req,res,next){
    if(req.cookies.recordame != undefined && req.session.userLogged == undefined){      //si hay cookies, y en ellas hay un user, loggearse.
    let usuarioALoguearse = usuarios.find( user => user.email==req.cookies.recordame);
    req.session.userLogged = usuarioALoguearse;
    }
    
    next();
}
module.exports=recordameMiddleware;