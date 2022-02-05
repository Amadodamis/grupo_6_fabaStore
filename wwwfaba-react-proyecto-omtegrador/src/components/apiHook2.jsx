import {useState,useEffect} from "react"

function ApiHook2(){

    const [productos,setProductos]=useState([]);
    
    useEffect(()=>{

        console.log("se monto el componente")
        fetch("api/products")
        .then(response=> response.json())
        .then(data=>{
            setProductos(data.products)
        })
        .catch(error=>console.log(error))
    },[])

    const [meta,setMeta]=useState(0);
    
    useEffect(()=>{

        console.log("se monto el componente")
        fetch("api/products")
        .then(response=> response.json())
        .then(data=>{
            setMeta(data.meta)
        })
        .catch(error=>console.log(error))
    },[])

    console.log(meta)


return(
            <div>  
                {productos.length === 0 && 
                <p>No se encontraron productos</p>
                }
                {
                    productos.length >0 &&  productos.map((prod,i)=>{
                        return (
                            <p key={i}>{prod.modelo} y su id {prod.id} y esto viene por meta {meta.total} </p>
                        )
                    })
                }
            </div>
    
)}

export default ApiHook2

