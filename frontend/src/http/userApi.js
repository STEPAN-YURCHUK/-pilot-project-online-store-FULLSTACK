import jwt_decode from 'jwt-decode'
import { $authHost, $host } from './index'

export const registration = async (email, password) => {
	const { data } = await $host.post('auth/registration', {
		email,
		password,
	})

	localStorage.setItem('token', data.access_token)
	console.log(jwt_decode(data.access_token))
	return jwt_decode(data.access_token)
}

export const login = async (email, password) => {
	const { data } = await $host.post('auth/login', { email, password })
	localStorage.setItem('token', data.access_token)
	return jwt_decode(data.access_token)
}

export const check = async () => {
	const { data } = await $authHost.get('auth/check')
	localStorage.setItem('token', data.access_token)
	return jwt_decode(data.access_token)
}
