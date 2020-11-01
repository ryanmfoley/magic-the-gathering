import React, { useState } from 'react'
import { Route } from 'react-router-dom'

import RedDeckContext from '../Decks/RedDeck/RedDeckContext'

import Header from '../Header/Header'
// import '../Header/Header.css'
import Home from '../Home/Home'
import '../Home/Home.css'
import Library from '../Cards/Library'
import Decks from '../Decks/Decks'
import WhiteDeck from '../Decks/WhiteDeck/WhiteDeck'
import BlueDeck from '../Decks/BlueDeck/BlueDeck'
import BlackDeck from '../Decks/BlackDeck/BlackDeck'
import BuildRedDeck from '../Decks/RedDeck/BuildRedDeck'
import GreenDeck from '../Decks/GreenDeck/GreenDeck'
import './App.scss'

function App() {
	// NOTES
	// Card database that allows user to click on card to maximize view
	// BuildDeck, built deck overwrites deck gallery for that color, save button
	// DeckGallery, carousel to view cards

	const deck = {
		mana: null,
		creatures: {},
		sorceries: {},
		instants: {},
	}

	const [redDeck, setRedDeck] = useState(deck)

	return (
		<div className='App'>
			<RedDeckContext.Provider value={{ redDeck, setRedDeck }}>
				<header>
					<Header />
				</header>
				<main>
					<Route exact path='/' component={Home} />
					{/* <Route exact path='/cards' component={Cards} /> */}
					<Route path='/library/' component={Library} />
					<Route path='/decks' component={Decks} />
					<Route path='/decks/white-deck' component={WhiteDeck} />
					<Route path='/decks/blue-deck' component={BlueDeck} />
					<Route path='/decks/black-deck' component={BlackDeck} />
					<Route path='/decks/red-deck' component={BuildRedDeck} />
					<Route path='/decks/green-deck' component={GreenDeck} />
				</main>
			</RedDeckContext.Provider>
		</div>
	)
}

export default App
