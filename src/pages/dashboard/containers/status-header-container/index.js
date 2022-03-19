import React, { useEffect, useState } from "react";


//Custom imports
//Logic: reducers..

//components
import CellComponent  from '../../components/cell-component/index';
import DateTimeComponent from "../../components/date-time-component";

//Material UI
import { Grid } from "@material-ui/core";



const StatusHeaderComponent = ({...props}) => {

    useEffect(()=>{
        //
    })

    return(
        <>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} {...props} >
  
                <Grid item xs={2} sm={2} md={2} >
                    <CellComponent staticText='Connection:' value='test' style={{color:'#41DEFA'}} />
                </Grid>
                <Grid item xs={2} sm={2} md={2} >
                    <CellComponent staticText='Wifi Status:' value='connected'  style={{color:'#41DEFA'}} />
                </Grid>
                <Grid item xs={2} sm={2} md={2} >
                    <CellComponent staticText='space:' value='' />
                </Grid>
                <Grid item xs={2} sm={2} md={2} >
                    <CellComponent staticText='space:' value='' />
                </Grid>
                <Grid item xs={2} sm={2} md={4} style={{ display: 'flex', justifyContent:'flex-end'}}>
                    <DateTimeComponent />
                </Grid>

            </Grid>
            
            
        </>
    )
}

export default StatusHeaderComponent;