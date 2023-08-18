import React, { useContext, useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

import { observer } from 'mobx-react-lite'

import { login, registration } from '../http/userApi'
import { Context } from '../index'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'

const Auth = observer(() => {
	const { user } = useContext(Context)
	const location = useLocation()
	const isLogin = location.pathname === LOGIN_ROUTE
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()
	function handleClick(path) {
		navigate(path)
		navigate(0)
	}

	const click = async () => {
		try {
			let data
			if (isLogin) {
				data = await login(email, password)
			} else {
				data = await registration(email, password)
			}
			user.setUser(user)
			user.setIsAuth(true)
			navigate(SHOP_ROUTE)
			navigate(0)
		} catch (e) {
			alert(e.response.data.message)
		}
	}

	return (
		<Container
			className='d-flex justify-content-center align-items-center'
			style={{ height: window.innerHeight - 54 }}>
			<Card style={{ width: 600 }} className='p-5'>
				<h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
				<Form className='d-flex flex-column'>
					<Form.Control
						className='mt-3'
						placeholder='Введите ваш email...'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<Form.Control
						className='mt-3'
						placeholder='Введите ваш пароль...'
						value={password}
						onChange={e => setPassword(e.target.value)}
						type='password'
					/>
					<div className='d-flex justify-content-between'>
						{isLogin ? (
							<div className='d-flex justify-content-between mt-3'>
								Нет аккаунта?
								<Nav variant='pills' activeKey='1'>
									<Nav.Item>
										<NavLink
											eventKey='2'
											title='Item'
											to={REGISTRATION_ROUTE}
											className='pt-0'>
											Зарегистрируйтесь!
										</NavLink>
									</Nav.Item>
								</Nav>
							</div>
						) : (
							<div className='d-flex justify-content-between mt-3'>
								Есть аккаунт?
								<Nav variant='pills' activeKey='1'>
									<Nav.Item>
										<NavLink
											eventKey='2'
											title='Item'
											to={LOGIN_ROUTE}
											className='pt-0'>
											Войдите!
										</NavLink>
									</Nav.Item>
								</Nav>
							</div>
						)}
						<Button
							className='mt-3 align-self-end'
							variant={'outline-success'}
							onClick={click}>
							{' '}
							{isLogin ? 'Войти' : 'Регистрация'}
						</Button>
					</div>
				</Form>
			</Card>
		</Container>
	)
})

export default Auth
