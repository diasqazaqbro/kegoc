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
			<p>{item.desc1}</p>
			<h3>Option 2</h3>
			<p>{item.desc2}</p>
			<h3>Option 3</h3>
			<p>{item.desc3}</p>

			{statusSpan(item.status)}
		</div>
	)
}

export default AboutItem
