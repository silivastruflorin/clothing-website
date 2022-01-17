//declare a default value for state
const INITIAL_STATE = {
    currentUser : null
}

/* 
    We will have to declare an action with 
    {
        type: 'SomeType',  //in our case Set_Current_State
        payload: someValue
    }
*/

const userReducer = (state = INITIAL_STATE, action) => {
    /*  What Reducer does?
        Modifies, based on an action, the actual/current state received as parameter
    */
   switch(action.type){
       case  'SET_CURRENT_USER' : 
       /* because the state object has to be Immutable 
          we copy the state and then modify the state
          then we return it as an new object which will trigger rerendering in DOM
        */
            return {
                ...state, //spreads the state, meaning everything in the state (same as state.id state.currentUser and so on)
                //then we modify what we care about
                currentUser: action.payload
            }
           
        default:                           //none of the action match the ones that we care about then return the state
            return state;
   }
}

export default userReducer;