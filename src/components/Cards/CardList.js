import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import DeckInProgress from './DeckInProgress'

const CardList = ({ cards, color, type }) => {
	// <Modal wouldn't run because can't read property of null when it's looking at selectedCard.name, so I initially set it to {}, which is undefined at first
	// I may not need color
	const [show, setShow] = useState(false)
	const [selectedCard, setSelectedCard] = useState({})

	const [cardsForDeck, setCardsForDeck] = useState([])

	const handleShow = (event) => {
		setShow(true)
		setSelectedCard(event.target.dataset)
		console.log(event.target.dataset.color)
		// Change color symbol to word
		switch (selectedCard.color) {
			case '{W}':
				setSelectedCard({ ...selectedCard, color: 'white' })
				break
			case '{U}':
				setSelectedCard({ ...selectedCard, color: 'blue' })
				break
			case '{B}':
				setSelectedCard({ ...selectedCard, color: 'black' })
				break
			case '{R}':
				setSelectedCard({ ...selectedCard, color: 'red' })
				break
			case '{G}':
				setSelectedCard({ ...selectedCard, color: 'green' })
				break
		}
	}

	const handleClose = () => setShow(false)

	const handleSave = () => {
		if (cardsForDeck.length < 20) {
			setCardsForDeck([...cardsForDeck, selectedCard])
			setSelectedCard([])
		}
		handleClose()
	}

	if (!cards) {
		return <h2>Loading...</h2>
	} else {
		return (
			<div>
				<DeckInProgress cards={cardsForDeck} />
				<div className='card-list'>
					{cards.map((card) => {
						if (card.image_uris) {
							return (
								<img
									key={card.id}
									src={card.image_uris.normal}
									alt='Magic The Gathering Card'
									role='button'
									data-id={card.id}
									// data-color={color}
									data-color={card.mana_cost}
									data-name={card.name}
									data-type={card.type_line}
									data-mana={card.cmc}
									data-image={card.image_uris.png}
									onClick={handleShow}
								/>
							)
						}
					})}
				</div>
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Add card to {color} deck?</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<img src={selectedCard.image} alt='Magic The Gathering Card' />
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' type='button' onClick={handleClose}>
							Close
						</Button>
						<Button variant='primary' type='button' onClick={handleSave}>
							Add card to deck
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	}
}
// switch (color) {
// 	case 'White':
// 		setWhiteDeck([...whiteDeck, selectedCard.id])
// 		setSelectedCard({})
// 		break
// 	case 'Blue':
// 		setBlueDeck(selectedCard)
// 		setSelectedCard({})
// 		break
// 	case 'Black':
// 		setBlackDeck(selectedCard)
// 		setSelectedCard({})
// 		break
// 	case 'Red':
// 		setRedDeck(selectedCard)
// 		setSelectedCard({})
// 		break
// 	case 'Green':
// 		setGreenDeck(selectedCard)
// 		setSelectedCard({})
// 		break
// }
export default CardList
