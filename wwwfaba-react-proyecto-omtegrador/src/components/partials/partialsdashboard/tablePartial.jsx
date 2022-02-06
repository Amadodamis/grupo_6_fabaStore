import React from "react";

import '../../../css/stylesDashboard.css';
import '../../../css/styles.css';

function TablePartial(props){
return(

    <React.Fragment>
        <thead className="indice-tabla">
                <tr>
                    <th>ID </th><th>Marca </th> <th>MODELO </th> <th>PRECIO</th> <th>STOCK</th> <th>% OFERTA</th>
                </tr>
        </thead>
            {props.productos.map((prod,i)=>{
                                return (
                                    <tr>
                                       <td>{prod.id}</td>
                                       <td>{prod.marca.nombreMarca}</td>
                                       <td>{prod.modelo}</td>
                                       <td>{prod.precio}$</td>
                                       <td>{prod.stockCantidad}</td>
                                       <td>{prod.ofertaPorcentaje}</td>
                                       </tr>
                                   
                                )
                        })}

    </React.Fragment>
)} 
export default TablePartial