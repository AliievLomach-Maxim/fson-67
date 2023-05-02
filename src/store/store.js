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
		}),
	// middleware: [customMiddleware],
})

export const persistor = persistStore(store)
