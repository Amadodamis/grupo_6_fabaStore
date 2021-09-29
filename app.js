const express = require ("express")
const app = express ()

const path = require ("path")

app.use(express.static(path.resolve(__dirname, "./public")));

app.listen (3030, () => console.log ("Servidor corriendo http://localhost:3030/index" ,"http://192.168.0.145:3030/index" ));

app.get("/index", (req,res) => {
    const fileToSend = path.join (__dirname, "/views/index.html")
    res.sendFile(fileToSend);
})

app.get("/register", (req, res) => {
    const fileToSend2 = path.join (__dirname, "/views/register.html");
    res.sendFile(fileToSend2)
});

app.get("/productCart", (req, res) => {
    const fileToSend2 = path.join (__dirname, "/views/productCart.html");
    res.sendFile(fileToSend2)
});
app.get("/productDetail", (req, res) => {
    const fileToSend2 = path.join (__dirname, "/views/productDetail.html");
    res.sendFile(fileToSend2)
});

app.post("/register", (req,res) => {
    res.redirect("/index")
})

app.get("/login", (req,res) => {
    const fileToSend3 = path.join (__dirname, "/views/login.html");
    res.sendFile(fileToSend3)
});

app.post("/login", (req,res) => {
    res.redirect("/index")
})

