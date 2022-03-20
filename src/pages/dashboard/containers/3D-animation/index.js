
 /*  
 Three.js needs a canvas to draw to it. If it does not have one passed to it creates one autommically and needs to be appended to DOM.
 In our case the component Canvas3D returns/renders a canvas which is used by th three.js library.
 We used the useRef hook to get the reference to the canvas DOM element that is rendered by the componenet

 workflow:
 
 Canvas3D |------logic--------------> renders/retuns--> canvas-----|->useEffect is called after render
          |-> canvasRef = null                                     |-> setMyCanvas = canvasRef.current --state changed-->triggers rerendering--|
          |-> myCanvas = state(null)                                                                                                           |
          |-> initialize three library components                                                                                              |
                                                                                                                                               |
                                                                                                                                               |
    ^                                                                                                                                          |
    |                                                                                                                                          |
    |------------------------------------------------------------------------------------------------------------------------------------------|


 after first render useEfect <canvas> is returned/rendered/appears in DOM 
 
 */
import React, { useEffect, useRef, useState } from "react";
import * as THREE from 'three';

//Material UI
import { Box, Button } from "@mui/material";



const Canvas3D = ({ width, height }) => {
    const canvasRef = useRef();   //initial value is null because canvas is returned by this component
    const [myCanvas, setMyCanvas] = useState(canvasRef.current)   //we save the value in the state so after first render value changes from null to <canvas> and in use effect we force rerender
    
    console.log('canvas', width)
    const renderer3D = new THREE.WebGLRenderer({canvas:myCanvas});
    renderer3D.setSize( width, height );
    // document.body.appendChild( renderer3D.domElement );

    const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
    camera.position.set( 0, 0, 100 );
    camera.lookAt( 0, 0, 0 );
    const scene = new THREE.Scene();
    //create a blue LineBasicMaterial
    const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

    const points = [];
    points.push( new THREE.Vector3( - 10, 0, 0 ) );
    points.push( new THREE.Vector3( 0, 10, 0 ) );
    points.push( new THREE.Vector3( 10, 0, 0 ) );

    const geometry = new THREE.BufferGeometry().setFromPoints( points );

    const line = new THREE.Line( geometry, material );

    scene.add( line );

    renderer3D.render( scene, camera ); //default display


    useEffect(()=>{
        /*  after first render useEfect <canvas> is returned/rendered/appears in DOM */
        setMyCanvas(canvasRef.current)  
    },[myCanvas])


    function handleDrawNewLine (){
        const points = [];
        points.push( new THREE.Vector3( - 20 , 0, 0 ) );
        points.push( new THREE.Vector3( 0, 20, 0 ) );
        points.push( new THREE.Vector3( 20 , 0, 0 ) );
    
        const geometry = new THREE.BufferGeometry().setFromPoints( points );
    
        const line = new THREE.Line( geometry, material );
        scene.add( line )
        renderer3D.render( scene, camera );
    }
   

 
    //some use state / hooks
    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', p: 1, m: 1}} >
            <canvas ref={canvasRef}></canvas>           
            <Button onClick={handleDrawNewLine}>Add</Button>
        </Box>
            
   
          
    )
}

export default Canvas3D;