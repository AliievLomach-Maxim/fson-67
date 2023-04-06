import React, { createContext, useContext, useState } from 'react'

const Context = createContext()

export const useCustomContext = () => useContext(Context)

const AlertContext = ({ children }) => {
	const [showAlert, setShowAlert] = useState(false)
	const [items, setItems] = useState([])

	return (
		<Context.Provider
			value={{
				show: showAlert,
				setShow: setShowAlert,
				items,
				setItems,
			}}
		>
			{children}
		</Context.Provider>
	)
}

export default AlertContext
