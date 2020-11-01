import React from 'react'

import Pagination from 'react-bootstrap/Pagination'

const Paginate = ({ cardsPerPage, totalCards, currentPage, paginate }) => {
	// const pageNumbers = []

	// for (let index = 1; index <= Math.ceil(totalCards / cardsPerPage); index++) {
	// 	pageNumbers.push(index)
	// }
	// const active = 2
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
		// <nav>
		// 	<ul className='pagination'>
		// 		{pageNumbers.map((num) => (
		// 			<li key={num} className='page-item'>
		// 				<a className='page-link' onClick={() => paginate(num)}>
		// 					{num}
		// 				</a>
		// 			</li>
		// 		))}
		// 	</ul>
		// </nav>
		<div>
			<Pagination>{items}</Pagination>
		</div>
	)
}

export default Paginate
