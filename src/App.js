import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/navbar';
import SearchBar from './components/searchbar';
import Image from './components/homeImage';
import Footer from './components/footer';
import Card from './components/card';
import Deals from './components/dealsLine';
import Card_2 from './components/card_2'
const App = () => {
	return <div className="App">
		<Navbar/>
		<SearchBar/>
		<Image/>
		<Card/>
		<Deals/>
		<Card_2/>
		<Footer/>
		</div>;
};

export default App;
