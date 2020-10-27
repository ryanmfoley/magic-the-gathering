import React from 'react'
import { Route } from 'react-router-dom'

import Cards from '../Cards/Cards'
import '../Cards/Cards.css'
// import Hand from '../Hand/Hand'
// import '../Hand/Hand.css'
import Header from '../Header/Header'
import '../Header/Header.css'
import Home from '../Home/Home'
import './App.scss'

function App() {
	return (
		<div className='App'>
			<header>
				<Header />
			</header>
			<Route exact path='/' component={Home} />
			<Route path='/Cards' component={Cards} />
			{/* <Route path='/Hand' component={Hand} /> */}
		</div>
	)
}

export default App
