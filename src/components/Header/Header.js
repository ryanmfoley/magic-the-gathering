import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import MtgBrand from './mtg-brand.png'
import './Header.css'

const Header = () => {
	return (
		<Navbar bg='dark' variant='dark' fixed='top'>
			<Navbar.Brand href='/'>
				<img
					className='mtg-brand'
					src={MtgBrand}
					alt='Magic The Gathering logo'
				/>
			</Navbar.Brand>
			<Nav className='mr-auto'>
				<Nav.Link href='/library'>Card Database</Nav.Link>
				<Nav.Link href='/library/build-deck'>Build Deck</Nav.Link>
				<Nav.Link href='/decks'>Created Decks</Nav.Link>
				<Nav.Link href='/decks'>Decks</Nav.Link>
			</Nav>
		</Navbar>
	)
}

export default Header
