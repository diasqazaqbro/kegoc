import moment from 'moment/moment'
import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import Edit from '../Icon/Edit'
import Plus from '../Icon/Plus'
import ModalAdd from './Modal/ModalAdd'
import ModalEdit from './Modal/ModalEdit'

function getEmptyList() {
	return {
		id: Math.random(),
		name: '',
		status: '',
		desc: '',
		date: moment().format('YYYY/MM/DD'),
	}
}
const lists = []
function Blocks() {
	// useState
	// modal
	const [basicModal, setBasicModal] = useState(false)
	const toggleShow = () => setBasicModal(!basicModal)
	const [basicModal1, setBasicModal1] = useState(false)
	const toggleShow1 = () => setBasicModal1(!basicModal1)

	// lists
	const [objArr, setValue] = useState(lists)
	const [obj, setObj] = useState(lists)

	//other
	const [activeKey, setActiveKey] = useState()

	//refs
	let nameRef = React.createRef()
	let statusRef = React.createRef()
	let descRef = React.createRef()

	//function for edit
	const editList = () => {
		const name = nameRef.current.value
		const status = statusRef.current.value
		const desc = descRef.current.value
		setValue(prevState =>
			prevState.map(item =>
				item.id === activeKey
					? { ...item, name: name, status: status, desc: desc }
					: item
			)
		)
		nameRef.current.value = ''
		statusRef.current.value = ''
		descRef.current.value = ''
	}

	// add new item in list
	const addList = () => {
		setValue([...objArr, obj]) // add obj to array
		setObj(getEmptyList()) // save obj
		// clearInput()
	}

	const clearInput = event => {
		event.target.value = ''
	}
	const changeInput = (prop, event) => {
		setObj({ ...obj, [prop]: event.target.value })
	}

	return (
		<Tab.Container id='list-group-tabs-example'>
			<Row>
				<Col sm={6}>
					{objArr.length !== 0 ? (
						<ListGroup className='first-block'>
							{objArr.map(item => (
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
										<div className='fw-bold'>Тип процесса: {item.name}</div>
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
				<Col sm={6}>
					<div className='button edit-btn'>
						<div onClick={toggleShow}>
							<Edit />
						</div>

						<div onClick={toggleShow1}>
							<Plus />
						</div>
					</div>
					<Tab.Content className='second-block'>
						{objArr
							.filter(f => f.id === activeKey)
							.map(item => (
								<>
									<h3>{item.name}</h3>
									<hr />
									<p>{item.desc}</p>
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
				nameRef={nameRef}
				statusRef={statusRef}
				descRef={descRef}
			/>
			<ModalAdd
				clearInput={clearInput}
				addList={addList}
				changeInput={changeInput}
				basicModal={basicModal1}
				setBasicModal={setBasicModal1}
				toggleShow={toggleShow1}
			/>
		</Tab.Container>
	)
}

export default Blocks
