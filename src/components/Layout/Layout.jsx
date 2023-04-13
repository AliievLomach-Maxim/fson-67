import { nanoid } from 'nanoid'
import { Suspense, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

import Header from '../Header/Header'
import LoginForm from '../LoginForm/LoginForm'
import Modal from '../Modal/Modal'

const Layout = () => {
	const [isShowModal, setIsShowModal] = useState(false)

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
	return (
		<div className='container'>
			<Toaster position='top-right' toastOptions={{ duration: 1500 }} />
			<Header showModal={showModal} />
			<Suspense fallback={<h1>Loading..</h1>}>
				<Outlet />
			</Suspense>
			{isShowModal && (
				<Modal hideModal={hideModal}>
					<LoginForm createUser={createUser} hideModal={hideModal} />
				</Modal>
			)}
		</div>
	)
}

export default Layout

//
