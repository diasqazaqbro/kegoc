import { Form } from 'react-bootstrap'

const EditFunction = ({ nameRef, descRef, statusRef }) => {
	return (
		<Form>
			<Form.Group className='mb-3' controlId='formBasicEmail'>
				<Form.Label>Title for Post</Form.Label>
				<Form.Control ref={nameRef} placeholder='Enter title' />
			</Form.Group>

			<Form.Group className='mb-3' controlId='formBasicPassword'>
				<Form.Label>Description for post</Form.Label>
				<Form.Control ref={descRef} placeholder='Description' />
			</Form.Group>

			<Form.Group className='mb-3' controlId='formBasicPassword'>
				<Form.Label>Status</Form.Label>
				<Form.Control ref={statusRef} placeholder='Status' />
				<Form.Text className='text-muted'>
					you can only enter: DONE, SUBMIT
				</Form.Text>
			</Form.Group>
		</Form>
	)
}

export default EditFunction
