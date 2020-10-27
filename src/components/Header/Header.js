import React from 'react'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
	return (
		<Nav variant='pills'>
			<Nav.Item>
				<Nav.Link href='/'>Home</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href='/cards'>Card Collection</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href='/decks'>Decks</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href='/play-game'>Play Game</Nav.Link>
			</Nav.Item>
		</Nav>
	)
}

export default Header
