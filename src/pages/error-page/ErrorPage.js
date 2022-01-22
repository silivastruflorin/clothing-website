import React from "react";

function ErrorPage(props){
    return(
        <div> 
            Page not found {props.text}
        </div>
    )
}

export default ErrorPage;