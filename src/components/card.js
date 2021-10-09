import React from "react";
import { Link } from "react-router-dom";
import "./card.css"

const Card = () => {
    const discover = ["Featured Auckland deals", "Collections", "Activities, Events & Outdoors", "Picked for You", "Store", "Restaurants, Bars, Cafes",
        "Beauty, Massage & Spa", "House & Garden", "Fitness & Sports", "Automotive"]

    const data = [{
        image: "https://main-cdn.grabone.co.nz/goimage/fullsize/6009bcbb5ab263035368b7d3fd11b64f45353e8b.jpg",
        title: "HelloFresh Special Offer",
        wig: "205 bought",
        price: "$89.89",
        text: "Five-Pack of Christmas Themed Face Masks - Option for 10-Pack or 20-Pack"
    },
    {
        image: "https://www.thespruceeats.com/thmb/Ym_b4-1G8TgsX3vAwhfXx5YaG4M=/3224x2418/smart/filters:no_upscale()/bar101-cocktails-504754220-580e83415f9b58564cf470b9.jpg",
        title: "Six-Bottles of Italian Sparkling Fragolino",
        wig: "47 bought",
        price: "$54",
        text: "Six-Bottle Crate of Italian Sparkling Fragolino - Option for 12-Bottle Crate & for Sparkling Limoncello"
    }
    ]
    return (<>
        <div className="card">
            <div className="col_">
                <h1 className="discover-title">Discover</h1>
                <div className="discover-links">
                    {discover && discover.map((elemant, i) => {
                        return (
                            <Link className="discover">{elemant}</Link>
                        )
                    })}
                </div>
            </div>

            {data && data.map((elemant, i) => {
                return (
                    <div className="col_1">
                        <div class="container">
                            <img className="cardImage" src={elemant.image} />
                            <div class="overlay" >
                                <div class="Cardtext">{elemant.text}</div>
                            </div>
                        </div>
                        <h2 className="cardTitle">{elemant.title}</h2>
                        <div class="cardInfo">
                            <p className="wig">{elemant.wig}</p>
                            <p className="price">{elemant.price}</p>
                        </div>
                    </div>
                )
            })}



        </div>
    </>)
}


export default Card