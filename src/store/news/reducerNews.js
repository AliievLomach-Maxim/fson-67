import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit'
import { getNews, getTopNews } from '../../services/fetch'

export const GETnewsAction = createAsyncThunk('news/getTopNews', async () => {
	return await getTopNews()
})

export const newsAction = createAsyncThunk('news/getTopNews', async () => {
	return await getTopNews()
})
export const getNewsBySearch = createAsyncThunk(
	'news/getNewsBySearch',
	async (text) => {
		return await getNews(text)
	}
)
export const getNewsBy = createAsyncThunk(
	'news/getNewsBySearch',
	async (text) => {
		return await getNews(text)
	}
)

const newsFuncArr = [newsAction, getNewsBySearch, getNewsBy, GETnewsAction]

const fn = (type) => newsFuncArr.map((el) => el[type])

const handlePending = (state, action) => {
	state.status = 'pending'
}

const handleFulfilled = (state, action) => {
	state.status = 'resolved'
	state.news = action.payload.articles
	state.error = ''
}

const handleRej = (state, action) => {
	state.status = 'rejected'
	state.error = action.payload
}

const initialState = {
	news: null,
	status: 'idle',
	error: '',
}

const newSlice = createSlice({
	name: 'news',
	initialState,
	extraReducers: (builder) => {
		builder
			// // .addCase(newsAction.pending, handlePending)
			// .addCase(newsAction.fulfilled, handleFulfilled)
			// .addCase(newsAction.rejected, handleRej)
			// // .addCase(getNewsBySearch.pending, handlePending)
			// .addCase(getNewsBySearch.fulfilled, handleFulfilled)
			// .addCase(getNewsBySearch.rejected, handleRej)
			// // .addCase(getNewsBy.pending, handlePending)
			// .addCase(getNewsBy.fulfilled, handleFulfilled)
			// .addCase(getNewsBy.rejected, handleRej)
			.addMatcher(isAnyOf(...fn('pending')), handlePending)
			.addMatcher(isAnyOf(...fn('fulfilled')), handleFulfilled)
			.addMatcher(isAnyOf(...fn('rejected')), handleRej)
		// .addMatcher(
		// 	isAnyOf([
		// 		newsAction.fulfilled,
		// 		getNewsBySearch.fulfilled,
		// 		getNewsBy.fulfilled,
		// 	]),
		// 	handleFulfilled
		// )
		// .addMatcher(
		// 	isAnyOf([
		// 		newsAction.rejected,
		// 		getNewsBySearch.rejected,
		// 		getNewsBy.rejected,
		// 	]),
		// 	handleRej
		// )
	},
	// extraReducers: {
	// 	[newsAction.pending]: (state, action) => {
	// 		state.isLoading = true
	// 	},
	// 	[newsAction.fulfilled]: (state, action) => {
	// 		state.isLoading = false
	// 		state.news = action.payload.articles
	// 		state.error = ''
	// 	},
	// 	[newsAction.rejected]: (state, action) => {
	// 		state.isLoading = false
	// 		state.error = action.payload
	// 	},
	// },
})

// export const newsAction = () => {
// 	return async (dispatch) => {
// 		try {
// 			dispatch(newSlice.actions.fetching())
// 			const data = await getTopNews()
// 			dispatch(newSlice.actions.fetchSuccess(data))
// 		} catch (error) {
// 			dispatch(newSlice.actions.fetchError(error))
// 		}
// 	}
// }
// const newSlice = createSlice({
// 	name: 'news',
// 	initialState,
// 	// reducers: {
// 	// 	fetching: (state, action) => {
// 	// 		state.isLoading = true
// 	// 	},
// 	// 	fetchSuccess: (state, action) => {
// 	// 		state.isLoading = false
// 	// 		state.news = action.payload.articles
// 	// 		state.error = ''
// 	// 	},
// 	// 	fetchError: (state, action) => {
// 	// 		state.isLoading = false
// 	// 		state.error = action.payload
// 	// 	},
// 	// },
// 	extraReducers:{

// 	}
// })

export const newsReducer = newSlice.reducer
