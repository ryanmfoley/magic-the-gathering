import React from 'react'
import { Link } from 'react-router-dom'

import ManaImage from './mtg-bg.png'

const Decks = () => {
	return (
		<div className='decks'>
			<img src={ManaImage} alt='Mana symbols' />
			<Link to='/decks/white-deck'>
				<div className='plains'></div>
			</Link>
			<Link to='/decks/blue-deck'>
				<div className='island'></div>
			</Link>
			<Link to='/decks/black-deck'>
				<div className='swamp'></div>
			</Link>
			<Link to='/decks/red-deck'>
				<div className='mountain'></div>
			</Link>
			<Link to='/decks/green-deck'>
				<div className='forest'></div>
			</Link>
		</div>
	)
}

export default Decks
