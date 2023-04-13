import { Component, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import toast from 'react-hot-toast'
import { nanoid } from 'nanoid'

import ToDo from '../ToDo/ToDo'
// import todo from '../../todo.json'

import React from 'react'
import FormCreate from './FormCreate'
import FormFilter from './FormFilter'

const ToDoList = () => {
	const [todoList, setTodoList] = useState([])
	const [textTodo, setTextTodo] = useState('')
	const [filteredTodo, setFilteredTodo] = useState(todoList)

	const [searchParams, setSearchParams] = useSearchParams()

	const filter = searchParams.get('filter') ?? ''

	// console.log('searchParams :>> ', Object.fromEntries([...searchParams]))

	const handleChangeSearch = ({ target: { value } }) => {
		setSearchParams({ filter: value })
	}

	useEffect(() => {
		const localTodo = localStorage.getItem('todo')
		if (localTodo) {
			setTodoList(JSON.parse(localTodo))
		}
	}, [])

	useEffect(() => {
		!filter && setSearchParams({})
	}, [filter, setSearchParams])

	useEffect(() => {
		todoList.length &&
			localStorage.setItem('todo', JSON.stringify(todoList))
	}, [todoList])

	useEffect(() => {
		todoList &&
			setFilteredTodo(
				todoList.filter((el) =>
					el.title.toLowerCase().includes(filter.toLowerCase())
				)
			)
	}, [filter, todoList])

	const handleCheck = (id) => {
		setTodoList((prev) =>
			prev.map((el) => {
				return el.id === id ? { ...el, completed: !el.completed } : el
			})
		)
	}

	const handleCreate = (e) => {
		e.preventDefault()
		setTodoList((prev) => {
			return [
				...prev,
				{
					id: nanoid(),
					title: textTodo,
					completed: false,
				},
			]
		})
		toast.success('Create todo successfully')
	}

	const handleChange = ({ target: { value } }) => setTextTodo(value)

	const handleDelete = (id) => {
		setTodoList((prev) => prev.filter((todo) => todo.id !== id))
		toast.error('Delete todo successfully')
	}

	return (
		<>
			<FormFilter
				handleChangeSearch={handleChangeSearch}
				filter={filter}
			/>
			<FormCreate
				handleCreate={handleCreate}
				textTodo={textTodo}
				handleChange={handleChange}
			/>
			<h1>My To-Do list</h1>
			{filteredTodo.length > 0 && (
				<ul className='list-group list-group-flush'>
					{filteredTodo.map((todo) => (
						<ToDo
							key={todo.id}
							todo={todo}
							handleCheck={handleCheck}
							handleDelete={handleDelete}
						/>
					))}
				</ul>
			)}
		</>
	)
}

export default ToDoList

// class ToDoList extends Component {
// 	state = {
// 		todoList: [],
// 		textTodo: '',
// 		isDelete: false,
// 		isCreate: false,
// 	}

// 	componentDidMount() {
// 		const localTodo = localStorage.getItem('todo')
// 		if (localTodo) {
// 			this.setState({ todoList: JSON.parse(localTodo) })
// 		}
// 	}

// 	componentDidUpdate(prevProps, prevState) {
// 		if (prevState.todoList !== this.state.todoList)
// 			localStorage.setItem('todo', JSON.stringify(this.state.todoList))

// 		if (prevState.todoList.length > this.state.todoList.length) {
// 			this.setState({ isDelete: true })
// 			setTimeout(() => {
// 				this.setState({ isDelete: false })
// 			}, 1500)
// 		}

// 		if (prevState.todoList.length < this.state.todoList.length) {
// 			this.setState({ isCreate: true })
// 			setTimeout(() => {
// 				this.setState({ isCreate: false })
// 			}, 1500)
// 		}
// 	}

// 	handleCheck = (id) => {
// 		this.setState((prev) => ({
// 			todoList: prev.todoList.map((el) => {
// 				return el.id === id ? { ...el, completed: !el.completed } : el
// 			}),
// 		}))
// 	}

// 	handleCreate = (e) => {
// 		e.preventDefault()
// 		this.setState((prev) => {
// 			return {
// 				todoList: [
// 					...prev.todoList,
// 					{
// 						id: nanoid(),
// 						title: this.state.textTodo,
// 						completed: false,
// 					},
// 				],
// 			}
// 		})
// 	}

// 	handleChange = ({ target: { value } }) => this.setState({ textTodo: value })

// 	handleDelete = (id) => {
// 		this.setState((prev) => ({
// 			todoList: prev.todoList.filter((todo) => todo.id !== id),
// 		}))
// 	}

// 	render() {
// 		return (
// 			<>
// 				{this.state.isCreate && (
// 					<div className='alert alert-success' role='alert'>
// 						Create todo successfully
// 					</div>
// 				)}
// 				{this.state.isDelete && (
// 					<div className='alert alert-danger' role='alert'>
// 						Delete todo successfully
// 					</div>
// 				)}
// 				<form
// 					className='d-flex'
// 					role='search'
// 					onSubmit={this.handleCreate}
// 				>
// 					<input
// 						className='form-control me-2'
// 						type='search'
// 						placeholder='Search'
// 						aria-label='Search'
// 						value={this.state.textTodo}
// 						onChange={this.handleChange}
// 					/>
// 					<button className='btn btn-outline-success' type='submit'>
// 						Create
// 					</button>
// 				</form>
// 				<h1>My To-Do list</h1>
// 				{this.state.todoList.length > 0 && (
// 					<ul className='list-group list-group-flush'>
// 						{this.state.todoList.map((todo) => (
// 							<ToDo
// 								key={todo.id}
// 								todo={todo}
// 								handleCheck={this.handleCheck}
// 								handleDelete={this.handleDelete}
// 							/>
// 						))}
// 					</ul>
// 				)}
// 			</>
// 		)
// 	}
// }

// export default ToDoList
