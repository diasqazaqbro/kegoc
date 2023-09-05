export default function SelectList({ options, defaultValue, value, setType }) {
	return (
		<select value={value} onChange={event => setType(event.target.value)}>
			<option disabled value={''}>
				{defaultValue}
			</option>
			{options.map(o => (
				<option key={o.value} value={o.value}>
					{o.name}
				</option>
			))}
		</select>
	)
}
