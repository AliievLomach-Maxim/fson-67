import { Component } from 'react'

class LoginForm extends Component {
	state = {
		email: '',
		password: '',
		checked: false,
		gender: 'male',
		selectedValue: '1',
	}

	componentDidMount() {
		document.addEventListener('keydown', this.handlePressESC)
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handlePressESC)
	}

	handlePressESC = (e) => {
		console.log('object')
		if (e.code === 'Escape') {
			this.props.hideModal()
			// document.removeEventListener('keydown', this.handlePressESC)
		}
	}

	handleChange = ({ target: { name, value } }) => {
		this.setState({
			[name]: value,
		})
	}

	handleChecked = ({ target: { checked } }) => this.setState({ checked })

	handleSubmit = (e) => {
		e.preventDefault()
		// this.props.createUser(this.state)
		this.props.createUser({
			email: this.state.email,
			password: this.state.password,
			gender: this.state.gender,
		})
		this.setState({
			email: '',
			password: '',
		})
		this.props.hideModal()
	}

	handleRadio = (value) => {
		this.setState({
			gender: value,
		})
	}

	handleSelect = (e) => {
		this.setState({ selectedValue: e.target.value })
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className='mb-3'>
					<select
						className='form-select'
						aria-label='Default select example'
						onChange={this.handleSelect}
						value={this.state.selectedValue}
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
						onChange={this.handleChange}
						value={this.state.email}
					/>
					<div id='emailHelp' className='form-text'>
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className='mb-3'>
					<label
						htmlFor='exampleInputPassword1'
						className='form-label'
					>
						Password
					</label>
					<input
						name='password'
						type='password'
						className='form-control'
						id='exampleInputPassword1'
						onChange={this.handleChange}
						value={this.state.password}
					/>
				</div>
				<div className='mb-3 form-check'>
					<input
						type='checkbox'
						className='form-check-input'
						id='exampleCheck1'
						checked={this.state.checked}
						onChange={this.handleChecked}
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
						value={this.state.gender === 'male'}
						onChange={() => this.handleRadio('male')}
					/>
					<label
						className='form-check-label'
						htmlFor='flexRadioDefault1'
					>
						male
					</label>
				</div>
				<div className='form-check'>
					<input
						className='form-check-input'
						type='radio'
						name='flexRadioDefault'
						id='flexRadioDefault2'
						value={this.state.gender === 'female'}
						onChange={() => this.handleRadio('female')}
					/>
					<label
						className='form-check-label'
						htmlFor='flexRadioDefault2'
					>
						female
					</label>
				</div>
				<button
					disabled={
						!(
							this.state.checked ||
							this.state.email ||
							this.state.password
						)
					}
					type='submit'
					className='btn btn-primary'
				>
					Submit
				</button>
			</form>
		)
	}
}

export default LoginForm
