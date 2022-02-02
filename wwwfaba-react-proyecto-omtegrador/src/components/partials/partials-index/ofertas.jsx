import {Link} from "react-router-dom"

function Ofertas() {
    return (
      <div>
          <h1 className="main-h1"> Ofertas  </h1>

      <section className="fila-productos">
        {/*<% for( let index = 0; index < prodOferta.length; index++ ) { %> */}
    
        {/* 
    <article className="producto-individual">
        <Link to="../../productDetail/<%= prodOferta[index].id %>">
            <div><img className="img-producto" src=/img/<%= prodOferta[index].img %> ></div>
        
            <div className="descripcion-producto-main">
                <p className="precio"> <%= prodOferta[index].precioConOferta %> $</p>
                <p className="descuento"> <%= prodOferta[index].ofertaPorcentaje %> % off</p>
                <p className="descripcion"> <%= prodOferta[index].modelo %> <%= prodOferta[index].marca.nombreMarca %></p>
            </div>
        </Link>
    </article>

      */}

    {/*<% } %> */}
    </section>
      </div>
    );
  }
  
export default Ofertas;