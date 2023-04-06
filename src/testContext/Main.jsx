import { useCustomContext } from './Context/AlertContext'

const Main = () => {
	const { setShow } = useCustomContext()
	return (
		<div>
			<h1>Hello Context</h1>
			<button
				onClick={() => setShow((prev) => !prev)}
				className='btn btn-success'
			>
				Open Alert
			</button>
		</div>
	)
}

export default Main
