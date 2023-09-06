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
	setCheckbox1,
	setCheckbox2,
	setCheckbox3,
	setCheckbox4,
	setSelector,
	setDesc,
	name,
	status,
	type,
	checkbox1,
	checkbox2,
	checkbox3,
	checkbox4,
	selector,
	desc,
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
								setCheckbox1={setCheckbox1}
								setCheckbox2={setCheckbox2}
								setCheckbox3={setCheckbox3}
								setCheckbox4={setCheckbox4}
								setSelector={setSelector}
								setDesc={setDesc}
								name={name}
								status={status}
								type={type}
								checkbox1={checkbox1}
								checkbox2={checkbox2}
								checkbox3={checkbox3}
								checkbox4={checkbox4}
								selector={selector}
								desc={desc}
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
