import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import DeckInProgressContext from './DeckInProgressContext'

const CardList = ({ cards, type }) => {
	const [show, setShow] = useState(false)
	const [selectedCard, setSelectedCard] = useState({})

	const { deckInProgress, setDeckInProgress } = useContext(
		DeckInProgressContext
	)

	const handleShow = (event) => {
		setShow(true)
		// let cardObj = { ...event.target.dataset }
		setSelectedCard({ ...event.target.dataset })
		// setSelectedCard({ ...cardObj })
	}

	const handleClose = () => setShow(false)

	const handleSave = (event) => {
		event.preventDefault()
		let cardObj = { ...selectedCard, copies: event.target.copies.value }

		if (!deckInProgress.length) {
			setDeckInProgress([...deckInProgress, cardObj])
			setSelectedCard([])
		} else if (
			deckInProgress.length > 0 &&
			deckInProgress.length <= 20 &&
			!deckInProgress.includes(cardObj)
		) {
			setDeckInProgress([...deckInProgress, cardObj])
			setSelectedCard([])
		}
		handleClose()
	}
	if (!cards.length) {
		return <></>
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
									data-color={card.mana_cost}
									data-name={card.name}
									data-type={card.type_line}
									data-mana={card.cmc}
									data-image={card.image_uris.png}
									onClick={handleShow}
								/>
							)
						} else {
							return <></>
						}
					})}
				</div>
				<Modal show={show} onHide={handleClose} size='sm' closeButton>
					<Modal.Header closeButton>
						<Modal.Title>Add card to deck?</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<img src={selectedCard.image} alt='Magic The Gathering Card' />
					</Modal.Body>
					<Modal.Footer>
						<form onSubmit={handleSave}>
							<label htmlFor='cards'>Copies:</label>
							<select name='cards' id='copies'>
								<option value='1'>1</option>
								<option value='2'>2</option>
								<option value='3'>3</option>
								<option value='4'>4</option>
							</select>
							<Button
								type='button'
								variant='secondary'
								onClick={handleClose}
								size='sm'>
								Close
							</Button>
							<Button type='submit' variant='primary' size='sm'>
								Add card
							</Button>
						</form>
					</Modal.Footer>
				</Modal>
			</div>
		)
	}
}

export default CardList
