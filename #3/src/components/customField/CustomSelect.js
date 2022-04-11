import React, { useEffect, useRef, useState } from 'react'
import './CustomField.scss'
import { ExpandMore } from '@mui/icons-material'
// import { useDispatch } from 'react-redux'
// import { SET_BODY_HIDDEN } from '../redux/appSlice'
import _ from 'lodash'
import clsx from 'clsx'
import Groups from './Groups'
import Items from './Items'

const CustomSelect = ({
	title,
	name,
	value,
	className,
	onChange,
	error,
	disabled,
	placeholder,
	items,
}) => {
	// const dispatch = useDispatch()
	const [parameters, setParameters] = useState({
		active: false,
		top: 0,
		left: 0,
		width: 0,
	})

	const parent = useRef(null)

	// Сразу узнаю всё про группы, если что-то есть, возвращаю массив с количеством итемов в каждом объекте, которые передаются
	// const group = items[0].values
	// 	? items.map(item => {
	// 			item = [item.header, ...item.values]
	// 			item = item.length
	// 			return item
	// 	  })
	// 	: false

	// // Здесь использую группы, чтобы узнать сколько в сумме у нас итемов
	// const itemsLength = group
	// 	? group.reduce((sum, cur) => sum + cur, 0)
	// 	: items.length

	const group = items[0].values ? true : false
	const [listHeight, setListHeight] = useState(0)

	useLayoutEffect(() => {
		const itemsLenght = group
			? items.map(item => item.values.length + 1)
			: items.length
		const itemsLength = group
			? itemsLenght.reduce((sum, cur) => sum + cur, 0)
			: itemsLenght
		setListHeight(Math.min(itemsLength * 2.6 + 0.8, 16.25))
	}, [parent.current])

	const handleClick = value => {
		hideOptions()
		onChange && onChange(value)
	}

	const handleResize = () => {
		if (parent.current) {
			showOptions()
		}
	}

	const throttleResize = _.throttle(handleResize, 50)

	const hideOptions = () => {
		parent.current = null
		// dispatch(SET_BODY_HIDDEN(false))
		setParameters({ active: false, top: 0, left: 0, width: 0 })
	}
	const showOptions = () => {
		const coord = parent.current.getBoundingClientRect()
		const documentHeight = document.documentElement.clientHeight
		const fontSize = parseFloat(
			window
				.getComputedStyle(document.documentElement, null)
				.getPropertyValue('font-size')
		)

		if (documentHeight - coord.bottom > listHeight * fontSize) {
			setParameters({
				active: true,
				top: coord.bottom,
				bottom: 'auto',
				left: coord.left,
				width: coord.width,
				height: listHeight,
			})
		} else {
			setParameters({
				active: true,
				bottom: 5,
				top: 'auto',
				left: coord.left,
				width: coord.width,
				height: listHeight,
			})
		}
	}

	const onClick = e => {
		if (!disabled) {
			if (!parameters.active) {
				// dispatch(SET_BODY_HIDDEN(true))
				parent.current = e.target.closest('div')
				showOptions()
			} else {
				hideOptions()
			}
		}
	}

	useEffect(() => {
		window.addEventListener('resize', throttleResize)
		return () => {
			// dispatch(SET_BODY_HIDDEN(false))
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
					className={`customField__expand ${parameters.active ? 'active' : ''}`}
				/>
			</div>
			{parameters.active && (
				<div>
					<div className='fixedWrapper' onClick={hideOptions} />
					<ul
						className='customField__optionList'
						style={{
							position: 'fixed',
							bottom: parameters.bottom,
							top: parameters.top,
							left: parameters.left,
							width: parameters.width,
							height: parameters.height + 'rem',
						}}
					>
						{group ? (
							<Groups name={name} items={items} handleClick={handleClick} />
						) : (
							<Items name={name} items={items} handleClick={handleClick} />
						)}
					</ul>
				</div>
			)}
		</div>
	)
}

export default CustomSelect
