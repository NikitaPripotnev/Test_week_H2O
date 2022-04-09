const Groups = ({ name, items, handleClick }) => {
	return items.map(item => {
		const groupHeader = (
			<div key={item.header} className='customField__itemsHeader'>
				<div className='groupName'>{item.header}</div>
			</div>
		)
		const group = item.values?.map((value, index) => (
			<li
				onClick={e => handleClick(value.value)}
				key={name + '_option_' + index}
			>
				{value.text}
			</li>
		))
		return (
			<>
				{groupHeader}
				{group}
			</>
		)
	})
}

export default Groups
