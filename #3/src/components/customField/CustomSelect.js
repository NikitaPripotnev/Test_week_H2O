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
	groups,
	group,
}) => {
	// const dispatch = useDispatch()
	const [parameters, setParameters] = useState({
		active: false,
		top: 0,
		left: 0,
		width: 0,
	})

	const parent = useRef(null)

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
		const listHeight = Math.min(groups[0].items.length * 2.8 + 0.8, 16.25)

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
				groups.items.some(item => item.value === value) ? (
					<span>{groups.items.find(item => item.value === value).text}</span>
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
						{groups === false ? (
							<Items name={name} items={groups} handleClick={handleClick} />
						) : (
							groups.length > 0 && (
								<Groups name={name} groups={groups} handleClick={handleClick} />
							)
						)}
					</ul>
				</div>
			)}
		</div>
	)
}

export default CustomSelect
