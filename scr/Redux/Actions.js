
import { LOGIN,LOGOUT, STOREUSERS } from "./constants";
export const login = (userData) => ({
    type: LOGIN,
    payload: userData,
  });
  
  export const logout = () => ({
    type: LOGOUT,
  });
  export const storeUsers =(fetchData)=>({
    type: STOREUSERS,
    payload: fetchData,
  });