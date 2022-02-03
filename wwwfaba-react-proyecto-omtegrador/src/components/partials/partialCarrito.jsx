
import "../../css/styles.css"
import "../../css/stylesProductCart.css"


import {Link} from "react-router-dom"
import productox from "../../img/asus-atx-b350.png"
import productoy from "../../img/armado-pc-producto.jpg"

let array = [1,2,3,4]
let items;

function ProductCart() {
    
    
    return (
     <div>
        <section className="producto-x">
            <div className="img-producto-cart">
            <img className="jpg-producto" src={productoy}/>
             </div>

            <div className="bloque-descripcion">    
                <div className="buttons-close-change-minimize">                     
                    <i className="far fa-caret-square-down"></i>
                    <i className="far fa-caret-square-up"></i>
                    <i className="fas fa-exchange-alt"></i>
                    <i className="far fa-window-close"></i>
                </div>

                <div>
                    <p className="nombre-producto-cart">Nombre producto</p>

                    <div className="precio-cart">
                        <p>Precio</p>
                        <p>Precio$</p>
                    </div>
                </div>
            </div>

        </section>

        { items = array.map((iterador) =>
             <section className="producto-x">
                <div className="img-producto-cart">
                    <img className="jpg-producto"  src={productox}/>
                </div>

                <div className="bloque-descripcion">
                    <div className="buttons-close-change-minimize">                      
                        <i className="far fa-caret-square-down"></i>
                        <i className="far fa-caret-square-up"></i>
                        <i className="fas fa-exchange-alt"></i>
                        <i className="far fa-window-close"></i>
                    </div>

                    <div>
                        <p className="nombre-producto-cart">Modelo</p>
                        <div className="box-producto-cant">
                            <p>Cantidad</p>
                            <div className="botones-producto-cant"> 
                                <i className="far fa-minus-square"></i>
                                <input type="number" min="1" max="30" className="cant-productos" />
                                <i className="far fa-plus-square"></i> 
                            </div>
            
                        </div>

                        <div className="precio-cart"> 
                            <p>Precio</p>

                            <p>precio</p>
                        </div>

                    </div>
                </div>

            </section>
        )}

     </div>
    );
  }
  
  export default ProductCart;