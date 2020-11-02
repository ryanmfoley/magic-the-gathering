import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Table from 'react-bootstrap/Table'

import DeckInProgressContext from './DeckInProgressContext'
import './DeckInProgress.css'

const DeckInProgress = () => {
	const [show, setShow] = useState(false)

	const { deckInProgress, setDeckInProgress } = useContext(
		DeckInProgressContext
	)

	const clearDeck = () => setDeckInProgress([])

	// Function that opens a Modal with an input for setting deck name
	const saveDeck = () => {
		setShow(true)
	}

	const handleClose = () => setShow(false)

	const handleSave = () => {
		// localStorage.setItem()
	}

	const saveDeckLocally = (event) => {
		event.preventDefault()

		const deckName = event.target['deck-name'].value
		const deckContents = JSON.stringify(deckInProgress)

		localStorage.setItem(deckName, deckContents)
		let blah = localStorage.getItem(deckName)
		console.log(JSON.parse(blah))
	}

	if (!deckInProgress.length) {
		return <></>
	} else {
		return (
			<div className='container'>
				<Table size='sm' responsive>
					<thead>
						<tr>
							<th>#</th>
							<th>Color</th>
							<th>Name</th>
							<th>Type</th>
							<th>Mana</th>
							<th>Copies</th>
						</tr>
					</thead>
					<tbody>
						{deckInProgress.map((card, index) => {
							return (
								<tr key={card.id}>
									<td>{index + 1}</td>
									<td>
										<div className={card.color.slice(-2, -1)}></div>
									</td>
									<td>{card.name}</td>
									<td>{card.type}</td>
									<td>{card.mana}</td>
									<td>{card.copies}</td>
								</tr>
							)
						})}
					</tbody>
				</Table>
				<Button variant='outline-danger' size='sm' onClick={clearDeck} block>
					Clear
				</Button>
				<Button variant='outline-primary' size='sm' onClick={saveDeck} block>
					Save Deck
				</Button>

				<Modal show={show} onHide={handleClose} size='sm' closeButton>
					<Modal.Header closeButton>
						<Modal.Title>Enter name of deck</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form onSubmit={saveDeckLocally}>
							<input type='text' id='deck-name'></input>
							<Button
								variant='primary'
								type='button'
								onClick={handleClose}
								size='sm'>
								Cancel
							</Button>
							<Button
								variant='secondary'
								type='submit'
								onClick={handleSave}
								size='sm'>
								Save
							</Button>
						</form>
					</Modal.Body>
				</Modal>
			</div>
		)
	}
}

export default DeckInProgress
