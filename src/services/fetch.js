const API_KEY = 'feef20bb6ec8430ab253f1d0367f9ccf'
const BASE_URL = 'https://newsapi.org/v2'

export function getNews(searchText) {
	return fetch(`${BASE_URL}/everything?q=${searchText}`, {
		headers: {
			'X-Api-Key': API_KEY,
		},
	}).then((res) => res.json())
}

export async function getTopNews() {
	const data = await fetch(`${BASE_URL}/top-headlines?country=us`, {
		headers: {
			'X-Api-Key': API_KEY,
		},
	})
	return await data.json()
}
