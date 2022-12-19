import { useState } from 'react';
import './colors.css';
import Colors from './colors.js';
import ColorButton from './colorButton.jsx';

function ColorsTel() {
  
    const [currentColor, setCurrentColor] = useState(Colors[0]);
    const handleClick = (id) =>  setCurrentColor(id);

    return (
      <div className="colors">
         <h2 className="colorTitle">Цвет товара: синий</h2>
         <div className="colorsRow" >
            {Colors.map((color) => (
              <div onClick={() => handleClick(color.id)} key={color.id}>
                <ColorButton 
                color={color} 
                actived={color.id === currentColor}            
                />
              </div>
              ))}
          </div>
      </div>
    );
}

export default ColorsTel



                 



      
   
  


                          

                    