import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import AlertContext from './testContext/Context/AlertContext'
// import App from './testContext/App'

ReactDOM.createRoot(document.getElementById('root')).render(
	<AlertContext>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</AlertContext>
)
