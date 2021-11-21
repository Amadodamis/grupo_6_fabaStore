// ************ Require's ************
const express = require ("express");
const path = require ("path")

// Para poder usar los métodos PUT y DELETE
const methodOverride = require('method-override'); 

// ************ express() - (don't touch) ************
const app = express ();

// ************ Middlewares - (NO TOCAR) ************
app.use(express.static(path.resolve(__dirname, "./public"))); // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method')); // Para poder usar los métodos PUT y DELETE

// ************ Template Engine - (NO TOCAR) ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

/***************** Cookies ************************/
const cookieParser = require('cookie-parser')
app.use(cookieParser())

//*************** Session******************************* */
const session = require('express-session');
app.use(session({
    secret: 'Nombre del sitio',
    resave: false,
    saveUninitialized: true,
    }));    


//Requisitos de routas
var indexRouter = require('./routes/indexRouter');
var loginRouter = require('./routes/loginRouter');
var productCartRouter = require('./routes/productCartRouter');
var productDetailRouter = require('./routes/productDetailRouter');
var registerRouter = require('./routes/registerRouter');
var uploadProductsRouter = require ('./routes/uploadProductsRouter');
var productsRouter = require('./routes/productsRouter'); // Rutas /products
var editProductsRouter = require('./routes/editProductsRouter'); // Rutas /editProducts


//llamados

app.use("/", indexRouter); //index

app.use ("/products",productsRouter); //products

app.use("/login", loginRouter);

app.post("/login", (req,res) => {
    res.redirect("/index")
});

app.use("/productCart", productCartRouter);

app.use("/productDetail",productDetailRouter);

app.use("/register", registerRouter);

app.use("/uploadProducts", uploadProductsRouter);

app.use("/editProduct", editProductsRouter);

// ************ Set the server to listen - (NO TOCAR) ************
app.listen (3032, () => console.log ("Servidor corriendo http://localhost:3032/" ,"http://192.168.0.145:3032/" ));






