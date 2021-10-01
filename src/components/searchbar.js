import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import "./searchbar.css"

const SearchBar = () => {
    return (<>
        <nav className="searchBar">
            <ul className="searchType">
                {/* <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}
                <Link className="sear"> Browse Categories</Link>
                <Link className="sear"> What's New </Link>
                <Link className="sear"> Trending</Link>
                <Link className="sear"> For You</Link>
                <Link className="sear"> Shop Products</Link>

            </ul>
            <input className="searchInput" placeholder="Search Grab One" />

        </nav>

    </>)
}

export default SearchBar
