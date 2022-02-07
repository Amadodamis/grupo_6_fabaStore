import React from "react";
import { useState } from "react";
import '../../../css/stylesDashboard.css';
import '../../../css/styles.css';
import TablePartial from "./tablePartial";

const productosPorPagina=10;
function ArticleBotListadoProductos(props){

    const [productos,setProductos] = useState(props.productos)
    const [items,setItems]= useState([...props.productos].splice(0,productosPorPagina))
    const [currentPage,setCurrentPage]=useState(0)

    const  nextHandler =()=>{
        const totalElementos= productos.length;

        const nextPage=currentPage +1;
        const firstIndex=nextPage *productosPorPagina

        if (firstIndex >= totalElementos) {

            return;
        }

        setItems([...productos].splice(firstIndex,productosPorPagina))
        setCurrentPage(nextPage)

     }


   const  prevHandler =()=>{
        const prevPage=currentPage -1

        if (prevPage < 0 ) return;

        const firstIndex = prevPage *productosPorPagina
        setItems([...productos].splice(firstIndex,productosPorPagina))
        setCurrentPage(prevPage)
   }


return(

    <React.Fragment>
         <article className="articulos-dashboard-bot">
                            <p className="parrafos-total-dashboard"> Listado de todos los productos</p>
                            <br />
                            {props.productos.length === 0 &&  props.cargando ==="cargando" &&
                            <p className="parrafo-listado-productos">cargando... </p> 

                            }
                            {props.productos.length > 0 && 
                            <TablePartial 
                            currentPage={currentPage}
                            productos= {items}
                            prevHandler={prevHandler}
                            nextHandler={nextHandler}
                            /> }
            </article> 
    </React.Fragment>
)} 
export default ArticleBotListadoProductos