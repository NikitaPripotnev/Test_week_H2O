const Items = ({ name, items, handleClick }) => {
	return items?.map((option, index) => (
		<li
			onClick={e => handleClick(option.value)}
			key={name + '_option_' + index}
		>
			{option.text}
		</li>
	))
}

export default Items
