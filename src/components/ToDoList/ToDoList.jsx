import { Component } from 'react'

import ToDo from '../ToDo/ToDo'
// import todo from '../../todo.json'
import { nanoid } from 'nanoid'

class ToDoList extends Component {
	state = {
		todoList: [],
		textTodo: '',
		isDelete: false,
		isCreate: false,
	}

	componentDidMount() {
		const localTodo = localStorage.getItem('todo')
		if (localTodo) {
			this.setState({ todoList: JSON.parse(localTodo) })
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.todoList !== this.state.todoList)
			localStorage.setItem('todo', JSON.stringify(this.state.todoList))

		if (prevState.todoList.length > this.state.todoList.length) {
			this.setState({ isDelete: true })
			setTimeout(() => {
				this.setState({ isDelete: false })
			}, 1500)
		}

		if (prevState.todoList.length < this.state.todoList.length) {
			this.setState({ isCreate: true })
			setTimeout(() => {
				this.setState({ isCreate: false })
			}, 1500)
		}
	}

	handleCheck = (id) => {
		this.setState((prev) => ({
			todoList: prev.todoList.map((el) => {
				return el.id === id ? { ...el, completed: !el.completed } : el
			}),
		}))
	}

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

	handleDelete = (id) => {
		this.setState((prev) => ({
			todoList: prev.todoList.filter((todo) => todo.id !== id),
		}))
	}

	render() {
		return (
			<>
				{this.state.isCreate && (
					<div className='alert alert-success' role='alert'>
						Create todo successfully
					</div>
				)}
				{this.state.isDelete && (
					<div className='alert alert-danger' role='alert'>
						Delete todo successfully
					</div>
				)}
				<form
					className='d-flex'
					role='search'
					onSubmit={this.handleCreate}
				>
					<input
						className='form-control me-2'
						type='search'
						placeholder='Search'
						aria-label='Search'
						value={this.state.textTodo}
						onChange={this.handleChange}
					/>
					<button className='btn btn-outline-success' type='submit'>
						Create
					</button>
				</form>
				<h1>My To-Do list</h1>
				{this.state.todoList.length > 0 && (
					<ul className='list-group list-group-flush'>
						{this.state.todoList.map((todo) => (
							<ToDo
								key={todo.id}
								todo={todo}
								handleCheck={this.handleCheck}
								handleDelete={this.handleDelete}
							/>
						))}
					</ul>
				)}
			</>
		)
	}
}

export default ToDoList
