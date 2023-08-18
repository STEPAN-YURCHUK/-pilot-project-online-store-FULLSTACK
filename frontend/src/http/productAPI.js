import { $authHost, $host } from './index'

export const createType = async type => {
	const { data } = await $authHost.post('product/type/create', type)
	return data
}

export const fetchTypes = async () => {
	const { data } = await $host.get('product/type/getAll')
	return data
}

export const createBrand = async brand => {
	const { data } = await $authHost.post('product/brand/create', brand)
	return data
}

export const fetchBrands = async () => {
	const { data } = await $host.get('product/brand/getAll')
	return data
}

export const createProduct = async product => {
	const { data } = await $authHost.post('product/create', product)
	return data
}

export const fetchProducts = async (typeId, brandId, page, limit = 5) => {
	const { data } = await $host.get('product/getAll', {
		params: { typeId, brandId, page, limit },
	})
	console.log(data)
	return data
}

export const fetchOneProduct = async id => {
	const { data } = await $host.get('product/getOne/' + id)
	console.log(data)
	return data
}
