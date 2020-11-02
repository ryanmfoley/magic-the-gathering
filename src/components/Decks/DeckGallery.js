import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'

import DisplayDeck from './DisplayDeck'
import './DeckGallery.css'

const DeckGallery = () => {
	const [cards, setCards] = useState(null)

	return (
		<div className='deck-gallery'>
			<Container>
				<h1>Created Decks</h1>
				{Object.entries(localStorage).map((deck, index) => (
					<ListGroup as='ul'>
						<ListGroup.Item
							as='a'
							key={index}
							onClick={() => setCards(JSON.parse(deck[1]))}>
							{deck[0]}
						</ListGroup.Item>
					</ListGroup>
				))}
				<DisplayDeck cards={cards} />
			</Container>
		</div>
	)
}

export default DeckGallery
