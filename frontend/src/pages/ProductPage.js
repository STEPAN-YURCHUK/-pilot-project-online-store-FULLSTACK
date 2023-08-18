import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import bigStar from '../assets/bigStar.png'
import { fetchOneProduct } from '../http/productAPI'

const ProductPage = observer(() => {
	const [product, setProducts] = useState({ info: [] })
	const id = window.location.pathname.split('/')[2]
	console.log(id)

	useEffect(() => {
		fetchOneProduct(id).then(data => {
			console.log(data)
			setProducts(data)
		})
	}, [])

	return (
		<Container className='mt-3'>
			<Row>
				<Col md={4}>
					<Image
						width={300}
						height={300}
						src={process.env.REACT_APP_API_URL + product.img}
					/>
				</Col>
				<Col md={4}>
					<Row className='d-flex flex-column align-items-center'>
						<h2>{product.name}</h2>
						<div
							className='d-flex align-items-center justify-content-center'
							style={{
								background: `url(${bigStar}) no-repeat center center`,
								width: 240,
								height: 240,
								backgroundSize: 'cover',
								fontSize: 64,
							}}></div>
					</Row>
				</Col>
				<Col md={4}>
					<Card
						className='d-flex align-items-center justify-content-around '
						style={{
							width: 300,
							height: 300,
							fontSize: 32,
							border: '5px solid lightgray',
						}}>
						<h3>Цена: {product.price} грн.</h3>
						<Button variant='outline-dark'>Добавить в корзину</Button>
					</Card>
				</Col>
			</Row>
			<Row className='d-flex flex-column m-3'>
				<h1>Описание:</h1>
			</Row>
		</Container>
	)
})

export default ProductPage
