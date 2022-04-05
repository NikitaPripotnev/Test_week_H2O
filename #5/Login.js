import React, { useState } from 'react'
import './Login.scss'
// import { login } from '../redux/appSlice'
// import { useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom'
// import { loginUser } from '../API/auth'
import { ReactComponent as Logo } from '../assets/svg/logo.svg'
import { ReactComponent as Lock } from '../assets/svg/lock.svg'
import { ReactComponent as Person } from '../assets/svg/person.svg'
import CircularProgress from '@mui/material/CircularProgress'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import CheckOutlinedIcon from '@mui/material/Checkbox'

const Login = () => {
	// const dispatch = useDispatch()
	// const history = useHistory()
	const [loginValues, setLoginValues] = useState({
		login: '',
		password: '',
		rememberMe: true,
	})
	const [error, setError] = useState(null)
	const [disabled, setDisabled] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()
		setDisabled(true)
		// loginUser(loginValues)
		// 	.then(token => {
		// 		dispatch(login(token))
		// 		history.replace('/')
		// 	})
		// 	.catch(rejected => {
		// 		setError(rejected)
		// 	})
		// 	.finally(() => {
		// 		setDisabled(false)
		// 	})
	}

	const handleChange = e => {
		setError(null)
		setLoginValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const handleCheckbox = e => {
		e.preventDefault()
		setError(null)
		setLoginValues(prev => ({ ...prev, [e.target.name]: e.target.checked }))
	}

	return (
		<div className={`login`}>
			<form>
				<Logo
					// onClick={() => {
					// 	history.push('/')
					// }}
					className='login__logo'
				/>

				<div className='login__input'>
					<Person />
					<input
						className={'login__name'}
						onChange={handleChange}
						name={'login'}
						type={'login'}
						placeholder='Введите логин'
						autoComplete={'off'}
						value={loginValues.login}
					/>
				</div>
				<div className='login__input'>
					<Lock />
					<input
						className={'login__password'}
						onChange={handleChange}
						name={'password'}
						type='password'
						placeholder='Введите пароль'
						autoComplete={'off'}
						value={loginValues.password}
					/>
				</div>

				<button
					className={'login__button'}
					disabled={disabled}
					type={'submit'}
					onClick={handleSubmit}
				>
					{disabled ? <CircularProgress size={16} /> : 'Войти в систему'}
				</button>

				<div className='login__formFooter'>
					<FormControlLabel
						control={
							<Checkbox
								checked={loginValues.rememberMe}
								checkedIcon={<CheckOutlinedIcon />}
								icon={<></>}
								onChange={handleCheckbox}
								name='rememberMe'
								color='primary'
							/>
						}
						label={<span onClick={e => e.preventDefault()}>Запомни меня</span>}
					/>
					<a href={'/'}>Забыли пароль?</a>
				</div>
				{error && <p className={'login__error'}>{error}</p>}
			</form>
		</div>
	)
}

export default Login
