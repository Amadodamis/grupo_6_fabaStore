import React from "react";
import "../../css/styles.css"
import {Link} from "react-router-dom"
import banner from '../../img/logo-faba-dimensionado.jpg'

function Header() {
    
    
    return (
        <React.Fragment>
          <header>
          <Link to="/" >
                <div className="box-logo-faba-store">
                    <img src={banner} className="logo-Faba-Store"/>
                </div>    
            </Link>

           </header>   
            </React.Fragment>
    );
  }
  
  export default Header;