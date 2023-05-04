import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
	reducerPath: 'products',
	tagTypes: ['Products'],
	baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => '/products',
			providesTags: ['Products'],
		}),
		deleteProducts: builder.mutation({
			query: (id) => ({
				method: 'delete',
				url: `/products/${id}`,
			}),
			invalidatesTags: ['Products'],
		}),
	}),
})

export const { useGetProductsQuery, useDeleteProductsMutation } = productsApi
