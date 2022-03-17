import React from "react";
//Custom imports
//Logic: reducers..

//components
import CellComponent  from '../../components/cell-component/index';
//Material UI
import { Grid } from "@material-ui/core";


const MessageWarningComponent = ({message, date, action}) => {
    //some use state / hooks
    return (
        <>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{backgroundColor:'grey'}}>
                <Grid item xs={2} sm={2} md={4} >
                    {/* message */}
                    <CellComponent staticText='' value={message} />
                </Grid>
                <Grid item xs={2} sm={2} md={4} >
                    {/* date */}
                    <CellComponent staticText='' value={date} />
                </Grid>
                <Grid item xs={2} sm={2} md={4} >
                    {/* Action */}
                    <CellComponent staticText='' value={action} />
                </Grid>
            </Grid>   

            
        </>
    )
}

export default MessageWarningComponent;