import React, { createContext, useContext, useState } from 'react'

const Context = createContext()

export const useCustomContext = () => useContext(Context)

const AlertContext = ({ children }) => {
	const [showAlert, setShowAlert] = useState(false)
	const [items, setItems] = useState([])
	const [news, setNews] = useState(null)

	return (
		<Context.Provider
			value={{
				show: showAlert,
				setShow: setShowAlert,
				items,
				setItems,
				news,
				setNews,
			}}
		>
			{children}
		</Context.Provider>
	)
}

export default AlertContext
