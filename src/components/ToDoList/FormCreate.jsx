import React, { useEffect, useRef, useState, forwardRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

// const CustomButton = forwardRef((props, ref) => (
// 	<button ref={ref}>{props.children}</button>
// ))

const FormCreate = ({ handleCreate, textTodo, handleChange }) => {
	// const [value, setValue] = useState('')
	// // const prevValue = useRef('qwe')
	// // console.log('prevValue :>> ', prevValue)

	// // useEffect(() => {
	// // 	prevValue.current = value
	// // }, [value])
	// const inputRef = useRef('')

	// // const btnRef = useRef()

	// // useEffect(() => btnRef.current.focus(), [])
	// // console.log(btnRef.current)
	// // return <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton>

	// const handleClick = () => {
	// 	inputRef.current.focus()
	// }
	// 	const [value, setValue] = useState(null)

	// 	useEffect(() => {
	// value &&
	// 		console.log(value)
	// 	}, [value])

	return (
		<>
			{/* <p>{value}</p> */}
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
		</>
	)
}

export default FormCreate
