import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./homeImage.css"

const Image = () => {
    return (<>
        <div className="homeImage">
            <img src="https://mediacdn.grabone.co.nz/asset/yDjZTGuDg1" className="image" />

            <div className="text"> <span>Covid 19 Update:</span> We encourage you to shop as normal for all your products but shipping delays may occur. Stay safe NZ!
            </div>
        </div>
    </>)
}

export default Image