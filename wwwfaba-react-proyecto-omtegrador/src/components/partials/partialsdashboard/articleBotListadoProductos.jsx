import React from "react";
import '../../../css/stylesDashboard.css';
import '../../../css/styles.css';
import TablePartial from "./tablePartial";

function ArticleBotListadoProductos(props){
    
return(

    <React.Fragment>
         <article className="articulos-dashboard-bot">
                            <p className="parrafos-total-dashboard"> Listado de todos los productos</p>
                            <br />
                            {props.productos.length === 0 &&  props.cargando ==="cargando" &&
                            <p className="parrafo-listado-productos">cargando... </p> 

                            }
                            {props.productos.length > 0 && <TablePartial productos= {props.productos}/> }
            </article> 
    </React.Fragment>
)} 
export default ArticleBotListadoProductos