import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import Buttons from './Buttons'
import EditFunction from './EditFunction'
import AboutItem from './Item/AboutItem'
import GroupItem from './Item/GroupItem'
import ModalAdd from './Modal/ModalAdd'

function Blocks() {
	// date
	const [startDate, setStartDate] = useState(new Date())

	// modal
	const [basicModal, setBasicModal] = useState(false)
	const toggleShow = () => setBasicModal(!basicModal)
	const [basicModal1, setBasicModal1] = useState(false)
	const toggleShow1 = () => setBasicModal1(!basicModal1)
	const [basicModal2, setBasicModal2] = useState(false)
	const toggleShow2 = () => setBasicModal2(!basicModal2)

	// input state
	const [name, setName] = useState('')
	const [status, setStatus] = useState('')
	const [type, setType] = useState('1')
	const [desc, setDesc] = useState('')
	const [checkbox1, setCheckbox1] = useState(false)
	const [checkbox2, setCheckbox2] = useState(false)
	const [checkbox3, setCheckbox3] = useState(false)
	const [checkbox4, setCheckbox4] = useState(false)
	const [selector, setSelector] = useState(false)

	// lists
	const lists = [
		{
			id: Math.random(),
			name: 'Налоговый процесс',
			status: 'Submitted',
			type: '1',
			selector: true,
			checkbox1: true,
			checkbox2: false,
			checkbox3: true,
			checkbox4: true,
			desc: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
			date: new Date().toLocaleDateString(),
		},
		{
			id: Math.random(),
			name: 'Увольнение',
			status: 'Failed',
			type: '2',
			selector: true,
			checkbox1: true,
			checkbox2: false,
			checkbox3: true,
			checkbox4: true,
			desc: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
			date: new Date().toLocaleDateString(),
		},
		{
			id: Math.random(),
			name: 'Пенсионный процесс',
			status: 'Done',
			type: '1',
			selector: true,
			checkbox1: true,
			checkbox2: false,
			checkbox3: true,
			checkbox4: true,
			desc: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
			date: new Date().toLocaleDateString(),
		},
		{
			id: Math.random(),
			name: 'Налоговый процесс',
			status: 'Done',
			type: '2',
			selector: true,
			checkbox1: true,
			checkbox2: false,
			checkbox3: true,
			checkbox4: true,
			desc: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
			date: new Date().toLocaleDateString(),
		},
		{
			id: Math.random(),
			name: 'Парламентский процесс',
			status: 'Failed',
			type: '3',
			selector: true,
			checkbox1: true,
			checkbox2: false,
			checkbox3: true,
			checkbox4: true,
			desc: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
			date: new Date().toLocaleDateString(),
		},
		{
			id: Math.random(),
			name: 'Судебный процесс',
			status: 'Submitted',
			type: '2',
			selector: true,
			checkbox1: true,
			checkbox2: false,
			checkbox3: true,
			checkbox4: true,
			desc: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
			date: new Date().toLocaleDateString(),
		},
		{
			id: Math.random(),
			name: 'Зарплата',
			status: 'Submitted',
			type: '2',
			selector: true,
			checkbox1: true,
			checkbox2: false,
			checkbox3: true,
			checkbox4: true,
			desc: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
			date: new Date().toLocaleDateString(),
		},
	]
	const [list, setList] = useState(lists)

	// add new item in list
	const addList = e => {
		e.preventDefault()
		const newItem = {
			id: Math.random(),
			name,
			status: 'Submitted',
			type,
			checkbox1,
			checkbox2,
			checkbox3,
			checkbox4,
			selector,
			desc,
			date: startDate.toLocaleDateString(),
		}
		setList([...list, newItem])
		setName(name)
		setStatus(status)
		setType(type)
		setCheckbox1(checkbox1)
		setCheckbox2(checkbox2)
		setCheckbox3(checkbox3)
		setCheckbox4(checkbox4)
		setSelector(selector)
		setStartDate(startDate)
		setDesc(desc)
	}

	// function for edit
	const editList = e => {
		e.preventDefault()
		setList(prevState =>
			prevState.map(item =>
				item.id === activeKey
					? {
							...item,
							name,
							status,
							type,
							checkbox1,
							checkbox2,
							checkbox3,
							checkbox4,
							selector,
							desc,
							date: startDate.toLocaleDateString(),
					  }
					: item
			)
		)
		setName(name)
		setStatus(status)
		setType(type)
		setCheckbox1(checkbox1)
		setCheckbox2(checkbox2)
		setCheckbox3(checkbox3)
		setCheckbox4(checkbox4)
		setSelector(selector)
		setStartDate(startDate)
		setDesc(desc)
	}

	//other
	const [activeKey, setActiveKey] = useState()

	// remove function
	const remove = () => {
		setList(list.filter(p => activeKey !== p.id))
	}

	// clear add input
	const clearInput = () => {
		setName('')
		setStatus('')
		setType('')
		setCheckbox1(false)
		setCheckbox2(false)
		setCheckbox3(false)
		setCheckbox4(false)
		setSelector(false)
		setDesc('')
		setStartDate(new Date())
	}

	// selector variable
	const switchVar = item => {
		setName(item.name)
		setStatus(item.status)
		setType(item.type)
		setCheckbox1(item.checkbox1)
		setCheckbox2(item.checkbox2)
		setCheckbox3(item.checkbox3)
		setCheckbox4(item.checkbox4)
		setSelector(item.selector)
		setStartDate(startDate)
		setDesc(item.desc)
	}

	return (
		<Tab.Container id='list-group-tabs-example'>
			<Row>
				<Col sm={4}>
					{list.length !== 0 ? (
						<GroupItem
							setBasicModal={setBasicModal}
							setBasicModal1={setBasicModal1}
							setBasicModal2={setBasicModal2}
							list={list}
							activeKey={activeKey}
							setActiveKey={setActiveKey}
							switchVar={switchVar}
						/>
					) : (
						<h2 className='text-center my-4'>there is nothing</h2>
					)}
				</Col>
				<Col sm={8}>
					<Buttons
						toggleShow={toggleShow}
						toggleShow1={toggleShow1}
						toggleShow2={toggleShow2}
						remove={remove}
						clearInput={clearInput}
						setActiveKey={setActiveKey}
					/>
					<Tab.Content className='second-block'>
						{basicModal ? (
							<EditFunction
								startDate={startDate}
								setStartDate={setStartDate}
								setName={setName}
								setStatus={setStatus}
								setType={setType}
								setCheckbox1={setCheckbox1}
								setCheckbox2={setCheckbox2}
								setCheckbox3={setCheckbox3}
								setCheckbox4={setCheckbox4}
								setSelector={setSelector}
								setDesc={setDesc}
								name={name}
								status={status}
								type={type}
								checkbox1={checkbox1}
								checkbox2={checkbox2}
								checkbox3={checkbox3}
								checkbox4={checkbox4}
								selector={selector}
								desc={desc}
								editList={editList}
							/>
						) : (
							list
								.filter(f => f.id === activeKey)
								.map(item => <AboutItem item={item} />)
						)}
					</Tab.Content>
				</Col>
			</Row>
			<ModalAdd
				startDate={startDate}
				setStartDate={setStartDate}
				addList={addList}
				setName={setName}
				setType={setType}
				setCheckbox1={setCheckbox1}
				setCheckbox2={setCheckbox2}
				setCheckbox3={setCheckbox3}
				setCheckbox4={setCheckbox4}
				setSelector={setSelector}
				setDesc={setDesc}
				basicModal={basicModal1}
				setBasicModal={setBasicModal1}
				toggleShow={toggleShow1}
				name={name}
				status={status}
				type={type}
				checkbox1={checkbox1}
				checkbox2={checkbox2}
				checkbox3={checkbox3}
				checkbox4={checkbox4}
				desc={desc}
				selector={selector}
			/>
		</Tab.Container>
	)
}

export default Blocks
