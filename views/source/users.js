const fs = require('fs');
const path = require('path');

//requiero la base de datos de json
const productsFilePath = path.join(__dirname, '../../data/productsDataBase.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

/* requiero la base de datos de usuarios*/
const usersFilePath = path.join(__dirname, '../../data/usersDataBase.json');
const usersArray = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


// tipo de dato para el carrito personal por que no se declararlo en un JSON como tipo de dato "carrito personal"
let carritoPersonal=[
    {
        ArmadoEnElLocal:false,
        Nombre:"Armado de la computadora",
        precio:1000,
        img:"img/armado-pc-producto.jpg",
    },
    
];  


// todos los users, van a tener una propiedad "cart" q es su carrito personal, donde la posicion 0, es exclusiva para el "armado de la computadora"
// cart[0].ArmadoEnElLocal  es un tipo de dato booleano, que verifica si el usuario arma o no su computadora en FABA.



let users=usersArray;



//**************constructor del usuario anonimo/admin para poder trabajar actualmente. ************************


let cartDefault=carritoPersonal;       //se le asigna a la posicion 0, el armado de computadora
cartDefault[0].ArmadoEnElLocal=true;  //se le asigna true para que aparezca en el carrito.

cartDefault.push(productos[1]);cartDefault.push(productos[3]);cartDefault.push(productos[5]);cartDefault.push(productos[7]);      
users[0].cart=cartDefault;  //asignacion del array al usuario 0 (el admin )

// sumatoria de total a pagar
if (users[0].ArmadoEnElLocal){
    users[0].totalApagar=users[0].totalApagar+users[0].precio;
} //total a pagar + precio de armado

if (productos[3].oferta){  //en el if pregunta, si el producto esta en oferta, total a pagar+ precio en oferta, si no, total a pagar+precio
    users[0].totalApagar=users[0].totalApagar+ productos[3].precioConOferta;
}else{users[0].totalApagar=users[0].totalApagar+ productos[3].precio}


if (productos[1].oferta){
    users[0].totalApagar=users[0].totalApagar+ productos[1].precioConOferta;
}else{users[0].totalApagar=users[0].totalApagar+ productos[1].precio}

if (productos[5].oferta){
    users[0].totalApagar=users[0].totalApagar+ productos[5].precioConOferta;
}else{users[0].totalApagar=users[0].totalApagar+ productos[5].precio}

if (productos[7].oferta){
    users[0].totalApagar=users[0].totalApagar+ productos[7].precioConOferta;
}else{users[0].totalApagar=users[0].totalApagar+ productos[7].precio}

// ***************** FIN  del constructor momentaneo para poder trabajar**************************************







module.exports=users;