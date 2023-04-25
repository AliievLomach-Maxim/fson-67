import { combineReducers } from 'redux'
import { counterReducer } from './counter/reducer'
import { todoReducer } from './todo/reducer'

export const reducer = combineReducers({
	counter: counterReducer,
	todo: todoReducer,
})
