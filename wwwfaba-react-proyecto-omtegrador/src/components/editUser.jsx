import React from "react"
import Footer from "./partials/footer"
import Head from "./partials/head"
import Header from "./partials/header"
import "../css/styles.css"
import "../css/stylesRegisterLogin.css"


function EditUser() {
    
    
    return (
        <body className="body-index">
          <Head />
          <Header />
          <section className="section-formulario-register">
          <form action="">

                <p className="iniciar-sesion-tamañano">Editar usuario </p>
                <br />
    
                <div className="control-form">
                    <input type="text" name="usuario" placeholder="Nombre Usuario" className="control" value= "" required />
                </div>
    
                <div className="control-form">
                    <input type="text" name="email" placeholder= " Email" className="control" value="" required />
                </div>

                <div className="control-form">
                    <input type="text" name="password" placeholder="contraseña" className="control" required />
                </div>
    
                <div className="control-form">
                    <input type="text" name="nombre" className="control" placeholder="Nombre" value="" />
                </div>

                <div className="control-form">
                    <input type="text" name="apellido" className="control" placeholder=" Apellido" value="" />
                </div>

                <div className="control-form">
                    <input type="text" name="domicilio" className="control" placeholder="Domicilio" value="" />
                </div>

                <div className="control-form">
                    <input type="file" name="avatar" accept=".jpg" placeholder="" />
                </div>
       
                <div className="control-form">
                    <button type="submit" className="botton">Editar Usuario</button >
                </div>


          </form>

          </section>

          <Footer/>
        </body>
    );
  }
  
  export default EditUser ;