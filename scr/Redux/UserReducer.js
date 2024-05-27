import {STORELOGINUSER, STOREUSERS } from "./constants";

const initialState = {
   user:[],
   id:'',
   name:'',
   avatar:''
  };
  
  const UserReducer = (state = initialState, action) => {
    switch (action.type) {
      case STOREUSERS:
        return {
          ...state,
          user: action.payload.users,
          id: action.payload.id
        };
        case STORELOGINUSER:
        return {
          ...state,
          name: action.payload.name,
          avatar: action.payload.avatar
        };
     
     
      default:
        return state;
    };
  };
  
  export default UserReducer;