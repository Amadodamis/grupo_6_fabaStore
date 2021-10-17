let productos=require("../source/products")

// tipo de dato para el carrito personal 
let carritoPersonal=[
    {
        ArmadoEnElLocal:false,
        Nombre:"Armado de la computadora",
        precio:1000,
        img:"img/armado-pc-producto.png",
    },
    
];  // todos los users, van a tener un array cart en la que la posicion 0 (user.cart[0]) es excluisva para el armado de la pc, y es un tipo de dato booleano. 



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
    totalApagar:0,
    },
    {
        user:"jmilei",
        nUser:1,
        admin:false,
        nombre_y_apellido:"Javier Gerardo Milei",
        mail:"jmilei@gmail.com",
        password:"libertadAvanza2020",
        domicilio:"calle falsa 123",
        cart:carritoPersonal,
        totalApagar:0,
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
    totalApagar:0,
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
        totalApagar:0,
    },

]

//constructor del usuario anonimo para poder trabajar

let cartDefault=carritoPersonal;       //se le asigna a la posicion 0, el armado de computadora
cartDefault[0].ArmadoEnElLocal=true;  //se le asigna true para que aparezca en el carrito.

cartDefault.push(productos[3])        //se le asigna a la posicion 1, la macbook
cartDefault.push(productos[1])        //2 macbooks
cartDefault.push(productos[5])         //3macbooks
cartDefault.push(productos[7])          //4mcbooks


users[0].cart=cartDefault;  //asignacion del array al usuario 0 (el admin )


module.exports=users;