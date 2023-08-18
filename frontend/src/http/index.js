import axios from 'axios'

const $host = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
})

const $authHost = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
})

const authInterceptor = config => {
	config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
	console.log(config)
	return config
}

const deleteToken = config => {
	config.headers.authorization = ''
	return config
}

$authHost.interceptors.request.use(authInterceptor)

export { $authHost, $host }
