import React from "react";
import './dimensions.css'

function Dimension(){

    return(
        <div className="dimensions">             
        <h2 className="dimensionTitle">Сравнение моделей</h2>                         
        <div className="dimensionTable">                                               
            <div className="dimensionTableRow">
                <div className="dimensionTableCell">Модель</div>
                <div className="dimensionTableCell">Вес</div>
                <div className="dimensionTableCell">Высота</div>
                <div className="dimensionTableCell">Ширина</div>
                <div className="dimensionTableCell">Толщина</div>
                <div className="dimensionTableCell">Чип</div>
                <div className="dimensionTableCell">Объём памяти</div>
                <div className="dimensionTableCellLast">Аккумулятор</div>
            </div>

            <div className="dimensionTableRow">
                <div className="dimensionTableCellFirst">Iphone11</div>
                <div className="dimensionTableCellFirst">194 грамма</div>
                <div className="dimensionTableCellFirst">150.9 мм</div>
                <div className="dimensionTableCellFirst">75.7 мм</div>
                <div className="dimensionTableCellFirst">8.3 мм</div>
                <div className="dimensionTableCellFirst">A13 Bionicchip</div>
                <div className="dimensionTableCellFirst">до 128 Гб</div>
                <div className="dimensionTableCellSecond">До 17 часов</div>
            </div>

            <div className="dimensionTableRow">
                <div className="dimensionTableCellFirst">Iphone12</div>
                <div className="dimensionTableCellFirst">164 грамма</div>
                <div className="dimensionTableCellFirst">146.7 мм</div>
                <div className="dimensionTableCellFirst">71.5 мм</div>
                <div className="dimensionTableCellFirst">7.4 мм</div>
                <div className="dimensionTableCellFirst">A14 Bionicchip</div>
                <div className="dimensionTableCellFirst">до 256 Гб</div>
                <div className="dimensionTableCellSecond">До 19 часов</div>
            </div>

            <div className="dimensionTableRow">
                <div className="dimensionTableCellFirst">Iphone13</div>
                <div className="dimensionTableCellFirst">174 грамма</div>
                <div className="dimensionTableCellFirst">146.7 мм</div>
                <div className="dimensionTableCellFirst">71.5 мм</div>
                <div className="dimensionTableCellFirst">7.6 мм</div>
                <div className="dimensionTableCellFirst">A15 Bionicchip</div>
                <div className="dimensionTableCellFirst">до 512 Гб</div>
                <div className="dimensionTableCellSecond">До 19 часов</div>
            </div>
        </div>   
</div>
    )
}

export default Dimension