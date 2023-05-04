// import { reducer as rootReducer } from './reducer'
import { configureStore } from '@reduxjs/toolkit'
import { reducer as rootReducer } from './reducer'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { productsApi } from './products/productsAPI'

const persistConfig = {
	key: 'items',
	storage,
	blacklist: ['todo'],
}

// const customMiddleware = (store) => {
// 	return (next) => {
// 		return (action) => {
// 			console.log(store)
// 			if (typeof action === 'function') {
// 				action(store.dispatch)
// 				return
// 			}
// 			return next(action)
// 		}
// 	}
// }

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}).concat(productsApi.middleware),
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
	// middleware: [customMiddleware],
})

export const persistor = persistStore(store)
