import React from "react";
//Custom imports
//Logic

//Components

//Material UI
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const ActionsContainer = () => {
    //some use state / hooks
    return (
        <Container>
            <span>This is the action Container</span>
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
        </Container>
        
    )
}

export default ActionsContainer;