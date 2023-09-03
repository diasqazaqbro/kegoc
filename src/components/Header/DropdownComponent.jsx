function DropdownComponent() {
	return (
		<div class='dropdown'>
			<button
				class='btn btn-primary dropdown-toggle'
				type='button'
				id='dropdownMenuButton'
				data-mdb-toggle='dropdown'
				aria-expanded='false'
			>
				Account
			</button>
			<ul class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
				<li>
					<a class='dropdown-item' href='#'>
						Switch account
					</a>
				</li>
				<li>
					<a class='dropdown-item' href='#'>
						Logout
					</a>
				</li>
			</ul>
		</div>
	)
}

export default DropdownComponent
