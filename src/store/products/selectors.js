export const selector = (state) => {
	console.log('selector')
	const products = state.products.products

	return (
		products &&
		[...products].sort((a, b) => {
			console.log(123)
			return a.price - b.price
		})
	)
}
