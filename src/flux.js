import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { listUser,list } from './assets/data/data';

const userReducer = (state = list,action) => {
    if(action.type === "ADD_USER") {
        let array = [...state];
        array.push(action.listuser);
        return array;
    };
    return state;
}
const reducer = combineReducers({
    listuser:userReducer,
});

const store = configureStore({
  reducer
});
store.getState();
export default store