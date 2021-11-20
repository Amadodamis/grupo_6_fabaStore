const { validationResult } = require('express-validator');


let controller={

    register:(req,res)=>{
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            res.render("register")
        } else {
            res.render("register", { errors: errors.mapped(), old: req.body });
        }
    },
    formulario:(req,res)=>{
        res.redirect("/")
    }
}

module.exports = controller;