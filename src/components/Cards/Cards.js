import React, { useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button'
// import Pagination from 'react-bootstrap/Pagination'
// import PageItem from 'react-bootstrap/PageItem'
import Pagination from 'react-bootstrap-4-pagination'
import axios from 'axios'

import './Cards.css'

const Cards = () => {
	// const [nextPage, setNextPage] = useState(null)
	// const [url, setUrl] = useState(``)
	const [color, setColor] = useState('red')
	const [cardType, setCardType] = useState('creature')
	const [manaCost, setManaCost] = useState(1)
	const [cards, setCards] = useState(null)
	// const [loadData, setLoadData] = useState(false)

	// const [testUrl, setTestUrl] = useState(``)

	let paginationConfig = {
		// totalPages: 3,
		// currentPage: 1,
		// showMax: 3,
		size: 'sm',
		// threeDots: true,
		prevNext: true,
		onClick: function (page) {
			console.log(page)
		},
	}

	useEffect(() => {
		const url = `https://api.scryfall.com/cards/search?q=c%3A${color}+t%3a${cardType}+cmc%3a${manaCost}`
		// setTestUrl(
		// 	`https://api.scryfall.com/cards/search?q=c%3A${color}+t%3a${cardType}+cmc%3a${manaCost}`
		// )
		// const url = `https://api.scryfall.com/cards/search?q=t%3Aisland`
		axios.get(url).then((res) => {
			setCards(res.data.data)
			// if (res.data.has_more) {
			// 	setNextPage(res.data.next_page)
			// }
		})
	}, [color, cardType, manaCost])
	// }, [testUrl])

	const handleSubmit = (event) => {
		event.preventDefault()

		setColor(event.target.color.value)
		setCardType(event.target.type.value)
		setManaCost(event.target.mana.value)

		// setLoadData(true)
		// setTestUrl(
		// 	`https://api.scryfall.com/cards/search?q=c%3A${color}+t%3a${cardType}+cmc%3a${manaCost}`
		// )
	}

	// const fetchNextPage = async () => {
	// 	const url = nextPage
	// 	const res = await fetch(url)
	// 	const json = await res.json()
	// 	setCards(json.data)
	// 	// console.log(json)
	// }

	if (!cards) {
		return <></>
	} else {
		return (
			<div>
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
				{/* <Pagination>
					<Pagination.Prev />
					<Pagination.Next />
				</Pagination> */}
				<Pagination {...paginationConfig} />
				<div className='card-list'>
					{cards.map((card) => {
						if (card.image_uris) {
							return (
								<img
									src={card.image_uris.normal}
									alt='Magic The Gathering Card'
								/>
							)
						} else {
							// console.log(card.name)
							return <div>testing</div>
						}
					})}
				</div>
			</div>
		)
	}
}

export default Cards
