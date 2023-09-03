import {
	MDBBtn,
	MDBModal,
	MDBModalBody,
	MDBModalContent,
	MDBModalDialog,
	MDBModalFooter,
	MDBModalHeader,
	MDBModalTitle,
} from 'mdb-react-ui-kit'
import React from 'react'
import AddFunction from './../AddFunction'

export default function ModalAdd({
	basicModal,
	setBasicModal,
	toggleShow,
	addList,
	changeInput,
	clearInput,
}) {
	return (
		<>
			<MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
				<MDBModalDialog>
					<MDBModalContent>
						<MDBModalHeader>
							<MDBModalTitle>Add new post</MDBModalTitle>
							<MDBBtn
								className='btn-close'
								color='none'
								onClick={toggleShow}
							></MDBBtn>
						</MDBModalHeader>
						<MDBModalBody>
							<AddFunction clearInput={clearInput} changeInput={changeInput} />
						</MDBModalBody>

						<MDBModalFooter>
							<MDBBtn onClick={addList}>Add</MDBBtn>
						</MDBModalFooter>
					</MDBModalContent>
				</MDBModalDialog>
			</MDBModal>
		</>
	)
}
