import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

import CardList from './CardList'
import Paginate from './Paginate'
import './Library.css'

const Library = () => {
	// Initialize hooks for API endpoint parameters
	const [color, setColor] = useState('blue')
	const [cardType, setCardType] = useState('creature')
	const [manaCost, setManaCost] = useState(3)
	// const [manaCost, setManaCost] = useState(null)

	// Initialize hook for array of cards
	const [cards, setCards] = useState([])

	// Initialize hook for loading
	const [loading, setLoading] = useState(false)

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
			setLoading(true)
			const res = await axios.get(url)
			setCards(res.data.data)
			// console.log(res.data.data)
			setLoading(false)
		}

		fetchCards()
	}, [color, cardType, manaCost])

	const handleSubmit = (event) => {
		event.preventDefault()

		setColor(event.target.color.value)
		setCardType(event.target.type.value)
		setManaCost(event.target.mana.value)
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
				</select>
				<select class='' id='mana'>
					<option hidden=''>Converted Mana Cost</option>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
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
			<Paginate
				cardsPerPage={cardsPerPage}
				totalCards={cards.length}
				currentPage={currentPage}
				paginate={paginate}
			/>
			<CardList cards={currentCards} loading={loading} />
		</div>
	)
	// }
}

export default Library
