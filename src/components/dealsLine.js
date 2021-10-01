import React from "react";
import "./dealsLine.css"
const Deals = () => {
    return (
        <>
            <div className="dealsLine"> 
               <p className="dealsTitle">Get the best deals delivered direct to your inbox each day</p>
               <div>
               <input  className="dealsInput" type="text" placeholder="Enter email Address"/>
               <button className="dealsBtn">Subscribe</button></div>
            </div>
        </>
    )
}

export default Deals