import React, { useState } from 'react'
import { Route } from 'react-router-dom'

import RedDeckContext from '../Decks/RedDeck/RedDeckContext'

import Cards from '../Cards/Cards'
import '../Cards/Cards.css'
import Decks from '../Decks/Decks'
import '../Decks/Decks.css'
import FetchCards from '../Decks/RedDeck/FetchCards'
import BlackDeck from '../Decks/BlackDeck/BlackDeck'
import BlueDeck from '../Decks/BlueDeck/BlueDeck'
import GreenDeck from '../Decks/GreenDeck/GreenDeck'
import BuildRedDeck from '../Decks/RedDeck/BuildRedDeck'
import RedDeck from '../Decks/RedDeck/RedDeck'
import WhiteDeck from '../Decks/WhiteDeck/WhiteDeck'
import Header from '../Header/Header'
import '../Header/Header.css'
import Home from '../Home/Home'
import '../Home/Home.css'
import './App.scss'

function App() {
	// const deck = {
	// 	mana: null,
	// 	creatures: {},
	// 	sorceries: {},
	// 	instants: {},
	// }

	const [redDeck, setRedDeck] = useState([])
	// console.log(decks)

	return (
		<div className='App'>
			<RedDeckContext.Provider value={{ redDeck, setRedDeck }}>
				<header>
					<Header />
				</header>
				<main>
					<Route exact path='/' component={Home} />
					<Route path='/cards' component={Cards} />
					<Route path='/decks' component={Decks} />
					<Route path='/decks/white-deck' component={WhiteDeck} />
					<Route path='/decks/blue-deck' component={BlueDeck} />
					<Route path='/decks/black-deck' component={BlackDeck} />
					{/* <Route path='/decks/red-deck' component={RedDeck} /> */}
					{/* testing build red deck */}
					<Route path='/decks/red-deck' component={FetchCards} />
					<Route path='/decks/green-deck' component={GreenDeck} />
				</main>
			</RedDeckContext.Provider>
		</div>
	)
}

export default App
