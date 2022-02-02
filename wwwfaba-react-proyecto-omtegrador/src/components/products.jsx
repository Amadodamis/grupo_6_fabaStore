import Footer from "./partials/footer"
import Head from "./partials/head"
import Header from "./partials/header"
import "../css/styles.css"

import {Link} from "react-router-dom"
import productoX from '../img/gabinete.png'


function products() {
    
    
    return (
      <div >
        <body className="body-index">
          <Head />
          <Header />

          <section class="container-banner">
            <div class="banner"> </div>
          </section>

          <div class="plus-button-fixed">
            <i class="fas fa-plus-circle"></i>     
          </div>
          <br />
          
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

          
        </body>  
      </div>
    );
  }
  
  export default products ;