import React from "react";

const CellComponent = ({ staticText, value }) => {
    return(
        <>
         <span>{staticText}</span> 
         <span>{value}</span>
        </>
     )  
}

export default CellComponent;