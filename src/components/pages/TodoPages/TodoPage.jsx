import { Outlet } from 'react-router-dom'
import ToDoList from '../../ToDoList/ToDoList'

const TodoPage = () => {
	return (
		<>
			<ToDoList />
			<Outlet />
		</>
	)
}

export default TodoPage
