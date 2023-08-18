import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BrandBar from '../components/BrandBar'
import Pages from '../components/Pages'
import ProductList from '../components/ProductList'
import TypeBar from '../components/TypeBar'
import { fetchBrands, fetchProducts, fetchTypes } from '../http/productAPI'
import { Context } from '../index'

const Shop = observer(() => {
	const { product } = useContext(Context)

	useEffect(() => {
		fetchTypes().then(data => product.setTypes(data))
		fetchBrands().then(data => product.setBrands(data))
		fetchProducts(null, null, 1, 3).then(data => {
			product.setProducts(data.rows)
			product.setTotalCount(data.count)
		})
	}, [])

	useEffect(() => {
		fetchProducts(
			product.selectedType.id,
			product.selectedBrand.id,
			product.page,
			10
		).then(data => {
			product.setProducts(data.rows)
			product.setTotalCount(data.count)
		})
	}, [product.page, product.selectedType, product.selectedBrand])

	return (
		<Container>
			<Row className='mt-3'>
				<Col md={3}>
					<TypeBar />
				</Col>
				<Col md={8}>
					<BrandBar />
					<ProductList />
					<Pages />
				</Col>
			</Row>
		</Container>
	)
})

export default Shop
