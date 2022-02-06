import React from "react";
import {useState,useEffect} from "react"

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

    // en productos se guarda el array de todos los productos
    const [productos,setProductos]=useState([]);
    
    useEffect(()=>{
        fetch("api/products")
        .then(response=> response.json())
        .then(data=>{
            setProductos(data.products)
        })
        .catch(error=>console.log(error))
    },[])

    // Traigo el meta de productos, cant categories, total etc
    const [meta,setMeta]=useState(0);
    
    useEffect(()=>{

        console.log("se monto el componente")
        fetch("api/products")
        .then(response=> response.json())
        .then(data=>{
            setMeta(data.meta)
        })
        .catch(error=>console.log(error))
    },[])
   
    //$$$$$$$$$$$$$$ Este fetch, trae el meta de usuarios por pedido de la api$$$$$$$$$$$
                                            const [metaU,setMetaU]=useState(0);
    
                                            useEffect(()=>{
                                                fetch("api/users")
                                                .then(response=> response.json())
                                                .then(data=>{
                                                    setMetaU(data.meta)
                                                    })
                                                .catch(error=>console.log(error))
                                                },[])

     
return (

       <body className="body-index" >
          <Head /> <Header />

          <section className="container-banner">
              <div className="banner"> </div>
          </section>
          
          
          <div className="plus-button-fixed">
            <i className="fas fa-plus-circle"></i>
          </div> 
          <br />  
            
          <main className="primer-box-container-dashboard">
              { meta === 0 &&
                 <section className="seccion-arriba-dashboard">
                    <ArticlesTop titulo="totalproductos" cantidad="cargando" />

                    <ArticlesTop titulo="total usuarios" cantidad="cargando" />

                    <ArticlesTop titulo="total categorias" cantidad="cargando" />  
                </section>
                }
                {meta.total > 0 &&
                
                <section className="seccion-arriba-dashboard">
                    <ArticlesTop titulo="totalproductos" cantidad={meta.total} />

                    <ArticlesTop titulo="total usuarios" cantidad={metaU.total} />

                    <ArticlesTop titulo="total categorias" cantidad={meta.cantCategorias} />  
                </section>
                
                }
            <br />
                 
            <section className="seccion-Abajo-dashboard">
                {productos.length === 0 &&
                    <section className="containter-ult-producto">
                        <ArticlesBotImg foto={foto} cargando ="cargando" productos= {productos} /> 
                    </section>
                }
                {productos.length > 0 &&
                    <section className="containter-ult-producto">
                        <ArticlesBotImg foto={foto} cargando ="cargando" productos= {productos} ultProducto={productos.length} /> 
                    </section>
                }


                <br />

                <section className="container-lisProds-categorias">
                    
                    {meta.total=== 0 &&
                    <ArticleBotCategory cargando="cargando" />
                    }

                    { 
                        meta.total>0 &&
                        <ArticleBotCategory categories={meta.CountCategory}/>
                    }


                    <br />
                    {productos.length === 0 &&
                    <ArticleBotListadoProductos cargando="cargando" productos={productos} /> 
                    }

                    {
                        productos.length > 0 &&
                        <ArticleBotListadoProductos productos= {productos} /> 
                    }
                </section>
            </section>  

          </main>

          <br />
          
        <Footer />
        </body>
    )}

export default DashBoard