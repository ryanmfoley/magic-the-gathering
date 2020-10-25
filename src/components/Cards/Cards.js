import React, { useEffect, useState } from 'react'

import axios from 'axios'

import './Cards.css'

const Cards = () => {
	const [cards, setCards] = useState(null)

	useEffect(() => {
		// const url = `https://api.scryfall.com/sets/znr`
		const url = `https://api.scryfall.com/cards/search?order=set&q=e%3Aznr&unique=prints`
		axios.get(url).then((res) => {
			setCards(res.data.data)
			// console.log(res.data.data)
		})
	}, [])

	if (!cards) {
		return <h3>loading</h3>
	} else {
		return (
			<div className='card-list'>
				{cards.map((card) => {
					// <div className='mtg-card'>
					if (card.image_uris) {
						return (
							<img
								src={card.image_uris.normal}
								alt='Magic The Gathering Card'
							/>
						)
					} else {
						console.log(card.name)
					}
					// </div>
				})}
				{/* <img src={cards[0].image_uris.normal} alt='Magic The Gathering Card' /> */}
			</div>
		)
	}
}

export default Cards
