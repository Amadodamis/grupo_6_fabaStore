let tipoProducto=[
  /*0*/ "Otro",
  /*1 */"Almacenamiento",  
  /*2*/ "Auriculare",       
  /*3*/ "Cable",            
  /*4*/ "Cooler",           
  /*5*/ "Fuente",           
  /*6*/ "Gabinete",
  /*7*/ "Memoria Ram",
  /*8*/ "Microfono",
  /*9*/ "Microprocesador",
  /*10*/"Monitor o televisor",
  /*11*/"Motherboard",
  /*12*/"Mouse",
  /*13*/"notebook",
  /*14*/"Parlante",
  /*15*/"Placa de video",
  /*16*/"Sillas gammer",
  /*17*/"Teclado",
  /*18*/"Webcam",

];



//producto rapido

/*

  {
        modelo:"",
        marca:"",
        tipoProducto:tipoProducto[],                    //Tipo producto
        img:"",
        precio:"",                          //tipo num 
        stock:true,
        stockCant:"",                        //tipo num 
        oferta:false,
        ofertaPorcentaje:0,
        precioConOferta:precionConOfertafunction(this.precio, this.ofertaPorcentaje),                 //tipo num 
        cuotasSinInteres:false,
    },
    
*/
function precioConOfertaf(precioAct,porcentaje,oferta) {
    let precioNuevo=precioAct; //para evitar errores.
    
    if (oferta){
     precioNuevo=(precioAct-(precioAct/100)*porcentaje);
    }

    return precioNuevo;
}



let productos=[
    {
        modelo:"G502",
        marca:"Logitech",
        tipoProducto:tipoProducto[12],     //Tipo producto
        img:"/img/mouseG502.png",
        precio:5400,      //tipo num 
        stock:true,
        stockCant:1,  //tipo num 
        oferta:true,
        ofertaPorcentaje:15,
        precioConOferta:precioConOfertaf(5400,15,true), 
        cuotasSinInteres:false,
    },
    {
        modelo:"B550",
        marca:"Asus",
        tipoProducto:tipoProducto[11],     //Tipo producto
        img:"/img/motherb550.png",
        precio:12200,      //tipo num 
        stock:true,
        stockCant:1,  //tipo num 
        oferta:true,
        ofertaPorcentaje:20,
        precioConOferta:precioConOfertaf(12200,20,true),
        cuotasSinInteres:false,
    },
    {

        modelo:"Ryzen 5 - 5600x",
        marca:"AMD",
        tipoProducto:tipoProducto[9],                    //Tipo producto
        img:"/img/ryzen5-5600X.png",
        precio:31370,                          //tipo num 
        stock:true,
        stockCant:1,                        //tipo num 
        oferta:true,
        ofertaPorcentaje:10,
        precioConOferta:precioConOfertaf(31370,10,true), 
        cuotasSinInteres:false,
    },
    {

        modelo:"Tridentz 8gb",
        marca:"G.skill",
        tipoProducto:tipoProducto[7],                    //Tipo producto
        img:"/img/ramGskill.png",
        precio:22000,                          //tipo num 
        stock:true,
        stockCant:1,                        //tipo num 
        oferta:false,
        ofertaPorcentaje:25,
        precioConOferta:precioConOfertaf(22000,25,true),
        cuotasSinInteres:false,
    },
    {

        modelo:"RTX 3060ti",
        marca:"Geforce now",
        tipoProducto:tipoProducto[15],                    //Tipo producto
        img:"/img/Nvidia3060ti.png",
        precio:182540,                          //tipo num 
        stock:true,
        stockCant:1,                        //tipo num 
        oferta:true,
        ofertaPorcentaje:15,
        precioConOferta:precioConOfertaf(182540,15,true),                //tipo num 
        cuotasSinInteres:false,
    },
    {

        modelo:"RM-850",
        marca:"Gigabyte",
        tipoProducto:tipoProducto[5],                    //Tipo producto
        img:"/img/FuenteAlimentación.png",
        precio:17780,                          //tipo num 
        stock:true,
        stockCant:1,                        //tipo num 
        oferta:true,
        ofertaPorcentaje:10,
        precioConOferta:precioConOfertaf(17780,10,true),
        cuotasSinInteres:false,
    },
    {

        modelo:"atx k501l",
        marca:"Cooler Master",
        tipoProducto:tipoProducto[6],                    //Tipo producto
        img:"/img/Gabinete.png",
        precio:8890,                          //tipo num 
        stock:true,
        stockCant:1,                        //tipo num 
        oferta:true,
        ofertaPorcentaje:35,
        precioConOferta:precioConOfertaf(8890,35,true),
        cuotasSinInteres:false,
    },
    {

        modelo:"Mcbook pro 2019",
        marca:"Mac",
        tipoProducto:tipoProducto[13],                    //Tipo producto
        img:"img/img-macbook-pro-2019.png",
        precio:200000,                          //tipo num 
        stock:true,
        stockCant:1,                        //tipo num 
        oferta:false,
        ofertaPorcentaje:0,
        precioConOferta:precioConOfertaf(20000,0,false), 
        cuotasSinInteres:false,
    },

]


module.exports=productos;