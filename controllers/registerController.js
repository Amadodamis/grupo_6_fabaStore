let controller={

    register:(req,res)=>{
        res.render("register")
    },
    formulario:(req,res)=>{
        res.redirect("/")
    }
}

module.exports = controller;