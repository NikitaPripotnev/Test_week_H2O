const Items = ({ name, groups, handleClick }) => {
	return groups?.map(group =>
		group.items?.map((option, index) => (
			<li
				onClick={e => handleClick(option.value)}
				key={name + '_option_' + index}
			>
				{option.text}
			</li>
		))
	)
}

export default Items
