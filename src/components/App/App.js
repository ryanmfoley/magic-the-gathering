import React, { useState } from 'react'
import { Route } from 'react-router-dom'

import SelectedCardContext from '../Cards/SelectedCardContext'
import WhiteDeckContext from '../Decks/WhiteDeck/WhiteDeckContext'
import BlueDeckContext from '../Decks/BlueDeck/BlueDeckContext'
import BlackDeckContext from '../Decks/BlackDeck/BlackDeckContext'
import RedDeckContext from '../Decks/RedDeck/RedDeckContext'
import GreenDeckContext from '../Decks/GreenDeck/GreenDeckContext'

import Header from '../Header/Header'
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

	const [selectedCard, setSelectedCard] = useState(null)
	const [whiteDeck, setWhiteDeck] = useState(deck)
	const [blueDeck, setBlueDeck] = useState(deck)
	const [blackDeck, setBlackDeck] = useState(deck)
	const [redDeck, setRedDeck] = useState(deck)
	const [greenDeck, setGreenDeck] = useState(deck)

	return (
		<div className='App'>
			<WhiteDeckContext.Provider value={{ whiteDeck, setWhiteDeck }}>
				<BlueDeckContext.Provider value={{ blueDeck, setBlueDeck }}>
					<BlackDeckContext.Provider value={{ blackDeck, setBlackDeck }}>
						<RedDeckContext.Provider value={{ redDeck, setRedDeck }}>
							<GreenDeckContext.Provider value={{ greenDeck, setGreenDeck }}>
								<SelectedCardContext.Provider
									value={{ selectedCard, setSelectedCard }}>
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
								</SelectedCardContext.Provider>
							</GreenDeckContext.Provider>
						</RedDeckContext.Provider>
					</BlackDeckContext.Provider>
				</BlueDeckContext.Provider>
			</WhiteDeckContext.Provider>
		</div>
	)
}

export default App
