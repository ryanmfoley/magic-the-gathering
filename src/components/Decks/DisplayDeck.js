const DisplayDeck = ({ cards }) =>
	cards ? (
		<div className='card-list'>
			{cards.map((card) =>
				card.image ? (
					<img key={card.id} src={card.image} alt='Magic The Gathering Card' />
				) : (
					<></>
				)
			)}
		</div>
	) : (
		<></>
	)

export default DisplayDeck
