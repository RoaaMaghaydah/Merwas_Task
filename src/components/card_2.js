import React from "react";
import { Link } from "react-router-dom";
import "./card_2.css"

const Card_2 = () => {
    const data = [{
        image: "https://main-cdn.grabone.co.nz/goimage/fullsize/90496e3c99ea527bb3efc1d5cc97f4a4aecdd796.jpg",
        title: "Solar-Powered LED Fairy Lights",
        wig: "63 bought",
        price: "$21",
        text: "Solar-Powered LED Fairy Lights - Two Sizes & Four Colours Available"
    },
    {
        image: "https://main-cdn.grabone.co.nz/goimage/fullsize/e33839b62707d2c1bc2d4c8e4d81a650444e4ed7.jpg",
        title: "Two Premium Export Grade Quality Salmon Sides",
        wig: "690 bought",
        price: "$60",
        text: "Two Premium Export Grade Quality Salmon Sides (1-1.3kg per Side)"
    },
    {
        image: "https://main-cdn.grabone.co.nz/goimage/fullsize/32286725841603f9c33fc6257a8b797d24738be8.jpg",
        title: "Mesh Reusable Face Mask",
        wig: "120 bought",
        price: "$9",
        text: "Mesh Reusable Face Mask with Dual Respirators - Option for Three or Five Masks"
    },
    {
        image: "https://main-cdn.grabone.co.nz/goimage/fullsize/4211e3b1a193f8b09aaa64205bd6606b330b7f54.jpg",
        title: "Gin Filled Christmas Baubles",
        wig: "20 bought",
        price: "$89",
        text: "Gingle Bells Floral Gin Filled Christmas Baubles"
    }
    
    ]
    return (
        <>
        <div className="mainPage">
            <div className="card_2Header">
                <p className="headerText">Featured Auckland deals  </p>
                <button className="card_2Btn"> View More... </button>
              
            </div>
            <div className="card_2Page">
                {data && data.map((elemant, i) => {
                    return (

                        <div className="card_col">
                            <div class="container2">
                                <img className="card_2Image" src={elemant.image} />
                                <div class="overlay2" >
                                    <div class="Card_2text">{elemant.text}</div>
                                </div>
                            </div>
                            <h2 className="card_2Title">{elemant.title}</h2>
                            <div class="card_2Info">
                                <p className="wig2">{elemant.wig}</p>
                                <p className="price2">{elemant.price}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
            </div>


        </>
    )
}

export default Card_2