import Footer from "./partials/footer"
import Head from "./partials/head"
import banner from '../img/logo-faba-dimensionado.jpg'

import {Link,Route,Routes} from "react-router-dom"


function index() {
    
    
    return (
      <div >


       <Head />
       <img src={banner} />

        <body classNameName="body-index" >
          
          {/* <%- include('./partials/header') %>*/}

          {/* <section classNameName="container-banner">
              <div classNameName="banner"> </div>
          </section>*/}
          
          {/*
          <div className="plus-button-fixed">
            <i className="fas fa-plus-circle"></i>
          </div> */}
          <br />

          <main>
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
           
            {/* 
            <%- include('./partials/partials-index/ofertas') %>

            <%- include('./partials/partials-index/explora') %>
            */}

            </section>


          </main>
          <br />
            <Footer />
            {/*<%- include('./partials/footer') %> */}
        </body>
      


      </div>
    );
  }
  
  export default index ;