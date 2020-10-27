import React from 'react'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
	return (
		<Nav variant='pills'>
			<Nav.Item>
				<Nav.Link href='/'>Home</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href='/cards'>Cards</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link href='/hand'>Hand</Nav.Link>
			</Nav.Item>
		</Nav>
	)
}

export default Header
