import React from "react";
import '../../../css/stylesDashboard.css';
import '../../../css/styles.css';
import CategoriesPartial from "./categoriesPartial";

function ArticleBotCategory(props){

   
    const categoriesKeysArray= Object.keys(props.categories);  //Convierto el objeto a array para poder obtener los valores de las propiedades de los objetos.
    const categoriesValuesArray= Object.values(props.categories) //Convierto el objeto a array para poder iterar el array y a la vez poder obtener el valor de su key.
    
return(

    <React.Fragment>
         <article className="articulos-dashboard-bot">
            <p className="titulo-listado-categorias">Total productos por categorias</p>
           {
               props.cargando == "cargando" && <p className="titulo-listado-categorias">Cargando...</p>
               
           }
            <ul>
                {categoriesKeysArray.length >0 && 
                     <CategoriesPartial categoriesKeysArray={categoriesKeysArray} categoriesValuesArray= {categoriesValuesArray} />
                }
            </ul>
           
         </article>      
    </React.Fragment>
)} 
export default ArticleBotCategory