const funcionesProductos={
  precioConOferta:function precioConOfertaf(array){
    for (let i = 0; i < array.length; i++) {
        array[i].precioConOferta= array[i].precio-(array[i].precio*array[i].ofertaPorcentaje/100)
        
    }
    return array
    },

    productosOfertaFunction:function productosOfertaFunction (arrayProductos){ //ProductosOfertaFunction recibe todos los productos y devuelve los 4 productos con mayor oferta
        
        arrayProductos.sort(((a, b)=> b.ofertaPorcentaje - a.ofertaPorcentaje))

        let array4mayores=[];
        for (let i=0; i<4; i++){
            array4mayores.push(arrayProductos[i])
        }
        return array4mayores;    
    },

    precioConOfertaIndividual:function precioConOfertaIndividual(oferta,precio){
        precioNuevo=precio-(precio*oferta/100)    
        return precioNuevo;
    },

}

module.exports=funcionesProductos;