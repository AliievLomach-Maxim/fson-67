import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { getNewsThunk } from '../../store/news/thunk'
import { logOut } from '../../store/auth/slice'
import { dellToken } from '../../api/auth'
import { useEffect } from 'react'
import { getProfileThunk } from '../../store/auth/thunk'

const Header = ({ showModal }) => {
	const { profile, access_token } = useSelector((state) => state.auth)

	const navigate = useNavigate()

	const handleLogin = () => {
		navigate('/login')
	}
	const dispatch = useDispatch()

	const handleLogOut = () => {
		dispatch(logOut())
		dellToken()
	}

	useEffect(() => {
		access_token && dispatch(getProfileThunk())
	}, [access_token, dispatch])

	return (
		<nav className='navbar bg-dark mb-3 navbar-expand-lg'>
			<div className='container-fluid'>
				<span className='navbar-brand mb-0 h1 text-success'>
					Navbar
				</span>
				<div
					className='collapse navbar-collapse'
					id='navbarNavAltMarkup'
				>
					<div className='navbar-nav'>
						<NavLink
							className='nav-link text-white '
							aria-current='page'
							to='/'
						>
							Home
						</NavLink>
						<NavLink className='nav-link text-white' to='/news'>
							News
						</NavLink>
						<NavLink className='nav-link text-white' to='/todo'>
							Todo
						</NavLink>
						<NavLink className='nav-link text-white' to='/products'>
							Products
						</NavLink>
					</div>
				</div>
				<button
					className='btn btn-outline-success ms-2'
					onClick={showModal}
				>
					Open Modal
				</button>
				<button
					className='btn btn-outline-success ms-2'
					onClick={() => {
						dispatch(getNewsThunk())
					}}
				>
					thunk
				</button>
				<button
					className='btn btn-outline-success ms-2'
					onClick={profile ? handleLogOut : handleLogin}
				>
					{profile ? 'LogOut' : 'LogIn'}
				</button>
				{profile && (
					<div className='text-white ms-2'>{profile.name}</div>
				)}
			</div>
		</nav>
	)
}

export default Header
