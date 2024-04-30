import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

const info = [{firstname:'test',lastname:'test',dateofbirth:'01/01/2000',startdate:'01/01/2020',street:'aaaa',city:'testtttst',state:'testtttst',zipcode:'testtttst',departments:'test'},{firstname:'test',lastname:'test',dateofbirth:'01/01/2000',startdate:'01/01/2020',street:'testtttst',city:'testtttst',state:'testtttst',zipcode:'testtttst',departments:'test'},{firstname:'test',lastname:'test',dateofbirth:'01/01/2000',startdate:'01/01/2020',street:'testtttst',city:'testtttst',state:'testtttst',zipcode:'testtttst',departments:'test'},{firstname:'test',lastname:'test',dateofbirth:'01/01/2000',startdate:'01/01/2020',street:'testtttst',city:'testtttst',state:'testtttst',zipcode:'testtttst',departments:'test'},{firstname:'test',lastname:'test',dateofbirth:'01/01/2000',startdate:'01/01/2020',street:'testtttst',city:'testtttst',state:'testtttst',zipcode:'testtttst',departments:'test'},{firstname:'test',lastname:'test',dateofbirth:'01/01/2000',startdate:'01/01/2020',street:'testtttst',city:'testtttst',state:'testtttst',zipcode:'testtttst',departments:'test'}]
    
const userReducer = (state = info,action) => {
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