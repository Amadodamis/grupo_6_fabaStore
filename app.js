// ************ Require's ************
const express = require ("express");
const path = require ("path")

// Para poder usar los métodos PUT y DELETE
const methodOverride = require('method-override'); 

// ************ express() - (don't touch) ************
const app = express ();

// ************ Middleware de aplicación - (don't touch) ************
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware")

// ************ Middlewares - (NO TOCAR) ************
app.use(express.static(path.resolve(__dirname, "./public"))); // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method')); // Para poder usar los métodos PUT y DELETE

// ************ Template Engine - (NO TOCAR) ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


//*************** Session + Middlewares de Aplicación ******************************* */
const session = require('express-session');

app.use(session({
    secret: 'Nombre del sitio',
    resave: false,
    saveUninitialized: true,
}));

app.use(userLoggedMiddleware)

/***************** Cookies ************************/
var recordameMiddleware=require("./middlewares/recordameMiddleware")
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(recordameMiddleware);





//Requisitos de routas
var indexRouter = require('./routes/indexRouter');
var loginRouter = require('./routes/loginRouter');
var profileRouter =require('./routes/profileRouter');
var productCartRouter = require('./routes/productCartRouter');
var productDetailRouter = require('./routes/productDetailRouter');
var registerRouter = require('./routes/registerRouter');
var uploadProductsRouter = require ('./routes/uploadProductsRouter');
var productsRouter = require('./routes/productsRouter');                    
var editProductsRouter = require('./routes/editProductsRouter');            
var editUserRouter = require('./routes/editUserRouter');           

// Aquí llamo a la ruta de las api de Productos
const apiProductsRouter = require('./routes/api/productsAPIRoutes')
//Aquí llamo a la ruta de las api de usuarios
const apiUserRouter = require('./routes/api/userAPIRoutes')


//llamados

app.use("/", indexRouter); 

app.use ("/products",productsRouter);

app.use("/login", loginRouter);

app.use("/productcart", productCartRouter);

app.use("/productDetail",productDetailRouter);

app.use("/register", registerRouter);

app.use("/uploadProducts", uploadProductsRouter);

app.use("/editProduct", editProductsRouter);

app.use("/editUser", editUserRouter);

app.use ("/profile", profileRouter)

//Aquí creo la colección de mis recursos de la base de datos (APIs)
app.use('/api/products',apiProductsRouter);
app.use('/api/users',apiUserRouter);

// ************ Set the server to listen - (NO TOCAR) ************
app.listen (3032, () => console.log ("Servidor corriendo http://localhost:3032/" ,"http://192.168.0.145:3032/" ));



