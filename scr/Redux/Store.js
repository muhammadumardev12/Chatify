// store.js
import { createStore, combineReducers } from 'redux';
import authReducer from './Reducer';
import UserReducer from './UserReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  users:UserReducer,
});

const store = createStore(rootReducer);

export default store;