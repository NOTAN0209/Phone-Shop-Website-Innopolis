import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import PageIndex from "./components/MainPage/MainPage";
import PageProduct from "./components/PageProduct/PageProduct";



function App() {
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<PageIndex/>}/>
          <Route path="/product" element={<PageProduct/>}/>
      </Routes>
  </BrowserRouter>
  );
 
}

export default App;
