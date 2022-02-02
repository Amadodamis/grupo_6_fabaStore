import '../../css/prueba.css';
import {Link} from "react-router-dom"
import banner from '../../img/logo-faba-dimensionado.jpg'

function Header() {
    
    
    return (
      <div >
          <Link to="/" >
                <div class="box-logo-faba-store">
                    <img src={banner} className="logo-Faba-Store"/>
                </div>    
            </Link>

           <section className="lupa-e-iconos">
                <form>
                     <input type="search" placeholder=" Buscá Productos, Marcas y Categorías..." class="buscador" />
                 </form>

                 <div class="box-iconos-header">
                     {/*  <% if(locals.isLogged) { %>*/}
               
                    <a href="/productCart" ><i class="fas fa-shopping-cart iconos-header"></i></a>
                    <a href="/profile"><i class="fas fa-user-circle iconos-header"></i></a>
                    {/*<% } else { %> */}
                    <a href="/register" ><i class="far fa-registered iconos-header"></i></a>
                    <a href="/login" ><i class="fas fa-sign-in-alt iconos-header"></i></a>
                 {/*<% } %> */}
            </div>

           </section>

           <div className="Productos-link" >
            <Link to="/products" className="producto-link-contenido"> Productos</Link>
            </div>
            <br />
            <div class="Productos-link" >
            <Link to="/login/logout" className="producto-link-contenido"> Log-out</Link>
            </div>

          
      </div>
    );
  }
  
  export default Header;