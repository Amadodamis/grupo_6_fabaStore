let productos=require("../source/products")
// tipo de dato para el carrito personal con la posicion 0 exclusiva de el producto armado en el local (tipo booleano)
let carritoPersonal=[
    {
        ArmadoEnElLocal:false,
    },
    
];


let users=[
    {
    user:"admin",
    nUser:0,
    admin:true,
    nombre_y_apellido:"admin",
    mail:"admin@gmail.com",
    password:"admin123",
    domicilio:"anonimo",
    cart:carritoPersonal,  

    },
    {
        user:"jmilei",
        nUser:1,
        admin:false,
        nombre_y_apellido:"Javier Gerardo Milei",
        mail:"jmilei@gmail.com",
        password:"libertadAvanza2020",
        domicilio:"calle falsa 123",
        cart:carritoPersonal,                   //cart es un vector con todos sus items que selecciono, y se envian por parametro a Product Cart
    },
    
    {  
    user:"Dtrump2025",
    nUser:2,
    admin:false,
    nombre_y_apellido:"Donald trump",
    mail:"dtrump@gmail.com",
    password:"CHAINA-CHAINA-CHAINA",
    domicilio:"725 5th Ave, New York, NY 10022, EE. UU.",
    cart:carritoPersonal,
    },
    

    {
        user:"Satoshi nakamoto ",
        nUser:3,
        admin:false,
        nombre_y_apellido:"Satoshi nakamoto",
        mail:"SatoshiBTC@gmail.com",
        password:"BTCISNOTABUBBLE",
        domicilio:"NADIE LO SABE Y NADIE LO SABRA",
        cart:carritoPersonal,
    },

]

//constructor del usuario anonimo para poder trabajar

let cartDefault=carritoPersonal;       //se le asigna a la posicion 0, el armado de computadora
cartDefault[0].ArmadoEnElLocal=true;  //se le asigna true para que aparezca en el carrito.
cartDefault.push(productos[7])        //se le asigna a la posicion 1, la macbook
cartDefault.push(productos[7])        //2 macbooks
cartDefault.push(productos[7])         //3macbooks
cartDefault.push(productos[7])          //4mcbooks

users[0].cart=cartDefault;  //asignacion del array al usuario 0 (el admin )
console.log(users[0])  


module.exports=users;