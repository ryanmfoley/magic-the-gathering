import React, { useContext, useEffect, useState } from 'react'

import RedDeckContext from './RedDeckContext'

import BuildRedDeck from './BuildRedDeck'

const FetchCards = () => {
	const redCreatureIds = [
		'285d2e99-13f1-4ce8-9a54-139de193c1b3',
		'52f544fa-170f-4da4-bd28-72f713a045ba',
		'c5d3a18c-d030-494d-b7b1-4d1d1e27fbbf',
		'8980efa5-bd21-4980-91a7-5e66528b1011',
		'3469d73e-6de1-4b91-83e3-b1714ac29268',
		'6fdd01bd-ab41-4005-8807-46db0cfc4da4',
	]

	const { redDeck, setRedDeck } = useContext(RedDeckContext)
	const [manaCost, setManaCost] = useState(1)
	let [test, setTest] = useState({})

	useEffect(() => {
		// eslint-disable-next-line
		async function getCards(mana) {
			const url = `https://api.scryfall.com/cards/search?q=c%3Ar+t%3acreature+cmc%3a${mana}`
			const res = await fetch(url)
			const json = await res.json()
			const results = await json.data.filter((card) =>
				redCreatureIds.includes(card.id)
			)
			return results
		}
		async function addCards() {
			const creatures = []
			for (let i = 1; i < 5; i++) {
				let creature = await getCards(i)
				creatures.push(creature)
			}
			return creatures
		}
		addCards().then((res) => {
			setRedDeck({ ...redDeck, creatures: res.flat() })
		})
	}, [])

	return <BuildRedDeck />
}

export default FetchCards
