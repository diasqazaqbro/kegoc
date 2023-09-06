import { ListGroup } from 'react-bootstrap'

const GroupItem = ({ list, activeKey, setActiveKey, switchVar }) => {
	const statusSpan = item => {
		if (item === 'Submitted') {
			return <span className='badge bg-success'>{item}</span>
		} else if (item === 'Failed') {
			return <span className='badge bg-danger'>{item}</span>
		} else if (item === 'In a progress') {
			return <span className='badge bg-warning'>{item}</span>
		} else if (item === 'Done') {
			return <span className='badge bg-dark'>{item}</span>
		}
	}
	return (
		<ListGroup className='first-block'>
			{list.map(item => (
				<ListGroup.Item
					key={item.id}
					as='li'
					className={
						activeKey === item.id
							? 'my-2 d-flex justify-content-between align-items-start active'
							: 'my-2 d-flex justify-content-between align-items-start'
					}
					onClick={() => {
						setActiveKey(item.id)
						switchVar(item)
					}}
					action
				>
					<div className='ms-2 me-auto'>
						<div className='fw-bold'>
							{item.type}: {item.name}
						</div>
						<div className='d-flex'>
							<div>Data: {item.date}</div>
							<div className='mx-3'>Status: {statusSpan(item.status)}</div>
						</div>
					</div>
				</ListGroup.Item>
			))}
		</ListGroup>
	)
}

export default GroupItem
