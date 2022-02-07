import React from "react";
import '../../../css/stylesDashboard.css';
import '../../../css/styles.css';

function ArticlesTop(props){
    

return(

    <React.Fragment>
            <article className="articulos-dashboard-top">
                <p className="parrafos-total-dashboard">
                {props.titulo}</p>
                <p className="parrafos-total-dashboard-value">
                    {props.cantidad} </p>
            </article>

    </React.Fragment>
)}

export default ArticlesTop