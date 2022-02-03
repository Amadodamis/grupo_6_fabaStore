import React from "react"
import Footer from "./partials/footer"
import Head from "./partials/head"
import Header from "./partials/header"
import "../css/styles.css"
import "../css/stylesRegisterLogin.css"
import {Link} from "react-router-dom"

function Register() {
    
    
    return (
        <body className="body-index">
            <Head />
            <Header />  
            <section class="section-formulario-register">
        
                <form action="/register" method="POST" className="form-registro" enctype="multipart/form-data">

                <p class="iniciar-sesion-tamañano">Registrarse</p>

                <div className="control-form">
                    <input type="text" name="usuario" placeholder="Nombre de usuario" className="control" />
                </div>

                <div className="control-form">
                    <input type="email" name="email" placeholder="E-mail" className="control" />
                </div>

                <div className="control-form">
                    <input type="password" name="password" className="control" placeholder="Contraseña" />
                </div>

                <div className="control-form">
                    <input type="password" name="Confpassword" className="control" placeholder="Confirmar contraseña" />
                </div>

                <div className="control-form">
                    <input type="text" name="nombre" placeholder="Nombre" className="control"  maxlength="20" minlength="3" />
                </div>

                <div className="control-form">
                    <input type="text" name="apellido" placeholder="Apellido" className="control"  maxlength="20" minlength="3" />
                </div>

                <div className="control-form">
                    <input type="text" name="domicilio" placeholder="Domicilio" className="control" />
                </div>

                <div className="control-form">
                    <label>Seleccionar una imagen para el perfil:</label>
                    <br/>
                    <input type="file" name="avatar" />
                </div>

                <div className="control-form">
                    <button type="submit" className="botton">Crear Cuenta</button>
                </div>
            
                <ul className="logos-login-redes-sociales">

                    <li className="autologin-icono-lista">
                        <Link to="https://www.facebook.com/login">
                            <i className="fab fa-facebook icono-autologin"></i>
                        </Link>
                        <p className="auto-login-p">Registrate con Facebook</p>
                    </li>
                
                    <li className="autologin-icono-lista">
                        <Link to="https://gmail.com/">
                            <i className="far fa-envelope icono-autologin"></i>
                        </Link>
                        <p className="auto-login-p">Registrate con Gmail</p>
                    </li>
                </ul>

                <p className="iniciar-sesion-tamañano ">¿Ya tenés una cuenta?<Link to="login"> Inicia Sesión</Link></p>
                
                </form>

            </section>
            <Footer/>
        </body>
    );
  }
  
  export default Register ;