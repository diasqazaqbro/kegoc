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
	startDate,
	setStartDate,
	basicModal,
	setBasicModal,
	toggleShow,
	addList,
	setName,
	setStatus,
	setType,
	setDesc1,
	setDesc2,
	setDesc3,
	name,
	status,
	type,
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
							<MDBModalTitle>Add new post</MDBModalTitle>
							<MDBBtn
								className='btn-close'
								color='none'
								onClick={toggleShow}
							></MDBBtn>
						</MDBModalHeader>
						<MDBModalBody>
							<AddFunction
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
							<MDBBtn onClick={addList}>Add</MDBBtn>
						</MDBModalFooter>
					</MDBModalContent>
				</MDBModalDialog>
			</MDBModal>
		</>
	)
}
