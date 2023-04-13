import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import ToDo from '../../ToDo/ToDo'

const TodoPageDetails = () => {
	const { todoId } = useParams()
	const location = useLocation()

	const [todoDetails, setTodoDetails] = useState('')

	const navigate = useNavigate()
	useEffect(() => {
		const local = localStorage.getItem('todo')
		if (local) {
			setTodoDetails(JSON.parse(local).find((el) => el.id === todoId))
		}
	}, [todoId])

	const handleSubmit = (e) => {
		e.preventDefault()

		if (Number(e.target.elements.name.value) % 2 === 0) navigate('/')
		else navigate('/news')
	}

	return (
		<>
			<form action='' onSubmit={handleSubmit}>
				<input name={'name'} type='text' />
				<button>click</button>
			</form>
			<Link to={location.state} className='btn m-2 btn-success'>
				Back
			</Link>
			<ToDo todo={todoDetails} />
		</>
	)
}

export default TodoPageDetails
