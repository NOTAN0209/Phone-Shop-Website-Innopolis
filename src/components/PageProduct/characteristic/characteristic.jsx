import React from "react";
import './characteristic.css';



function Characteristic (){
    return(
        <div className="characteristic">
            <h2 className="characteristicTitle">Характеристики товара</h2>                                                      
            <ul className="characteristicColumn" >
                <li class="characteristicRow">Экран:<strong>6.1</strong></li>
                <li class="characteristicRow">Встроенная память:<strong>128 ГБ</strong></li>
                <li class="characteristicRow">Операционная система: <strong>iOS 15</strong></li>
                <li class="characteristicRow">Беспроводные интерфейсы: <strong>NFC, Bluetooth, Wi-Fi</strong></li>
                <li class="characteristicRow">Процессор:<a href="https://ru.wikipedia.org/wiki/Apple_A15" target="_blank">Apple A15 Bionic</a></li>
                <li class="characteristicRow">Вес:<strong>173</strong></li>
            </ul>                       
        </div> 
    )
}

export default Characteristic

