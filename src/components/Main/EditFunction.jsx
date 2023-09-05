import { Form } from 'react-bootstrap'
import SelectList from './SelectList'

const EditFunction = ({
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
					]}
				/>
			</Form.Group>

			<Form.Group className='mb-3' controlId='formBasicPassword'>
				<Form.Label>Description for post</Form.Label>
				<Form.Control
					onChange={event => setDesc1(event.target.value)}
					value={desc1}
					placeholder='Description'
				/>
			</Form.Group>
			<Form.Group className='mb-3' controlId='formBasicPassword'>
				<Form.Label>Description for post</Form.Label>
				<Form.Control
					onChange={event => setDesc2(event.target.value)}
					value={desc2}
					placeholder='Description'
				/>
			</Form.Group>
			<Form.Group className='mb-3' controlId='formBasicPassword'>
				<Form.Label>Description for post</Form.Label>
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
