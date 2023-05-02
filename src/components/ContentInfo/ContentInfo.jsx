import { Component, useEffect, useState } from 'react'
import { getNews } from '../../services/fetch'
import { useCustomContext } from '../../testContext/Context/AlertContext'
import ErrorCard from '../ErrorCard/ErrorCard'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsBySearch } from '../../store/news/reducerNews'

const STATUS = {
	IDLE: 'idle',
	PENDING: 'pending',
	RESOLVED: 'resolved',
	REJECTED: 'rejected',
}

const ContentInfo = ({ searchText }) => {
	const { status, news, error } = useSelector((state) => state.news)
	const dispatch = useDispatch()
	useEffect(() => {
		if (!searchText) return
		dispatch(getNewsBySearch(searchText))
	}, [dispatch, searchText])

	// const { news, setNews } = useCustomContext()

	// const [error, setError] = useState('')
	// const [status, setStatus] = useState(STATUS.IDLE)

	// useEffect(() => {
	// 	news && setStatus(STATUS.RESOLVED)
	// }, [news])

	// useEffect(() => {
	// 	if (!searchText) return
	// 	async function fetchNews() {
	// 		try {
	// 			setStatus(STATUS.PENDING)
	// 			const data = await getNews(searchText)
	// 			console.log('data :>> ', data)
	// 			if (data.status === 'error') return Promise.reject(data.message)
	// 			setStatus(STATUS.RESOLVED)
	// 			setNews(data.articles)
	// 		} catch (error) {
	// 			setError(error)
	// 			setStatus(STATUS.REJECTED)
	// 		}
	// 	}
	// 	fetchNews()
	// }, [searchText])

	if (status === STATUS.PENDING) return <h1>Loading...</h1>
	else if (status === STATUS.RESOLVED)
		return (
			<ul className='list-group mt-3'>
				{news.map((el) => (
					<li key={el.url} className='list-group-item'>
						{el.title}
					</li>
				))}
			</ul>
		)
	else if (status === STATUS.REJECTED) return <ErrorCard>{error}</ErrorCard>
}

export default ContentInfo
