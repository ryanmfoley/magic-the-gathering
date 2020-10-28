import React, { useEffect, useState } from 'react'

import axios from 'axios'

import D

import { redCreatures, redSorcerys, redInstants } from './cardsForRedDeck'

const RedDeck = () => {
	const [deck, setDeck] = useState()

	useEffect(() => {
		axios.get()
	})

	return (
		<div>
			<h1>Red Deck coming soon</h1>
		</div>
	)
}

export default RedDeck
