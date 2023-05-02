import { createSlice } from '@reduxjs/toolkit'

const initialState = { total: 0, step: 1 }

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment(state, action) {
			state.total += action.payload
		},
		decrement: (state, action) => {
			state.total -= action.payload
		},
		setStep(state, { payload }) {
			state.step = payload
		},
	},
})

export const { increment, decrement, setStep } = counterSlice.actions

export const counterReducer = counterSlice.reducer
