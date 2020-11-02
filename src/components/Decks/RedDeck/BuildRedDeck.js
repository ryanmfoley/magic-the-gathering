import React, { useContext, useEffect } from 'react'

import RedDeckContext from './RedDeckContext'

import RedDeck from './RedDeck'

const FetchCards = ({ cardIds }) => {
	// const cardIds = [
	// 	'285d2e99-13f1-4ce8-9a54-139de193c1b3',
	// 	'52f544fa-170f-4da4-bd28-72f713a045ba',
	// 	'c5d3a18c-d030-494d-b7b1-4d1d1e27fbbf',
	// 	'8980efa5-bd21-4980-91a7-5e66528b1011',
	// 	'3469d73e-6de1-4b91-83e3-b1714ac29268',
	// 	'6fdd01bd-ab41-4005-8807-46db0cfc4da4',
	// 	'15affc1b-2ebb-4934-87a2-10e89eafe894',
	// 	'b9caddbe-1329-4ac2-9071-6fc5059d4dec',
	// 	'85a74392-4056-428c-a807-b062957e838e',
	// 	'41f2874a-2417-41cb-9cec-551eea78473c',
	// 	'084b7337-c06f-4cbf-8fc0-0b20c221f1dc',
	// 	'0d4d007b-2db1-4e58-9281-5ade8d81ecf9',
	// 	'8383e698-0dd7-4f35-aecb-53f0ee746999',
	// ]

	const { redDeck, setRedDeck } = useContext(RedDeckContext)

	useEffect(() => {
		async function getCards(type, mana) {
			const url = `https://api.scryfall.com/cards/search?q=c%3Ar+t%3a${type}+cmc%3a${mana}`
			const res = await fetch(url)
			const json = await res.json()
			const results = await json.data.filter((card) =>
				cardIds.includes(card.id)
			)
			return results
		}

		async function addCreatureCards() {
			const creatures = []
			for (let i = 1; i < 5; i++) {
				let creature = await getCards('creature', i)
				creatures.push(creature)
			}
			return creatures
		}

		async function addSorceryCards() {
			const sorceries = []
			for (let i = 1; i < 5; i++) {
				let sorcery = await getCards('sorcery', i)
				sorceries.push(sorcery)
			}
			return sorceries
		}

		async function addInstantCards() {
			const instants = []
			for (let i = 1; i < 5; i++) {
				let instant = await getCards('instant', i)
				instants.push(instant)
			}
			return instants
		}

		addCreatureCards().then((res) => {
			setRedDeck((cards) => ({ ...cards, creatures: res.flat() }))
		})

		addSorceryCards().then((res) => {
			setRedDeck((cards) => ({ ...cards, sorceries: res.flat() }))
		})

		addInstantCards().then((res) => {
			setRedDeck((cards) => ({ ...cards, instants: res.flat() }))
		})
	}, [])

	return <RedDeck />
}

export default FetchCards
