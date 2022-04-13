import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
import './CustomField.scss'
import { ExpandMore } from '@mui/icons-material'
import _ from 'lodash'
import clsx from 'clsx'

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

const Groups = ({ name, items, handleClick }) => {
	return items.map(item => {
		const groupHeader = (
			<div key={item.header} className='customField__itemsHeader'>
				<div key={item.header} className='groupName'>
					{item.header}
				</div>
			</div>
		)
		const group = item.values?.map((value, index) => (
			<li
				key={name + '_option_' + index}
				onClick={e => handleClick(value.value)}
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

const CustomSelect = ({
	title,
	name,
	value,
	className,
	error,
	disabled,
	placeholder,
	items,
}) => {
	const parent = useRef(null)
	const popupRef = useRef(null)
	const [active, setActive] = useState(false)
	const [parameters, setParameters] = useState({
		top: 0,
		left: 0,
		width: 0,
	})

	const [popupHeight, setPopupHeight] = useState(0)

	const handleResize = () => {
		if (parent.current) {
			setActive(true)
		}
	}

	const throttleResize = _.throttle(handleResize, 50)

	const hideOptions = () => {
		parent.current = null
		setParameters({ top: 0, left: 0, width: 0 })
	}
	const showOptions = () => {
		const coord = parent.current.getBoundingClientRect()
		const documentHeight = document.documentElement.clientHeight
		if (documentHeight - coord.bottom > popupHeight) {
			setParameters({
				top: coord.bottom,
				bottom: 'auto',
				width: coord.width,
				left: coord.left,
			})
		} else {
			setParameters({
				top: 'auto',
				bottom: 5,
				width: coord.width,
				left: coord.left,
			})
		}
	}

	const onClick = e => {
		if (!disabled) {
			if (!active) {
				parent.current = e.target.closest('div')
				setActive(true)
				showOptions()
			} else {
				setActive(false)
				hideOptions()
			}
		}
	}

	useLayoutEffect(() => {
		setPopupHeight(popupRef?.current?.clientHeight)
	}, [active])

	useEffect(() => {
		window.addEventListener('resize', throttleResize)
		return () => {
			window.removeEventListener('resize', throttleResize)
		}
	}, [])

	return (
		<div className={clsx('customField', className, { error, disabled })}>
			<span>{title}</span>
			<div className={`customField__select`} onClick={onClick}>
				{value !== undefined &&
				value !== null &&
				value !== '' &&
				items.some(item => item.value === value) ? (
					<span>{items.find(item => item.value === value).text}</span>
				) : value === undefined || value === null || value === '' ? (
					<span className={'customField__placeholder'}>
						{placeholder !== null && placeholder !== undefined
							? placeholder
							: 'Выберите значение'}
					</span>
				) : (
					<span>{value}</span>
				)}
				<ExpandMore
					className={clsx(`customField__expand`, className, { active })}
				/>
			</div>
			{active && (
				<div>
					<div className='fixedWrapper' onClick={onClick} />
					<ul
						ref={popupRef}
						className='customField__optionList'
						style={{
							...parameters,
						}}
					>
						{items[0].values ? (
							<Groups name={name} items={items} handleClick={onClick} />
						) : (
							<Items name={name} items={items} handleClick={onClick} />
						)}
					</ul>
				</div>
			)}
		</div>
	)
}

export default CustomSelect
