import { push } from "connected-react-router";
import React,{useEffect} from "react";
import { useDispatch } from "react-redux";



export default function StreetWear(){
    const dispatch = useDispatch();

    useEffect(()=>{
        setTimeout(()=> {
            dispatch(push("/shop/MensPage"));
        } ,3000)
    })
    return(
             <div style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'}}>
                 This page is under construction. you will be redirected to Men's or Women's page
             </div>
    )
}