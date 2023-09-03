import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Main from './components/Main/Main'
import './index.sass'
function App() {
	return (
		<div className='App'>
			<Header />
			<Container>
				<Routes>
					<Route index element={<Login />} />
					<Route path='main' exact element={<Main />} />
				</Routes>
			</Container>
		</div>
	)
}

export default App
