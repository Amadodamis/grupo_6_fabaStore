import "../../css/styles.css"
import {Link} from "react-router-dom"
import banner from '../../img/logo-faba-dimensionado.jpg'

function Header() {
    
    
    return (
      <div >
          <header>
          <Link to="/" >
                <div className="box-logo-faba-store">
                    <img src={banner} className="logo-Faba-Store"/>
                </div>    
            </Link>

           <section className="lupa-e-iconos">
                <form>
                     <input type="search" placeholder=" Buscá Productos, Marcas y Categorías..." className="buscador" />
                 </form>

                 <div className="box-iconos-header">
                     {/*  <% if(locals.isLogged) { %>*/}
               
                    <Link to="/productCart" ><i className="fas fa-shopping-cart iconos-header"></i></Link>
                    <Link to="/profile"><i className="fas fa-user-circle iconos-header"></i></Link>
                    {/*<% } else { %> */}
                    <Link to="/register" ><i className="far fa-registered iconos-header"></i></Link>
                    <Link to="/login" ><i className="fas fa-sign-in-alt iconos-header"></i></Link>
                 {/*<% } %> */}
            </div>

           </section>

           </header>
           
           <div className="Productos-link" >
            <Link to="/products" className="producto-link-contenido"> Productos</Link>
            </div>
            <br />
            <div className="Productos-link" >
            <Link to="/login/logout" className="producto-link-contenido"> Log-out</Link>
            </div>

          
      </div>
    );
  }
  
  export default Header;