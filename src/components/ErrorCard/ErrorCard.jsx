const ErrorCard = ({ children }) => {
	return (
		<div className='alert alert-danger mt-3' role='alert'>
			{children}
		</div>
	)
}

export default ErrorCard
