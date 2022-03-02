import { createSlice } from '@reduxjs/toolkit';

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
        console.log(action);   
      },
    AUTH_REUEST_FAILED: (state,action) => {
        state.message = action.payload;
        state.loggedIn = false;
    },
  },
})

export const { AUTH_REUEST, 
               AUTH_REUEST_SUCCESEED,
               AUTH_REUEST_FAILED,
            } = UserSlice.actions
export default UserSlice.reducer;