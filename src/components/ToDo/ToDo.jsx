import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const ToDo = ({ todo, handleCheck, handleDelete }) => {
	const location = useLocation()

	return (
		<li className='list-group-item'>
			<div className='row justify-content-between'>
				<div className='col-10'>
					<input
						disabled={!handleCheck}
						className='form-check-input me-2'
						type='checkbox'
						checked={todo.completed}
						onChange={() => {
							handleCheck(todo.id)
						}}
					/>
					{handleCheck ? (
						<Link state={location} to={todo.id}>
							{todo.title}
						</Link>
					) : (
						todo.title
					)}
				</div>
				<div className='col'>
					<button
						disabled={!handleCheck}
						type='button'
						className='btn-close'
						aria-label='Close'
						onClick={() => handleDelete(todo.id)}
					></button>
				</div>
			</div>
		</li>
	)
}

export default ToDo
