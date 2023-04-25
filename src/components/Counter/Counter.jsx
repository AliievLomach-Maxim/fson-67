import { useReducer } from 'react'
import { Component, PureComponent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../store/counter/actions'

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
	// const [total, setTotal] = useState(0)

	const { total, step } = useSelector((state) => state.counter)
	console.log('step :>> ', step)
	const dispatch = useDispatch()

	// const handleClickIncrement = () => setTotal((prev) => prev + 1)
	const handleClickIncrement = () => dispatch(increment(step))

	// const handleClickDecrement = () => setTotal((prev) => prev - 1)
	const handleClickDecrement = () => dispatch(decrement(step))

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
