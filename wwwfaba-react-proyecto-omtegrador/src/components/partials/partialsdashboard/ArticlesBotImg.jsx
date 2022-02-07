import React from "react";
import '../../../css/stylesDashboard.css';

import '../../../css/styles.css';

function ArticlesBotImg(props){
    
    
    let ultElemento = 0;
    
if (props.ultProducto > 0){
    ultElemento= props.productos.find(element => 
        element.id === props.ultProducto )
    }
    
return(

    <React.Fragment>
                        {
                        props.productos.length === 0 && props.cargando ==="cargando" &&
                            <article className="articulos-dashboard-bot">
                            <div className="container-img-dashboard">
                                <img src="" alt="foto-producto" className="foto-producto-dashboard" />
                            </div>
                            <br />

                            <p className="parrafos-dashboard-bot">Ultimo producto agregado</p>
                            <br />
                            <p className="parrafos-dashboard-bot">{props.cargando}</p>
                            
                        </article>
                        }

                        {
                        props.productos.length > 0 && 
                            <article className="articulos-dashboard-bot">
                            
                                <div className="container-parrafos-ultimo-producto">
                                <p className="titulo-ultimo-producto-agregado">Ultimo producto agregado</p>
                                </div>
                                <br />
                                <div className="container-table-ult-producto">
                                    <table>
                                    <thead >
                                        <tr>
                                            <th>ID</th><th>MARCA</th><th>MODELO</th><th>IMG</th><th>PRECIO</th><th>STOCK</th>
                                        </tr>
                                    </thead>
                            
                                    <tr>
                                        <td>{ultElemento.id}</td>
                                        <td>{ultElemento.marca.nombreMarca}</td>
                                        <td>{ultElemento.modelo}</td>
                                        <td>{ultElemento.img}$</td>
                                        <td>{ultElemento.precio}$</td>
                                        <td>{ultElemento.stockCantidad}</td>
                                    </tr>
                                    </table>
                                </div>


                            <div className="container-img-dashboard">
                                <img src={`http://localhost:3000/img/${ultElemento.img}`} alt="foto-producto" className="foto-producto-dashboard" />
                            </div>
                            
                        </article>
                        }
            

    </React.Fragment>
)} 

export default ArticlesBotImg