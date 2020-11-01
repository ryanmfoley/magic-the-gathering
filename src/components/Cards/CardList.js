import React from 'react'

const CardList = ({ cards, loading }) => {
	if (!cards) {
		// if (loading) {
		return <h2>Loading...</h2>
	} else {
		return (
			<div className='card-list'>
				{cards.map((card) => {
					if (card.image_uris) {
						return (
							<img
								key={card.id}
								src={card.image_uris.normal}
								alt='Magic The Gathering Card'
							/>
						)
					}
					// } else {
					// console.log(card.name)
					// 	return <div>testing</div>
					// }
				})}
			</div>
		)
	}
}

export default CardList
