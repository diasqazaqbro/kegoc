import { Dropdown, DropdownButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function DropdownComponent() {
	return (
		<DropdownButton id='dropdown-basic-button' title='Account'>
			<Dropdown.Item>Switch account</Dropdown.Item>
			<Dropdown.Item>
				<Link to='/'>Logout</Link>
			</Dropdown.Item>
		</DropdownButton>
	)
}

export default DropdownComponent
