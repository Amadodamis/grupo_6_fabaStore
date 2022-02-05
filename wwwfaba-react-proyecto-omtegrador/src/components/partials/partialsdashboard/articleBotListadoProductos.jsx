import React from "react";
import '../../../css/stylesDashboard.css';
import '../../../css/styles.css';

function ArticleBotListadoProductos(props){
    
return(

    <React.Fragment>
         <article className="articulos-dashboard-bot">
                            <p className="parrafos-total-dashboard"> Listado de todos los productos</p>
                            <br />
                            {props.productos.length === 0 &&  props.cargando ==="cargando" &&
                            <p className="parrafo-listado-productos">cargando... </p> 

                            }
                            {props.productos.length > 0 && 
                            props.productos.map((prod,i)=>{
                                return (
                                    
                                    <p key={i} className="parrafo-listado-productos-array">
                                        ID:{prod.id} MODELO: {prod.modelo} PRECIO: {prod.precio}$ Cant Stock: {prod.stockCantidad} Porcentaje Oferta:{prod.ofertaPorcentaje}
                                    </p>
                                   
                                )
                            })


                            }
            </article> 
    </React.Fragment>
)} 
export default ArticleBotListadoProductos