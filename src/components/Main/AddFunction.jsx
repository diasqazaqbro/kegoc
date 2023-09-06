import { MDBCheckbox, MDBSwitch } from 'mdb-react-ui-kit'
import React from 'react'
import { Form } from 'react-bootstrap'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import SelectList from './SelectList'

const AddFunction = ({
	setName,
	setType,
	setDesc1,
	setDesc2,
	setDesc3,
	name,
	type,
	desc1,
	desc2,
	desc3,
	startDate,
	setStartDate,
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
						checked={desc1}
						onChange={() => {
							setDesc1(!desc1)
						}}
						label='1 checkbox'
					/>
					{/* <MDBCheckbox
						name='flexCheck'
						value=''
						id='flexCheckChecked'
						label='2 checkbox'
						defaultChecked
					/>
					<MDBCheckbox
						name='flexCheck'
						value=''
						id='flexCheckDefault'
						label='1 checkbox'
					/>
					<MDBCheckbox
						name='flexCheck'
						value=''
						id='flexCheckChecked'
						label='2 checkbox'
						defaultChecked
					/> */}
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Option 2</Form.Label>
					{/* <Form.Control
						onChange={event => setDesc2(event.target.value)}
						value={desc2}
						placeholder='Description'
					/> */}
					<MDBSwitch
						checked={desc2}
						onChange={() => {
							setDesc2(!desc2)
						}}
						id='flexSwitchCheckDefault'
						label='On/Off'
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Option 3</Form.Label>
					<Form.Control
						onChange={event => setDesc3(event.target.value)}
						value={desc3}
						placeholder='Description'
					/>
				</Form.Group>
			</Form>
		</div>
	)
}

export default AddFunction
