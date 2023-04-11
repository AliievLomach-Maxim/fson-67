import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ToDo from '../../ToDo/ToDo'

const TodoPageDetails = () => {
	const { todoId } = useParams()

	const [todoDetails, setTodoDetails] = useState('')

	useEffect(() => {
		const local = localStorage.getItem('todo')
		if (local) {
			setTodoDetails(JSON.parse(local).find((el) => el.id === todoId))
		}
	}, [todoId])

	return <ToDo todo={todoDetails} />
}

export default TodoPageDetails
