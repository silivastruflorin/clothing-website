import React from "react";
//Custom imports
//Logic: reducers..

//components
import CellComponent  from '../../components/cell-component/index';
import MessageWarningComponent  from '../../components/message-warning-component/index';
//Material UI
import { Grid } from "@material-ui/core";


const MessageWarningContainer = () => {
    //some use state / hooks
    return (
        <>
            {/* Header for the container */}
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{backgroundColor:'grey'}}>
                <Grid item xs={2} sm={2} md={4} >
                    <CellComponent staticText='Message' value='' />
                </Grid>
                <Grid item xs={2} sm={2} md={4} >
                    <CellComponent staticText='Date' value='' />
                </Grid>
                <Grid item xs={2} sm={2} md={4} >
                    <CellComponent staticText='Action' value='' />
                </Grid>
            </Grid>   

            {/* Alarm tabel content */}
            <MessageWarningComponent message='Connection error' date='17.03.2022' action='please check the ethernet connection' />
            <MessageWarningComponent message='System error' date='16.03.2022' action='please check the CPU' />
        </>
    )
}

export default MessageWarningContainer;