import DropdownComponent from './DropdownComponent'

function Header() {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
			<div className='container'>
				<a className='navbar-brand mt-2 mt-lg-0' href='#'>
					<h5 className='pt-1'>Kegoc Supervisor</h5>
				</a>
				<DropdownComponent />
			</div>
		</nav>
	)
}

export default Header
