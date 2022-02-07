import React from "react";
import {Link} from "react-router-dom"
import '../../css/styles.css';

function Footer() {
    
    
    return (
      <React.Fragment>
      <footer className="footer">
          <section className="informacion-adicional">
             <article>
               <div className="imagen-footer">
                  
                </div>
                
                <h4 className="footer-titulo"><Link to="#" className="footer-titulo">Información</Link></h4>
                <p className="texto-footer">Contáctenos</p>
                <p className="texto-footer">Política de privacidad</p>
                <p className="texto-footer">Servicios IT</p>
             </article>

              <br/>

            <article>
                <div className="imagen-footer">
                    
                 </div>
                <h4 className="footer-titulo"><Link to="#" className="footer-titulo">Servicio al Cliente</Link></h4>
                <p className="texto-footer">Contáctenos</p>
                 <p className="texto-footer">Devoluciones</p>
                <p className="texto-footer">Dónde encontrarnos</p>
            </article>

           <br/>

            <article>
                <div className="imagen-footer">
                    
                </div>
                <h4 className="footer-titulo"><Link to="#" className="footer-titulo">Mi Cuenta</Link></h4>
                <p className="texto-footer">Mi Cuenta</p>
                <p className="texto-footer">Newlsetter</p>
                <p className="texto-footer">Mis Pedidos</p>
              </article>
              
            <section className="footer-logos">
                <article>
                    <div className="imagen-footer"><Link to="https://www.facebook.com/login">
                        <i className="fab fa-facebook logos-i"></i></Link>
                    </div>
                 </article>
               <br/>
               <article>
                  <div className="imagen-footer"><Link to="https://www.instagram.com/">
                    <i className="fab fa-instagram logos-i"></i></Link>
                  </div>
                </article>
                <br/>

                <article>
                    <div className="imagen-footer"><Link to="https://outlook.live.com/owa/">
                       <i className="far fa-envelope logos-i"></i></Link>
                    </div>
                </article>
            </section>
          </section>
          
          <article>
              <p className="copyright">Copyright © 2021 fabaStore S.R.L.</p>
          </article>
      </footer>
      </React.Fragment>
    );
  }
  
  export default Footer;