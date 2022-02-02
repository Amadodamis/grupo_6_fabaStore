import Footer from "./partials/footer"
import Head from "./partials/head"
import Header from "./partials/header"
import "../css/styles.css"
import "../css/stylesRegisterLogin.css"
import {Link} from "react-router-dom"

function Register() {
    
    
    return (
      <div >
        <body className="body-index">
        <Head />
        <Header />  
        {/*Errores */}
        <section class="section-formulario-register">
        
        <form action="/register" method="POST" class="form-registro" enctype="multipart/form-data">

            <p class="iniciar-sesion-tamañano">Registrarse</p>

            <div class="control-form">
                <input type="text" name="usuario" placeholder="Nombre de usuario" class="control" />
            </div>

            <div class="control-form">
                <input type="email" name="email" placeholder="E-mail" class="control" />
            </div>

            <div class="control-form">
                <input type="password" name="password" class="control" placeholder="Contraseña" />
            </div>

            <div class="control-form">
                <input type="password" name="Confpassword" class="control" placeholder="Confirmar contraseña" />
            </div>
            <div class="control-form">
                <input type="text" name="nombre" placeholder="Nombre" class="control"  maxlength="20" minlength="3" />
            </div>

            <div class="control-form">
                <input type="text" name="apellido" placeholder="Apellido" class="control"  maxlength="20" minlength="3" />
            </div>

            <div class="control-form">
                <input type="text" name="domicilio" placeholder="Domicilio" class="control" />
            </div>

            <div class="control-form">
                <label>Seleccionar una imagen para el perfil:</label>
                <br/>
                <input type="file" name="avatar" />
            </div>

            <div class="control-form">
                <button type="submit" class="botton">Crear Cuenta</button>
            </div>
            
            <ul class="logos-login-redes-sociales">

                <li class="autologin-icono-lista">
                    <Link to="https://www.facebook.com/login">
                        <i class="fab fa-facebook icono-autologin"></i>
                    </Link>
                    <p class="auto-login-p">Registrate con Facebook</p>
                </li>
                
                <li class="autologin-icono-lista">
                    <Link to="https://gmail.com/">
                    <i class="far fa-envelope icono-autologin"></i>
                    </Link>
                    <p class="auto-login-p">Registrate con Gmail</p>
                </li>
            </ul>
            <p class="iniciar-sesion-tamañano ">¿Ya tenés una cuenta?<Link to="login"> Inicia Sesión</Link></p>
        </form>

</section>
        <Footer/>
        </body>
        
      </div>
    );
  }
  
  export default Register ;