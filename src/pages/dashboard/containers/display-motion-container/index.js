import { Container } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
//Custom imports
//Logic
import { useComponentSize } from '../../hooks';
//Components 
import Canvas3D from "../3D-animation";
//Material UI

const DisplayMotionContainer = () => {
    const myRef = useRef();
    const { width, height } = useComponentSize(myRef); //custom hook to get the container size
    
   
    //some use state / hooks
    return (
        <Container ref={myRef} style={{width:'100%', height:'30%', display:'flex', justifyContent:'center'}} >
            <Canvas3D width={width} height={height}></Canvas3D>
        </Container>

    )
}

export default DisplayMotionContainer;