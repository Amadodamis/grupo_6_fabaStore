import Footer from "./partials/footer"
import Head from "./partials/head"
import Header from "./partials/header"
import "../css/styles.css"
import "../css/stylesProductDetail.css"
import productoX from '../img/gabinete.png'
import {Link} from "react-router-dom"

function ProductDetail() {
    
    
    return (
        <body className="body-index">
            <Head />
            <Header />
            <section className="container-banner">
              <div className="banner"> </div>
            </section>

             <br />
        
            <main className="main-detalle-del-producto">
                <section>
                    <div className="ficha">
                        <div className="izquierda">
                    
                        <h2 className="estilo-Titulo-DP">tipo producto marca modelo </h2>
                        <div>
                            <img className="imagen-Produc-Detail" src={productoX} />
                        </div>

                        <div className="estilos-Especificaciones-DP">
                            <h3 className="tamaño-h3-DP">Especificaciones</h3>
                            <ul className="tamaño-ul-DP">
                                <li className="distancia-Especificaciones"> <p>Marca</p> <span></span></li>
                                <li className="distancia-Especificaciones"> <p>Modelo</p> <span></span></li>
                                <li className="distancia-Especificaciones"> <p>Tipo de producto</p> <span></span></li>
                            </ul>
                         </div>
                        </div>

                        <div className="derecha">
                        <div className="estilos-Precio-DP"> 
                            <h1 className="Precio-DP">$precio con oferta</h1>
                            <h1 className="titulos-h1"> Precio en Cuotas </h1>
                            <h3 className="Precio-DP">$precio en cuotas</h3>        
                        </div>

                        <div className="info-ficha-cuotas">
                            <div className="iconos-DP">
                                <i className="fas fa-credit-card iconos-DP-tamaño"></i>
                            </div>
                            <div>
                                <p>  sin interés</p>
                                <p className="tamaño-texto-DP">Precio de lista</p>
                                <button type="button" className="boton-DP">Ver cuotas</button>
                            </div>
                        </div>

                        <div className="info-ficha-envios">
                            <div className="iconos-DP">
                                <i className="fas fa-shipping-fast iconos-DP-tamaño"></i>
                            </div>
                            <div>
                                <p>Envío a todo el país</p>
                                <p className="tamaño-texto-DP">Recibílo en tu domicilio rápido y seguro</p>
                                <button type="button" className="boton-DP">Ver costo de envío</button>
                            </div>
                        </div>

                        <div className="info-ficha-retirar">
                            <div className="iconos-DP">
                                <i className="fas fa-map-marked-alt iconos-DP-tamaño"></i>
                            </div>
                            <div>
                                <p>Podés retirarlo aquí</p>
                            </div>
                        </div>

                        <div className="info-ficha-stock">
                            <div className="iconos-DP">
                                <i className="fas fa-check-circle color-icono-stock" ></i>
                            </div>
                            <div>
                                <p className="color-stock">Stock disponible</p>
                            </div>
                        </div>
                    
                        <div className="cantidad-producto">
                            <button type="button" className="boton-DP-menos"><i className="fas fa-minus"></i></button>
                            <input type="number" min="1" max="99999" className="texto-cantidad-producto" />
                            <button type="button" className="boton-DP-mas"><i className="fas fa-plus" /></button>
                        </div>

                        <div className="productos-agregar-comprar">
                            
                            <form action="/productcart" method="POST" >
                              <input type="number" name="idproducto" value="<%=producto.id %>" />    
    
                              <input type="submit" className="boton-agregar-comprar-carrito" name="carrito" value="Agregar carrito" />      
                                  
                            </form>
              
                        <Link to="/editProduct/<%= producto.id %>" className="boton-agregar-comprar-carrito">Editar Producto</Link>
                                 {/*
                                 
                        <form action="/editProduct/delete/<%= producto.id %>?_method=DELETE" method="POST" style="display: inline-flex">
                            <button type="submit" className="boton-agregar-comprar-carrito">Eliminar Producto</button>
                        </form>
                                 */}
    
                        </div>

                        </div>


                    </div>
                </section>
            </main>

            <Footer />
        </body>
    );
  }
  
  export default ProductDetail;