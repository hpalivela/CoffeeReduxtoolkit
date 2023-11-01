import {configureStore} from '@reduxjs/toolkit';
import coffeeReducer from './CoffeSlice';
import cartReducer from './CartSlice';
import { combineReducers } from '@reduxjs/toolkit';

const reducer=combineReducers({
    coffeeReducer,
    cartReducer
})
export const store=configureStore({
        reducer:{
            reducer,
        }
});