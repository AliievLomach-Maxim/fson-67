import { Component, useEffect, useState } from 'react'
import { getNews } from '../../services/fetch'
import ErrorCard from '../ErrorCard/ErrorCard'

const STATUS = {
	IDLE: 'idle',
	PENDING: 'pending',
	RESOLVED: 'resolved',
	REJECTED: 'rejected',
}

const ContentInfo = ({ searchText }) => {
	const [news, setNews] = useState(null)
	const [error, setError] = useState('')
	const [status, setStatus] = useState(STATUS.IDLE)
	const [isLoading, setIsLoading] = useState(false)

	// useEffect(() => {
	// 	if (searchText) {
	// 		setStatus(STATUS.PENDING)
	// 		getNews(searchText)
	// 			.then((data) => {
	// 				if (data.status === 'error')
	// 					return Promise.reject(data.message)
	// 				setStatus(STATUS.RESOLVED)
	// 				setNews(data.articles)
	// 			})
	// 			.catch((error) => {
	// 				setStatus(STATUS.REJECTED)
	// 				setError(error)
	// 			})
	// 		// .finally(() => {
	// 		// 	setIsLoading(  false )
	// 		// })
	// 	}
	// }, [searchText])

	useEffect(() => {
		if (!searchText) return
		// if (searchText) {
		async function fetchNews() {
			try {
				setStatus(STATUS.PENDING)
				const data = await getNews(searchText)
				console.log('data :>> ', data)
				if (data.status === 'error') return Promise.reject(data.message)
				setStatus(STATUS.RESOLVED)
				setNews(data.articles)
			} catch (error) {
				setError(error)
				setStatus(STATUS.REJECTED)
			}
		}
		fetchNews()
		// }
	}, [searchText])

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

// class ContentInfo extends Component {
// 	state = {
// 		news: null,
// 		error: '',
// 		// isLoading: false,
// 		status: STATUS.IDLE,
// 	}
// 	// ['idle','pending','rejected','resolved']
// 	componentDidUpdate(prevProps) {
// 		const searchText = this.props.searchText.trim()

// 		if (prevProps.searchText !== searchText && searchText) {
// 			this.setState({ status: STATUS.PENDING })
// 			getNews(searchText)
// 				.then((data) => {
// 					if (data.status === 'error')
// 						return Promise.reject(data.message)
// 					this.setState({
// 						news: data.articles,
// 						status: STATUS.RESOLVED,
// 					})
// 				})
// 				.catch((error) => {
// 					this.setState({ error, status: STATUS.REJECTED })
// 				})
// 			// .finally(() => {
// 			// 	this.setState({ isLoading: false })
// 			// })
// 		}
// 	}

// 	render() {
// 		const { news, error, status } = this.state

// 		if (status === STATUS.PENDING) return <h1>Loading...</h1>
// 		else if (status === STATUS.RESOLVED)
// 			return (
// 				<ul className='list-group mt-3'>
// 					{news.map((el) => (
// 						<li key={el.url} className='list-group-item'>
// 							{el.title}
// 						</li>
// 					))}
// 				</ul>
// 			)
// 		else if (status === STATUS.REJECTED)
// 			return <ErrorCard>{error}</ErrorCard>
// 		// return (
// 		// 	<>
// 		// 		{/* {isLoading && <h1>Loading...</h1>} */}
// 		// 		{error && <ErrorCard>{error}</ErrorCard>}
// 		// 		{news && (
// 		// 			<ul className='list-group mt-3'>
// 		// 				{news.map((el) => (
// 		// 					<li key={el.url} className='list-group-item'>
// 		// 						{el.title}
// 		// 					</li>
// 		// 				))}
// 		// 			</ul>
// 		// 		)}
// 		// 	</>
// 		// )
// 	}
// }

// export default ContentInfo
