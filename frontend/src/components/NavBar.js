import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate } from 'react-router-dom'
import { Context } from '..'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'

const NavBar = observer(() => {
	const { user } = useContext(Context)
	const navigate = useNavigate()
	function handleClick(path) {
		navigate(path)
		navigate(0)
	}

	const logOut = () => {
		user.setUser({})
		user.setIsAuth(false)
	}

	return (
		<Navbar bg='dark' data-bs-theme='dark'>
			<Container>
				?<Navbar.Brand href={SHOP_ROUTE}>YURCHUK VAPESHOP</Navbar.Brand>
				{user.isAuth ? (
					<Nav className='ms-auto' style={{ color: 'white' }}>
						<Button variant='dark' onClick={() => handleClick(ADMIN_ROUTE)}>
							Админ панель
						</Button>
						<Button variant='dark'>Главная</Button>
						<Button variant='dark'>Каталог</Button>
						<Button variant='dark'>Корзина</Button>
						<Button variant='dark' onClick={() => logOut()}>
							Выйти
						</Button>
					</Nav>
				) : (
					<Nav className='ms-auto' style={{ color: 'white' }}>
						<Button variant='dark'>Главная</Button>
						<Button variant='dark'>Каталог</Button>
						<Button variant='dark' onClick={() => handleClick(LOGIN_ROUTE)}>
							Авторизация
						</Button>
					</Nav>
				)}
			</Container>
		</Navbar>
	)
})

export default NavBar
