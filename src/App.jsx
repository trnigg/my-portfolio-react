// import { useState, useEffect } from "react";
// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// Import remaining assets / components here

function App() {
	return (
		<>
			{/* <div className="app"> */}
			<Header />
			<div className="page-container">
				<Outlet />
			</div>
			<Footer />
			{/* </div> */}
		</>
	);
}

export default App;
