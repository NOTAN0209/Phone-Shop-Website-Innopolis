import React from "react";
import './colorButton.css';
import './colors.js';

function colorButton(props) {

    const { color, actived } = props;
    const className = `colorSize ${actived ? "colorSizeSelected" : ""}`;
    
    return (
        <button className={className} >
           <img src={color.image} className="imgSize"/>
        </button>
    );
}

export default colorButton;


