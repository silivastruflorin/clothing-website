/* Actions are functions that return object in the corect format that actions is expected to be

action format is an object for example   {
                                            type: 'SomeType',  
                                            payload: someValue
                                        }
*/

import { getAction } from "connected-react-router"

export const SetCurrentUser = user => {
    return (
        {
            type: 'SET_CURRENT_USER',  //same as in userReducer
            payload: user
        }

    )
} 


dispatch(increment(payload))
action.payload