import React from "react"
import Footer from "./partials/footer"
import Head from "./partials/head"
import Header from "./partials/header"
import "../css/styles.css"

import {Link} from "react-router-dom"
import productox from '../img/gabinete.png'


function products() {
  let array = [1,2,3,4,5,6,7,8,9,10,11,12]
    
    
    return (
        <body className="body-index">
          <Head />
          <Header />

          <section className="container-banner">
            <div className="banner"> </div>
          </section>

          <div className="plus-button-fixed">
            <i className="fas fa-plus-circle"></i>     
          </div>
          <br />
          <main className="barra-y-box-productos">
          <section className="barra-lateral">
                <Link to="/#"><p className="una-palabra-barra-lateral">Arma tu pc</p></Link>
                <Link to="/#"><p className="una-palabra-barra-lateral">Almacenamiento</p></Link>
                <Link to="/#"><p className="una-palabra-barra-lateral">Auriculares</p></Link>
                <Link to="/#"><p className="una-palabra-barra-lateral">Cables</p></Link>
                <Link to="/#"><p className="dos-palabras-barra-lateral">Combo actualizacion</p></Link>
                <Link to="/#"><p className="una-palabra-barra-lateral">Coolers</p></Link>
                <Link to="/#"><p className="una-palabra-barra-lateral">Fuentes de poder</p></Link>
                <Link to="/#"><p className="una-palabra-barra-lateral">Gabinetes</p></Link>
                <Link to="/#"><p className="una-palabra-barra-lateral">Memorias ram</p></Link>
                <Link to="/#"><p className="una-palabra-barra-lateral">Microfonos</p></Link>
                <Link to="/#"><p className="una-palabra-barra-lateral">Microprocesadores</p></Link>
                <Link to="/#"><p className="dos-palabras-barra-lateral">Monitores y televisores</p></Link>
                <Link to="/#"><p className="una-palabra-barra-lateral">Motherboards</p></Link>
                <Link to="/#"><p className="una-palabra-barra-lateral">Mouses</p></Link>
                <Link to="/#"><p className="una-palabra-barra-lateral">Notebooks</p></Link>
                <Link to="/#"><p className="una-palabra-barra-lateral">Parlantes</p></Link>
                <Link to="/#"><p className="una-palabra-barra-lateral">Placas de video</p></Link>
                <Link to="/#"><p className="una-palabra-barra-lateral" >Sillas gamer</p></Link>
                <Link to="/#"><p className="una-palabra-barra-lateral">Teclados</p></Link>
                <Link to="/#"><p className="una-palabra-barra-lateral">Webcams</p></Link>
            </section>

          <section className="box-productos-main">
          <h1 className="main-h1"> Todos los productos </h1>
              <section className="fila-productos">
                {array.map((number,i) =>
                  <article key={number+i} className="producto-individual">
                    <Link to="../../productDetail/id">
                      <div><img className="img-producto" src={productox} alt="img-producto"/></div>
                      <p className="precio"> Precio con Oferta o precio $</p>
                      <p className="descuento"> oferta porcentaje % off</p>
                      <p className="descripcion"> aca Marca modelo</p>
                    </Link>
                  </article>
                )}
              </section>


          </section>
        
        </main>

        <br />
        <Footer />
        </body>  
    );
  }
  
  export default products ;