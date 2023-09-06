import { MDBCheckbox, MDBSwitch } from 'mdb-react-ui-kit'

const AboutItem = ({ item }) => {
	const statusSpan = item => {
		if (item === 'Submitted') {
			return (
				<h4>
					Status: <span className='badge bg-dark'>{item}</span>
				</h4>
			)
		} else if (item === 'Failed') {
			return (
				<h4>
					Status: <span className='badge bg-danger'>{item}</span>
				</h4>
			)
		} else if (item === 'In a progress') {
			return (
				<h4>
					Status: <span className='badge bg-warning'>{item}</span>
				</h4>
			)
		} else if (item === 'Done') {
			return (
				<h4>
					Status: <span className='badge bg-success'>{item}</span>
				</h4>
			)
		}
	}
	return (
		<div key={item.id}>
			<h3 className='d-flex justify-content-between'>
				<span>
					{item.type}: {item.name}
				</span>
				<span>{item.date}</span>
			</h3>
			<hr />
			<h3>Option 1</h3>
			<MDBCheckbox disabled checked={item.checkbox1} label='1 checkbox' />

			<MDBCheckbox disabled checked={item.checkbox2} label='2 checkbox' />

			<MDBCheckbox disabled checked={item.checkbox3} label='3 checkbox' />

			<MDBCheckbox disabled checked={item.checkbox4} label='4 checkbox' />

			<h3>Option 2</h3>
			<MDBSwitch checked={item.selector} disabled label='On/Off' />
			<h3>Option 3</h3>
			<p>{item.desc}</p>

			{statusSpan(item.status)}
		</div>
	)
}

export default AboutItem
