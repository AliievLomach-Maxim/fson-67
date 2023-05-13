import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './Layout/Layout'
<<<<<<< Updated upstream
import RegistrationPage from './pages/RegistrationPage'
import { useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast'
=======
import PrivateRoute from './PrivateRoute/PrivateRoute'
import PublicRoute from './PublicRoute/PublicRoute'
>>>>>>> Stashed changes

const LoginPage = lazy(() => import('./pages/LoginPage'))
const ToDoDetails = lazy(() => import('./ToDo/ToDoDetails'))
const HomePage = lazy(() => import('./pages/HomePage'))
const ToDoPage = lazy(() => import('./pages/ToDoPage'))
const NewsPage = lazy(() => import('./pages/NewsPage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))

const App = () => {
	const isAuth = useSelector((state) => state.auth.access_token)
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
					<Route index element={<HomePage />} />{' '}
					<Route
						path='news'
						element={
							<PrivateRoute>
								<NewsPage />
							</PrivateRoute>
						}
					/>
					<Route
						path='todo'
						element={
							<PrivateRoute>
								<ToDoPage />
							</PrivateRoute>
						}
					/>
					<Route
						path='todo/:id'
						element={
							<PrivateRoute>
								<ToDoDetails />
							</PrivateRoute>
						}
					/>
					<Route
						path='products'
						element={
							<PrivateRoute>
								<ProductsPage />
							</PrivateRoute>
						}
					/>
				</Route>
				<Route
					path='/login'
					element={
						<PublicRoute>
							<Suspense>
								<LoginPage />
							</Suspense>
						</PublicRoute>
					}
				/>
				<Route
					path='/signUp'
					element={
						<PublicRoute>
							<Suspense>
								<RegistrationPage />
							</Suspense>
						</PublicRoute>
					}
				/>
			</Routes>
		</>
	)
}

export default App
