import React from "react";
import { CardSmallContainer } from '../card-container/card-small-container.component';
import { CardBigContainer } from '../card-container/card-big-container.component';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  })); 

export const CardListComponent = (props) => {
    return(
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>
                <Item>
                    <CardSmallContainer />
                </Item>
            </Grid>
            <Grid item xs={12}>
                <Item>
                    <CardBigContainer />
                </Item>
            </Grid>
        </Grid>
    )
}