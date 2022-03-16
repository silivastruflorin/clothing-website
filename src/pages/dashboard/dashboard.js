import React, { useReducer } from "react";

//Custom imports
//Logic
import counterSlice from './reducer';
import {increment} from './reducer';

//Components
import StatusHeaderContainer from "./containers/status-header-container/index";
import ActionsContainer from "./containers/actions-container";
import DisplayMotionContainer from "./containers/display-motion-container";
//Material UI
import { Grid } from "@material-ui/core";
import JointStatusContainer from "./containers/joint-status-container";



const DashboardList = ({dispatch}) => {
    return(
        <span>
            This is Another component that receives 
            <button onClick={()=> dispatch(increment()) }>aaaa</button>
        </span>
    )
}


function Dashboard(){
    const [state , dispatch] = useReducer(counterSlice,{ value: 0 });
    return(
        <>
            <StatusHeaderContainer />

            {/* 
                Grid to hold container components actions/display motion/ joint status
            */}
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={2} md={3} style={{background: 'red', width:'auto'}} >
                    {/* actions container */}
                    <ActionsContainer />
                </Grid>
                <Grid item xs={2} sm={4} md={6}  style={{background: 'aqua', width:'auto'}}>
                    {/* display motion container */}
                    <DisplayMotionContainer />
                </Grid>
                <Grid item xs={2} sm={2} md={3}  style={{background: 'yellow', width:'auto'}}>
                    {/* joint Status Container */}
                    <JointStatusContainer />
                </Grid>
            </Grid>

            {/* 
                Grid to hold the console
            */}
         






            <div> 
                Dashboard
                {state.value}
            </div>
            <DashboardList dispatch={dispatch}/>
        </>
        
    )
}

export default Dashboard;