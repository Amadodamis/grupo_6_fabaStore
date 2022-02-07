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
       <table>
        <thead className="indice-tabla">
                <tr>
                    <th>ID</th><th>Marca</th> <th>MODELO</th> <th>PRECIO</th> <th>STOCK</th> <th>%OFERTA</th>
                </tr>
        </thead>

        {productosList}
        </table>
        <br />
        <div>
        <p className="Pagina-dashboard-lista-productos">Pagina {props.currentPage} </p>
        <button className="boton-agregar-comprar-carrito" onClick={props.prevHandler}>prev</button>
        <button className="boton-agregar-comprar-carrito" onClick={props.nextHandler}>next</button>
        </div>
    </React.Fragment>
)} 
export default TablePartial