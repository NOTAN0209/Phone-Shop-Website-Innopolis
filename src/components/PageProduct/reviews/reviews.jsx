import React from "react";
import reviews from './reviews.js';
import './reviews.css'



function Reviews(){

return(
    
    <div className="reviews"  > 
        <div className="reviewsText">
            <span className="reviewsRecall">Отзывы</span>
            <span className="reviewsQuantity">425</span>
        </div>   

            { reviews.map((review) => (                                                    
                    <div className="reviewRow" key = {review.row}>

                        <img 
                            src= {review.photoId} 
                            alt= {review.altId} 
                            className="reviewImg"  
                        />

                        <div className="reviewColumn" key = {review.column}>

                            <h2 className="reviewName">{review.nameUser}</h2>  

                            <img 
                                src={review.star} 
                                alt={review.altStar} 
                                className="reviewStar" 
                            />

                            <ul className="reviewNameList">
                                <li className="nameUse">{review.use}</li>
                                <li className="nameAdvantages">{review.advantages}</li>                                                    
                                <li className="nameFlaw">{review.flaw}</li>
                            </ul>
                        </div> 
                        
                    </div>
               
            ))} 
            <div className="reviewSeparator"></div>                                     
    </div>
);
}

export default Reviews