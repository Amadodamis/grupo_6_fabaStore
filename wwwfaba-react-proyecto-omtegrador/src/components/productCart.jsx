import Head from "./partials/head"
import Header from "./partials/header"
import Footer from "./partials/footer"
import PartialCarrito from "./partials/partialCarrito"

import "../css/styles.css"
import "../css/stylesProductCart.css"

import {Link} from "react-router-dom"


function ProductCart() {
    
    
    return (
      <body  className="body-productCart">
        <Head/>
        <Header/>
        <section className="container-banner">
          <div className="banner"> </div>
        </section>
        <main className="main-productCart" >
          <div className="mi-compra">
            <h1>Mi compra</h1>
          </div>
          
          <section className="box-compra">
            <section className="Productos">
              <PartialCarrito />
            </section> 

            <section className="box-right-bar-pago" >
                <section className="box-pago">
                  <div className="metodo-pago">                                
                        <p className="select">Metodo de pago:</p> 
                        <select className="select-button"name="select">
                            <option value="Efectivo" selected>Efectivo</option>
                            <option value="Tarjeta de credito">Tarjeta de credito</option>
                            <option value="Tarjeta de debito">Tarjeta de debito</option>
                            <option value="Mercadopago">Mercadopago</option>
                            <option value="Brubank">Brubank</option>
                            <option value="Metamask">Metamask</option>
                            <option value="Binance">Binance</option>
                        </select>
                  </div>

                  <div className="forma-de-envio">  
                            <p className="select">Forma de envio</p>
                            <select className="select-button" name="select">
                                <option value="Envio a domicilio">Envio a domicilio</option>
                                <option value="Retiro por el local">Retiro por el local</option>
                            </select>                      
                  </div>
                  
                  <div className="total-precio">
                        <p>Total a pagar</p>
                        <p className="total-precio-num">TotalaPagar $</p>
                    </div>
                  <br />
                    <div className="boton-comprar">
                        <button type="button" className="boton-productCart"> Confirmar compra <i className="far fa-check-circle"></i></button>
                    </div>

                </section>


            </section>

          </section>

        </main>
      <br />
        <Footer/>
      </body>
    );
  }
  
  export default ProductCart;