import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table'

import DeckInProgressContext from './DeckInProgressContext'
import './DeckInProgress.css'

const DeckInProgress = () => {
	const { deckInProgress } = useContext(DeckInProgressContext)

	return (
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
			{/* <tbody>
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
			</tbody> */}
			<tbody>
				{deckInProgress.map((card, index) => {
					let color
					switch (card.color) {
						case '{W}':
							color = 'white'
							break
						case '{U}':
							color = 'blue'
							break
						case '{B}':
							color = 'black'
							break
						case '{R}':
							color = 'red'
							break
						case '{G}':
							color = 'green'
							break
					}
					return (
						<tr key={card.id}>
							<td>{index + 1}</td>
							<td>
								<div className={color}></div>
							</td>
							<td>{card.name}</td>
							<td>{card.type}</td>
							<td>{card.mana}</td>
						</tr>
					)
				})}
			</tbody>
		</Table>
	)
	// return (
	// 	<Table responsive>
	// 		<thead>
	// 			<tr>
	// 				<th>#</th>
	// 				<th>Color</th>
	// 				<th>Name</th>
	// 				<th>Type</th>
	// 				<th>Mana</th>
	// 			</tr>
	// 		</thead>
	// 		{/* <tbody>
	// 			{cards.map((card, index) => (
	// 				<tr key={card.id}>
	// 					<td>{index + 1}</td>
	// 					<td>
	// 						<div className={card.color}></div>
	// 					</td>
	// 					<td>{card.name}</td>
	// 					<td>{card.type}</td>
	// 					<td>{card.mana}</td>
	// 				</tr>
	// 			))}
	// 		</tbody> */}
	// 		<tbody>
	// 			{cards.map((card, index) => {
	// 				let color
	// 				switch (card.color) {
	// 					case '{W}':
	// 						color = 'white'
	// 						break
	// 					case '{U}':
	// 						color = 'blue'
	// 						break
	// 					case '{B}':
	// 						color = 'black'
	// 						break
	// 					case '{R}':
	// 						color = 'red'
	// 						break
	// 					case '{G}':
	// 						color = 'green'
	// 						break
	// 				}
	// 				return (
	// 					<tr key={card.id}>
	// 						<td>{index + 1}</td>
	// 						<td>
	// 							<div className={color}></div>
	// 						</td>
	// 						<td>{card.name}</td>
	// 						<td>{card.type}</td>
	// 						<td>{card.mana}</td>
	// 					</tr>
	// 				)
	// 			})}
	// 		</tbody>
	// 	</Table>
	// )
}

export default DeckInProgress
