import React from 'react'
import { Pagination } from 'react-bootstrap'

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

	return <Pagination className='mt-3'>{items}</Pagination>
}

export default Paginate
