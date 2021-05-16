import React from 'react'
import { Link } from 'react-router-dom'

import ManaImage from './mtg-bg.png'
import '../Decks/Decks.css'

const Decks = () => (
	<div className='position-relative'>
		<img className='w-100 h-auto' src={ManaImage} alt='Mana symbols' />
		<Link to='/white-deck'>
			<div className='plains'></div>
		</Link>
		<Link to='/blue-deck'>
			<div className='island'></div>
		</Link>
		<Link to='/black-deck'>
			<div className='swamp'></div>
		</Link>
		<Link to='/red-deck'>
			<div className='mountain'></div>
		</Link>
		<Link to='/green-deck'>
			<div className='forest'></div>
		</Link>
	</div>
)

export default Decks
