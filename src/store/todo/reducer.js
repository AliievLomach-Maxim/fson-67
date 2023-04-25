import { todoInitialState } from './initial'
import { CREATETODO } from './types'

export const todoReducer = (state = todoInitialState, action) => {
	switch (action.type) {
		case CREATETODO:
			return {
				...state,
				todo: [...state.todo, action.payload],
			}
		default:
			return state
	}
}
