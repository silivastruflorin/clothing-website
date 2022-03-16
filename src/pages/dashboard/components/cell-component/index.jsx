import React from "react";

const CellComponent = ({staticText,value}) => {
    return(
        <span>{staticText}: {value}</span>
    )
}

export default CellComponent;