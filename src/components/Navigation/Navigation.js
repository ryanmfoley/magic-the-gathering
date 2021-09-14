import { Nav, Navbar } from 'react-bootstrap'

import MtgBrand from './mtg-brand.png'
import './Navigation.css'

const Navigation = () => (
	<Navbar bg='dark' variant='dark'>
		<Navbar.Brand href='/'>
			<img
				className='mtg-brand'
				src={MtgBrand}
				alt='Magic The Gathering logo'
			/>
		</Navbar.Brand>
		<Nav className='h4'>
			<Nav.Link className='m-1' href='/library'>
				Deck Builder
			</Nav.Link>
			<Nav.Link className='m-1' href='/deck-gallery'>
				Deck Gallery
			</Nav.Link>
		</Nav>
	</Navbar>
)

export default Navigation
