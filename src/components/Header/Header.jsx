import DropdownComponent from './DropdownComponent'

function Header() {
	return (
		<nav class='navbar navbar-expand-lg navbar-dark bg-primary'>
			<div class='container'>
				<a class='navbar-brand mt-2 mt-lg-0' href='#'>
					<h5 class='pt-1'>Kegoc Supervisor</h5>
				</a>
				<DropdownComponent />
			</div>
		</nav>
	)
}

export default Header
