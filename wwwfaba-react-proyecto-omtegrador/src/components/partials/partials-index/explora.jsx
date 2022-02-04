import {Link} from "react-router-dom"

import "../../../css/styles.css"
import productox from "../../../img/gabinete.png"


function Explora() {
  
  let array = [1,2,3,4,5,6,7,8]

    return (
      <div>
        <h1  className="main-h1" >Explorá</h1>

        <section className="fila-productos">
        {array.map((number,i) =>
        <article key={number+i}className="producto-individual">
          <Link to="../../productDetail/id">
              <div><img className="img-producto" src={productox} alt="img-producto"/></div>
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
  
export default Explora;