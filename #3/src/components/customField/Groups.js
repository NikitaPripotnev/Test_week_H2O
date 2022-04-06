const Groups = ({ name, groups, handleClick }) => {
	return groups?.map(group => {
		const itemsHeader = (
			<div key={group.name} className='customField__itemsHeader'>
				<div className='groupName'>{group.name}</div>
			</div>
		)
		const item = group.items?.map((option, index) => (
			<li
				onClick={e => handleClick(option.value)}
				key={name + '_option_' + index}
			>
				{option.text}
			</li>
		))
		return (
			<>
				{itemsHeader}
				{item}
			</>
		)
	})
}

export default Groups
