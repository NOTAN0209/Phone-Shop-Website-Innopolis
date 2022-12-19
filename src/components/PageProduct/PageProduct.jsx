import React from "react";
import "../Main/Main.css";

import Сolors from './colors/colors.jsx';
import Form from './form/form.jsx';
import Memory from './memory/memory.jsx';
import Logo from './logo/logo.jsx';
import Reviews from './reviews/reviews.jsx';
import Footer from './footer/footer.jsx';
import Photo from './photo/photo.jsx';
import Characteristic from './characteristic/characteristic.jsx';
import Description from './desc/desc.jsx';
import Dimensions from './dimensions/dimensions.jsx';
import Sidebar from './commercial/commercial.jsx';
import Navigation from './navigation/nav.jsx';



function PageProduct (){
    
    return(
        <body className="body">
            <Logo />      
            <Navigation />               
            <Photo />
                
            <div className="center">
                <div className="config">    
                    <div className="configColumn">                    
                        <Сolors />                                                                                                                                                           
                        <Memory />                           
                        <Characteristic />                                   
                        <Description />
                        <Dimensions />                                           
                        <Reviews />                                       
                    </div> 
                    <Sidebar />
                 </div>                   
            </div> 
            <Form />           
           <Footer />
        </body>
    )
}

export default PageProduct;
