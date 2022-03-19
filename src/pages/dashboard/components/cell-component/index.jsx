import React from "react";

const CellComponent = ({ staticText, value, ...props }) => {
    return(
        <>
         <span {...props}>{staticText}</span> 
         <span> </span>
         <span {...props}>{value}</span>
        </>
     )  
}

export default CellComponent;