import {createSlice} from "@reduxjs/toolkit";

localStorage.clear()

const initialProducts = JSON.parse( localStorage.getItem("logoBasketNumberHidden"));
const initialLikes = JSON.parse( localStorage.getItem("logoHeartNumberHidden"));
const initialButton = JSON.parse( localStorage.getItem("commercialButtonChoise"));

export const cartSlice = createSlice ({
    name: "cart",

    initialState: { products: initialProducts ? initialProducts : [],
                    likes: initialLikes ? initialLikes : [], 
                    button: initialButton ? initialButton : [] }, 

    reducers: {
       
        addProducts: (prevState, action) => {

            const newStateProduct = {
                    products: 1 - prevState.products,
                    likes:  prevState.likes,
                    button: prevState.button,                             
                    }
            const dataProduct = JSON.stringify(newStateProduct);         
            localStorage.setItem("logoBasketNumberHidden", dataProduct);
            return newStateProduct;
        },   

        addLikes: (prevState, action) => {
            const newStateLikes = {           
                products: prevState.products,
                likes: 1 - prevState.likes,
                button:  prevState.button,
            }
            const dataLikes =  JSON.stringify(newStateLikes); 
            localStorage.setItem("logoHeartNumberHidden", dataLikes);
            return newStateLikes;  
        },

        buttonProduct: (prevState, action) =>{
            const newStateButton = {           
                products: prevState.products,
                likes: prevState.likes,
                button:  1 - prevState.button,
            }
            const dataButton =  JSON.stringify(newStateButton); 
            localStorage.setItem("commercialButtonChoise", dataButton);
            return newStateButton;  
        }
    },
});

export const { addProducts, addLikes, buttonProduct } = cartSlice.actions;

export default cartSlice.reducer;

