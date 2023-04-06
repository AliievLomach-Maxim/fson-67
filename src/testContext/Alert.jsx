import { useCustomContext } from './Context/AlertContext'

const Alert = () => {
	const { show } = useCustomContext()
	// const {show} = useContext(Context)

	return show && <div className='alert alert-danger'>Messaaaaaggee</div>
}

export default Alert
