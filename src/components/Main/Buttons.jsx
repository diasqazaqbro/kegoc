import Delete from './../Icon/Delete'
import Edit from './../Icon/Edit'
import Plus from './../Icon/Plus'

const Buttons = ({ toggleShow, toggleShow1, remove, clearInput }) => {
	return (
		<div className='button edit-btn'>
			<div onClick={toggleShow}>
				<Edit />
			</div>

			<div
				onClick={() => {
					clearInput()
					toggleShow1()
				}}
			>
				<Plus />
			</div>
			<div onClick={remove}>
				<Delete />
			</div>
		</div>
	)
}

export default Buttons
