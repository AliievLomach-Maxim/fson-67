import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { persistor, store } from './store/store'
import AlertContext from './testContext/Context/AlertContext'
import App from './components/App'
import { PersistGate } from 'redux-persist/integration/react'
// import App from './testContext/App'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<AlertContext>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</AlertContext>
		</PersistGate>
	</Provider>
)
