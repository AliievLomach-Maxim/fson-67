const API_KEY = 'feef20bb6ec8430ab253f1d0367f9ccf'
const BASE_URL = 'https://newsapi.org/v2/everything'

export function getNews(searchText) {
	return fetch(`${BASE_URL}?q=${searchText}`, {
		headers: {
			'X-Api-Key': API_KEY,
		},
	}).then((res) => res.json())
}
