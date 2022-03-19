import React from "react";
//Custom imports
//Logic: reducers..

//components
import AlarmTableComponent from "../../components/alarm-table-component";
//Material UI
import Container from '@mui/material/Container';


const testAlarms = [
    {
        message:'Connection error',
        date:'17.03.2022',
        action:'please check the ethernet connection'
    },
    {
        message:'System error',
        date:'16.03.2022',
        action:'please check the CPU'
    },
    {
        message:'System error',
        date:'16.03.2022',
        action:'please check the CPU'
    },
    {
        message:'System error',
        date:'16.03.2022',
        action:'please check the CPU'
    }
    
]

const MessageWarningContainer = ({...props}) => {
    //some use state / hooks
    return (
        <>
         <Container maxWidth='auto' {...props}>
            {/* Alarm tabel content */}
            <AlarmTableComponent rows={testAlarms} />
         </Container>
           
        </>
    )
}

export default MessageWarningContainer;