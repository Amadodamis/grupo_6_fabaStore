import React from "react";
import '../../../css/stylesDashboard.css';
import '../../../css/styles.css';

function ArticleBotCategory(props){
 
return(

    <React.Fragment>
         <article className="articulos-dashboard-bot">
            <p className="titulo-listado-categorias">Total productos por categorias</p>
           
           <ul>

                { props.arrayObjeto.map((cantCategoria,i) =>{
                    return <li key={cantCategoria+i} className="lista-categorias">

                        <p>{props.arrayObjKeys[i]} total: {cantCategoria}</p>

                        </li>      
                }

                )}

           </ul>
           
         </article>      
    </React.Fragment>
)} 
export default ArticleBotCategory