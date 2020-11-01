// import React, { useState, useContext } from 'react'
// import Button from 'react-bootstrap/Button'
// import Modal from 'react-bootstrap/Modal'

// import SelectedCardContext from './SelectedCardContext'
// import WhiteDeckContext from '../Decks/WhiteDeck/WhiteDeckContext'
// import BlueDeckContext from '../Decks/BlueDeck/BlueDeckContext'
// import BlackDeckContext from '../Decks/BlackDeck/BlackDeckContext'
// import RedDeckContext from '../Decks/RedDeck/RedDeckContext'
// import GreenDeckContext from '../Decks/GreenDeck/GreenDeckContext'

// const CardModal = ({ card, color }) => {
// 	// reset selected card to null after saving or closing modal
// 	// const { selectedCard, setSelectedCard } = useContext(SelectedCardContext)

// 	const { whiteDeck, setWhiteDeck } = useContext(WhiteDeckContext)
// 	const { blueDeck, setBlueDeck } = useContext(BlueDeckContext)
// 	const { blackDeck, setBlackDeck } = useContext(BlackDeckContext)
// 	const { redDeck, setRedDeck } = useContext(RedDeckContext)
// 	const { greenDeck, setGreenDeck } = useContext(GreenDeckContext)

// 	// const [show, setShow] = useState(false)
// 	const [show, setShow] = useState(true)

// 	const handleClose = () => setShow(false)
// 	const handleShow = () => setShow(true)

// 	return (
// 		<div>
// 			<Modal show={show} onHide={handleClose}>
// 				<Modal.Header closeButton>
// 					<Modal.Title>Build Deck</Modal.Title>
// 				</Modal.Header>
// 				<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
// 				<Modal.Footer>
// 					<Button variant='secondary' onClick={handleClose}>
// 						Close
// 					</Button>
// 					<Button variant='primary' onClick={handleClose}>
// 						Add card to deck
// 					</Button>
// 				</Modal.Footer>
// 			</Modal>
// 		</div>
// 	)
// }

// export default CardModal
