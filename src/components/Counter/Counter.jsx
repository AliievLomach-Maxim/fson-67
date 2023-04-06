import { useReducer } from 'react'
import { Component, PureComponent, useState } from 'react'

// class Button extends PureComponent {
// 	shouldComponentUpdate(nextProps, nextState) {
// 		if (nextProps.handleClickIncrement !== this.props.handleClickIncrement)
// 			return true
// 		return false
// 	}
// 	render() {
// 		console.log(this.props)
// 		return (
// 			<button
// 				className='btn btn-outline-success me-5'
// 				onClick={this.props.handleClickIncrement}
// 			>
// 				<i className='bi bi-plus-circle fs-1'></i>
// 			</button>
// 		)
// 	}
// }

// function reducer(prevState, action) {
// 	if (action.type === 'increment') return prevState + action.payload
// 	else if (action.type === 'decrement') return prevState - action.payload
// }

// function reducer(prevState, action) {
// 	if (action.type === 'editUser')
// 		return { ...prevState, name: action.payload }
// 	else if (action.type === 'pushItems')
// 		return { ...prevState, items:  }
// }

const Counter = () => {
	const [total, setTotal] = useState(0)
	// const [total, setTotal] = useReducer(reducer, 0)
	// const [state, dispatch] = useReducer(reducer, {
	// 	name: 'User',
	// 	items: [],
	// 	age: 30,
	// })
	// 	const [state, setState] = useState({
	// 		name: 'User',
	// 		items: [],
	// 		age: 30,
	// 	})

	// setState((prev)=>{
	// 	return {
	// 		...prev,
	// 		name:'Alex'
	// 	}
	// })

	// dispatch({
	// 	type: 'editUser',
	// 	payload: 'Alex',
	// })

	// dispatch({ type: 'pushItems', payload: [1, 2, 34] })

	const handleClickIncrement = () => setTotal((prev) => prev + 1)
	// const handleClickIncrement = () =>
	// setTotal({ type: 'increment', payload: 1 })

	const handleClickDecrement = () => setTotal((prev) => prev - 1)
	// const handleClickDecrement = () =>
	// 	setTotal({ type: 'decrement', payload: 1 })

	return (
		<div className='position-absolute top-50 start-50 translate-middle'>
			<div
				className='card bg-dark text-white '
				style={{ width: '600px' }}
			>
				<div className='card-body'>
					<h5 className='card-title text-center fs-1'>Counter</h5>
					<p
						className='card-text  text-center'
						style={{ fontSize: '80px' }}
					>
						{total}
					</p>
					<div className='d-flex justify-content-center px-5'>
						<button
							className='btn btn-outline-success me-5'
							onClick={handleClickIncrement}
						>
							<i className='bi bi-plus-circle fs-1'></i>
						</button>
						<button
							className='btn  btn-outline-danger ms-5'
							onClick={handleClickDecrement}
						>
							<i className='bi bi-dash-circle fs-1'></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Counter

// const Counter = () => {

// 	return (
// 		<div className='position-absolute top-50 start-50 translate-middle'>
// 			<div
// 				className='card bg-dark text-white '
// 				style={{ width: '600px' }}
// 			>
// 				<div className='card-body'>
// 					<h5 className='card-title text-center fs-1'>Counter</h5>
// 					<p
// 						className='card-text  text-center'
// 						style={{ fontSize: '80px' }}
// 					>
// 						{/* {total} */}
// 					</p>
// 					<div className='d-flex justify-content-center px-5'>
// 						<button
// 							className='btn btn-outline-success me-5'
// 							// onClick={handleClick}
// 						>
// 							<i className='bi bi-plus-circle fs-1'></i>
// 						</button>
// 						<button className='btn  btn-outline-danger ms-5'>
// 							<i className='bi bi-dash-circle fs-1'></i>
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
// export default Counter
