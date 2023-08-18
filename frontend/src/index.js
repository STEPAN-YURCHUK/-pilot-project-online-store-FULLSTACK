import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import ProductStore from './store/ProductStore'
import UserStore from './store/UserStore'

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Context.Provider
		value={{
			user: new UserStore(),
			product: new ProductStore(),
		}}>
		<Router>
			<App />
		</Router>
	</Context.Provider>
)
