import { Suspense } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import ToDo from './ToDo'
import { useSelector } from 'react-redux'

const ToDoDetails = () => {
	const { todo: todoList } = useSelector((state) => state.todo)

	const params = useParams()
	const location = useLocation()

	return (
		<Suspense>
			<Link to={location.state} className='btn btn-secondary m-2'>
				Back
			</Link>
			{todoList?.map(
				(todo) =>
					todo.id === params.id && <ToDo key={todo.id} todo={todo} />
			)}
		</Suspense>
	)
}

export default ToDoDetails
