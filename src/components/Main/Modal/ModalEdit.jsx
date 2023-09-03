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
import EditFunction from '../EditFunction'

export default function ModalEdit({
	basicModal,
	setBasicModal,
	toggleShow,
	editList,
	nameRef,
	statusRef,
	descRef,
}) {
	return (
		<>
			<MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
				<MDBModalDialog>
					<MDBModalContent>
						<MDBModalHeader>
							<MDBModalTitle>Edit post</MDBModalTitle>
							<MDBBtn
								className='btn-close'
								color='none'
								onClick={toggleShow}
							></MDBBtn>
						</MDBModalHeader>
						<MDBModalBody>
							<EditFunction
								nameRef={nameRef}
								statusRef={statusRef}
								descRef={descRef}
							/>
						</MDBModalBody>

						<MDBModalFooter>
							<MDBBtn onClick={editList}>Save changes</MDBBtn>
						</MDBModalFooter>
					</MDBModalContent>
				</MDBModalDialog>
			</MDBModal>
		</>
	)
}
