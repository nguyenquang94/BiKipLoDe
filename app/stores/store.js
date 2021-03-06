import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/rootReducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'

export default function configureStore(preloadedState) {
	return createStore(
		rootReducer,
		preloadedState,
		composeWithDevTools(
			applyMiddleware(
				thunkMiddleware
			)
		)
	)
}