import React, { useContext, useEffect, useState } from 'react'

import RedDeckContext from './RedDeckContext'

import BuildRedDeck from './BuildRedDeck'

const FetchCards = () => {
	const redCreatureIds = [
		'285d2e99-13f1-4ce8-9a54-139de193c1b3',
		'52f544fa-170f-4da4-bd28-72f713a045ba',
		'c5d3a18c-d030-494d-b7b14d1dle27fbbf',
		'8980efa5-bd21-498091a7-5e66528b1011',
		'3469d73e-6de1-4b91-83e3-b1714ac29268',
		'6fdd01bd-ab41-4005-880746dbocfc4da4',
	]

	let { redDeck, setRedDeck } = useContext(RedDeckContext)
	let [manaCost, setManaCost] = useState(1)

	useEffect(() => {
		// if (manaCost <= 4) {
		let url = `https://api.scryfall.com/cards/search?q=c%3Ar+t%3acreature+cmc%3a${manaCost}`
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				redCreatureIds.forEach((id) => {
					let card = res.data.find((elem) => elem.id === id)
					if (card) {
						setRedDeck([...redDeck, card])
						console.log(redDeck)
					}
				})
				// manaCost++
				// setManaCost(manaCost)
			})
		// console.log(cards)'285d2e99-13f1-4ce8-9a54-139de193c1b3'
		// }
	}, [manaCost])

	// useEffect(() => {
	// 	let url = `https://api.scryfall.com/cards/search?q=c%3Ar+t%3acreature+cmc%3a1`
	// 	fetch(url)
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			setCards([
	// 				...cards,
	// 				res.data.filter((elem) => redCreatureIds.includes(elem)),
	// 			])
	// 		})
	// 	console.log(cards)
	// }, [])

	return <BuildRedDeck />
}

export default FetchCards
