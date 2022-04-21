import React from "react";
//Custom imports
//Logic

//Components
import ActionsComponent from "../../components/actions-component";
//Material UI
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



const ActionsContainer = () => {
    //some use state / hooks
    return (
     
        <Container>
            <ActionsComponent>
                <Typography variant="h6" color='common.white'> Motion Planning</Typography>
                <Typography variant="body2" > X - target : </Typography>
                <Typography variant="body2" > Y - target : </Typography>
                <Typography variant="body2" > Z - target : </Typography>
                 <Button style={{  backgroundColor: '#FF0000' }} >Trajectory</Button>
            </ActionsComponent>

            <ActionsComponent>
                <Typography variant="h6" color='common.white'> Manual Control</Typography>
                 <Button style={{  backgroundColor: '#00FF00' }}>Move</Button>
                 <Button style={{  backgroundColor: '#FF0000' }} >Stop</Button>
                 <Button style={{  backgroundColor: '#FFFF00' }} >Start</Button>
            </ActionsComponent>
        </Container>

    )
}

export default ActionsContainer;







          

