import "./logo.css";
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";

function Logo() {

    const cart = useSelector((store) => store.cart);

    return (
        <div className="logo"> 
         
                <div className="logoRow">                    
                    <div className="logoIcon"> 
                        <Link to="/">                
                            <img src="./img/logo/apple-touch-icon.png" alt="logo" className="logoImg" />
                        </Link>
                    </div>
                    
                    <Link to="/">
                        <div className="logoName">
                            <p className="logoText">Мой</p>
                            <p className="logoTextCont">Маркет</p>      
                        </div> 
                    </Link> 

                    <div class="logoHeart">

                        <div className = {`logoHeartNumber ${cart.products ? "" : "logoHeartNumberHidden"}`}>1</div>
                                                   
                        <svg class ="logoHeartPicture" width="40" height="35" viewBox="0 0 44 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.30841 2.95447C7.29791 -0.875449 13.7444 
                            -0.875449 17.7339 2.95447L22.0002 7.05027L26.2667 2.95447C30.2563 -0.875449 36.7027 
                            -0.875449 40.6923 2.95447C44.6817 6.78439 44.6817 12.973 40.6923 16.803L22.0002 34.7472L3.30841
                            16.803C-0.681091 12.973 -0.681091 6.78439 3.30841 2.95447ZM14.7876 5.78289C12.4253 3.51507 8.61701
                            3.51507 6.25468 5.78289C3.89237 8.05071 3.89237 11.7067 6.25468 13.9746L22.0002 29.0904L37.7461 
                            13.9746C40.1084 11.7067 40.1084 8.05071 37.7461 5.78289C35.3838 3.51507 31.5755 3.51507 29.2132
                            5.78289L22.0002 12.7072L14.7876 5.78289Z" fill="#888888"/>
                        </svg>
                    
                    </div>

                    <div class="logoBasket">
                        
                        <div className = {`logoBasketNumber ${cart.products ? "" : "logoBasketNumberHidden"}`}>1</div>
                        
                        <svg class="logoBasketPicture" width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.7394 8.87503C31.6476 8.74476 31.526 8.63844 31.3846 8.56501C31.2432 8.49158 
                            31.0862 8.4532 30.9269 8.45309H9.70393L8.09743 2.91309C7.46743 0.731594 5.9704 0.496094 
                            5.3564 0.496094H1.0729C0.523865 0.496094 0.0798645 0.940594 0.0798645 1.48909C0.0798645 
                            2.03759 0.524365 2.48206 1.07286 2.48206H5.35586C5.49136 2.48206 5.90486 2.48206 6.1869 
                            3.45656L11.7134 23.7671C11.8334 24.1956 12.2239 24.4915 12.6694 24.4915H26.1684C26.5874 
                            24.4915 26.9614 24.229 27.1029 23.8345L31.8609 9.78203C31.9704 9.47753 31.9249 9.13853 
                            31.7394 8.87503H31.7394ZM25.4696 22.5061H13.4231L10.2621 10.4396H29.5151L25.4696 22.5061ZM23.5001 
                            26.5041C22.1191 26.5041 21.0001 27.6231 21.0001 29.0041C21.0001 30.3851 22.1191 31.5041 
                            23.5001 31.5041C24.8811 31.5041 26.0001 30.3851 26.0001 29.0041C26.0001 27.6231 24.8811 
                            26.5041 23.5001 26.5041ZM14.5001 26.5041C13.1191 26.5041 12.0001 27.6231 12.0001 29.0041C12.0001 
                            30.3851 13.1191 31.5041 14.5001 31.5041C15.8811 31.5041 17.0001 30.3851 17.0001 29.0041C17.0001 
                            27.6231 15.8811 26.5041 14.5001 26.5041Z" fill="#888888"/>
                        </svg>
                          
                    </div>
                </div>
                                                 
        </div>
    )
}

export default Logo