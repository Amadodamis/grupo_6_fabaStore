import React from "react";
import '../../../css/stylesDashboard.css';
import '../../../css/styles.css';

function ArticlesBotImg(props){

return(

    <React.Fragment>
             <article className="articulos-dashboard-bot">
                            <div className="container-img-dashboard">
                                <img src={props.foto} alt="foto-producto" className="foto-producto-dashboard" />
                            </div>
                            <br />

                            <p className="parrafos-dashboard-bot">Ultimo producto agregado</p>
                            <br />
                            <p className="parrafos-dashboard-bot">Id: {props.id}</p>
                            <p className="parrafos-dashboard-bot">modelo:{props.modelo}</p>
                            <p className="parrafos-dashboard-bot">img: {props.img}</p>
                            <p className="parrafos-dashboard-bot">precio: {props.precio}</p>
                            <p className="parrafos-dashboard-bot">Cantidad Stock: {props.cantStock}</p>
                            <p className="parrafos-dashboard-bot">Porcentaje Oferta: {props.ofPorcentaje}</p>
                            <p className="parrafos-dashboard-bot">Especificaciones: {props.espec}</p>
                </article>
            

    </React.Fragment>
)} 

export default ArticlesBotImg