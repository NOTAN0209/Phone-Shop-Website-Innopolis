import React from "react";
import './commercial.css';
import { addProducts, addLikes, buttonProduct } from "../../../reducer/cart-reducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";



function Commercial() {

    const cart = useSelector((store) => store.cart);
    const dispatch = useDispatch();
    const [clicks] = useState(0)
  
  
  
    const hadleAddProduct = () =>dispatch(addProducts());
    const hadleAddButton = () =>dispatch(buttonProduct());
    const hadleAddLikes = () => dispatch(addLikes());

     return(
        <div className="commercial">
                        <div className="commercialImportant">
                            <div className="price">
                                <div className="priceRow">
                                    <p className="priceFirst">75990</p>
                                    <p className="priceSale">-8%</p>

                  
                                    <div onClick = {hadleAddLikes} 
                                    className={`commercialHeartImg ${cart.likes === 1 ? "commercialHeartImgChoise" : ""} `}>
                                     
                                    </div>
                                                                       
                                </div>

                                <p className="priceNew">67990</p>                     
                            </div>                                      

                            <div className="delivery">
                                <span className="deliverySame">Самовывоз в четверг, 1 сентября — <strong>бесплатно</strong></span>
                                <span className="deliveryCourier">Курьером в четверг, 1 сентября — <strong>бесплатно</strong></span>
                            </div>
                                    
                            <button 
                                className={`commercialButton ${cart.button === 1 ? "commercialButtonChoise" : ""} `} 
                                onClick={hadleAddButton} >
                                
                                 <div onClick = {hadleAddProduct} 
                                        clicks={clicks}
                                        className={` ${cart.products === 1  ? "commercialBasketChoise" : "commercialBasket"}`} >

                                        {` ${ cart.products === 1  ? 'Убрать из корзины' : 'Добавить в корзину'} `}                                         
                                </div>
                                
                            </button>

                           

                        </div>

                        <div className="advertising">
                            <h2 className="advertisingTitle">Реклама</h2>

                            <div className="advertisingIframe">
                                <iframe src="#" className="iframeFirst"></iframe>
                                <iframe src="#" className="iframeSecond"></iframe>
                            </div>
                        </div>                 
            </div>
     );
}
export default Commercial