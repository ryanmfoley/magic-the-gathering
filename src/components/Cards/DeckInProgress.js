import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

import DeckInProgressContext from './DeckInProgressContext'
import './DeckInProgress.css'

const DeckInProgress = () => {
	const { deckInProgress, setDeckInProgress } = useContext(
		DeckInProgressContext
	)

	const clearDeck = () => setDeckInProgress([])

	const saveDeck = () => {}

	if (!deckInProgress.length) {
		return <></>
	} else {
		return (
			<div className='container'>
				<Table size='sm' responsive>
					<thead>
						<tr>
							<th>#</th>
							<th>Color</th>
							<th>Name</th>
							<th>Type</th>
							<th>Mana</th>
						</tr>
					</thead>
					<tbody>
						{deckInProgress.map((card, index) => {
							return (
								<tr key={card.id}>
									<td>{index + 1}</td>
									<td>
										<div className={card.color.slice(-2, -1)}></div>
									</td>
									<td>{card.name}</td>
									<td>{card.type}</td>
									<td>{card.mana}</td>
								</tr>
							)
						})}
					</tbody>
				</Table>
				<Button variant='outline-danger' size='sm' onClick={clearDeck} block>
					Clear
				</Button>
				<Button variant='outline-primary' size='sm' onClick={saveDeck} block>
					Save Deck
				</Button>
			</div>
		)
	}
}

export default DeckInProgress
