import React from 'react'
import Table from 'react-bootstrap/Table'

import './DeckInProgress.css'

const DeckInProgress = ({ cards }) => {
	return (
		<Table responsive>
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
				{cards.map((card, index) => (
					<tr key={card.id}>
						<td>{index + 1}</td>
						<td>
							<div className={card.color}></div>
						</td>
						<td>{card.name}</td>
						<td>{card.type}</td>
						<td>{card.mana}</td>
					</tr>
				))}
			</tbody>
		</Table>
	)
}

export default DeckInProgress
