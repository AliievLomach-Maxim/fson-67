import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../../store/counter/counterSlice'

const Counter = () => {
	const { total, step } = useSelector((state) => state.counter)

	const dispatch = useDispatch()

	const handleClickPlus = () => dispatch(increment(step))

	const handleClickMinus = () => dispatch(decrement(step))

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
							onClick={handleClickPlus}
						>
							<i className='bi bi-plus-circle fs-1'></i>
						</button>
						<button
							className='btn  btn-outline-danger ms-5'
							onClick={handleClickMinus}
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
