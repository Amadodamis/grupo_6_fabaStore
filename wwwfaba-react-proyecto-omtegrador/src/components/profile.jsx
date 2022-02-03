import React from "react"
import Footer from "./partials/footer"
import Head from "./partials/head"
import Header from "./partials/header"
import "../css/styles.css"
import "../css/stylesRegisterLogin.css"
import {Link} from "react-router-dom"
import avatar from "../img/avatars/default.jpg"

function Profile() {
    
    
    return (
        <body className="body-index">
          <Head />
          <Header />
          <main>
              <span className="Color-Usuario">Hola </span>
              <span className="Color-Usuario">usuario  </span>  
              <p className="Color-Usuario" >Su Email registrado es: </p>
              <span className="Color-Usuario">  </span> 
              <p className="Color-Usuario">ID de Usuario: </p>
              <div >
                <h1 className="Color-Usuario">Avatar:</h1>
                 <span><img src={avatar} className="Avatar-Usuario" alt="avatar"/></span> 
               </div>
               <br />
               <Link to="/editUser/Id-usuario" className="Edit-User-button" >Editar Usuario</Link>
               
                  {/*
                  
                <form action="/editUser/delete/<%= pUser.id %>?_method=DELETE" method="POST" style="display: inline-flex">
                  <button type="submit" className="Edit-User-button">Eliminar Usuario</button>
                </form> 

                  */}
            </main>
            <br />
          <Footer/>
        </body>
    );
  }
  
  export default Profile ;