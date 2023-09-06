import { MDBBtn, MDBCheckbox, MDBSwitch } from 'mdb-react-ui-kit'
import { Form } from 'react-bootstrap'
import ReactDatePicker from 'react-datepicker'
import SelectList from './SelectList'

const EditFunction = ({
	startDate,
	setStartDate,
	setName,
	setStatus,
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
	status,
	editList,
}) => {
	return (
		<Form>
			<h3>Edit item</h3>
			<Form.Group className='mb-3'>
				<Form.Label>Title for Post</Form.Label>
				<Form.Control
					onChange={event => setName(event.target.value)}
					value={name}
					placeholder='Enter title'
				/>
			</Form.Group>
			<Form.Group className='mb-3'>
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
			<Form.Group className='mb-3'>
				<Form.Label>Date</Form.Label>
				<ReactDatePicker
					dateFormat='dd.MM.yyyy'
					selected={startDate}
					onChange={date => setStartDate(date)}
				/>
			</Form.Group>

			<Form.Group className='mb-3'>
				<Form.Label>Option 1</Form.Label>
				{/* <Form.Control
					onChange={event => setDesc1(event.target.value)}
					value={desc1}
					placeholder='Description'
				/> */}
				<MDBCheckbox
					checked={checkbox1}
					onClick={() => {
						setCheckbox1(!checkbox1)
					}}
					label='1 checkbox'
				/>
				<MDBCheckbox
					checked={checkbox2}
					onClick={() => {
						setCheckbox2(!checkbox2)
					}}
					label='2 checkbox'
				/>
				<MDBCheckbox
					checked={checkbox3}
					onClick={() => {
						setCheckbox3(!checkbox3)
					}}
					label='3 checkbox'
				/>
				<MDBCheckbox
					checked={checkbox4}
					onClick={() => {
						setCheckbox4(!checkbox4)
					}}
					label='4 checkbox'
				/>
			</Form.Group>
			<Form.Group className='mb-3'>
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
					label='On/Off'
				/>
			</Form.Group>
			<Form.Group className='mb-3'>
				<Form.Label>Option 3</Form.Label>
				<Form.Control
					onChange={event => setDesc(event.target.value)}
					value={desc}
					placeholder='Description'
				/>
			</Form.Group>

			<Form.Group className='mb-3'>
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
			<MDBBtn onClick={editList}>Save changes</MDBBtn>
		</Form>
	)
}

export default EditFunction
