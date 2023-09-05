const AboutItem = ({ item }) => {
	return (
		<div key={item.id}>
			<h3>
				{item.type}: {item.name}
			</h3>
			<hr />
			<p>{item.desc1}</p>
			<p>{item.desc2}</p>
			<p>{item.desc3}</p>
		</div>
	)
}

export default AboutItem
