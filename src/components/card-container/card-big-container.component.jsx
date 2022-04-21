import React from "react";
import CardComponent  from "../card/card.component";

import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';


export const CardBigContainer = (props) => {
    return(
        <Container maxWidth="xl">
            <Grid container spacing={2} columns={12}>
                <Grid item xs={6}>
                    <CardComponent size={800} imageId={447} description={'Men clothing'} page="/shop/MensPage"/>
                </Grid>
                <Grid item xs={6}>
                    <CardComponent size={800} imageId={1011} description={'Women clothing'} page="/shop/WomensPage"/>
                </Grid>
            </Grid>
        </Container>
    )
}