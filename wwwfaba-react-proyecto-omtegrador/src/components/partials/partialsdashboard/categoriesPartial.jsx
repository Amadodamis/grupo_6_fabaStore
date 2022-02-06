import React from "react";
import '../../../css/stylesDashboard.css';
import '../../../css/styles.css';

function CategoriesPartial(props){

 
return(

    <React.Fragment>
            {
            props.categoriesKeysArray.map((categoria,i)=>{
                        return (

                            <p key={i} className="parrafo-categorias">
                                {categoria} : {props.categoriesValuesArray[i]}
                            </p>
                            
                        )
                    })}
            
    </React.Fragment>
)} 
export default CategoriesPartial