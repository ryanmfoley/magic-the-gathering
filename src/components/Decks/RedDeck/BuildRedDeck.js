import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

import RedDeckContext from './RedDeckContext'

import { CreatureCards } from './FetchCards'
import { bloop } from './BlahBlah'

const BuildRedDeck = () => {
	// const { deck, setDeck } = useContext(RedDeckContext)

	let [manaCost, setManaCost] = useState(1)

	let [cards, setCards] = useState([])

	// useEffect(() => {
	// 	let resArray = []
	// 	let url
	// 	for (let mana = manaCost; mana <= 4; mana++) {
	// 		url = `https://api.scryfall.com/cards/search?q=c%3Ar+t%3acreature+cmc%3a${mana}`
	// 		fetch(url)
	// 			.then((res) => res.json())
	// 			.then((res) => {
	// 				resArray.push(res.data)
	// 			})
	// 	}
	// 	console.log(resArray)
	// 	setCards([...cards, resArray])
	// }, [])

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
