import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import Buttons from './Buttons'
import AboutItem from './Item/AboutItem'
import GroupItem from './Item/GroupItem'
import ModalAdd from './Modal/ModalAdd'
import ModalEdit from './Modal/ModalEdit'

function Blocks() {
	// date
	const [startDate, setStartDate] = useState(new Date())

	// modal
	const [basicModal, setBasicModal] = useState(false)
	const toggleShow = () => setBasicModal(!basicModal)
	const [basicModal1, setBasicModal1] = useState(false)
	const toggleShow1 = () => setBasicModal1(!basicModal1)

	// lists
	const lists = [
		{
			id: Math.random(),
			name: 'Налоговый процесс',
			status: 'Submitted',
			type: '1',
			desc1: '',
			desc2: '',
			desc3:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet sem mollis urna molestie dapibus. Donec varius malesuada mi quis auctor. Donec quis congue mauris, in placerat est. Praesent porta lectus ut massa auctor lacinia. Cras vestibulum metus sit amet metus sollicitudin, pellentesque accumsan augue rutrum. Integer tempus malesuada mauris pharetra cursus.',
			date: new Date().toLocaleDateString(),
		},
		{
			id: Math.random(),
			name: 'Увольнение',
			status: 'Failed',
			type: '2',
			desc1: '',
			desc2: '',
			desc3:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet sem mollis urna molestie dapibus. Donec varius malesuada mi quis auctor. Donec quis congue mauris, in placerat est. Praesent porta lectus ut massa auctor lacinia. Cras vestibulum metus sit amet metus sollicitudin, pellentesque accumsan augue rutrum. Integer tempus malesuada mauris pharetra cursus.',
			date: new Date().toLocaleDateString(),
		},
		{
			id: Math.random(),
			name: 'Пенсионный процесс',
			status: 'Done',
			type: '1',
			desc1: '',
			desc2: '',
			desc3:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet sem mollis urna molestie dapibus. Donec varius malesuada mi quis auctor. Donec quis congue mauris, in placerat est. Praesent porta lectus ut massa auctor lacinia. Cras vestibulum metus sit amet metus sollicitudin, pellentesque accumsan augue rutrum. Integer tempus malesuada mauris pharetra cursus.',
			date: new Date().toLocaleDateString(),
		},
		{
			id: Math.random(),
			name: 'Налоговый процесс',
			status: 'Done',
			type: '2',
			desc1: '',
			desc2: '',
			desc3:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet sem mollis urna molestie dapibus. Donec varius malesuada mi quis auctor. Donec quis congue mauris, in placerat est. Praesent porta lectus ut massa auctor lacinia. Cras vestibulum metus sit amet metus sollicitudin, pellentesque accumsan augue rutrum. Integer tempus malesuada mauris pharetra cursus.',
			date: new Date().toLocaleDateString(),
		},
		{
			id: Math.random(),
			name: 'Парламентский процесс',
			status: 'Failed',
			type: '3',
			desc1: '',
			desc2: '',
			desc3:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet sem mollis urna molestie dapibus. Donec varius malesuada mi quis auctor. Donec quis congue mauris, in placerat est. Praesent porta lectus ut massa auctor lacinia. Cras vestibulum metus sit amet metus sollicitudin, pellentesque accumsan augue rutrum. Integer tempus malesuada mauris pharetra cursus.',
			date: new Date().toLocaleDateString(),
		},
		{
			id: Math.random(),
			name: 'Судебный процесс',
			status: 'Submitted',
			type: '2',
			desc1: '',
			desc2: '',
			desc3:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet sem mollis urna molestie dapibus. Donec varius malesuada mi quis auctor. Donec quis congue mauris, in placerat est. Praesent porta lectus ut massa auctor lacinia. Cras vestibulum metus sit amet metus sollicitudin, pellentesque accumsan augue rutrum. Integer tempus malesuada mauris pharetra cursus.',
			date: new Date().toLocaleDateString(),
		},
		{
			id: Math.random(),
			name: 'Зарплата',
			status: 'Submitted',
			type: '2',
			desc1: '',
			desc2: '',
			desc3:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet sem mollis urna molestie dapibus. Donec varius malesuada mi quis auctor. Donec quis congue mauris, in placerat est. Praesent porta lectus ut massa auctor lacinia. Cras vestibulum metus sit amet metus sollicitudin, pellentesque accumsan augue rutrum. Integer tempus malesuada mauris pharetra cursus.',
			date: new Date().toLocaleDateString(),
		},
	]
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
			status: 'Submitted',
			type,
			desc1,
			desc2,
			desc3,
			date: startDate.toLocaleDateString(),
		}
		setList([...list, newItem])
		setName(name)
		setStatus(status)
		setType(type)
		setDesc1(desc1)
		setDesc2(desc2)
		setDesc3(desc3)
		setStartDate(startDate)
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
							date: startDate.toLocaleDateString(),
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
		setStartDate(startDate)
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
		setDesc1('')
		setDesc2('')
		setDesc3('')
		setStartDate(new Date())
	}

	// switch variable
	const switchVar = item => {
		setName(item.name)
		setStatus(item.status)
		setType(item.type)
		setDesc1(item.desc1)
		setDesc2(item.desc2)
		setDesc3(item.desc3)
		setStartDate(item.data)
	}

	return (
		<Tab.Container id='list-group-tabs-example'>
			<Row>
				<Col sm={4}>
					{list.length !== 0 ? (
						<GroupItem
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
						remove={remove}
						clearInput={clearInput}
					/>
					<Tab.Content className='second-block'>
						{list
							.filter(f => f.id === activeKey)
							.map(item => (
								<AboutItem item={item} />
							))}
					</Tab.Content>
				</Col>
			</Row>
			<ModalEdit
				startDate={startDate}
				setStartDate={setStartDate}
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
				startDate={startDate}
				setStartDate={setStartDate}
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
