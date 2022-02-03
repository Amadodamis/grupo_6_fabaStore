import {Link} from "react-router-dom"

import "../../../css/styles.css"
import productox from "../../../img/gabinete.png"

let array = [1,2,3,4]
let items;

function Ofertas() {
    return (
      <div>
          <h1  className="main-h1" >Ofertas</h1>

          <section className="fila-productos">
            { items = array.map((number) =>
            <article className="producto-individual">
            <Link to="../../productDetail/id">
              <div><img className="img-producto" src={productox}/></div>
              <p className="precio"> Precio con Oferta o precio $</p>
              <p className="descuento"> oferta porcentaje % off</p>
              <p className="descripcion"> aca Marca modelo</p>
            </Link>
            </article>
            )}
          </section>
          
      </div>
    );
  }
  
export default Ofertas;