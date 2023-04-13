import React from 'react'
import { useSearchParams } from 'react-router-dom'

const FormFilter = ({ handleChangeSearch, filter }) => {
	return (
		<form className='d-flex mb-3' role='search'>
			<input
				className='form-control me-2'
				type='search'
				placeholder='Filter:'
				value={filter}
				onChange={handleChangeSearch}
			/>
		</form>
	)
}

export default FormFilter
