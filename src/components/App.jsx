// import { Component, useState } from 'react'
import { lazy, Suspense } from 'react'

import { Route, Routes } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'

// import { Toaster } from 'react-hot-toast'
// import { nanoid } from 'nanoid'

// import Header from './Header/Header'
// import Counter from './Counter/Counter'
// import ToDoList from './ToDoList/ToDoList'
// import Modal from './Modal/Modal'
// import LoginForm from './LoginForm/LoginForm'
// import Search from './Search/Search'
// import ContentInfo from './ContentInfo/ContentInfo'
// import TestUseMemo from './TestUseMemo/TestUseMemo'

// import HomePage from './pages/HomePage'
// import TodoPage from './pages/TodoPages/TodoPage'
// import NewsPage from './pages/NewsPage'
// import Layout from './Layout/Layout'
// import TodoPageDetails from './pages/TodoPages/TodoPageDetails'

const TodoPage = lazy(() => import('./pages/TodoPages/TodoPage'))

const HomePage = lazy(() => import('./pages/HomePage'))

const NewsPage = lazy(() => import('./pages/NewsPage'))

const Layout = lazy(() => import('./Layout/Layout'))

const TodoPageDetails = lazy(() => import('./pages/TodoPages/TodoPageDetails'))

const App = () => {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={
						<Suspense>
							<Layout />
						</Suspense>
					}
				>
					<Route index element={<HomePage />} />
					<Route path='todo/' element={<TodoPage />}>
						{/* <Route path=':todoId' element={<TodoPageDetails />} /> */}
					</Route>
					<Route path='todo/:todoId' element={<TodoPageDetails />} />

					<Route path='news' element={<NewsPage />} />
					<Route path='products' element={<ProductsPage />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
