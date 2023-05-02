import { combineReducers } from 'redux'
// import { counterReducer } from './counter/reducer'
import { todoReducer } from './todo/reducer'
import { counterReducer } from './counter/slice'
import { newsReducer } from './news/reducerNews'

export const reducer = combineReducers({
	counter: counterReducer,
	todo: todoReducer,
	news: newsReducer,
})
