
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
import { GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import model3D from './model/model3d_blender_export.glb';  //needs to be imported so file is processed by webpack.
//Material UI
import { Box, Button } from "@mui/material";



const Canvas3D = ({ width, height }) => {
    const canvasRef = useRef();   //initial value is null because canvas is returned by this component
    const [myCanvas, setMyCanvas] = useState(canvasRef.current)   //we save the value in the state so after first render value changes from null to <canvas> and in use effect we force rerender
    let renderer3D, loader, camera, light, scene, controls
    function initialization (){
        renderer3D = new THREE.WebGLRenderer({canvas:myCanvas});
        loader = new GLTFLoader();
        renderer3D.setSize( width, height );
        renderer3D.setPixelRatio( window.devicePixelRatio );
        // document.body.appendChild( renderer3D.domElement );

        camera = new THREE.PerspectiveCamera( 45, width / height, 1, 500 );
        camera.position.set( 0, 0, 100 );
        camera.lookAt( 0, 0, 0 );
        scene = new THREE.Scene();
        // lights

        const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
        hemiLight.position.set( 0, 20, 0 );
        scene.add( hemiLight );

        const dirLight = new THREE.DirectionalLight( 0xffffff );
        dirLight.position.set( - 3, 10, - 10 );
        dirLight.castShadow = true;
        dirLight.shadow.camera.top = 2;
        dirLight.shadow.camera.bottom = - 2;
        dirLight.shadow.camera.left = - 2;
        dirLight.shadow.camera.right = 2;
        dirLight.shadow.camera.near = 0.1;
        dirLight.shadow.camera.far = 40;
        scene.add( dirLight );
        // ground

        const mesh = new THREE.Mesh( new THREE.PlaneGeometry( 100, 100 ), new THREE.MeshPhongMaterial( { color: 0x277988, depthWrite: false } ) );
        mesh.rotation.x = - Math.PI / 2;
        mesh.receiveShadow = true;
        scene.add( mesh );
        
        //Load the 3D model from file
        loader.load( model3D, function ( gltf ) { 
            scene.add( gltf.scene );
        }, undefined, function ( error ) {
            console.error( error );
        } );



        controls = new OrbitControls( camera, renderer3D.domElement );
        controls.addEventListener( 'change', update ); // call this only in static scenes (i.e., if there is no animation loop)
    

        controls.update();
        renderer3D.render( scene, camera ); //default display
    }

    initialization();


    useEffect(()=>{
        /*  after first render useEfect <canvas> is returned/rendered/appears in DOM */
        setMyCanvas(canvasRef.current)  
    },[myCanvas])


    function update (){
        renderer3D.render( scene, camera );
    }
   
    //some use state / hooks
    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', p: 1, m: 1}} >
            <canvas ref={canvasRef}></canvas>           
            <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'row'}} >        
                <Button onClick={update}>Update</Button>
                <Button onClick={update}>Zoom Out</Button>
                <Button onClick={update}>Zoom In</Button>
                <Button onClick={update}>Rotate</Button>
            </Box>
        </Box>
            
   
          
    )
}

export default Canvas3D;