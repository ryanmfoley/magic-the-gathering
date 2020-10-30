import React, { useContext, useEffect, useState } from 'react'

import RedDeckContext from './RedDeckContext'

import BuildRedDeck from './BuildRedDeck'

const FetchCards = () => {
	const redCreatureIds = [
		'285d2e99-13f1-4ce8-9a54-139de193c1b3',
		'52f544fa-170f-4da4-bd28-72f713a045ba',
		'c5d3a18c-d030-494d-b7b1-4d1dle27fbbf',
		'8980efa5-bd21-4980-91a7-5e66528b1011',
		'3469d73e-6de1-4b91-83e3-b1714ac29268',
		'6fdd01bd-ab41-4005-8807-46dbocfc4da4',
	]

	const { redDeck, setRedDeck } = useContext(RedDeckContext)
	const [manaCost, setManaCost] = useState(1)

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

	useEffect(() => {
		let creatures = []
		let resArray = []
		async function getCards(mana) {
			let url = `https://api.scryfall.com/cards/search?q=c%3Ar+t%3acreature+cmc%3a${mana}`
			const res = await fetch(url)
			const json = await res.json()
			// resArray = [...resArray, json.data]
			const results = await json.data.filter((card) =>
				redCreatureIds.includes(card.id)
			)
			return results
			// eslint-disable-next-line
			// .then((res) => {
			// 	resArray.push(...res.data)
			// 	resArray = [...resArray, ...res.data]
			// 	return res
			// })
			// .then((res) => {
			// 	if (mana === 4) {
			// 		return resolve()
			// 	}
			// })
			// eslint-disable-next-line
		}
		for (let i = 1; i < 5; i++) {
			// getCards(i)
			console.log(getCards(i))
		}
		// }).then((res) => {
		// creatures.push(
		// 	resArray.filter((card) => {
		// 		return redCreatureIds.includes(card.id)
		// 	})
		// )
		// 	creatures = resArray.filter((card) => {
		// 		return redCreatureIds.includes(card.id)
		// 	})
		// })
		// let results = await promise
		// return results
		// }
		// getCards()
		// console.log(creatures)
		// .then((res) => {
		// 	if (mana === 4) {
		// 		creatures.push(
		// 						resArray.filter((card) => {
		// 							return redCreatureIds.includes(card.id)
		// 						})
		// 						)
		// 					}
		// 				})
		// let creatures = redCreatureIds.map((id) => {
		// 	return resArray.find((card) => {
		// 		console.log('hello')
		// 		return card.id === id
		// 	})
		// })

		// console.log(creatures)
	}, [])

	return <BuildRedDeck />
}

export default FetchCards
