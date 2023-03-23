import { Component } from 'react'

import ToDo from '../ToDo/ToDo'
import todo from '../../todo.json'
import { nanoid } from 'nanoid'

class ToDoList extends Component {
	state = {
		todoList: todo,
		textTodo: '',
	}

	handleCheck = (id) =>
		this.setState((prev) => ({
			todoList: prev.todoList.map((el) => {
				return el.id === id ? { ...el, completed: !el.completed } : el
			}),
		}))

	handleCreate = (e) => {
		e.preventDefault()
		this.setState((prev) => {
			return {
				todoList: [
					...prev.todoList,
					{
						id: nanoid(),
						title: this.state.textTodo,
						completed: false,
					},
				],
			}
		})
	}

	handleChange = ({ target: { value } }) => this.setState({ textTodo: value })

	render() {
		return (
			<>
				<form class='d-flex' role='search' onSubmit={this.handleCreate}>
					<input
						className='form-control me-2'
						type='search'
						placeholder='Search'
						aria-label='Search'
						value={this.state.textTodo}
						onChange={this.handleChange}
					/>
					<button class='btn btn-outline-success' type='submit'>
						Create
					</button>
				</form>
				<h1>My To-Do list</h1>
				<ul className='list-group list-group-flush'>
					{this.state.todoList.map((todo) => (
						<ToDo
							key={todo.id}
							todo={todo}
							handleCheck={this.handleCheck}
						/>
					))}
				</ul>
			</>
		)
	}
}

export default ToDoList
