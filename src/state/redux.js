import { combineReducers, compose, createStore } from 'redux'
import mainReducer from './mainReducer'

let reducers = combineReducers({
	main: mainReducer,
})

const store = createStore(reducers, compose)

window.store = store

export default store
