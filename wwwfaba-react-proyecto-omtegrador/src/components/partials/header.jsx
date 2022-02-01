import '../../css/prueba.css';
import {Link} from "react-router-dom"
function Header() {
    
    
    return (
      <div >
          <Link to="/" >
         <div class="box-logo-faba-store">
            <img src="/img/logo-faba-dimensionado.jpg" alt="Logo-Faba-Store" class="logo-Faba-Store" />
        </div>
    </Link>
          
      </div>
    );
  }
  
  export default Header;