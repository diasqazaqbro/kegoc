import { Form } from 'react-bootstrap'
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
						]}
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Description 1</Form.Label>
					<Form.Control
						onChange={event => setDesc1(event.target.value)}
						value={desc1}
						placeholder='Description'
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Description 2</Form.Label>
					<Form.Control
						onChange={event => setDesc2(event.target.value)}
						value={desc2}
						placeholder='Description'
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Description 3</Form.Label>
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
