import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsSearchThunk, getNewsThunk } from '../../store/news/thunk'
import ErrorCard from '../ErrorCard/ErrorCard'

const STATUS = {
	IDLE: 'idle',
	PENDING: 'pending',
	REJECTED: 'rejected',
	FULFILLED: 'fulfilled',
}

const ContentInfo = ({ searchText }) => {
	const dispatch = useDispatch()
	const { news, status, error } = useSelector((state) => state.news)

	useEffect(() => {
		dispatch(getNewsThunk())
	}, [dispatch])

	useEffect(() => {
		if (!searchText) return
		dispatch(getNewsSearchThunk(searchText))
	}, [dispatch, searchText])

	if (status === STATUS.PENDING)
		return (
			<div className='spinner-border' role='status'>
				<span className='visually-hidden'>Loading...</span>
			</div>
		)
	else if (status === STATUS.FULFILLED)
		return (
			<ul>
				{news.map((el) => {
					return <li key={el.url}>{el.title}</li>
				})}
				<button>Load more...</button>
			</ul>
		)
	else if (status === STATUS.REJECTED) return <ErrorCard>{error}</ErrorCard>
}

export default ContentInfo
