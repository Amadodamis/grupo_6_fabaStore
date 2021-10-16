
let controller = {
    upload: (req,res)=>{
        res.render("uploadProducts")
    },
    formulario: (req,res)=>{
        res.redirect("/")
    }
}

module.exports = controller;