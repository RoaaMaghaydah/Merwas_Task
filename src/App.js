import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/navbar';
import SearchBar from './components/searchbar';
import Image from './components/homeImage';
import Footer from './components/footer';
import Card from './components/card';
import Deals from './components/dealsLine';
const App = () => {
	return <div className="App">
		<Navbar/>
		<SearchBar/>
		<Image/>
		<Card/>
		<Deals/>
		<Footer/>
		</div>;
};

export default App;
