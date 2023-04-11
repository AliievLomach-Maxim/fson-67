import React, { useState } from 'react'
import ContentInfo from '../ContentInfo/ContentInfo'
import Search from '../Search/Search'

const NewsPage = () => {
	const [searchText, setSearchText] = useState('')

	const createSearchText = (searchText) => {
		setSearchText(searchText)
		// this.setState({ searchText })
	}
	return (
		<>
			<Search createSearchText={createSearchText} />
			<ContentInfo searchText={searchText} />
		</>
	)
}

export default NewsPage
