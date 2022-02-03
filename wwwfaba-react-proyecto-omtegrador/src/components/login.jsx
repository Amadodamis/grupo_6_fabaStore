import React from "react"
import Footer from "./partials/footer"
import Head from "./partials/head"
import Header from "./partials/header"
import "../css/styles.css"
import "../css/stylesRegisterLogin.css"
import {Link} from "react-router-dom"


function Login() {
    
    return (
        <body className="body-index">
          <Head />
          <Header />

          <main className="main-register-login">
            <section  className="section-formulario-login">
                <form action="/login" method="POST" className="form-registro">
                    <p className="iniciar-sesion-tamañano" >Iniciar Sesión</p>
                   
                    <div className="control-form">
                      <input type="text" name="email" placeholder="Correo Electrónico" className="control" required />
                    </div>

                    <div className="control-form">
                      <input type="password" name="password" placeholder="Contraseña" className="control" />
                    </div>

                    <div className="control-form">
                      <button type="submit" className="botton">Iniciar Sesión</button>
                    </div>

                    <div className="control-form">
                      <label for="recordame" className="recordame">recordame</label>
                      <input type="checkbox" name="recordame"checked />
                    </div>

                    <ul className="logos-login-redes-sociales">

                      <li className="autologin-icono-lista">
                        <Link to="https://www.facebook.com/login">
                          <i className="fab fa-facebook icono-autologin"></i>
                        </Link>
                        <p className="auto-login-p">Inicia Sesión con Facebook</p>
                      </li>
                
                      <li className="autologin-icono-lista">
                        <Link to="https://gmail.com/">
                        <i className="far fa-envelope icono-autologin"></i>
                        </Link>
                        <p className="auto-login-p">Inicia sesion con Gmail</p>
                      </li>
                    </ul>
                    <p className="iniciar-sesion-tamañano">¿No tienes una cuenta?<a href="register"> Regístrate</a></p>
                </form>
            </section>
          </main>
          <br />
          <Footer/>
        </body>
    );
  }
  
  export default Login ;