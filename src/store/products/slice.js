import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { initialState } from './initial'
import {
	createProductsThunk,
	deleteProductsThunk,
	getProductsThunk,
} from './thunks'

const STATUS = {
	PENDING: 'pending',
	FULFILLED: 'fulfilled',
	REJECTED: 'rejected',
}

const arrThunks = [createProductsThunk, deleteProductsThunk, getProductsThunk]

// const createThunks = (type) => arrThunks.map((el) => el[type])

const getActions = (type) => isAnyOf(...arrThunks.map((el) => el[type]))

const handlePending = (state) => {
	state.isLoading = true
}

const handleFulfilled = (state) => {
	state.isLoading = false
	state.error = ''
}

const handleFulfilledGet = (state, action) => {
	state.products = action.payload.products
}
const handleFulfilledCreate = (state, action) => {
	state.products.push(action.payload)
}
const handleFulfilledDelete = (state, action) => {
	state.products = state.products.filter((el) => el.id !== action.payload.id)
}
const handleRejected = (state, { payload }) => {
	state.isLoading = false
	state.error = payload
}

const productsSlice = createSlice({
	name: 'products',
	initialState,
	extraReducers: (builder) => {
		const { FULFILLED, REJECTED, PENDING } = STATUS
		builder
			.addCase(getProductsThunk.fulfilled, handleFulfilledGet)
			.addCase(createProductsThunk.fulfilled, handleFulfilledCreate)
			.addCase(deleteProductsThunk.fulfilled, handleFulfilledDelete)
			.addMatcher(getActions(PENDING), handlePending)
			.addMatcher(getActions(REJECTED), handleRejected)
			.addMatcher(getActions(FULFILLED), handleFulfilled)
		// .addMatcher(isAnyOf(...createThunks(PENDING)), handlePending)
		// .addMatcher(isAnyOf(...createThunks(REJECTED)), handleRejected)
		// .addMatcher(isAnyOf(...createThunks(FULFILLED)), handleFulfilled)
	},
})

export const productsReducer = productsSlice.reducer
