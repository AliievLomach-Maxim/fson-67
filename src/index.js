import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store/store'
import AlertContext from './testContext/Context/AlertContext'
import App from './components/App'
// import App from './testContext/App'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<AlertContext>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AlertContext>
	</Provider>
)
