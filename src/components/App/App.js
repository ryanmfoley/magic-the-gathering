import { useState } from 'react'
import { Route } from 'react-router-dom'

import DeckInProgressContext from '../Cards/DeckInProgressContext'
import Navigation from '../Navigation/Navigation'
import Library from '../Cards/Library'
import Decks from '../Decks/Decks'
import DeckGallery from '../Decks/DeckGallery'
import WhiteDeck from '../Decks/WhiteDeck/WhiteDeck'
import BlueDeck from '../Decks/BlueDeck/BlueDeck'
import BlackDeck from '../Decks/BlackDeck/BlackDeck'
import RedDeck from '../Decks/RedDeck/RedDeck'
import GreenDeck from '../Decks/GreenDeck/GreenDeck'
import './App.scss'

function App() {
	const [deckInProgress, setDeckInProgress] = useState([])

	return (
		<>
			<DeckInProgressContext.Provider
				value={{ deckInProgress, setDeckInProgress }}>
				<header>
					<Navigation />
				</header>
				<main>
					<Route exact path='/' component={Decks} />
					<Route path='/library' component={Library} />
					<Route path='/deck-gallery' component={DeckGallery} />

					<Route path='/white-deck' component={WhiteDeck} />
					<Route path='/blue-deck' component={BlueDeck} />
					<Route path='/black-deck' component={BlackDeck} />
					<Route path='/red-deck' component={RedDeck} />
					<Route path='/green-deck' component={GreenDeck} />
				</main>
			</DeckInProgressContext.Provider>
		</>
	)
}

export default App
