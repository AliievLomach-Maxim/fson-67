import { Component, useState } from 'react'

import { Toaster } from 'react-hot-toast'
import { nanoid } from 'nanoid'

import Header from './Header/Header'
import Counter from './Counter/Counter'
import ToDoList from './ToDoList/ToDoList'
import Modal from './Modal/Modal'
import LoginForm from './LoginForm/LoginForm'
import Search from './Search/Search'
import ContentInfo from './ContentInfo/ContentInfo'
import TestUseMemo from './TestUseMemo/TestUseMemo'

const App = () => {
	const [isShowModal, setIsShowModal] = useState(false)
	const [searchText, setSearchText] = useState('')

	const showModal = () => {
		setIsShowModal(true)
		// this.setState({ isShowModal: true })
	}

	function hideModal() {
		setIsShowModal(false)
		// this.setState({ isShowModal: false })
	}

	const createUser = (data) => {
		const newUser = {
			...data,
			location: 'Ukraine',
			id: nanoid(),
		}
		console.log('newUser :>> ', newUser)
	}

	const createSearchText = (searchText) => {
		setSearchText(searchText)
		// this.setState({ searchText })
	}

	return (
		<div className='container'>
			<Header showModal={showModal} />
			{/* <Counter /> */}
			<TestUseMemo />
			{/* <Search createSearchText={createSearchText} />
			<ContentInfo searchText={searchText} />
			<ToDoList />
			{isShowModal && (
				<Modal hideModal={hideModal}>
					<LoginForm createUser={createUser} hideModal={hideModal} />
				</Modal>
			)} */}
			<Toaster position='top-right' toastOptions={{ duration: 1500 }} />
		</div>
	)
}

export default App

// class App extends Component {
// 	state = {
// 		isShowModal: false,
// 		searchText: '',
// 	}

// 	showModal = () => {
// 		this.setState({ isShowModal: true })
// 	}

// 	hideModal = () => {
// 		this.setState({ isShowModal: false })
// 	}

// 	createUser = (data) => {
// 		const newUser = {
// 			...data,
// 			location: 'Ukraine',
// 			id: nanoid(),
// 		}
// 		console.log('newUser :>> ', newUser)
// 	}

// 	createSearchText = (searchText) => {
// 		this.setState({ searchText })
// 	}

// 	render() {
// 		return (
// 			<div className='container'>
// 				<Header showModal={this.showModal} />
// 				{/* <Counter /> */}
// 				<Search createSearchText={this.createSearchText} />
// 				<ContentInfo searchText={this.state.searchText}/>
// 				{/* <ToDoList />
// 				{this.state.isShowModal && (
// 					<Modal hideModal={this.hideModal}>
// 						<LoginForm
// 							createUser={this.createUser}
// 							hideModal={this.hideModal}
// 						/>
// 					</Modal>
// 				)} */}
// 			</div>
// 		)
// 	}
// }

// export default App
