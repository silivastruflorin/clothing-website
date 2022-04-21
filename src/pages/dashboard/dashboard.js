import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from 'connected-react-router';

//Custom imports
//Logic
import store from "../../redux/store/store";
import counterSlice from './reducer';
import {increment} from './reducer';
import { counterSelector } from "./selectors";
import { IsLoggedInSelector } from '../../redux/selectors/selectors'
import { authService } from '../../services/authentification/auth';

//Components
import StatusHeaderContainer from "./containers/status-header-container/index";
import ActionsContainer from "./containers/actions-container";
import DisplayMotionContainer from "./containers/display-motion-container";
//Material UI
import { Grid } from "@material-ui/core";
import JointStatusContainer from "./containers/joint-status-container";
import MessageWarningContainer from "./containers/message-warning-container";

//testhhh
const test1 = false;
//dfdf
const DashboardList = ({dispatch}) => {
    return(
        <span>
            This is Another component that dispatches increment action
            <button onClick={()=> dispatch(increment()) }>increment</button>
        </span>
    )
}


function Dashboard(){
        const dispatch = useDispatch();
        let loggedIn = useSelector(IsLoggedInSelector);
        const currentUser = authService.getCurrentUser();
        //add component slice to the store asynchronously
        store.reducerManager.add("counterSlice", counterSlice);
        const value = useSelector(counterSelector);

        /* 
        const [state , dispatch] = useReducer(counterSlice,{ value: 0 }); 
        Changed from local state to redux store
        'store.reducerManager.add()' to add it to the store 
        useDispatch hook to dispatch action to store
        selectors to access values from the store
    */
    useEffect(()=>{
        if (loggedIn === false && !currentUser ){
            dispatch(push('/')) // not logged in home page
        }
        return function cleanUp() {
            //executes when the component dismounts
            //Optionally remove Component's reducer after is dismounted from the state
            // store.reducerManager.remove("counterSlice");
            // console.log("Component dismounted")
        }

    },[loggedIn])
    

    return(
        <>
           
            <StatusHeaderContainer style={{ 
                backgroundImage: 'linear-gradient(to bottom, rgba(0,23,49), rgba(0,23,49,0.9))',
                padding: '1%'}}
            />
            {/* 
                Grid to hold container components actions/display motion/ joint status
            */}
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                <Grid item xs={4} sm={4} md={3} style={{ backgroundImage: 'linear-gradient(to left, rgba(0,23,49,0.9), rgba(0,23,49))', width:'auto' }} >
                    {/* actions container */}
                    <ActionsContainer />
                </Grid>
                <Grid item xs={4} sm={4} md={6}  style={{ background: 'rgba(0,23,49,0.9)', width:'auto' }}>
                    {/* display motion container */}
                    <DisplayMotionContainer />
                </Grid>
                <Grid item xs={4} sm={4} md={3}  style={{ backgroundImage: 'linear-gradient(to right,  rgba(0,23,49,0.9), rgba(0,23,49))', width:'auto' }}>
                    {/* joint Status Container */}
                    <JointStatusContainer />
                </Grid>
            </Grid>

            {/* Grid to hold the console */}
            <MessageWarningContainer  style={{ 
                backgroundImage: 'linear-gradient(to top, rgba(0,23,49), rgba(0,23,49,0.9))',padding: '1%'}}/>
        </>
        
    )
}

export default Dashboard;