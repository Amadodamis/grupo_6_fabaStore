import {useState,useEffect} from "react"

function ApiHook(){

    const [productos,setProductos]=useState([]);
    
    useEffect(()=>{

        console.log("se monto el componente")
        fetch("api/products")
        .then(response=> response.json())
        .then(data=>{
            setProductos(data.data.products)
        })
        .catch(error=>console.log(error))
    },[])


return(
            <div>  
                
                    {/*
                     {productos.map((producto)=>{
      
                        {producto.modelo}
                     })}
                    
                    */}
            </div>
    
)}

export default ApiHook