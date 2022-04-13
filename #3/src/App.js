import CustomSelect from './components/customField/CustomSelect'

function App() {
	return (
		<div className='App' key='app'>
			<CustomSelect
				key='app'
				title='Пропускной режим'
				name='permitRegime'
				className='input100'
				type='select'
				items={[
					{
						header: 'Заголовок',
						values: [
							{ value: 'Небольшое', text: 'Небольшое' },
							{ value: 'Среднее', text: 'Среднее' },
							{ value: 'Сильное', text: 'Сильное' },
						],
					},
					{
						header: 'Заголовок',
						values: [
							{ value: 'Небольшое', text: 'Небольшое' },
							{ value: 'Среднее', text: 'Среднее' },
							{ value: 'Сильное', text: 'Сильное' },
						],
					},
				]}
			/>
		</div>
	)
}

export default App
