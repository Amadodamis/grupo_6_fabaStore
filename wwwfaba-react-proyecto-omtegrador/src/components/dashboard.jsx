import React from "react";


import Footer from "./partials/footer"
import Head from "./partials/head"
import Header from "./partials/header"
import ArticlesTop from "./partials/partialsdashboard/articlesTop";
import ArticlesBotImg from "./partials/partialsdashboard/ArticlesBotImg";

import '../css/stylesDashboard.css';

import foto from "../img/i7-7700k.png"
import ArticleBotCategory from "./partials/partialsdashboard/articleBotCategory";
import ArticleBotListadoProductos from "./partials/partialsdashboard/articleBotListadoProductos";

function DashBoard (){
    const object1 = {
        almacenamiento: 15,
        mouses: 42,
        televisores: 12
      };

    const arrayObj= Object.values(object1) // arrayObj tiene los valores de cada una de las propieades del countcategory en un array
    const arrayObjKeys= Object.keys(object1); // arrayObj tiene los valores del nombre de las propiedades del countcategory de las categorias en un array




   
return (

       <body className="body-index" >
          <Head />

          <Header />

          <section className="container-banner">
              <div className="banner"> </div>
          </section>
          
          
          <div className="plus-button-fixed">
            <i className="fas fa-plus-circle"></i>
          </div> 
          <br />

          <main className="primer-box-container-dashboard">

            
          <section className="seccion-arriba-dashboard">
                <ArticlesTop titulo="totalproductos" cantidad="52" />

                <ArticlesTop titulo="total usuarios" cantidad="20" />

                <ArticlesTop titulo="total categorias" cantidad={arrayObj.length} />  
            </section>
            <br />
                 
            <section className="seccion-Abajo-dashboard">
                <section className="containter-ult-producto">
                    <ArticlesBotImg foto={foto} ultProd="" img="" id="" modelo="" precio="" cantStock="" ofPorcentaje="" espec=""/> 
                </section>
                <br />
                <section className="container-lisProds-categorias">
                    <ArticleBotCategory arrayObjeto={arrayObj} arrayObjKeys={arrayObjKeys} countCategories={arrayObj.length} />
                    <br />
                    <ArticleBotListadoProductos cantProductos="44"  /> 
                </section>
            </section>   
          </main>

          <br />

          
        <Footer />
        </body>
    )}

export default DashBoard