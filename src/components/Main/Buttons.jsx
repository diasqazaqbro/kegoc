import Delete from './../Icon/Delete'
import Edit from './../Icon/Edit'
import Plus from './../Icon/Plus'

const Buttons = ({ toggleShow, toggleShow1, remove, toggleShow2 }) => {
	return (
		<div className='button edit-btn'>
			<div
				onClick={() => {
					toggleShow()
					toggleShow2()
				}}
			>
				<Edit />
			</div>

			<div
				onClick={() => {
					toggleShow1()
					toggleShow2()
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
