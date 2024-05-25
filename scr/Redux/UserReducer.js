import {STOREUSERS } from "./constants";

const initialState = {
   user:[]
  };
  
  const UserReducer = (state = initialState, action) => {
    switch (action.type) {
      case STOREUSERS:
        return {
          ...state,
          user: action.payload,
        };
     
      default:
        return state;
    };
  };
  
  export default UserReducer;