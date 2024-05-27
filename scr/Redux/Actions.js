
import { LOGIN,LOGOUT, STORELOGINUSER, STOREUSERS } from "./constants";
export const login = (userData) => ({
    type: LOGIN,
    payload: userData,
  });
  
  export const logout = () => ({
    type: LOGOUT,
  });
  export const storeUsers =(fetchData,id)=>({
    type: STOREUSERS,
    payload: {
      users: fetchData,
      id: id
    }
  }); 
  export const storeLoginUser =(storedName,storedAvatar)=>({
    type: STORELOGINUSER,
    payload: {
      name: storedName,
      avatar: storedAvatar,
    }
  }); 