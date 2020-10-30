import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

import RedDeckContext from './RedDeckContext'

import { CreatureCards } from './FetchCards'

const BuildRedDeck = () => {
	// const { deck, setDeck } = useContext(RedDeckContext)

	let [manaCost, setManaCost] = useState(1)

	let [cards, setCards] = useState([])

	// if (!cards) {
	// 	return <></>
	// } else {
	// 	return (
	// 		<div>
	// 			<h1>Red Deck in construction</h1>
	// 		</div>
	// 	)
	// }
	return <h1>Red Deck in construction</h1>
}

export default BuildRedDeck
