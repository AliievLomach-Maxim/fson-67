import { createAsyncThunk } from '@reduxjs/toolkit'
import {
	createProducts,
	deleteProducts,
	getProducts,
} from '../../services/productsApi'

export const getProductsThunk = createAsyncThunk('products/getProducts', () => {
	return getProducts()
})

export const createProductsThunk = createAsyncThunk(
	'products/createProducts',
	(data) => {
		return createProducts(data)
	}
)

export const deleteProductsThunk = createAsyncThunk(
	'products/deleteProducts',
	(id) => {
		return deleteProducts(id)
	}
)
