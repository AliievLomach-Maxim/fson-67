import { createAction, nanoid } from '@reduxjs/toolkit'

// import { CREATETODO } from './types'

// export const createTodo = (todo) => ({
// 	type: CREATETODO,
// 	payload: todo,
// })

export const createTodo = createAction('createTodo', (value) => {
	return {
		payload: { ...value, id: nanoid() },
	}
})
