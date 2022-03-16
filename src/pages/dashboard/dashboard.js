import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
//Custom imports
//Logic
import store from "../../redux/store/store";
import counterSlice from './reducer';
import {increment} from './reducer';
import { counterSelector } from "./selectors";


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
        const dispatch = useDispatch()
        const value = useSelector(counterSelector);
        /* 
        const [state , dispatch] = useReducer(counterSlice,{ value: 0 }); 
        Changed from local state to redux store
        'store.reducerManager.add()' to add it to the store 
        useDispatch hook to dispatch action to store
        selectors to access values from the store
    */
    useEffect(()=>{
        // console.log('useEffect called')
        store.reducerManager.add("counterSlice", counterSlice);
        
        // return function cleanUp() {
        //     //executes when the component dismounts
        //     store.reducerManager.remove("counterSlice");
        // }

    },[])
    

    return(
        <>
            <div> 
                Dashboard
                {value}
            </div>
            <DashboardList dispatch={dispatch}/>


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
         

        
        </>
        
    )
}

export default Dashboard;