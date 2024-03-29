import { useState, useEffect } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import axios from 'axios'

import DeckInProgress from './DeckInProgress'
import CardList from './CardList'
import Paginate from './Paginate'
import './Library.css'

const Library = () => {
	const [showModal, setShowModal] = useState(true)

	// Initialize hooks for API endpoint parameters
	const [color, setColor] = useState('')
	const [cardType, setCardType] = useState('')
	const [manaCost, setManaCost] = useState(null)

	// Initialize hook for array of cards
	const [cards, setCards] = useState([])

	// Initialize hooks for pagination
	const [currentPage, setCurrentPage] = useState(1)
	const [cardsPerPage] = useState(40)

	// Fetch cards using the API endpoint parameters user sets in form
	useEffect(() => {
		const fetchCards = async () => {
			// Wait for value on url parameters before fetching cards
			if (color && cardType && manaCost) {
				const res = await axios.get(
					`https://api.scryfall.com/cards/search?q=c%3A${color}+t%3a${cardType}+cmc%3a${manaCost}`
				)

				setCards(res.data.data)
			}
		}

		fetchCards()
	}, [color, cardType, manaCost])

	const handleClose = () => setShowModal(false)

	const handleSubmit = (event) => {
		event.preventDefault()

		setColor(event.target.color.value)
		setCardType(event.target.type.value)
		setManaCost(event.target.mana.value)
		setCurrentPage(1)
	}

	// Get current cards
	const indexOfLastCard = currentPage * cardsPerPage
	const indexOfFirstCard = indexOfLastCard - cardsPerPage
	const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard)

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber)

	return (
		<>
			<Form className='d-flex' onSubmit={handleSubmit}>
				<Form.Control as='select' id='color' size='sm'>
					<option hidden=''>Color</option>
					<option>White</option>
					<option>Blue</option>
					<option>Black</option>
					<option>Red</option>
					<option>Green</option>
				</Form.Control>
				<Form.Control as='select' id='type' size='sm'>
					<option hidden=''>Card Type</option>
					<option>Creature</option>
					<option>Sorcery</option>
					<option>Instant</option>
					<option>Enchantment</option>
					<option>Artifact</option>
				</Form.Control>
				<Form.Control as='select' id='mana' size='sm'>
					<option hidden=''>Converted Mana Cost</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
					<option>6</option>
					<option>7</option>
				</Form.Control>
				<Button
					className='btn-primary'
					variant='primary'
					size='sm'
					type='submit'
					block>
					Search Cards
				</Button>
			</Form>
			<DeckInProgress />
			<Paginate
				cardsPerPage={cardsPerPage}
				totalCards={cards.length}
				currentPage={currentPage}
				paginate={paginate}
			/>
			<CardList cards={currentCards} color={color} type={cardType} />
			<Modal show={showModal} onHide={handleClose} closeButton>
				<Modal.Header closeButton>
					<Modal.Title>Build your own decks</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ol>
						<li>
							Click on card to be added to your deck then click "Add Card".
						</li>
						<li>When you're finished adding your cards, click "Save Deck"</li>
						<li>
							Enter the name of your deck in the prompt followed by clicking
							"Save"
						</li>
						<li>
							Your deck will be saved locally and ready to be viewd in the "Deck
							Gallery"
						</li>
					</ol>
				</Modal.Body>
				<Modal.Footer className='justify-content-center'>
					<Button
						className='btn-primary'
						variant='primary'
						size='sm'
						onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default Library
