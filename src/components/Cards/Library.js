import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

import DeckInProgress from './DeckInProgress'
import CardList from './CardList'
import Paginate from './Paginate'
import './Library.css'

const Library = () => {
	// ADD CARDS PER PAGE
	// ADD CARDS PER PAGE
	// ADD CARDS PER PAGE
	// ADD CARDS PER PAGE
	// ADD CARDS PER PAGE

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
		const url = `https://api.scryfall.com/cards/search?q=c%3A${color}+t%3a${cardType}+cmc%3a${manaCost}`
		// const url = `https://api.scryfall.com/cards/search?q=t%3Aisland`
		// axios.get(url).then((res) => {
		// 	setCardList(res.data.data)
		// })
		const fetchCards = async () => {
			const res = await axios.get(url)
			setCards(res.data.data)
		}

		fetchCards()
	}, [color, cardType, manaCost])

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
		<div className='library'>
			<form className='card-filter' onSubmit={handleSubmit}>
				<select class='' id='color'>
					<option className='text-center' hidden=''>
						Color
					</option>
					<option>White</option>
					<option>Blue</option>
					<option>Black</option>
					<option>Red</option>
					<option>Green</option>
				</select>
				<select class='' id='type'>
					<option hidden=''>Card Type</option>
					<option>Creature</option>
					<option>Sorcery</option>
					<option>Instant</option>
					<option>Enchantment</option>
					<option>Artifact</option>
				</select>
				<select class='' id='mana'>
					<option hidden=''>Converted Mana Cost</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
					<option>6</option>
					<option>7</option>
				</select>
				<Button
					className='btn-primary'
					variant='primary'
					size='sm'
					type='submit'
					block>
					Search Cards
				</Button>
			</form>
			<DeckInProgress />
			<Paginate
				cardsPerPage={cardsPerPage}
				totalCards={cards.length}
				currentPage={currentPage}
				paginate={paginate}
			/>
			<CardList cards={currentCards} color={color} type={cardType} />
		</div>
	)
	// }
}

export default Library
// const [show, setShow] = useState(false)

// const handleClose = () => setShow(false)
// const handleShow = () => setShow(true)

// return (

// )
