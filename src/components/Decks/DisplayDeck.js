import React from 'react'

const DisplayDeck = ({ cards }) => {
	if (cards) {
		return (
			<div className='card-list'>
				{cards.map((card) => {
					if (card.image)
						return (
							<img
								key={card.id}
								src={card.image}
								alt='Magic The Gathering Card'
							/>
						)
				})}
			</div>
		)
	} else {
		return <></>
	}
}

export default DisplayDeck
