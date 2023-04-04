import { Component, useEffect, useState } from 'react'

import React from 'react'

const LoginForm = ({ hideModal, createUser }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [checked, setChecked] = useState(false)
	const [gender, setGender] = useState('male')
	const [selectedValue, setSelectedValue] = useState('1')

	useEffect(() => {
		const handlePressESC = (e) => {
			console.log('object')
			if (e.code === 'Escape') {
				hideModal()
			}
		}
		document.addEventListener('keydown', handlePressESC)
		return () => {
			document.removeEventListener('keydown', handlePressESC)
		}
	}, [hideModal])

	const handleChange = ({ target: { name, value } }) => {
		// this.setState({
		// 	[name]: value,
		// })
		if (name === 'email') setEmail(value)
		else if (name === 'password') setPassword(value)
	}

	const handleChecked = ({ target: { checked } }) =>
		// this.setState({ checked })
		setChecked(checked)

	const handleSubmit = (e) => {
		e.preventDefault()
		createUser({
			email,
			password,
			gender,
		})
		setEmail('')
		setPassword('')
		// this.setState({
		// 	email: '',
		// 	password: '',
		// })
		hideModal()
	}

	const handleRadio = (value) => {
		setGender(value)
		// this.setState({
		// 	gender: value,
		// })
	}

	const handleSelect = ({ target: { value } }) => {
		setSelectedValue(value)
		// this.setState({ selectedValue: e.target.value })
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className='mb-3'>
				<select
					className='form-select'
					aria-label='Default select example'
					onChange={handleSelect}
					value={selectedValue}
				>
					<option value='1'>One</option>
					<option value='2'>Two</option>
					<option value='3'>Three</option>
				</select>
			</div>
			<div className='mb-3'>
				<label htmlFor='exampleInputEmail1' className='form-label'>
					Email address
				</label>
				<input
					name='email'
					type='email'
					className='form-control'
					id='exampleInputEmail1'
					aria-describedby='emailHelp'
					onChange={handleChange}
					value={email}
				/>
				<div id='emailHelp' className='form-text'>
					We'll never share your email with anyone else.
				</div>
			</div>
			<div className='mb-3'>
				<label htmlFor='exampleInputPassword1' className='form-label'>
					Password
				</label>
				<input
					name='password'
					type='password'
					className='form-control'
					id='exampleInputPassword1'
					onChange={handleChange}
					value={password}
				/>
			</div>
			<div className='mb-3 form-check'>
				<input
					type='checkbox'
					className='form-check-input'
					id='exampleCheck1'
					checked={checked}
					onChange={handleChecked}
				/>
				<label className='form-check-label' htmlFor='exampleCheck1'>
					I agree
				</label>
			</div>
			<div className='form-check'>
				<input
					className='form-check-input'
					type='radio'
					name='flexRadioDefault'
					id='flexRadioDefault1'
					value={gender === 'male'}
					onChange={() => handleRadio('male')}
				/>
				<label className='form-check-label' htmlFor='flexRadioDefault1'>
					male
				</label>
			</div>
			<div className='form-check'>
				<input
					className='form-check-input'
					type='radio'
					name='flexRadioDefault'
					id='flexRadioDefault2'
					value={gender === 'female'}
					onChange={() => handleRadio('female')}
				/>
				<label className='form-check-label' htmlFor='flexRadioDefault2'>
					female
				</label>
			</div>
			<button
				disabled={!(checked || email || password)}
				type='submit'
				className='btn btn-primary'
			>
				Submit
			</button>
		</form>
	)
}

export default LoginForm

// class LoginForm extends Component {
// 	state = {
// 		email: '',
// 		password: '',
// 		checked: false,
// 		gender: 'male',
// 		selectedValue: '1',
// 	}

// 	componentDidMount() {
// 		document.addEventListener('keydown', this.handlePressESC)
// 	}

// 	componentWillUnmount() {
// 		document.removeEventListener('keydown', this.handlePressESC)
// 	}

// 	handlePressESC = (e) => {
// 		console.log('object')
// 		if (e.code === 'Escape') {
// 			this.props.hideModal()
// 			// document.removeEventListener('keydown', this.handlePressESC)
// 		}
// 	}

// 	handleChange = ({ target: { name, value } }) => {
// 		this.setState({
// 			[name]: value,
// 		})
// 	}

// 	handleChecked = ({ target: { checked } }) => this.setState({ checked })

// 	handleSubmit = (e) => {
// 		e.preventDefault()
// 		// this.props.createUser(this.state)
// 		this.props.createUser({
// 			email: this.state.email,
// 			password: this.state.password,
// 			gender: this.state.gender,
// 		})
// 		this.setState({
// 			email: '',
// 			password: '',
// 		})
// 		this.props.hideModal()
// 	}

// 	handleRadio = (value) => {
// 		this.setState({
// 			gender: value,
// 		})
// 	}

// 	handleSelect = (e) => {
// 		this.setState({ selectedValue: e.target.value })
// 	}

// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<div className='mb-3'>
// 					<select
// 						className='form-select'
// 						aria-label='Default select example'
// 						onChange={this.handleSelect}
// 						value={this.state.selectedValue}
// 					>
// 						<option value='1'>One</option>
// 						<option value='2'>Two</option>
// 						<option value='3'>Three</option>
// 					</select>
// 				</div>
// 				<div className='mb-3'>
// 					<label htmlFor='exampleInputEmail1' className='form-label'>
// 						Email address
// 					</label>
// 					<input
// 						name='email'
// 						type='email'
// 						className='form-control'
// 						id='exampleInputEmail1'
// 						aria-describedby='emailHelp'
// 						onChange={this.handleChange}
// 						value={this.state.email}
// 					/>
// 					<div id='emailHelp' className='form-text'>
// 						We'll never share your email with anyone else.
// 					</div>
// 				</div>
// 				<div className='mb-3'>
// 					<label
// 						htmlFor='exampleInputPassword1'
// 						className='form-label'
// 					>
// 						Password
// 					</label>
// 					<input
// 						name='password'
// 						type='password'
// 						className='form-control'
// 						id='exampleInputPassword1'
// 						onChange={this.handleChange}
// 						value={this.state.password}
// 					/>
// 				</div>
// 				<div className='mb-3 form-check'>
// 					<input
// 						type='checkbox'
// 						className='form-check-input'
// 						id='exampleCheck1'
// 						checked={this.state.checked}
// 						onChange={this.handleChecked}
// 					/>
// 					<label className='form-check-label' htmlFor='exampleCheck1'>
// 						I agree
// 					</label>
// 				</div>
// 				<div className='form-check'>
// 					<input
// 						className='form-check-input'
// 						type='radio'
// 						name='flexRadioDefault'
// 						id='flexRadioDefault1'
// 						value={this.state.gender === 'male'}
// 						onChange={() => this.handleRadio('male')}
// 					/>
// 					<label
// 						className='form-check-label'
// 						htmlFor='flexRadioDefault1'
// 					>
// 						male
// 					</label>
// 				</div>
// 				<div className='form-check'>
// 					<input
// 						className='form-check-input'
// 						type='radio'
// 						name='flexRadioDefault'
// 						id='flexRadioDefault2'
// 						value={this.state.gender === 'female'}
// 						onChange={() => this.handleRadio('female')}
// 					/>
// 					<label
// 						className='form-check-label'
// 						htmlFor='flexRadioDefault2'
// 					>
// 						female
// 					</label>
// 				</div>
// 				<button
// 					disabled={
// 						!(
// 							this.state.checked ||
// 							this.state.email ||
// 							this.state.password
// 						)
// 					}
// 					type='submit'
// 					className='btn btn-primary'
// 				>
// 					Submit
// 				</button>
// 			</form>
// 		)
// 	}
// }

// export default LoginForm
