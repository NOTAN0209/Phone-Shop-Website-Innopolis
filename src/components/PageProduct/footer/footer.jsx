import React from "react";
import "./footer.css";
import { useCurrentDate } from "@kundinos/react-hooks";


function Footer() {
    const currentDate = useCurrentDate();

    // Получаем компоненты текущей даты
    const month = currentDate.getMonth();
    const date = currentDate.getDate();
    const fullYear = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

return (

<footer className="footer">
                <div className="footerRow">
                    <ul className="footerList">

                       <li className="footerText">© ООО «<span className ="footerLetter">Мой</span>Маркет», 2018-2022.</li> 

                        <li className="footerTel">Для уточнения информации звоните по номеру                        
                            <a href="tel:+79000000000" target="_blank" className="footerTelLink"> +7 900 000 0000,</a>
                        </li>

                        <li className="footerMail">а предложения по сотрудничеству отправляйте на почту                     
                            <a href="mailto:partner@mymarket.com" target="_blank" className="footerMailLink"> partner@mymarket.com</a>
                        </li>

                    </ul>
                    <a href="#head" target="_blank" className="footerLink">Наверx</a>
                </div>
                <div className="footerTimer">

                    <p className="footerNowDate">{`Текущая дата: ${date}.${month}.${fullYear}`}</p>
                    <p className="footerNowTime">{`Текущее время: ${hours}:${minutes}:${seconds}`}</p>

                </div>
            </footer>    


)

}

export default Footer