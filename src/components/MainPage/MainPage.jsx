import React from "react";
import './MainPage.css';
import Header from '../PageProduct/logo/logo.jsx';
import Footer from '../PageProduct/footer/footer.jsx';
import { Link } from "react-router-dom";


function MainPage() {

    return (
        <main className="main">           
            <Header />  
                <div className="pageContent">
                    <div className="pageText">
                        Здесь должно быть содержимое главной страницы.<br />
                        Но в рамках курса главная страница используется лишь <br />
                        в демонстрационных целях
                    </div>                  
                    <Link to="/product" className="pageLink">Перейти на страницу товара</Link>
                </div>                   
            <Footer />     
        </main>
    );
}

export default MainPage