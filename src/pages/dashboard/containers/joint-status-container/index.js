import React from "react";
//Custom imports
//Logic

//Components

//Material UI
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const JointStatusContainer = () => {
    //some use state / hooks
    return (
        <Container >
            <span>This is the JointStatus Container</span>
            <Box sx={{ bgcolor: 'purple', height: '25vh' }} >sdsdsd</Box>
            <Box sx={{ bgcolor: 'blue', height: '25vh' }} >sdsdsd</Box>
            <Box sx={{ bgcolor: '#cfe8fc', height: '25vh' }} >sdsdsd</Box>
            <Box sx={{ bgcolor: 'red', height: '25vh' }} >sdsdsd</Box>
        </Container>
    )
}

export default JointStatusContainer;