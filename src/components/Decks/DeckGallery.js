import { useState } from 'react'
import { Container, ListGroup } from 'react-bootstrap'

import DisplayDeck from './DisplayDeck'
import './DeckGallery.css'

const DeckGallery = () => {
	const [deck, setDeck] = useState(null)

	// Add id to decks so they have a key when rendering
	const decks = Object.entries(localStorage).map((deck, id) => {
		const cards = JSON.parse(deck[1])

		return {
			id,
			deckName: deck[0],
			cards: Array.isArray(cards) ? cards : [cards],
		}
	})

	return (
		<Container>
			<h1 className='decks-header text-center text-black my-5'>
				Created Decks
			</h1>
			{decks.map((deck) => (
				<ListGroup as='ul'>
					<ListGroup.Item
						key={deck.id}
						as='a'
						className='created-deck h4 text-center font-weight-bold text-decoration-none'
						onClick={() => setDeck(deck.cards)}
						role='button'>
						{deck.deckName}
					</ListGroup.Item>
				</ListGroup>
			))}
			<DisplayDeck cards={deck} />
		</Container>
	)
}

export default DeckGallery
