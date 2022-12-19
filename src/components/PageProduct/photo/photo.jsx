import React from "react";
import "./photo.css";


function Photo (){
  
    return(
        <div className="photo" >          
            <h1 className="photoName">Смартфон Apple iPhone 13,синий</h1>
         
            <div class="photoRow">                   
                    <img src="./img/variant/image-1.webp" alt="" class="photoImgMedium" />
                    <img src="./img/variant/image-2.webp" alt="" class="photoImgSmall" />
                    <img src="./img/variant/image-3.webp" alt="" class="photoImgSmall" />
                    <img src="./img/variant/image-4.webp" alt="" class="photoImgBig" />
                    <img src="./img/variant/image-5.webp" alt="" class="photoImgMedium" /> 
                </div>                                                                
        </div>

    )
}
 
export default Photo
