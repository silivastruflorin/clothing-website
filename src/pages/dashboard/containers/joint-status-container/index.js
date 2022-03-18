import React from "react";
//Custom imports
//Logic

//Components
import JointStatusComponent from "../../components/joint-status-component/joint-status-component";
//Material UI
import Container from '@mui/material/Container';



const JointStatusContainer = () => {
    //some use state / hooks
    return (
        <Container >
            <span>This is the JointStatus Container</span>
            <JointStatusComponent jointName='Wrist 3 Joint'  status='Healty' />
            <JointStatusComponent jointName='Wrist 2 Joint'  status='Healty'/>
            <JointStatusComponent jointName='Wrist 1 Joint'  status='Healty'/>
            <JointStatusComponent jointName='Elbow Joint'    status='Error'/>
            <JointStatusComponent jointName='Shoulder Joint' status='Healty'/>
            <JointStatusComponent jointName='Base Joint'     status='Error'/>
        </Container>
    )
}

export default JointStatusContainer;