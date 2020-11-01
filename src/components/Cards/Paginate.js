import React from 'react'

import Pagination from 'react-bootstrap/Pagination'

const Paginate = ({ cardsPerPage, totalCards, currentPage, paginate }) => {
	const items = []
	for (
		let number = 1;
		number <= Math.ceil(totalCards / cardsPerPage);
		number++
	) {
		items.push(
			<Pagination.Item
				key={number}
				active={number === currentPage}
				onClick={() => paginate(number)}>
				{number}
			</Pagination.Item>
		)
	}

	return (
		<div>
			<Pagination>{items}</Pagination>
		</div>
	)
}

export default Paginate
