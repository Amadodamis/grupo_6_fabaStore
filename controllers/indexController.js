let productos=require("../views/source/products");

function productosOfertaFunction (arrayProductos){
    let array=[];
    let maxActualOferta=0;
    let indice=0;              //indice es el valor que va a guardar la posicion del valor de oferta mas alto en la iteracion
    let contador=0;            //contador va a iterar dentro del forEach
    let indiceRepetido=[];     

    for (let i = 0; i <=3; i++) {
        arrayProductos.forEach(elemento=>{
            if (elemento.ofertaPorcentaje>=maxActualOferta){
                
                if(!indiceRepetido.includes(contador)){   //si el elemento no está repetido, lo incluyo.
                    maxActualOferta=elemento.ofertaPorcentaje;
                    indice=contador; 
                }

            }
            contador++;
            })

        indiceRepetido.push(indice);
        array[i]=arrayProductos[indice];
        maxActualOferta=0;contador=0;indice=0;
        
    }

return array;
}

let prodOferta=productosOfertaFunction(productos);

//Array contiene un array de 4 items, con los productos con mayor oferta dentro de productos


let controller={
    
    index:(req,res)=>{  // vista de la pantalla principal
        res.render("index",{prod:productos, prodOferta:prodOferta}) //
    },

}

module.exports = controller;

