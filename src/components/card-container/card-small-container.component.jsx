import React from "react";
import CardComponent  from "../card/card.component";

import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';


export const CardSmallContainer = (props) => {
    return(
        <Container maxWidth="xl">
            <Grid container spacing={2} columns={12}>
                <Grid item xs={4}>
                    <CardComponent size={300} imageId={281}  description={'Street wear'} page="/shop/StreetWear" />
                </Grid>
                <Grid item xs={4}>
                    <CardComponent size={300} imageId={604} description={'Boots'} page="/shop/Boots"/>
                </Grid>
                <Grid item xs={4}>
                    <CardComponent size={300} imageId={22} description={'Casual'} page="/shop/Casual"/>
                </Grid>
            </Grid>
        </Container>
    )
}