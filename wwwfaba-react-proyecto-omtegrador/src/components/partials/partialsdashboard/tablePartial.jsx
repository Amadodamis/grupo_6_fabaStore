import React from "react";

import '../../../css/stylesDashboard.css';
import '../../../css/styles.css';

function TablePartial(props){

const productosList=props.productos.map((prod,i)=>{
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
})


return(

    <React.Fragment>
        <h1 className="Pagina-dashboard-lista-productos">Pagina {props.currentPage} </h1>
        

        <thead className="indice-tabla">
                <tr>
                    <th>ID </th><th>Marca </th> <th>MODELO </th> <th>PRECIO</th> <th>STOCK</th> <th>% OFERTA</th>
                </tr>
        </thead>

        {productosList}
        <button onClick={props.prevHandler}>prev</button>
        <button onClick={props.nextHandler}>next</button>
    </React.Fragment>
)} 
export default TablePartial