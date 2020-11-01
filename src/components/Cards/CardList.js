import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import WhiteDeckContext from '../Decks/WhiteDeck/WhiteDeckContext'
import BlueDeckContext from '../Decks/BlueDeck/BlueDeckContext'
import BlackDeckContext from '../Decks/BlackDeck/BlackDeckContext'
import RedDeckContext from '../Decks/RedDeck/RedDeckContext'
import GreenDeckContext from '../Decks/GreenDeck/GreenDeckContext'

const CardList = ({ cards, color }) => {
	// <Modal wouldn't run because can't read property of null when it's looking at selectedCard.name, so I initially set it to {}, which is undefined at first
	// I may not need color
	const [show, setShow] = useState(false)
	const [selectedCard, setSelectedCard] = useState({})

	const { whiteDeck, setWhiteDeck } = useContext(WhiteDeckContext)
	const { blueDeck, setBlueDeck } = useContext(BlueDeckContext)
	const { blackDeck, setBlackDeck } = useContext(BlackDeckContext)
	const { redDeck, setRedDeck } = useContext(RedDeckContext)
	const { greenDeck, setGreenDeck } = useContext(GreenDeckContext)

	const handleShow = (event) => {
		setShow(true)
		setSelectedCard(event.target.dataset)
		console.log(event.target.dataset)
	}
	const handleClose = () => setShow(false)

	if (!cards) {
		return <h2>Loading...</h2>
	} else {
		return (
			<div>
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
									data-name={card.name}
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
						<Button variant='secondary' onClick={handleClose}>
							Close
						</Button>
						<Button variant='primary' onClick={handleClose}>
							Add card to deck
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	}
}

export default CardList
