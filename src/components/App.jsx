import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Layout from './Layout/Layout'

const LoginPage = lazy(() => import('./pages/LoginPage'))
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'))
const ToDoDetails = lazy(() => import('./ToDo/ToDoDetails'))
const HomePage = lazy(() => import('./pages/HomePage'))
const ToDoPage = lazy(() => import('./pages/ToDoPage'))
const NewsPage = lazy(() => import('./pages/NewsPage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))

const App = () => {
	return (
		<>
			<Toaster
				position='top-right'
				toastOptions={{
					duration: 1500,
				}}
			/>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='news' element={<NewsPage />} />

					<Route path='todo' element={<ToDoPage />} />
					<Route path='todo/:id' element={<ToDoDetails />} />
					<Route path='products' element={<ProductsPage />} />
				</Route>
				<Route
					path='/login'
					element={
						<Suspense>
							<LoginPage />
						</Suspense>
					}
				/>
				<Route
					path='/signUp'
					element={
						<Suspense>
							<RegistrationPage />
						</Suspense>
					}
				/>
			</Routes>
		</>
	)
}

export default App
