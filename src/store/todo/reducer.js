import { createReducer } from '@reduxjs/toolkit'
import { createTodo } from './actions'
import { todoInitialState } from './initial'
// import { CREATETODO } from './types'

export const todoReducer = createReducer(todoInitialState, {
	[createTodo]: (state, { payload }) => {
		state.todo.push(payload)

		// return {
		// 	...state,
		// 	todo: [...state.todo, action.payload],
		// }
	},
})

// export const todoReducer = (state = todoInitialState, action) => {
// 	switch (action.type) {
// 		case CREATETODO:
// 			return {
// 				...state,
// 				todo: [...state.todo, action.payload],
// 			}
// 		default:
// 			return state
// 	}
// }
