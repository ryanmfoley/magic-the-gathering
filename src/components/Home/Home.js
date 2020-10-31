import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [postsPerPage, setPostsPerPage] = useState(10)

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true)
			const res = await axios.get(
				'https://api.scryfall.com/cards/search?q=c%3Ar+t%3acreature+cmc%3a2'
			)
			setPosts(res.data.data)
			setLoading(false)
		}

		fetchPosts()
	}, [])
	console.log(posts)

	return (
		<div>
			<h1>Magic The Gathering</h1>
		</div>
	)
}

export default Home
