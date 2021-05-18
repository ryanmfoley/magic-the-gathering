import React, { useState, useContext } from 'react'
import { Button, Modal } from 'react-bootstrap'

import DeckInProgressContext from './DeckInProgressContext'

const CardList = ({ cards, type }) => {
	const [show, setShow] = useState(false)
	const [selectedCard, setSelectedCard] = useState({})

	const { deckInProgress, setDeckInProgress } = useContext(
		DeckInProgressContext
	)

	const handleShow = (event) => {
		setShow(true)
		setSelectedCard({ ...event.target.dataset })
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
			<>
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
					<Modal.Body className='d-flex justify-content-center'>
						<img src={selectedCard.image} alt='Magic The Gathering Card' />
					</Modal.Body>
					<Modal.Footer>
						<form
							className='d-flex justify-content-between w-100'
							onSubmit={handleSave}>
							<div className='copies-input'>
								<label htmlFor='cards'>
									<strong>Copies:</strong>
								</label>
								<select id='copies' name='cards'>
									<option value='1'>1</option>
									<option value='2'>2</option>
									<option value='3'>3</option>
									<option value='4'>4</option>
								</select>
							</div>
							<div className='form-buttons'>
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
							</div>
						</form>
					</Modal.Footer>
				</Modal>
			</>
		)
	}
}

export default CardList
