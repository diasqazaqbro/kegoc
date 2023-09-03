import { Form } from 'react-bootstrap'

const AddFunction = ({ changeInput }) => {
	return (
		<div className='buttons'>
			<Form>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Title for Post</Form.Label>
					<Form.Control
						onChange={event => changeInput('name', event)}
						placeholder='Enter title'
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Description for post</Form.Label>
					<Form.Control
						onChange={event => changeInput('desc', event)}
						placeholder='Description'
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Status</Form.Label>
					<Form.Control
						onChange={event => changeInput('status', event)}
						placeholder='Status'
					/>
					<Form.Text className='text-muted'>
						you can only enter: DONE, SUBMIT
					</Form.Text>
				</Form.Group>
			</Form>
		</div>
	)
}

export default AddFunction
