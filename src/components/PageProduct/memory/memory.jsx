import React from "react";
import './memory.css';

 
function Memory() {
   
    return(
 
    <div class="memory">
        <h2 class="memoryTitle">Конфигурация памяти: 128gb</h2>

            <div class="memoryRow">
                <a href="#" class="memoryGigabytes"><span class="memoryFont">128gb</span></a>
                <a href="#" class="memoryGigabytes"><span class="memoryFont">256gb</span></a>
                <a href="#" class="memoryGigabytes"><span class="memoryFont">512gb</span></a>
            </div>
    </div>

    );
}

export default Memory