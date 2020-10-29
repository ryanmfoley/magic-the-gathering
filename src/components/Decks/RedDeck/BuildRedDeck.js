import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

import RedDeckContext from './RedDeckContext'

import { CreatureCards } from './FetchCards'
import { bloop } from './BlahBlah'

const BuildRedDeck = () => {
	// const { deck, setDeck } = useContext(RedDeckContext)

	// let cardTypes = ['creature', 'sorcery', 'instant']
	// let manaCosts = [1, 2, 3, 4]

	// let [cardType, setCardType] = useState([])
	// let [manaCost, setManaCost] = useState([])

	// cardTypes.forEach((type) => {
	// 	setCardType(type)
	// 	manaCosts.forEach((mana) => {
	// 		setManaCost(mana)
	// 	})
	// })

	// manaCosts.forEach((mana) => {
	// 	setManaCost(mana)
	// })

	let [manaCost, setManaCost] = useState(1)

	let [cards, setCards] = useState([])

	// CreatureCards()
	// let abc = bloop()
	// console.log(abc)

	useEffect(() => {
		if (manaCost <= 4) {
			// let url = `https://api.scryfall.com/cards/search?q=c%3Ar+t%3a${cardType}+cmc%3a${manaCost}`
			let url = `https://api.scryfall.com/cards/search?q=c%3Ar+t%3acreature+cmc%3a${manaCost}`
			fetch(url)
				.then((res) => res.json())
				.then((res) => {
					setCards([...cards, res.data])
					manaCost++
					setManaCost(manaCost)
				})
		}
	}, [manaCost])

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
