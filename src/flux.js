import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

const info = [{firstname:'aaa',lastname:'test',dateofbirth:'01/02/2000',startdate:'02/01/2020',street:'aaaa',city:'testtttst',state:'testtttst',zipcode:'testtttst',departments:'test'},{firstname:'ccccc',lastname:'test',dateofbirth:'02/01/2000',startdate:'01/01/2020',street:'testtttst',city:'testtttst',state:'testtttst',zipcode:'testtttst',departments:'test'},{firstname:'ddd',lastname:'test',dateofbirth:'01/02/2000',startdate:'01/01/2020',street:'testtttst',city:'testtttst',state:'testtttst',zipcode:'testtttst',departments:'test'},{firstname:'bbbb',lastname:'test',dateofbirth:'11/03/2000',startdate:'01/01/2020',street:'testtttst',city:'testtttst',state:'testtttst',zipcode:'testtttst',departments:'test'},{firstname:'xx',lastname:'test',dateofbirth:'01/21/2000',startdate:'01/01/2020',street:'testtttst',city:'testtttst',state:'testtttst',zipcode:'testtttst',departments:'test'},{firstname:'wwww',lastname:'test',dateofbirth:'05/21/2000',startdate:'01/01/2020',street:'testtttst',city:'testtttst',state:'testtttst',zipcode:'testtttst',departments:'test'}]
    
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