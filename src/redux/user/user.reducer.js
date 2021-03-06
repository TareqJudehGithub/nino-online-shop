import {UserActionTypes} from './user.types';
const INITIAL_STATE = {
     currentUser: null
};
const userReducer = (state = INITIAL_STATE, action) => {
     switch (action.type) {
          case UserActionTypes.SET_CURRENT_USER:
               return {
                    ...state,
                    currentUser: action.payload
               }
          default:
               return state;
     }
     // if(action.type === "SET_CURRENT_USER") {
     //      return {
     //           ...state,
     //           currentUser: action.payload
     //      }
     // }
     // else {
     //      return state;
     // }
};
export default userReducer;