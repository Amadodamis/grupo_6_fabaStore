import React from "react"
import {useState,useEffect} from "react"


function ApiHook(){
    
    const [productos, setProductos]=useState([])
    
    useEffect(()=>{
        console.log("Se monto el componente")
        obtenerDatos()
    },[])

    const obtenerDatos= async () =>{
        const data = await fetch("api/products")
        const productos = await data.json()
        setProductos(productos)
    }

    
   console.log(productos.products.length)


{
return(
    <div>  
    
  </div>
    
)}
}

export default ApiHook

