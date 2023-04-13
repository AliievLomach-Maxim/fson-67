import React from 'react'

const FormCreate = ({ handleCreate, textTodo, handleChange }) => {
	return (
		<form className='d-flex' role='search' onSubmit={handleCreate}>
			<input
				className='form-control me-2'
				type='search'
				placeholder='Search'
				aria-label='Search'
				value={textTodo}
				onChange={handleChange}
			/>
			<button className='btn btn-outline-success' type='submit'>
				Create
			</button>
		</form>
	)
}

export default FormCreate
