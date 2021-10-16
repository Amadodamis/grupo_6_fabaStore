const express = require ("express")
const app = express ()
const path = require ("path")

app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname, "./public")));


//Servidor
app.listen (3032, () => console.log ("Servidor corriendo http://localhost:3032/" ,"http://192.168.0.145:3030/" ));

//Requisitos de routas
var indexRouter = require('./routes/indexRouter');
var loginRouter = require('./routes/loginRouter');
var productCartRouter = require('./routes/productCartRouter');
var productDetailRouter = require('./routes/productDetailRouter');
var registerRouter = require('./routes/registerRouter');
var uploadProductsRouter = require ('./routes/uploadProductsRouter')


//llamados 

app.use("/", indexRouter); //index

app.use("/login", loginRouter);

app.post("/login", (req,res) => {
    res.redirect("/index")
})

app.use("/productCart", productCartRouter);

app.use("/productDetail", productDetailRouter);

app.use("/register", registerRouter);

app.use("/uploadProducts", uploadProductsRouter);

