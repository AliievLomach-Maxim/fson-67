import { Component } from 'react'

import Header from './Header/Header'
// import Counter from './Counter/Counter'
import ToDoList from './ToDoList/ToDoList'
import Modal from './Modal/Modal'
import LoginForm from './LoginForm/LoginForm'
import { nanoid } from 'nanoid'

class App extends Component {
	state = {
		isShowModal: false,
	}

	showModal = () => {
		this.setState({ isShowModal: true })
	}

	hideModal = () => {
		this.setState({ isShowModal: false })
	}

	createUser = (data) => {
		const newUser = {
			...data,
			location: 'Ukraine',
			id: nanoid(),
		}
		console.log('newUser :>> ', newUser)
	}

	render() {
		return (
			<div className='container'>
				<Header showModal={this.showModal} />
				{/* <Counter /> */}
				<ToDoList />
				{this.state.isShowModal && (
					<Modal hideModal={this.hideModal}>
						<LoginForm
							createUser={this.createUser}
							hideModal={this.hideModal}
						/>
					</Modal>
				)}
			</div>
		)
	}
}

export default App
