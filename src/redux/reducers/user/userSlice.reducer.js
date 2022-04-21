import { createSlice } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import {authService} from '../../../services/authentification/auth'

const INITIAL_STATE = {
    currentUser:'',
    loggedIn: false,
    message: ''
}

const UserSlice = createSlice({
  name: 'UserReducer',
  initialState: INITIAL_STATE,
  reducers: {
    AUTH_REUEST: (state) => {
      //logic in saga to attempt authentification from firebase
    },
    AUTH_REUEST_SUCCESEED: (state,action) => {
        state.currentUser = action.payload.email;
        state.loggedIn = true;
        // console.log(action); 
        authService.saveInLocalStorage(state.currentUser); 

      },
    AUTH_REUEST_FAILED: (state,action) => {
        state.message = action.payload;
        state.loggedIn = false;
    },
    AUTH_LOGOUT_REQ: (state) => {
      //logic in saga to attempt Deauthentification from firebase
    },
    AUTH_LOGOUT_REQ_SUCCESS: (state) => {
      state.currentUser = '';
      state.loggedIn = false;
      state.message = "";
      authService.deleteFromLocalStorage();

    },
    AUTH_LOGOUT_REQ_FAILED: (state,action) => {
      //logic in saga to attempt authentification from firebase
      console.log(action.payload)
    },

  },
})

export const { AUTH_REUEST, 
               AUTH_REUEST_SUCCESEED,
               AUTH_REUEST_FAILED,
               AUTH_LOGOUT_REQ,
               AUTH_LOGOUT_REQ_SUCCESS,
               AUTH_LOGOUT_REQ_FAILED,
            } = UserSlice.actions
export default UserSlice.reducer;