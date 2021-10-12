const express = require ("express")
const app = express ()

const path = require ("path")

app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, "./public")));

app.listen (3032, () => console.log ("Servidor corriendo http://localhost:3032/index" ,"http://192.168.0.145:3030/index" ));

app.get("/index", (req,res) => {
    //const fileToSend = path.join (__dirname, "/views/index.html")
    res.render("index.ejs");
})

app.get("/register", (req, res) => {
    //const fileToSend2 = path.join (__dirname, "/views/register.html");
    res.render("register.ejs")
});

app.get("/productCart", (req, res) => {
    //const fileToSend2 = path.join (__dirname, "/views/productCart.html");
    res.render("productCart.ejs")
});
app.get("/productDetail", (req, res) => {
   //const fileToSend2 = path.join (__dirname, "/views/productDetail.html");
    res.render("productDetail")
});

app.post("/register", (req,res) => {
    res.redirect("/index")
})

app.get("/login", (req,res) => {
    //const fileToSend3 = path.join (__dirname, "/views/login.html");
    res.render("login.ejs")
});

app.post("/login", (req,res) => {
    res.redirect("/index")
})

