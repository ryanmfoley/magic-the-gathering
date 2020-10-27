import React, { useEffect, useState } from 'react'

import axios from 'axios'

const Cards = () => {
	const [cards, setCards] = useState(null)

	const type = 'sorcery'
	const color = 'red'
	const cmc = 1

	useEffect(() => {
		const url = `https://api.scryfall.com/cards/search?q=c%3A${color}+t%3a${type}+cmc%3a${cmc}`
		axios.get(url).then((res) => {
			setCards(res.data.data)
			console.log(res.data.data)
		})
	}, [])

	if (!cards) {
		return <></>
	} else {
		return (
			<div className='card-list'>
				{cards.map((card) => {
					// <div className='mtg-card'>
					if (card.image_uris && card.id) {
						return (
							<div>
								<img
									src={card.image_uris.normal}
									alt='Magic The Gathering Card'
								/>
								{card.id}
							</div>
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
