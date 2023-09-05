import moment from 'moment/moment'
import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import Delete from '../Icon/Delete'
import Edit from '../Icon/Edit'
import Plus from '../Icon/Plus'
import ModalAdd from './Modal/ModalAdd'
import ModalEdit from './Modal/ModalEdit'

const lists = []
function Blocks() {
	// modal
	const [basicModal, setBasicModal] = useState(false)
	const toggleShow = () => setBasicModal(!basicModal)
	const [basicModal1, setBasicModal1] = useState(false)
	const toggleShow1 = () => setBasicModal1(!basicModal1)

	// lists
	const [list, setList] = useState(lists)

	// input state
	const [name, setName] = useState('')
	const [status, setStatus] = useState('')
	const [type, setType] = useState('1')
	const [desc1, setDesc1] = useState('')
	const [desc2, setDesc2] = useState('')
	const [desc3, setDesc3] = useState('')

	// add new item in list
	const addList = e => {
		e.preventDefault()
		const newItem = {
			id: Math.random(),
			name,
			status,
			type,
			desc1,
			desc2,
			desc3,
			date: moment().format('YYYY/MM/DD'),
		}
		setList([...list, newItem])
		setName(name)
		setStatus(status)
		setType(type)
		setDesc1(desc1)
		setDesc2(desc2)
		setDesc3(desc3)
	}

	// function for edit
	const editList = () => {
		setList(prevState =>
			prevState.map(item =>
				item.id === activeKey
					? {
							...item,
							name,
							status,
							type,
							desc1,
							desc2,
							desc3,
					  }
					: item
			)
		)
		setName(name)
		setStatus(status)
		setType(type)
		setDesc1(desc1)
		setDesc2(desc2)
		setDesc3(desc3)
	}

	//other
	const [activeKey, setActiveKey] = useState()

	// remove function
	const remove = () => {
		setList(list.filter(p => activeKey !== p.id))
	}

	return (
		<Tab.Container id='list-group-tabs-example'>
			<Row>
				<Col sm={4}>
					{list.length !== 0 ? (
						<ListGroup className='first-block'>
							{list.map(item => (
								<ListGroup.Item
									as='li'
									className={
										activeKey === item.id
											? 'my-2 d-flex justify-content-between align-items-start active'
											: 'my-2 d-flex justify-content-between align-items-start'
									}
									onClick={() => setActiveKey(item.id)}
									action
								>
									<div className='ms-2 me-auto'>
										<div className='fw-bold'>
											{item.type}: {item.name}
										</div>
										<div className='d-flex'>
											<div>Data: {item.date}</div>
											<div className='mx-3'>Status: {item.status} </div>
										</div>
									</div>
								</ListGroup.Item>
							))}
						</ListGroup>
					) : (
						<h2 className='text-center my-4'>there is nothing</h2>
					)}
				</Col>
				<Col sm={8}>
					<div className='button edit-btn'>
						<div onClick={toggleShow}>
							<Edit />
						</div>

						<div onClick={toggleShow1}>
							<Plus />
						</div>
						<div onClick={remove}>
							<Delete />
						</div>
					</div>
					<Tab.Content className='second-block'>
						{list
							.filter(f => f.id === activeKey)
							.map(item => (
								<>
									<h3>
										{item.type}: {item.name}
									</h3>
									<hr />
									<p>{item.desc1}</p>
									<p>{item.desc2}</p>
									<p>{item.desc3}</p>
								</>
							))}
					</Tab.Content>
				</Col>
			</Row>
			<ModalEdit
				editList={editList}
				basicModal={basicModal}
				setBasicModal={setBasicModal}
				toggleShow={toggleShow}
				setName={setName}
				setStatus={setStatus}
				setType={setType}
				setDesc1={setDesc1}
				setDesc2={setDesc2}
				setDesc3={setDesc3}
				name={name}
				status={status}
				type={type}
				desc1={desc1}
				desc3={desc3}
				desc2={desc2}
			/>
			<ModalAdd
				addList={addList}
				setName={setName}
				setType={setType}
				setDesc1={setDesc1}
				setDesc2={setDesc2}
				setDesc3={setDesc3}
				basicModal={basicModal1}
				setBasicModal={setBasicModal1}
				toggleShow={toggleShow1}
				name={name}
				status={status}
				type={type}
				desc1={desc1}
				desc3={desc3}
				desc2={desc2}
			/>
		</Tab.Container>
	)
}

export default Blocks
