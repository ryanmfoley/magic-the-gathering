import React from 'react'
import { Route } from 'react-router-dom'

import Cards from '../Cards/Cards'
import '../Cards/Cards.css'
import Decks from '../Decks/Decks'
import '../Decks/Decks.css'
import BlackDeck from '../Decks/BlackDeck'
import BlueDeck from '../Decks/BlueDeck'
import GreenDeck from '../Decks/GreenDeck'
import RedDeck from '../Decks/RedDeck'
import WhiteDeck from '../Decks/WhiteDeck'
import Header from '../Header/Header'
import '../Header/Header.css'
import Home from '../Home/Home'
import '../Home/Home.css'
import './App.scss'

function App() {
	return (
		<div className='App'>
			<header>
				<Header />
			</header>
			<main>
				<Route exact path='/' component={Home} />
				<Route path='/cards' component={Cards} />
				<Route exact path='/decks' component={Decks} />
				<Route path='/decks/white-deck' component={WhiteDeck} />
				<Route path='/decks/blue-deck' component={BlueDeck} />
				<Route path='/decks/black-deck' component={BlackDeck} />
				<Route path='/decks/red-deck' component={RedDeck} />
				<Route path='/decks/green-deck' component={GreenDeck} />
			</main>
		</div>
	)
}

export default App
