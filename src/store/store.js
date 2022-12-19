import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "../reducer/cart-reducer.js";



export const store = configureStore({
    reducer:{
        cart: cartReducer,
      
        //можно добавить сюда любой Reductrer
    },
});
//повторяется код во всех проектах