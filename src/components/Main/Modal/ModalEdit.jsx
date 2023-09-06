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
	startDate,
	setStartDate,
	basicModal,
	setBasicModal,
	toggleShow,
	editList,
	setName,
	setStatus,
	setType,
	setDesc1,
	setDesc2,
	setDesc3,
	name,
	type,
	status,
	desc1,
	desc2,
	desc3,
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
								startDate={startDate}
								setStartDate={setStartDate}
								setName={setName}
								setStatus={setStatus}
								setType={setType}
								setDesc1={setDesc1}
								setDesc2={setDesc2}
								setDesc3={setDesc3}
								name={name}
								status={status}
								type={type}
								desc1={desc1}
								desc3={desc3}
								desc2={desc2}
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
