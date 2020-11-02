import React, { useState } from 'react'
import { Route } from 'react-router-dom'

import DeckInProgressContext from '../Cards/DeckInProgressContext'
import Header from '../Header/Header'
import Home from '../Home/Home'
import '../Home/Home.css'
import Library from '../Cards/Library'
import Decks from '../Decks/Decks'
import DeckGallery from '../Decks/DeckGallery'
import WhiteDeck from '../Decks/WhiteDeck/WhiteDeck'
import BlueDeck from '../Decks/BlueDeck/BlueDeck'
import BlackDeck from '../Decks/BlackDeck/BlackDeck'
import BuildRedDeck from '../Decks/RedDeck/BuildRedDeck'
import GreenDeck from '../Decks/GreenDeck/GreenDeck'
import './App.scss'

function App() {
	const deck = {
		mana: null,
		creatures: {},
		sorceries: {},
		instants: {},
	}

	const [deckInProgress, setDeckInProgress] = useState([])

	return (
		<div className='App'>
			<DeckInProgressContext.Provider
				value={{ deckInProgress, setDeckInProgress }}>
				<header>
					<Header />
				</header>
				<main>
					<Route exact path='/' component={Home} />
					<Route path='/library/' component={Library} />
					<Route path='/deck-gallery' component={DeckGallery} />
					<Route path='/decks' component={Decks} />
					<Route path='/decks/white-deck' component={WhiteDeck} />
					<Route path='/decks/blue-deck' component={BlueDeck} />
					<Route path='/decks/black-deck' component={BlackDeck} />
					<Route path='/decks/red-deck' component={BuildRedDeck} />
					<Route path='/decks/green-deck' component={GreenDeck} />
				</main>
			</DeckInProgressContext.Provider>
		</div>
	)
}

export default App
