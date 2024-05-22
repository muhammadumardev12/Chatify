
import { LOGIN,LOGOUT } from "./constants";
export const login = (userData) => ({
    type: LOGIN,
    payload: userData,
  });
  
  export const logout = () => ({
    type: LOGOUT,
  });