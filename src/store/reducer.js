import { combineReducers } from 'redux'
// import { counterReducer } from './counter/reducer'
import { todoReducer } from './todo/reducer'
import { counterReducer } from './counter/slice'
import { newsReducer } from './news/reducerNews'
import { productsReducer } from './products/slice'
import { productsApi } from './products/productsAPI'
// import { productReducer } from './product/slice'

export const reducer = combineReducers({
	counter: counterReducer,
	todo: todoReducer,
	// products: productsReducer,
	news: newsReducer,
	[productsApi.reducerPath]: productsApi.reducer,
})
