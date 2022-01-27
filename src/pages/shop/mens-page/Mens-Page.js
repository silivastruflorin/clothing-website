import React from "react";
import Container from '@mui/material/Container';
import ItemsDisplay from '../../../components/shop/shop-body/ItemsDisplay.component'


function MensPage ()  {
    return(
        <Container maxWidth="xl">
            <ItemsDisplay productCategory="men's%20clothing" />
        </Container>
      
    )
}

export default MensPage;