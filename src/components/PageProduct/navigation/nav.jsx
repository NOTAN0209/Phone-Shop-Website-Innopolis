import React from "react";
import './nav.css';
import Nav from "./nav.js";
import Link from "../Link/link";


function Navigation() {
    
    let list2 = [];

    Nav.map((value) => {
        list2.push(<Link link={value.href} key={value.id} className="navLink" text={value.section}></Link>);
        list2.push(<span key={value.line} className="navLinkTrait">{value. separatuon}</span>);
    });

    list2.pop ();

     return(
        <div className="nav">       
            <div className="navRow">
            {list2}
            </div>
        </div> 
     )
}
export default Navigation