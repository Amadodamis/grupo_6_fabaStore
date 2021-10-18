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
  /*13*/"Notebook",
  /*14*/"Parlante",
  /*15*/"Placa de video",
  /*16*/"Sillas gammer",
  /*17*/"Teclado",
  /*18*/"Webcam",

];

//producto rapido

/*

  {
        modelo:"",                                  //modelo del producto                       tipo string
        marca:"",                                   //marca del producto                        tipo string
        tipoProducto:tipoProducto[],                //Tipo producto ejemplo motherboard/mouse   tipo string
        img:"",                                     //ruta del producto incluyendo /img         tipo string
        precio:"",                                  //precio del producto ,                     tipo num 
        stock:true,                                 //Si existe producto en stock               tipo booleano
        stockCant:"",                               //Cantidad del mismo producto               tipo num   
        oferta:false,                               //Existe oferta para el producto            tipo booleano
        ofertaPorcentaje:0,                         //Cuantitividad de la oferta                tipo num
        precioConOferta:precionConOfertafunction(this.precio, this.ofertaPorcentaje),       tipo num
        cuotasSinInteres:false,                     //si el producto tiene o no interes         tipo boolean 
        cantCuotas:0,                               //cantidad de cuotas                        tipo num
        precioEnCuotas:0,                           //precio en cuotas                          tipo num
        especificaciones:[{propiedad:valor}],       //array donde cada posicion  es una especificacion  tipo array de objetos
                                                                                       
    },
    
*/


function precioConOfertaf(precioAct,porcentaje,oferta) {
    let precioNuevo=precioAct; //para evitar errores.
    
    if (oferta){
     precioNuevo=(precioAct-(precioAct/100)*porcentaje);
    }

    return precioNuevo;
}

function interesCuota(hayInteres,precio,cuotas){
    let precioNuevo;
    if (hayInteres==false){
        return precio;
    }

    if (cuotas==0) {
        return precio;

    }else if (cuotas==3){
        //interes 3%
        precioNuevo= (precio+((precio/100)*3));
        return precioNuevo;
    }else if(cuotas==6){
        //interes 3.7
        precioNuevo= (precio+((precio/100)*3.7));
        return precioNuevo;
    }else if (cuotas==12){
        //interes 5.5
        precioNuevo= (precio+((precio/100)*5.5));
        return precioNuevo;
    }else{
        //interes 5.5+ 0.3% por cada cuota 
        let interes=5.5+((cuotas-12)*0.3);
        precioNuevo= (precio+((precio/100)*interes));
        return precioNuevo;
    }
   //devuelve el precio con el porcentaje de interes
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
        cantCuotas: 12,
        interescuota: 0,
        precioEnCuotas: 6480,
        especificaciones:[],
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
        cantCuotas:0,
        interescuota:0,
        precioEnCuotas:0,  
        especificaciones:[],
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
        cantCuotas:0,
        interescuota:0,
        precioEnCuotas:0,  
        especificaciones:[],
    },
    {

        modelo:"Tridentz 8gb",
        marca:"G.skill",
        tipoProducto:tipoProducto[7],                    //Tipo producto
        img:"/img/ramGskill.png",
        precio:22000,                          //tipo num 
        stock:true,
        stockCant:1,                        //tipo num 
        oferta:true,
        ofertaPorcentaje:25,
        precioConOferta:precioConOfertaf(22000,25,true),
        cuotasSinInteres:false,
        cantCuotas:0,
        interescuota:0,
        precioEnCuotas:0,  
        especificaciones:[],
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
        cantCuotas:0,
        interescuota:0,
        precioEnCuotas:0,  
        especificaciones:[],
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
        cantCuotas:0,
        interescuota:0,
        precioEnCuotas:0,  
        especificaciones:[],
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
        cantCuotas:0,
        interescuota:0,
        precioEnCuotas:0,  
        especificaciones:[],
    },
    {

        modelo:"Mcbook pro 2019",
        marca:"Mac",
        tipoProducto:tipoProducto[13],                    //Tipo producto
        img:"/img/img-macbook-pro-2019.png",
        precio:200000,                          //tipo num 
        stock:true,
        stockCant:1,                        //tipo num 
        oferta:false,
        ofertaPorcentaje:0,
        precioConOferta:precioConOfertaf(20000,0,false), 
        cuotasSinInteres:false,
        cantCuotas:0,
        interescuota:0,
        precioEnCuotas:0,  
        especificaciones:[],
    },
    {
        modelo:"alloy elite",
        marca:"Hyper-x",
        tipoProducto:tipoProducto[17],                    
        img:"/img/Alloy-elite-hyperx.png",
        precio:50000,                          
        stock:true,
        stockCant:1,                      
        oferta:true,
        ofertaPorcentaje:7,
        precioConOferta:precioConOfertaf(50000,7,true), 
        cuotasSinInteres:false,
        cantCuotas:0,
        interescuota:0,
        precioEnCuotas:0,  
        especificaciones:[],
    },
    {
        modelo:"I9 LGA 2066 ",
        marca:"Intel",
        tipoProducto:tipoProducto[9],                    
        img:"/img/i9-lga-2066.png",
        precio:250000,                          
        stock:true,
        stockCant:1,                      
        oferta:false,
        ofertaPorcentaje:0,
        precioConOferta:precioConOfertaf(95000,0,false), 
        cuotasSinInteres:false,
        cantCuotas:0,
        interescuota:0,
        precioEnCuotas:0,  
        especificaciones:[],
    },
    {
        modelo:"HD 5970 ",
        marca:"Ati radeon",
        tipoProducto:tipoProducto[15],                    
        img:"/img/Ati-radeon-5970.png",
        precio:19000,                          
        stock:true,
        stockCant:1,                      
        oferta:true,
        ofertaPorcentaje:30,
        precioConOferta:precioConOfertaf(19000,30,true), 
        cuotasSinInteres:false,
        cantCuotas:0,
        interescuota:0,
        precioEnCuotas:0,  
        especificaciones:[],

    },
    {
        modelo:"r9 ",
        marca:"Ati radeon",
        tipoProducto:tipoProducto[15],                    
        img:"/img/Ati-radeon-r9.png",
        precio:84000,                          
        stock:true,
        stockCant:1,                      
        oferta:false,
        ofertaPorcentaje:0,
        precioConOferta:precioConOfertaf(95000,0,false), 
        cuotasSinInteres:false,
        cantCuotas:0,
        interescuota:0,
        precioEnCuotas:0,  
        especificaciones:[], 
    },
    {
        modelo:"X 399 AORUS",
        marca:"gigabyte",
        tipoProducto:tipoProducto[11],                    
        img:"/img/gigabyte-399.png",
        precio:75000,                          
        stock:true,
        stockCant:1,                      
        oferta:false,
        ofertaPorcentaje:0,
        precioConOferta:precioConOfertaf(95000,0,false), 
        cuotasSinInteres:false,
        cantCuotas:0,
        interescuota:0,
        precioEnCuotas:0,  
        especificaciones:[], 
    },
    {
        modelo:"ATX b350",
        marca:"ASUS",
        tipoProducto:tipoProducto[11],                    
        img:"/img/asus-atx-b350.png",
        precio:65000,                          
        stock:true,
        stockCant:1,                      
        oferta:false,
        ofertaPorcentaje:0,
        precioConOferta:precioConOfertaf(95000,0,false), 
        cuotasSinInteres:false,
        cantCuotas:0,
        interescuota:0,
        precioEnCuotas:0,  
        especificaciones:[],
        
    },
    {
        modelo:"I7 7700K",
        marca:"Intel",
        tipoProducto:tipoProducto[9],                    
        img:"/img/i7-7700k.png",
        precio:150000,                          
        stock:true,
        stockCant:1,                      
        oferta:true,
        ofertaPorcentaje:13,
        precioConOferta:precioConOfertaf(150000,13,true), 
        cuotasSinInteres:false,
        cantCuotas:0,
        interescuota:0,
        precioEnCuotas:0,  
        especificaciones:[],
    },
]


module.exports=productos;
