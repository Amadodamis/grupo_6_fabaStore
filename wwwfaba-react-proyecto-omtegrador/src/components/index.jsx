import '../css/styles.css';
import Footer from "./partials/footer"
import Head from "./partials/head"
import Header from "./partials/header"
import Explora from "./partials/partials-index/explora"
import Ofertas from './partials/partials-index/ofertas';



import {Link,Route,Routes} from "react-router-dom"


function index() {
    
    
    return (
      <div>

        <Head />
      
        <body className="body-index" >

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
           
            <Ofertas />
            <Explora />

            </section>

          </main>

          <br />

          
        <Footer />
        </body>
      


      </div>
    );
  }
  
  export default index ;