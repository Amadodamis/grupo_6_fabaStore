
let controller={

    login:(req,res)=>{
        res.render("login")
    },
    formulario:(req,res)=>{
        res.redirect("/")
    }
}

module.exports = controller;