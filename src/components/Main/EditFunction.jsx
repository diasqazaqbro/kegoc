import { MDBCheckbox, MDBSwitch } from 'mdb-react-ui-kit'
import { Form } from 'react-bootstrap'
import ReactDatePicker from 'react-datepicker'
import SelectList from './SelectList'

const EditFunction = ({
	startDate,
	setStartDate,
	setName,
	setStatus,
	setType,
	setDesc1,
	setDesc2,
	setDesc3,
	name,
	type,
	desc1,
	desc2,
	desc3,
	status,
}) => {
	return (
		<Form>
			<Form.Group className='mb-3' controlId='formBasicEmail'>
				<Form.Label>Title for Post</Form.Label>
				<Form.Control
					onChange={event => setName(event.target.value)}
					value={name}
					placeholder='Enter title'
				/>
			</Form.Group>
			<Form.Group className='mb-3' controlId='formBasicEmail'>
				<Form.Label>Type process</Form.Label>
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
					value={desc1}
					onChange={event => setDesc1(event.target.value)}
					id='flexCheckDefault'
					label='1 checkbox'
				/>
				<MDBCheckbox
					name='flexCheck'
					value={desc1}
					onChange={event => setDesc1(event.target.value)}
					id='flexCheckChecked'
					label='2 checkbox'
					defaultChecked
				/>
				<MDBCheckbox
					name='flexCheck'
					value={desc1}
					onChange={event => setDesc1(event.target.value)}
					id='flexCheckDefault'
					label='1 checkbox'
				/>
				<MDBCheckbox
					name='flexCheck'
					value={desc1}
					onChange={event => setDesc1(event.target.value)}
					id='flexCheckChecked'
					label='2 checkbox'
					defaultChecked
				/>
			</Form.Group>
			<Form.Group className='mb-3' controlId='formBasicPassword'>
				<Form.Label>Option 2</Form.Label>
				{/* <Form.Control
					onChange={event => setDesc2(event.target.value)}
					value={desc2}
					placeholder='Description'
				/> */}
				<MDBSwitch
					onChange={e => {
						console.log(e)
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

			<Form.Group className='mb-3' controlId='formBasicPassword'>
				<Form.Label>Status</Form.Label>
				<SelectList
					setType={setStatus}
					defaultValue={'Список'}
					value={status}
					options={[
						{ value: 'Submitted', name: 'Submitted' },
						{ value: 'Failed', name: 'Failed' },
						{ value: 'In a progress', name: 'In a progress' },
						{ value: 'Done', name: 'Done' },
					]}
				/>
			</Form.Group>
		</Form>
	)
}

export default EditFunction
