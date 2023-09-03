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

const nowData = moment().format('YYYY/MM/DD')
function getEmptyList() {
	return {
		id: 5, // generate id
		name: '',
		status: '',
		desc: '',
		date: nowData,
	}
}
const lists = [
	{
		id: 1,
		name: 'Налоговый',
		date: '2010/12/01',
		status: 'DONE',
		desc: 'loremIpsun',
	},
]
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
	const [activeKey, setActiveKey] = useState('1')

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
	}

	// add new item in list
	const addList = () => {
		setValue([...objArr, obj]) // add obj to array
		setObj(getEmptyList()) // save obj
	}

	const changeInput = (prop, event) => {
		setObj({ ...obj, [prop]: event.target.value })
	}

	return (
		<Tab.Container id='list-group-tabs-example' defaultActiveKey={activeKey}>
			<Row>
				<Col sm={6}>
					<ListGroup className='first-block'>
						{objArr.map(item => (
							<ListGroup.Item
								as='li'
								className={
									activeKey === item.id
										? 'my-5 d-flex justify-content-between align-items-start active'
										: 'my-5 d-flex justify-content-between align-items-start'
								}
								action
								href={item.id}
								onClick={() => {
									setActiveKey(item.id)
								}}
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
						{lists.map(item => (
							<Tab.Pane eventKey={item.id}>
								<h3>{item.name}</h3>
								<hr />
								<p>{item.desc}</p>
							</Tab.Pane>
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
