import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { Context } from '..'

const BrandBar = observer(() => {
	const { product } = useContext(Context)
	return (
		<ListGroup horizontal>
			{product.brands.map(brand => (
				<ListGroup.Item
					style={{ cursor: 'pointer' }}
					active={brand.id === product.selectedBrand.id}
					onClick={() => product.setSelectedBrand(brand)}
					key={brand.id}
					action
					variant='light'>
					{brand.name}
				</ListGroup.Item>
			))}
		</ListGroup>
	)
})

export default BrandBar
