import React from "react";
import '../../../css/stylesDashboard.css';

import '../../../css/styles.css';

function ArticlesBotImg(props){
    
    
    let ultElemento = 0;
    
if (props.ultProducto > 0){
    ultElemento= props.productos.find(element => 
        element.id === props.ultProducto )
    }
    
    console.log(ultElemento)
    ///static/media/producto_1636423556561.png
return(

    <React.Fragment>
                        {
                        props.productos.length === 0 && props.cargando ==="cargando" &&
                            <article className="articulos-dashboard-bot">
                            <div className="container-img-dashboard">
                                <img src={props.foto} alt="foto-producto" className="foto-producto-dashboard" />
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
                            <div className="container-img-dashboard">
                                <img src={`http://localhost:3000/img/${ultElemento.img}`} alt="foto-producto" className="foto-producto-dashboard" />
                            </div>
                            <br />

                            <p className="parrafos-dashboard-bot">Ultimo producto agregado</p>
                            <br />
                            <p className="parrafos-dashboard-bot">Id:{ultElemento.id} </p>
                            <p className="parrafos-dashboard-bot">modelo: {ultElemento.modelo}</p>
                            <p className="parrafos-dashboard-bot">img:{ultElemento.img} </p>
                            <p className="parrafos-dashboard-bot">precio:{ultElemento.precio} </p>
                            <p className="parrafos-dashboard-bot">Cantidad Stock: {ultElemento.cantStock}</p>
                            <p className="parrafos-dashboard-bot">Porcentaje Oferta: {ultElemento.ofertaPorcentaje}</p>
                            <p className="parrafos-dashboard-bot">Especificaciones:{ultElemento.especificaciones} </p>
                        </article>
                        }
            

    </React.Fragment>
)} 

export default ArticlesBotImg