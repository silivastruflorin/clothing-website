/*
    This component wraps the Route component and returns a component based on 
    user roles, if the user is logged in...and so on 
    https://jasonwatmore.com/post/2019/02/01/react-role-based-authorization-tutorial-with-example
*/
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// import { authenticationService } from '@/_services';
import { authService } from '../../services/authentification/auth';

export const PrivateRoute = ({ path, ...rest }) => {
    const currentUser = authService.getCurrentUser();
    
    // user roles to be implemented

    if (currentUser) {
            return  <Route path={path} component={rest.component} />
    }else{
        // not logged in so redirect to login page with the return url
        console.log(currentUser)
        return  <Redirect to={{ pathname: rest.redirectPath }} />
    }
    


}