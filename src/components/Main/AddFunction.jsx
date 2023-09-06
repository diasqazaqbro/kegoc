import { MDBCheckbox, MDBSwitch } from 'mdb-react-ui-kit'
import React from 'react'
import { Form } from 'react-bootstrap'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import SelectList from './SelectList'

const AddFunction = ({
	startDate,
	setStartDate,
	setName,
	setType,
	setCheckbox1,
	setCheckbox2,
	setCheckbox3,
	setCheckbox4,
	setSelector,
	setDesc,
	name,
	type,
	checkbox1,
	checkbox2,
	checkbox3,
	checkbox4,
	selector,
	desc,
}) => {
	return (
		<div className='buttons'>
			<Form>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Title</Form.Label>
					<Form.Control
						onChange={event => setName(event.target.value)}
						value={name}
						placeholder='Enter title'
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Type of Process</Form.Label>
					<SelectList
						setType={setType}
						defaultValue={'Список'}
						value={type}
						options={[
							{ value: '1', name: '1' },
							{ value: '2', name: '2' },
							{ value: '3', name: '3' },
							{ value: '4', name: '4' },
							{ value: '5', name: '5' },
						]}
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Date</Form.Label>
					<ReactDatePicker
						selected={startDate}
						onChange={date => setStartDate(date)}
						dateFormat='dd.MM.yyyy'
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Option 1</Form.Label>
					{/* <Form.Control
					onChange={event => setDesc1(event.target.value)}
					value={desc1}
					placeholder='Description'
				/> */}
					<MDBCheckbox
						name='flexCheck'
						checked={checkbox1}
						onClick={() => setCheckbox1(!checkbox1)}
						id='flexCheckDefault'
						label='1 checkbox'
					/>
					<MDBCheckbox
						name='flexCheck'
						checked={checkbox2}
						onClick={() => setCheckbox2(!checkbox2)}
						id='flexCheckDefault'
						label='2 checkbox'
					/>
					<MDBCheckbox
						name='flexCheck'
						checked={checkbox3}
						onClick={() => setCheckbox3(!checkbox3)}
						id='flexCheckDefault'
						label='3 checkbox'
					/>
					<MDBCheckbox
						name='flexCheck'
						checked={checkbox4}
						onClick={() => setCheckbox4(!checkbox4)}
						id='flexCheckDefault'
						label='4 checkbox'
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Option 2</Form.Label>
					{/* <Form.Control
					onClick={event => setDesc2(event.target.value)}
					value={desc2}
					placeholder='Description'
				/> */}
					<MDBSwitch
						checked={selector}
						onClick={() => {
							setSelector(!selector)
						}}
						id='flexSwitchCheckDefault'
						label='On/Off'
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Option 3</Form.Label>
					<Form.Control
						onChange={event => setDesc(event.target.value)}
						value={desc}
						placeholder='Description'
					/>
				</Form.Group>
			</Form>
		</div>
	)
}

export default AddFunction
