import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'

import {
	Redirect,
	Route,
	Switch,
} from 'react-router-dom/cjs/react-router-dom.min'
import { Context } from '..'
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts'

const AppRouter = observer(() => {
	const { user } = useContext(Context)

	return (
		<Switch>
			{user.isAuth &&
				authRoutes.map(({ path, Component }, id) => (
					<Route key={id} path={path} component={Component} exact />
				))}
			{publicRoutes.map(({ path, Component }, id) => (
				<Route key={id} path={path} component={Component} exact />
			))}
			<Redirect to={SHOP_ROUTE} />
		</Switch>
	)
})

export default AppRouter
